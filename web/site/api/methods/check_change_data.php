<?
$response['result'] = false;
$handler_render_action = true;

$response['form_id'] = $params['form_id'];

if ($system['user']->auth == 1) {
    $errors = 0;
    $error_name = null;

    $arUpdate = [];

    if (
        !empty(trim($params['password'])) ||
        !empty(trim($params['password_2']))
    ) {

        if($params['password'] != $params['password_2'])
        {
            $errors++;
            $error_name = 'Пароли не совпадают';
        }
        else
        {
            $arUpdate['password'] = sha1($params['password']);
        }
    }

    if(
        !empty($params['name']) &&
        !empty($params['surname']) &&
        !empty($params['patronymic'])
    )
    {
        $arUpdate['name'] = $params['name'];
        $arUpdate['surname'] = $params['surname'];
        $arUpdate['patronymic'] = $params['patronymic'];
    }
    else
    {
        $error_name = 'Заполните все данные';
        $errors++;
    }

    if($errors == 0)
    {
        $response['result'] = true;
        Authorization::set($arUpdate, $system['user']->data['id']);
    }
    else
    {
        $response['error'] = $error_name;
    }

}


?>