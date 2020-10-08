<?php

namespace Classes;

use Module\Database\v11\DB;

interface CatalogItem
{
    public function loadById(int $id): CatalogItem;

    public function deleteById(int $id_catalog): bool;

    public function create(array $data): CatalogItem;

    public function change(array $data_change): CatalogItem;

    public function save(): CatalogItem;

    static function getListCatalogByUserId(int $id_creator): array;

    public function getJsonData(): string;
}

class Classifier implements CatalogItem
{
    // Каталог прошел проверку валидатора
    protected $is_valid_catalog = false;

    // ID каталога
    public $id = null;

    // Имя каталога
    public $name = null;

    // Тип каталога
    public $type = null;

    // Данные каталога
    public $data_json = null;

    // Режим редактирования
    protected $mode = null;

    private $ar_new_classifier_ids = [];

    // Результат создания
    public $result_create = null;

    # Результат изменения
    public $result_change = null;

    public function loadById(int $id): CatalogItem
    {
        $res_db = DB::select('catalogs', 'id = ?', [$id]);

        if ($res_db['result'] == 1) {
            $res = $res_db['data'][0];

            $this->id = $res['id'];
            $this->name = $res['name'];
            $this->type = $res['type'];
            $this->data_json = str_replace('"icon":false', '"icon":true', $res['data_json']);
            $this->hash = md5($this->data_json);

            # Режим редактирования - загрузка
            $this->mode = 'load';
        }

        return $this;
    }
    
    public function loadFromArray(array $data)
    {
        $this->id = $data['id'];
        $this->name = $data['name'];
        $this->type = $data['type'];
        $this->data_json = str_replace('"icon":false', '"icon":true', $data['data_json']);
        $this->hash = md5($this->data_json);

        # Режим редактирования - загрузка
        $this->mode = 'load';

        return $this;
    }

    public function create(array $data): CatalogItem
    {
        // id_user - создатель каталога
        if (
            $data['name'] !== null &&
            $data['type'] !== null &&
            is_string($data['name']) &&
            $data['type'] !== null &&
            CValidator::isTypeCItem($data['type']) &&

            // id создателя
            $data['id_user'] !== null
        ) {
            $this->name = $data['name'];
            $this->type = $data['type'];
            $this->id_user = $data['id_user'];
            $this->data_json = '
            [{
                "text": "' . $data['name'] . '",
                "id": "' . $id1 = gen_uuid() . '",
                "children": [
                    {
                        "text": "Пункт 1",
                        "id": "' . $id2 = gen_uuid() . '",
                        "children": [
                            {
                                "text": "Пункт 1.1",
                                "id": "' . $id3 = gen_uuid() . '"
                                
                            },
                            {
                                "text": "Пункт 1.2",
                                "id": "' . $id4 = gen_uuid() . '"
                            }
                        ]
                    },
                    {
                        "text": "Пункт 2",
                        "id": "' . $id5 = gen_uuid() . '"
                    }
                ]
            
            }]   
            ';

            $this->ar_new_classifier_ids = [$id1, $id2, $id3, $id4, $id5];

            $this->hash = md5($this->data_json);

            # Режим редактирования - создание
            $this->mode = 'create';
        }

        return $this;
    }

    public function save(): CatalogItem
    {

        // TODO: Добавить проверку валидации данных перед добавлением справочника
        $this->is_valid_catalog = true;

        if ($this->is_valid_catalog) {

            // Если объект находится в режиме создания
            if ($this->mode === 'create') {
           /*     $sql = '
                    INSERT INTO public.catalogs(
                    "id_user_creator", "name", "hash", "data_json", "type")
                    VALUES (?, ?, ?, ?, ?);
                ';

                $params = [
                    $this->id_user,
                    $this->name,
                    $this->hash,
                    $this->data_json,
                    $this->type
                ];

                $result_query = DB::sql($sql, $params);*/



                $result_query = DB::insert('catalogs', [
                    'id_user_creator' => $this->id_user,
                    'name' => $this->name,
                    'hash' => $this->hash,
                    'data_json' => $this->data_json,
                    'type' => $this->type
                ]);

                if(!empty($this->ar_new_classifier_ids))
                {
                    global $system;

                    PrivilegeManager::add($system['user']->data['id'], $result_query['data']['last_id'], $system['user']->data['id'], 'edit', 'true');
                    PrivilegeManager::add($system['user']->data['id'], $result_query['data']['last_id'], $system['user']->data['id'], 'show', 'true');
                    PrivilegeManager::add($system['user']->data['id'], $result_query['data']['last_id'], $system['user']->data['id'], 'edit_privilege', 'true');
                    foreach ($this->ar_new_classifier_ids as $id_item)
                    {

                        $res = DB::insert('meta', [
                            // ID Классификатор
                            'key' => $result_query['data']['last_id'],

                            // ID Узла
                            'value' => $id_item,
                            'context' => 'classifier_item'
                        ]);
                    }
                }

                if ($result_query['result'] == true)
                    $this->result_create = true;
                else
                    $this->result_create = false;
            } elseif ($this->mode === 'load') {

                $res = DB::update('catalogs', [
                    'name' => $this->name,
                    'type' => $this->type,
                    'data_json' => $this->data_json,
                ], 'id = ?', [$this->id]);

                if ($res['result'] == 1)
                    $this->result_change = true;
                else
                    $this->result_change = false;
            }
        }

        return $this;
    }

    public function deleteById(int $id_classifier): bool
    {
        // Удаляем информацию об узлах
        DB::delete('meta', 'key = ? AND context = ? ', [$id_classifier, 'classifier_item']);
        DB::delete('catalog_privileges', 'id_catalog = ?', [$id_classifier]);

        $fields = CIFields::getQueueFieldsById($id_classifier, true);
        while (!$fields->isEmpty()) {
            $field = $fields->dequeue();
            $field->delete();
        }

        DB::delete('catalogs', 'id = ?', [$id_classifier]);
        DB::delete('fields', 'id_classifier- = ?', [$id_classifier]);
        return true;
    }

    /**
     * Получить список созданных пользователем классификаторов
     * @param int $id_creator
     * @return array
     */
    static function getListCatalogByUserId(int $id_creator): array
    {
        $sql = 'SELECT * FROM catalogs WHERE id_user_creator = ? ORDER BY name;';

        $params = [$id_creator];

        return DB::sql($sql, $params);
    }

    /**
     * Получить список доступных классификаторов, кроме созданных
     * @param int $id_user
     * @return array
     */
    static function getAvailableListCatalog(int $id_user): array
    {
        $catalogs_final = [];

        $ids = [];
        $ids_result = [];

        $res = DB::sql('SELECT * FROM catalogs WHERE id_user_creator = ? ORDER BY name;', [$id_user]);

        if(!empty($res['data']))
        {
            $ids = array_column($res['data'], 'id');
        }

        $catalogs_can_show = DB::select('catalog_privileges', 'id_user = ? AND type = ? AND value = ?', [$id_user, 'show', 'true']);



        if(!empty($catalogs_can_show['data']))
        {
            foreach ($catalogs_can_show['data'] as $row)
            {
                if(!in_array($row['id_catalog'], $ids))
                {
                    $ids_result[] = $row['id_catalog'];
                }
            }

            $ids_result = array_filter($ids_result, function($element) {
                return !empty($element);
            });

            $catalogs_final = DB::select('catalogs', 'id IN ('.implode(',', $ids_result).')', []);

        }
        return $catalogs_final;
    }

    public function change(array $data_change): CatalogItem
    {
        foreach ($data_change as $change_key => $change_value) {
            switch ($change_key) {
                case 'name':
                    $this->name = $change_value;
                    break;

                case 'type':
                    $this->type = $change_value;
                    break;

                case 'data_json':
                    $this->data_json = $change_value;
                    break;
            }
        }

        return $this;
    }

    public function getJsonData(): string
    {
        return $this->data_json;
    }
}