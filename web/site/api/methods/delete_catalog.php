<?

# Удалить классификатор

use Classes\Classifier;
use Classes\PrivilegeManager;

$response['result'] = false;
$handler_render_action = true;


if ($system['user']->auth == 1)
{

    if(PrivilegeManager::hasPrivilege('edit', $params['id']) || true)
    {
        if($params['id'] != null)
        {
            // Создаем каталог
            $CItem = new Classifier();
            $res_delete = $CItem->deleteById($params['id']);

            // Проверяем результат удаления каталога
            if($res_delete)
            {
                $response['result'] = true;
            }
        }
        else
        {
            $response['result'] = false;
        }
    }

}
else
    $response['errors'] = 'Ошибка изменения каталога!';


?>