<?

# Экспорт классификатора

use Classes\CFieldManager;
use Classes\CIFields;
use Classes\Classifier;
use Classes\PrivilegeManager;
use Module\Database\v11\DB;
use Symfony\Component\Filesystem\Filesystem;
use Ramsey\Uuid\Uuid;

$response['result'] = false;

if (
    PrivilegeManager::hasPrivilege('show', $params['id_classifier']) &&
    PrivilegeManager::hasPrivilege('edit', $params['id_classifier'])
) {


    /**
     * Собрать узел классификатора
     *
     * @param $item
     * @return array
     */
    function BuildItem($item)
    {
//    global $params, $config, $sort;

        $res = [
            'name' => $item['text'],
            'id' => $item['id']
        ];

        $fields = CIFields::getQueueFieldsById($item['id']);

        if (!$fields->isEmpty()) {
            $res['fields'] = [];

            while (!$fields->isEmpty()) {
                $field = $fields->dequeue();

                $res['fields'][] = [
                    'type' => $field->getType(),
                    'data' => $field->serializeData()
                ];
            }
        }


        /*if(!empty($item['fields']))
        {

            foreach ($item['fields'] as $field) {
                // type, content

                if(array_key_exists($field['type'], $config['fields']))
                {
                    $objField = $config['fields'][$field['type']];

                    $content = $objField::adapterImportData($field['data']);

                    CFieldManager::addFieldRaw($field['type'], $id_item, ++$sort, $params['id_classifier'], null, $content);
                }
            }
        }*/

        return $res;
    }

    function BuildTree(&$item_childrens)
    {
        if (!empty($item_childrens)) {
            foreach ($item_childrens as $k => $item) {

                $item_childrens[$k] = BuildItem($item);

                if (!empty($item['children'])) {

                    $item_childrens[$k]['childrens'] = BuildTree($item['children']);
                }
            }
        }

        return $item_childrens;
    }

    if (
    !empty($params['id_classifier'])
    ) {
        $classifier = (new Classifier())->loadById($params['id_classifier']);
        $export_data = [];

        $now_data = json_decode($classifier->getJsonData(), true);

        if (!empty($now_data)) {
            $export_data = BuildTree($now_data);
            $response['result'] = true;
        }
    }

    $filesystem = new Filesystem();

    $file = $config['path']['root'] . 'assets/files/export/' . ($n = Uuid::uuid4()) . '.json';
    $filesystem->dumpFile($file, json_encode($export_data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));

    $response['export_file'] = '/assets/files/export/' . $n . '.json';
}

$handler_render_action = true;


?>