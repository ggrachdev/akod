<?

# Запрос на изменение поля по ID

use Classes\CIFields;


$response['result'] = false;
$response['id_field'] = $params['id_field'];

if(
    !empty($params['id_field'])
)
{
    $fieldObject = CIFields::getFieldById($params['id_field']);

    $response['result'] = true;
    $response['edit_html'] = $fieldObject->getEditHtml();
    $response['type_field'] = $fieldObject->getType();
}


$handler_render_action = true;


?>