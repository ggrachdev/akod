<?php

namespace Controllers;

use Models\GetDefaultDataModel;
use Models\GetMenuModel;

class CabinetController {
    public function runAction() {
        global $system, $config;

        $blocks = [];
        $blocks[] = ['path' => 'cabinet.twig'];

        $params = GetDefaultDataModel::getData();

        $params['menu'] = GetMenuModel::getData('classifier');
        $params['url'] = $this->router->getUrl(0);
        $params['blocks'] = $blocks;
        $params['title'] = 'Кабинет';
        $params['user'] = $system['user']->data;
        
        $name_view = 'add_blocks';

        return [$name_view, $params];
    }
}