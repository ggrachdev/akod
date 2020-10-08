<?

# Запрос на перемещение поля вверх или вниз относительно иных полей узла

use Classes\CIFields;


$response['result'] = false;
$response['id_field'] = $params['id_field'];

if(
    !empty($params['id_field']) &&
    !empty($params['move_to'])
)
{
    \Classes\CFieldManager::moveField($params['id_field'], $params['move_to']);
}


$handler_render_action = true;


?>