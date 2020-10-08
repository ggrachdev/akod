<?
$response['result'] = false;
$handler_render_action = true;

$res = validManager::checkGroup(
    [
        'email' => ['email#length100' =>
            ['Email не валиден!', 'Email не может быть длиннее 100 символов'],
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


if ($res == 1) {
    $response['form_id'] = $params['form_id'];
    $response['data_form'] = $params['data_form'];
    $response['keys'] = $params['keys'];

    // Авторизуемся с подгрузкой параметров, если валидация успешна
    $system['user']->auth($params['email'], $params['password'], true);

} else {
    $response = $res;
    $response['form_id'] = $params['form_id'];
    $response['data_form'] = $params['data_form'];
    $response['keys'] = $params['keys'];
}


if ($res == 1) {
    if ($system['user']->is_auth() &&
        $system['user']->checkPrivilege('show_admin')
    ) {
        $response['result'] = true;
    } else {
        $response['errors'] = 'Пользователь с данным email или паролем на найден!';
    }
}


?>