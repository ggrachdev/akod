<?

# Запрос на сохранение поля по ID

use Classes\CIFields;

$response['result'] = false;
$response['id_field'] = $params['id_field'];

if(
    !empty($params['id_field']) &&
    !empty($params['data_for_save']) &&
    !empty($params['type_field'])
)
{
    $fieldObject = CIFields::getFieldById($params['id_field']);

    // Проверяем совпадают ли типы
    if($fieldObject->getType() == $params['type_field'])
    {
        $response['result'] = true;
        $response['edit_html'] = $fieldObject->getEditHtml();
        $response['type_field'] = $fieldObject->getType();

        $fieldObject->save($params);
    }
}

if(isset($params['need_close_modal']))
{
    $response['need_close_modal'] = $params['need_close_modal'];
}
else
{
    $response['need_close_modal'] = true;
}

if(isset($params['need_hide_alerts']))
{
    $response['need_hide_alerts'] = $params['need_hide_alerts'];
}
else
{
    $response['need_hide_alerts'] = true;
}


$handler_render_action = true;


?>