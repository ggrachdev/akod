<?php

namespace Classes;

use Module\Database\v11\DB;

interface ClassifierField
{
    public function getHtml(CIField $obj);

    public function getEditHtml(CIField $obj);

    /**
     * Используется при подготовке данных к экспорту
     *
     * @param CIField $obj
     * @return mixed
     */
    public function serializeData(CIField $obj);

    /**
     * Обрабатывает данные при импорте
     *
     * @param $data
     * @return mixed
     */
    public static function adapterImportData($data);

    /**
     * Нужен для операций обновления
     *
     * @param CIField $obj
     * @param $params
     * @return mixed
     */
    public function refresh(CIField $obj, $params);

    /**
     * Вызывается при удалении поля в узле классификатора
     * @param CIField $obj
     * @return mixed
     */
    public function delete(CIField $obj);

    // Обработчик сохранения, изменения данных
    public function save(CIField $obj, $params);
}

// Отвечает за возврат объектов класса - Поле, за добавление, удаление полей
class CFieldManager
{

    // public static $admissableType = ['text', 'number', 'table', 'gallery'];

    public static function getFieldObject($data)
    {
        global $config;

        if (array_key_exists($data['type_field'], $config['fields'])) {
            return new $config['fields'][$data['type_field']];
        }

        return new \stdClass();
    }

    public static function addFieldRaw($type_field, $id_item, $sort, $id_classifier, $meta, $data) {
        $response = DB::insert('fields', [
            'type_field' => $type_field,
            'id_item' => $id_item,
            'sort' => $sort,
            'data' => $data,
            'id_classifier' => $id_classifier,
            'meta' => json_encode($meta)
        ]);

        return $response;
    }

    // Добавить поле
    public static function addFieid($id_item = null, $type_field = null, $sort = null, int $id_classifier, $meta = null): bool
    {
        global $config;

        // Проверяем допустим ли данный тип
        if (
            in_array($type_field, array_keys($config['fields'])) &&
            isset($id_item, $type_field, $sort)
        ) {

            // TODO: Добавить пересортировку других полей, тут дичь
            $other_fields = DB::select('fields', '"id_item" = ? ORDER BY sort ', [$id_item]);

            if (DB::isSuccess($other_fields, true)) {
                $newArr = [];

                foreach ($other_fields['data'] as $k => $db_field) {
                    if ($k == $sort - 1)
                        $newArr[] = 'this';

                    $newArr[] = $db_field;
                }


                if (!in_array('this', $newArr)) {
                    $newArr[] = 'this';
                }

                foreach ($newArr as $k => $v) {
                    $num = $k + 1;

                    if ($v != 'this') {

                        DB::update('fields', [
                            'sort' => $num
                        ], 'id = ?', [
                            $v['id']
                        ]);
                    } else {
                        $sort = $num;
                    }
                }
            }

            $response = DB::insert('fields', [
                'type_field' => $type_field,
                'id_item' => $id_item,
                'sort' => $sort,
                'id_classifier' => $id_classifier,
                'meta' => json_encode($meta)
            ]);

            if (DB::isSuccess($response))
                return true;
        }

        return false;
    }

    // Удалить поле
    public static function deleteField($id_item): bool
    {
        // Проверяем допустим ли данный тип
        if (
        isset($id_item)
        ) {
            // TODO: Добавить пересортировку других полей
            DB::delete('fields', 'id = ?', [$id_item]);
            return true;
        }

        return false;

    }

    /**
     * Переместить поле вверх или вниз
     *
     * @param int $id_field
     * @param string $move_to
     */
    public static function moveField(int $id_field, string $move_to): bool
    {

        $res = false;

        $fieldObject = CIFields::getFieldById($id_field);

        $id_item = $fieldObject->getIdItem();

        if ($move_to == 'up' || $move_to == 'down') {

            $other_fields = DB::select('fields', '"id_item" = ? ORDER BY sort ', [$id_item]);

            if (!empty($other_fields['data'])) {
                $ids = array_column($other_fields['data'], 'id');

                $num_in_ar = null;
                foreach ($ids as $k => $v) {
                    if ($v == $id_field)
                        $num_in_ar = $k;
                }

                if ($move_to == 'up' && $num_in_ar != 0) {
                    list($ids[$num_in_ar - 1], $ids[$num_in_ar]) = array($ids[$num_in_ar], $ids[$num_in_ar - 1]);

                    $res = true;
                }

                if ($move_to == 'down' && $num_in_ar != sizeof($ids)) {
                    list($ids[$num_in_ar + 1], $ids[$num_in_ar]) = array($ids[$num_in_ar], $ids[$num_in_ar + 1]);

                    $res = true;
                }

                if ($res)
                    foreach ($ids as $k => $v) {

                        if ($v != 'this') {

                            DB::update('fields', [
                                'sort' => $k
                            ], 'id = ?', [
                                $v
                            ]);
                        }

                    }
            }

            return $res;
        }

    }
}



