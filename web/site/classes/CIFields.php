<?php
/**
 * Created by PhpStorm.
 * User: RookDeveloper
 * Date: 02.01.2020
 * Time: 18:38
 */


namespace Classes;

use Module\Database\v11\DB;
use SplQueue;

// Сущность - пункт каталога
class CIFields
{
    // Получить очередь из полей
    public static function getQueueFieldsById($id, $id_classifier = false)
    {

        $fields_queue = new SplQueue();
        if($id_classifier)
            $res = DB::select('fields', 'id_classifier = ? ORDER BY sort', [$id]);
        else
            $res = DB::select('fields', 'id_item = ? ORDER BY sort', [$id]);


        if (
        DB::isSuccess($res, true)
        ) {
            foreach ($res['data'] as $field_data) {
                $fields_queue->enqueue(new CIField($field_data));
            }
        }
        return $fields_queue;
    }

    // Получить объект поля
    public static function getFieldById($id)
    {
        $res = DB::select('fields', 'id = ?', [$id]);

        if (DB::isSuccess(
            $res, true)
        ) {
            return new CIField($res['data'][0]);
        }
    }


}