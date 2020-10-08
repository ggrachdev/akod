<?php

namespace Models;

class GetMenuModel {
    public static function getData(...$params) {

        $header_menu = [];

        if($params[0] == 'classifier')
        {
            $header_menu[] = ['name' => 'Выход', 'url' => '?action=logout'];
            $header_menu[] = ['name' => 'Профиль', 'url' => 'cabinet'];
            $header_menu[] = ['name' => 'Классификаторы', 'url' => 'catalogs'];
            //$header_menu[] = ['name' => 'Типы элементов', 'url' => 'empty'];
        }
        else
        {
            $header_menu[] = ['name' => 'Вход', 'url' => 'log-in'];
            $header_menu[] = ['name' => 'Регистрация', 'url' => 'sign-up'];
            $header_menu[] = ['name' => 'Восстановить пароль', 'url' => 'forgot-password'];
        }

        return $header_menu;
    }
}