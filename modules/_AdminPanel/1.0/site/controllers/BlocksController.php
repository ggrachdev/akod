<?php

namespace AdminPanel\v10\Controllers;

use AdminPanel\v10\Models\GetDefaultDataModel;
use AdminPanel\v10\Classes\BlockBuilder;
use Module\Form\v10\Form;

class BlocksController
{
    public function getDataAction()
    {
        $params = GetDefaultDataModel::getData();

        // Контент для вывода
        $params['content'] = '';

        $params['title'] = 'Блоки';

        $blocks_list = BlockBuilder::getListAllBlocks();

//        BlockBuilder::createBlock('test', uniqid());

//        pre(BlockBuilder::loadBlock(), 0, 1);


        $params['content'] = '<div class="user_list">';
        $params['content'] .= '<div class="user_list__header">';
        $params['content'] .= '<div class="ceil_vsmall"><b>ID</b></div>';
        $params['content'] .= '<div class="ceil_middle"><b>Название</b></div>';
        $params['content'] .= '<div class="ceil_middle"><b>Таблица</b></div>';
        $params['content'] .= '<div class="ceil_middle"><b>Действия</b></div>';
        $params['content'] .= '</div>';

        if (empty($blocks_list['data'])) {
            $params['content'] .= '<h3>Нет созданных блоков</h3>';
        } else {


            $params['content'] = Form::generateTable([
                'id' => ['id', 'small'],
                'name' => ['Название', 'middle'],
                'table' => ['Таблица', 'middle'],
                'actions' => ['Действия', 'middle', [['Изменить', 'btn-green-small change" data-modal="edit_block', true], ['Удалить', 'btn-red-small delete" data-modal="delete_block', true]] ],
            ], $blocks_list['data']
            );

        }


        $params['content'] .= '<div class="mt-10"><span data-callback="setModalAddBlockData" data-modal="add_block" class="btn-green-small add_block">Создать блок</span></div>';


        return ['blocks', $params];
    }
}