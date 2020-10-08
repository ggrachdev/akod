<?

# Импорт классификатора

use Classes\CFieldManager;
use Classes\CIFields;
use Classes\Classifier;
use Classes\PrivilegeManager;
use Module\Database\v11\DB;
use Module\FileLoader\v10\FL;


$response['result'] = false;

if (
    !empty($params['id_classifier']) &&
    !empty($params['json']) ||
    !empty($params['id_classifier']) &&
    !empty($_FILES)
) {

    if(PrivilegeManager::hasPrivilege('edit', $params['id_classifier']))
    {
        $classifier = (new Classifier())->loadById($params['id_classifier']);

        $now_data = json_decode($classifier->getJsonData(), true);

        if(!empty($_FILES))
        {
            $res = FL::loadFiles([
                'formats' => [
                    'application/json'
                ]
            ]);

            if(empty($res['errors'])) {
                $fileData = FL::getFileById($res['load_ids'][0]);
                $data = json_decode(file_get_contents($fileData['data'][0]['path']), true);

                FL::removeFileById($res['load_ids'][0]);
            }
        }
        else
        {
            $data = json_decode($params['json'], true);
        }

        $sort = sizeof($now_data);

        $errors = 0;

        if(!empty($data))
        {
            /*->change(
           [
               'data_json' => rtrim(ltrim($data_json_new, '['), ']')
           ])->save();*/

            /*
             * [
            {
                "name": "Тестовый узел",
                "childrens": [
                    {
                        "type": "text",
                        "content": "test"
                    },
                    {
                        "type": "text",
                        "content": "test"
                    }
                ]
            }
        ]
             */

            /*
             *  {
                    "text": "Пункт 1",
                    "id": "77b5e91f-2c35-4e89-aea0-96a8fdfe8113",
                    "children": [
                        {
                            "text": "Пункт 1.1",
                            "id": "92edffac-f077-4ad9-a0e3-d9bc5196459e"
                        },
                        {
                            "text": "Пункт 1.2",
                            "id": "5b3314c1-d8a9-40f3-979c-404deb46f307"
                        }
                    ]
                }
             */
            /**
             * Собрать узел классификатора
             *
             * @param $item
             * @return array
             */
            function BuildItem($item) {
                global $params, $config, $sort;

                $res = [
                    'text' => $item['name'],
                    'id' => $id_item = gen_uuid()
                ];

               /* DB::insert('meta',
                    ['key' => $params['id_classifier'],
                        'value' => $id_item,
                        'context' => 'classifier_item'
                    ]);*/


                if(!empty($item['fields']))
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
                }

                return $res;
            }

            function BuildTree(&$item_childrens)
            {
                if(!empty($item_childrens))
                {
                    foreach ($item_childrens as $k => $item)
                    {

                        $item_childrens[$k] = BuildItem($item);

                        if(!empty($item['childrens']))
                        {

                            $item_childrens[$k]['children'] = BuildTree($item['childrens']);
                        }
                    }
                }

                return $item_childrens;
            }

            $tree = [];

            $new_data = BuildTree($data);


            $now_data = array_merge($now_data, $new_data);


            if($errors == 0)
            {
                $response['result'] = true;
            }


            $classifier->change(
                [
                    'data_json' => json_encode($now_data)
                ]
            )->save();
        }
    }


}


$handler_render_action = true;


?>