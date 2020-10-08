<?

# Добавление нового справочника

use Classes\CFieldManager;
use Classes\Classifier;
use Classes\PrivilegeManager;
use Module\FileLoader\v10\FL;
use Module\Log\v10\Log;


$response['result'] = false;

if(
    !empty($params['id_now_classifier']) &&
    !empty($params['form_id']) &&
    !empty($params['id_field']) &&
    !empty($params['type_field'])
)
{

    if(PrivilegeManager::hasPrivilege('edit', $params['id_now_classifier']))
    {

        $response['form_id'] = $params['form_id'];
        $response['id_field'] = $params['id_field'];

        $params['meta'] = !empty($params['meta']) ? $params['meta'] : null;

        if($params['meta'] == null)
        {
            switch ($params['type_field'])
            {
                case 'table':
                    // ...
                    break;
            }
        }

        if(
            !empty($params['id_field']) &&
            !empty($params['type_field']) &&
            !empty($params['id_now_classifier']) &&
            isset($params['num_sort'])
        )
        {
            $response['result'] = CFieldManager::addFieid($params['id_field'], $params['type_field'], $params['num_sort'], $params['id_now_classifier'], $params['meta']);
        }
    }
}

$handler_render_action = true;
?>