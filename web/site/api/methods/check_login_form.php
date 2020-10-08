<?
$response['result'] = false;
$handler_render_action = true;

//$res = Authorization::regUser([
//    'login' => $_POST['email'],
//    'password' => $_POST['password'],
//    'name' => 'Грачев',
//    'surname' => 'Григорий',
//    'patronymic' => 'Денисович'
//]);


$res = ValidManager::checkGroup(
    [
        'email' => ['email#length100' =>
            ['Email не валиден!','Email не может быть длиннее 100 символов'],
            $params['email']
        ],

        'password' => ['length20' =>
            ['Пароль не может быть длиннее 20 символов'],
            $params['password']
        ],
    ],
    true,
    true
);

if($res == 1)
{
    $response['form_id'] = $params['form_id'];
    $response['data_form'] = $params['data_form'];
    $response['keys'] = $params['keys'];
}
else
{
    $response = $res;
    $response['result'] = false;
    $response['form_id'] = $params['form_id'];
    $response['data_form'] = $params['data_form'];
    $response['keys'] = $params['keys'];
}

$system['user']->auth($params['email'], $params['password']);

if($res == 1)
{
    if ($system['user']->auth == 1)
        $response['result'] = true;
    else
        $response['errors'] = 'Пользователь с данным email или паролем на найден!';
}


?>