<?

# Изменить каталог

use Classes\Classifier;
use Classes\PrivilegeManager;

$response['result'] = false;
$handler_render_action = true;




if ($system['user']->auth == 1 && PrivilegeManager::hasPrivilege('edit', $params['id']))
{
    $res = validManager::checkGroup(
        [
            'name_catalog' => ['empty#length50' =>
                ['Название справочника не может быть пустым', 'Название справочника не может быть длиннее 50 символов'],
                $params['name_catalog']
            ],
            'type_catalog' => ['empty' =>
                ['Тип справочника не может быть пустым'],
                $params['type_catalog']
            ],
            'id' => ['empty' =>
                ['id справочника не может быть пустым'],
                $params['id']
            ],
        ],
        true,
        true
    );

    if($res == 1)
    {

        // Создаем каталог
        $CItem = new Classifier();

        // TODO проверка может ли данный пользователь загружать данный каталог!
        $CItem->loadById($params['id'])->change(
            [
                'name' => $params['name_catalog'],
                'type' => $params['type_catalog']
            ]
        )->save();

        $res_change = $CItem->result_change;

//        $res_create = $CItem->create([
//            'name' => $params['name_catalog'],
//            'type' => $params['type_catalog'],
//            'id_user' => $system['user']->data['id']
//        ])->save()->result_create;

        // Проверяем результат создания каталога
        if($res_change === true)
        {
            $response['form_id'] = $params['form_id'];
            $response['data_form'] = $params['data_form'];
            $response['keys'] = $params['keys'];
            $response['result'] = true;
        }
    }
    else
    {
        $response = $res;
        $response['result'] = false;
        $response['form_id'] = $params['form_id'];
        $response['data_form'] = $params['data_form'];
        $response['keys'] = $params['keys'];
    }
}
else
    $response['errors'] = 'Ошибка изменения каталога!';


?>