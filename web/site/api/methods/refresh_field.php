<?

# Запрос на обновление данных поля по ID

use Classes\CIFields;

$response['result'] = false;
$response['id_field'] = $params['id_field'];


if(
    !empty($params['id_field']) &&
    !empty($params['action_refresh']) &&
    !empty($params['type_field'])
)
{
    $fieldObject = CIFields::getFieldById($params['id_field']);

    // Проверяем совпадают ли типы
    if($fieldObject->getType() == $params['type_field'])
    {
        $response['result'] = true;
        $response['refresh_data'] = $fieldObject->refresh($params);
    }
}


$handler_render_action = true;


?>