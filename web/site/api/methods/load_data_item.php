<?php

// Загрузить данные о полях элемента

use Classes\CIFields;
use Classes\PrivilegeManager;

// Успешность результата
$response['result'] = false;

if (!empty($params['id_classifier']) && !empty($params['id'])) {
    
    if (PrivilegeManager::hasPrivilege('show', $params['id_classifier'])) {

        $id = $params['id'];
        $fields = CIFields::getQueueFieldsById($id);
        $view = '';
        while (!$fields->isEmpty()) {
            $field = $fields->dequeue();
            $view .= '<div data-sort="' . $field->getSort() . '" data-id="' . $field->getId() . '" data-item="' . $field->getType() . '"><div data-item-wrapper="' . $field->getType() . '">' . $field->getHtml() . '</div></div>';
        }

        if ($view !== '')
            $response['result'] = true;

        // Название функции-обработчика
        $response['view'] = $view;

        // Можно ли редактировать поля
        $response['can_edit'] = PrivilegeManager::hasPrivilege('edit', $params['id_classifier']);

        // Можно ли редактировать поля
        $response['id'] = $id;
    }
}

// Автоматическая подстановка функции-обработчика
$handler_render_action = true;