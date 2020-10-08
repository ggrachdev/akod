<?php
namespace Classes;

use Module\Database\v11\DB;

// Является базисом любого класса - поля и предоставляет метод для сохранения данных Поля
class FieldDB
{
    public static function saveDB(CIField $obj, $data)
    {
        $res = DB::update('fields', [
            'data' => $data
        ], 'id = ?', [$obj->getId()]);

        return DB::isSuccess($res);
    }
}