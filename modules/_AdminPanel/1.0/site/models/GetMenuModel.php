<?php

namespace AdminPanel\v10\Models;

class GetMenuModel {
    public static function getData(...$params) {

        $header_menu = [];

        if($params[0] == 'auth')
        {
            $header_menu[] = ['name' => 'Вход', 'url' => 'login'];
            $header_menu[] = ['name' => 'Регистрация', 'url' => 'sign-up'];
            $header_menu[] = ['name' => 'Восстановить пароль', 'url' => 'forgot-password'];
        }

        if($params[0] == 'main')
        {
            $header_menu[] = ['name' => 'Выход', 'url' => '?action=logout'];
        }

        return $header_menu;
    }
}