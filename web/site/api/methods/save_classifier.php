<?php

// Успешность результата
use Classes\CIFields;
use Classes\Classifier;
use Classes\PrivilegeManager;
use Module\Database\v11\DB;

$response['result'] = true;

if(!empty($params['id']) && array_key_exists('data_json', $params))
{

    $id = $params['id'];
    $data_json_new = $params['data_json'];

    if(PrivilegeManager::hasPrivilege('edit', $id))
    {
        $classifier = new Classifier();
        $classifier->loadById($id)->change(
            [
                'data_json' => $data_json_new
            ])->save();
        if(!empty($params['last_action']) && !empty($params['action_id']))
        {
            if(in_array($params['last_action'], ['in', 'after', 'before']))
            {
                DB::insert('meta', [
                    // ID Классификатор
                    'key' => $id,
                    // ID Узла
                    'value' => $params['action_id'],
                    'context' => 'classifier_item'
                ]);
            }

            if($params['last_action'] == 'remove')
            {

                if(!empty($params['ids_children']))
                {
                    $children = explode(',', $params['ids_children']);

                    foreach ($children as $child)
                    {
                        $fields = CIFields::getQueueFieldsById($child);
                        while (!$fields->isEmpty()) {
                            $field = $fields->dequeue();
                            $field->delete();
                        }

                        DB::delete('meta', 'key = ? AND value = ? AND context = ?', [$id, $params['action_id'], 'classifier_item']);

                    }
                }

                $fields = CIFields::getQueueFieldsById($params['action_id']);
                while (!$fields->isEmpty()) {
                    $field = $fields->dequeue();
                    $field->delete();
                }

                DB::delete('meta', 'key = ? AND value = ? AND context = ?', [$id, $params['action_id'], 'classifier_item']);
            }
        }

    }

}
$handler_render_action = true;