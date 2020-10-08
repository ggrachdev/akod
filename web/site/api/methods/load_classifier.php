<?php

use Classes\Classifier;
use Classes\PrivilegeManager;

// Успешность результата
$response['result'] = true;


if(!empty($params['id']))
{

    $id = $params['id'];

    if(PrivilegeManager::hasPrivilege('show', $id))
    {
        $classifier = new Classifier();
        $classifier->loadById($id);


        if(empty($classifier))
        $response['result'] = false;

        $response['classifier_content'] = json_decode(str_replace(['a_attr', 'li_attr'], ['old_a_attr', 'old_li_attr'],$classifier->getJsonData()), true);
        $response['id'] = $id;
    }

    $response['can_edit'] = PrivilegeManager::hasPrivilege('edit', $id);
}

// Автоматическая подстановка функции-обработчика
$handler_render_action = true;


?>
