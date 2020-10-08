<?php
$response['result'] = false;
$handler_render_action = true;

if ($params['password'] == $params['password_2']) {


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

            'password_2' => ['length20' =>
                ['Пароль не может быть длиннее 20 символов'],
                $params['password_2']
            ],

            'name' => ['length20' =>
                ['Имя не может быть длиннее 20 символов'],
                $params['name']
            ],

            'surname' => ['length20' =>
                ['Фамилия не может быть длиннее 20 символов'],
                $params['surname']
            ],

            'patronymic' => ['length20' =>
                ['Отество не может быть длиннее 20 символов'],
                $params['patronymic']
            ],
        ],
        true,
        true
    );

    if ($res === true) {

        $res_reg = Authorization::regUser([
            'login' => $params['email'],
            'password' => $params['password'],
            'name' => $params['name'],
            'surname' => $params['surname'],
            'patronymic' => $params['patronymic']
        ]);

        if ($res_reg['result'] == 1) {
            $system['user']->auth($params['email'], $params['password']);
            $response['result'] = true;
        } else {
            $response['errors'] = 'Нельзя использовать данный email!';
        }
    }
} else {
    $response['errors'] = 'Пароли должны совпадать!';
}

$response['form_id'] = $params['form_id'];
$response['data_form'] = $params['data_form'];
$response['keys'] = $params['keys'];