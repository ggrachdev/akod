<?
$response['result'] = false;
$handler_render_action = true;

$response['form_id'] = $params['form_id'];

if ($system['user']->auth != 1) {
    $errors = 0;
    $error_name = null;

    $arUpdate = [];

    if (
        !empty(trim($params['email']))
    ) {

        if(!Authorization::checkHasUserLogin($params['email']))
        {
            $errors++;
            $error_name = 'Пользователь не существует';
        }
        else
        {
            $password = uniqid();
            $arUpdate['password'] = sha1($password);

            mail($params['email'], "Запрос на восстановление пароля", "Ваш новый пароль для входа в приложение: $password");
        }
    }

    if($errors == 0)
    {
        $response['result'] = true;
        Authorization::setWithLogin($arUpdate, $params['email']);
    }
    else
    {
        $response['error'] = $error_name;
    }

}


?>