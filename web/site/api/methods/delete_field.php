<?

# Удаление поле узла

use Classes\CFieldManager;
use Classes\CIFields;
use Classes\Classifier;
use Module\FileLoader\v10\FL;
use Module\Log\v10\Log;


$response['result'] = false;
$response['id_field'] = $params['id_field'];

if(
    !empty($params['id_field'])
)
{
    $fieldObject = CIFields::getFieldById($params['id_field']);
    $fieldObject->delete();
    $response['result'] = CFieldManager::deleteField($params['id_field']);
}


$handler_render_action = true;


?>