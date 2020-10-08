<?php

namespace AdminPanel\v10\Models;

class GetDefaultDataModel
{
    public static function getData(...$params)
    {
        global $system, $config, $local_data;

        $data = [];

        if ($system['user']->is_auth() &&
            $system['user']->checkPrivilege('show_admin')
        ) {
            $data['show_left_sidebar'] = true;
            $data['menu'] = GetMenuModel::getData('main');
        } else {
            $data['show_left_sidebar'] = false;
            $data['menu'] = GetMenuModel::getData('auth');
        }

        $data['root'] = $config['modules'][$local_data['module_name']]['admin_url'];
        $data['sk'] = $config['secret_key'];



        if ($data['show_left_sidebar']) {
            $data['left_sidebar_menu'] = [
                [
                    'name' => 'Панель',
                    'icon' => '',
                    'link' => 'main',
                    'type' => 'collapse',
                    'is_parent' => false,
                    'child' => [
                        [

                        ]
                    ]
                ],
                [
                    'name' => 'Блоки',
                    'icon' => '',
                    'link' => 'blocks',
                    'type' => 'collapse',
                    'is_parent' => false,
                    'child' => [
                        [

                        ]
                    ]
                ],
                [
                    'name' => 'Данные',
                    'icon' => '',
                    'link' => 'data',
                    'type' => 'collapse',
                    'is_parent' => false,
                    'child' => [
                        [

                        ]
                    ]
                ],
                [
                    'name' => 'Меню',
                    'icon' => '',
                    'link' => 'menu_creator',
                    'type' => 'collapse',
                    'is_parent' => false,
                    'child' => [
                        [

                        ]
                    ]
                ],
                [
                    'name' => 'Пользователи',
                    'icon' => '',
                    'link' => 'users',
                    'type' => 'collapse',
                    'is_parent' => false,
                    'child' => [
                        [

                        ]
                    ]
                ],
            ];
        }

        return $data;
    }
}