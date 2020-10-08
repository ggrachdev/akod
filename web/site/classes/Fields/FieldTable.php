<?php

namespace Classes\Fields;

use Classes\CIField;
use Classes\ClassifierField;
use Classes\FieldDB;
use Module\Crop\v10\Crop;
use Module\Database\v11\DB;
use Module\FileLoader\v10\FL;
use Ramsey\Uuid\Uuid;

// Тип поля - таблица
class FieldTable extends FieldDB implements ClassifierField
{

    public function getHtml(CIField $obj)
    {
        $data = $obj->getData();
        $data_field = json_decode($data, true);


        ob_start();

        if (!empty($data_field['name'])):
            ?>
            <h6><?= trim($data_field['name']) ?></h6>

            <div class="">
                <div data-id-table="<?=$obj->getId()?>">
                    <?= $this->getTableData($data_field, false); ?>
                </div>
            </div>

            <?
        endif;
        ?>

        <?

        $html = ob_get_contents();
        ob_end_clean();

        if (empty(trim($html))) {
            return 'Поле с таблицей является пустым (Создайте данные)';
        } else {
            return $html;
        }
    }

    public function refresh(CIField $obj, $params)
    {
        $res = [
            'action_refresh' => $params['action_refresh']
        ];

        $data_field = json_decode($obj->getData(), 1);

        switch ($params['action_refresh'])
        {
            case 'refresh_rows':
                $res['html'] = $this->getTableData($data_field, true);
                break;
            case 'refresh_columns':
                $res['html'] = $this->getTableColumns($data_field);
                break;
        }

        return $res;
    }

    public function getEditHtml(CIField $obj)
    {
        $data_field = json_decode($obj->getData(), 1);
        ob_start();
        ?>

        <div class="form-group">
            <label for="nameTable">Название таблицы:</label>
            <input type="text" class="form-control" id="nameTable" name="name_table"
                   placeholder="Введите название таблицы" value="<?= @$data_field['name'] ?>">
            <small id="nameTable" class="form-text text-muted">* Название таблицы нужно, чтобы различать таблицы
                между собой при наследовании, а так же, название выступает в качестве пояснения к содержимому
            </small>
        </div>

        <?

        if (empty($data_field['pid'])):
            // Если еще не проведено первичное сохранение таблицы
            ?>

            <div data-context="change_pid_table">
                <div class="custom-control custom-radio">
                    <input type="radio" id="tableNotRoot" name="type_table_parent" class="custom-control-input"
                           value="root" checked>
                    <label class="custom-control-label" for="tableNotRoot">Не наследоваться от другой таблицы</label>
                </div>
                <div class="custom-control custom-radio">
                    <input type="radio" id="tableRoot" name="type_table_parent" class="custom-control-input"
                           value="other_table">
                    <label class="custom-control-label" for="tableRoot">Наследоваться от другой таблицы</label>
                </div>

                <?
                $fields = DB::select('fields', '"id_classifier" = ? AND "type_field" = \'table\' ', [$obj->getClassifierId()]);

                $fieldsValid = array_filter($fields['data'], function ($field) {
                    $dataTable = json_decode($field['data'], true);

                    return !(empty($dataTable['name']) || empty($dataTable['pid']));
                });

                ?>

                <input type="hidden" name="type_save" value="first_save">
                <?
                if (!empty($fieldsValid)):
                    ?>

                    <div style="display: none; padding-left: 20px;" data-context="select_root_table">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="show_only_parent_fields_table" value="true" id="show_only_parent_fields_table">
                            <label class="form-check-label" for="show_only_parent_fields_table">
                                Показывать таблицы для наследования лишь от вышестоящего узла
                            </label>
                        </div>

                        <select name="root_table" style="margin-top: 5px;">
                            <?
                            foreach ($fieldsValid as $fieldTable):
                                ?>
                                <?
                                $dataTable = json_decode($fieldTable['data'], true);
                                if (empty($dataTable['name']) || empty($dataTable['pid'])) continue;
                                ?>
                                <option data-id-item="<?=$fieldTable['id_item']?>" value="<?= $fieldTable['id'] ?>"><?= $dataTable['name'] ?></option>
                                <?
                            endforeach;
                            ?>
                        </select>

                        <h4 style="display: none;" data-error="not_found_table_parent">Таблиц доступных для наследования не найдено</h4>
                    </div>
                    <?
                endif;
                ?>


            </div>
            <?
        else:
            // Если первичное сохранение уже было
            ?>
            <input type="hidden" name="type_save" value="second_save">

            <?

            if ($data_field['pid'] == 'root'):
                $arr_data_parents_column = &$data_field['columns'];
                ?>
                <p>Таблица является корневой</p>
                <?
            else:
                $res_db_parent_table = DB::select('fields', '"id" = ?', [$data_field['pid']]);

                $name_parent = json_decode($res_db_parent_table['data'][0]['data'], true)['name'];

                $data_parents_column = $this->getParentsColumnData($data_field['pid']);

                $arr_data_parents_column = [];

                if (!empty($data_parents_column)) {
                    foreach ($data_parents_column as $arr_column) {
                        $arr_data_parents_column = array_merge($arr_data_parents_column, $arr_column);
                    }
                }

                $arr_data_parents_column = array_merge($arr_data_parents_column, $data_field['columns']);

                ?>
                <p>Таблица наследуется от "<?= $name_parent ?>"</p>
                <?
            endif;

            ?>

            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#tableData" role="tab"
                       aria-controls="home" aria-selected="true">Данные</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#tableColumns" role="tab"
                       aria-controls="profile" aria-selected="false">Колонки</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#importCsv" role="tab"
                       aria-controls="profile" aria-selected="false">Импорт из СSV</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="profile-tab" data-click="export_xls_table" data-toggle="tab" href="#exportXLS" role="tab"
                       aria-controls="profile" aria-selected="false">Экспорт в XLS</a>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane fade show active" id="tableData" role="tabpanel">
                    <br>
                    <?//= $this->getTableData($arr_data_parents_column, !empty($data_field['rows']) ? $data_field['rows'] : [], true); ?>
                    <?= $this->getTableData($data_field, true); ?>
                </div>
                <div class="tab-pane fade" id="tableColumns" role="tabpanel">
                    <br>

                    <?= $this->getTableColumns($data_field) ?>

                </div>

                <div class="tab-pane fade" id="importCsv" role="tabpanel">
                    <br>
                    <label for="file_csv">Файл CSV для импорта:</label>
                    <input id="file_csv" data-context="file_csv" type="file" name="file_csv">
                    <br>
                    <br>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="csv_has_not_header" value="true" id="csv_has_not_header">
                        <label class="form-check-label" for="csv_has_not_header">
                            CSV не имеет строки с заголовками
                        </label>
                    </div>
                    <br>
                    <button class="btn btn-secondary" data-click="import_csv">Импортировать файл</button>
                </div>
            </div>

            <?
        endif;
        $content = ob_get_contents();
        ob_end_clean();

        return $content;
    }

    private function getTableColumns($data_field)
    {

        if ($data_field['pid'] == 'root') {
            $arr_data_parents_column = &$data_field['columns'];
        } else {
            $data_parents_column = $this->getParentsColumnData($data_field['pid']);

            $arr_data_parents_column = [];

            if (!empty($data_parents_column)) {
                foreach ($data_parents_column as $arr_column) {
                    $arr_data_parents_column = array_merge($arr_data_parents_column, $arr_column);
                }
            }

            $arr_data_parents_column = array_merge($arr_data_parents_column, $data_field['columns']);
        }

        ob_start();
        ?>

        <table class="table table-bordered">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col" style="display: none;">Ключ</th>
                <th scope="col">Название</th>
                <th scope="col">Действия</th>
            </tr>
            </thead>
            <tbody>

            <?
            $i = 0;
            if (!empty($data_parents_column)):
                foreach ($data_parents_column as $ar_columns_chunk):
                    foreach ($ar_columns_chunk as $k => $v):
                        $i++;
                        ?>
                        <tr data-type="parent">
                            <th data-context="num_column"><?= $i ?></th>
                            <td><input class="form-control" data-context="key_column" type="text" style="display: none;"
                                       placeholder="Ключ колонки" value="<?= $k ?>" disabled></td>
                            <td><input class="form-control" data-context="name_column" type="text"
                                       placeholder="Название колонки" value="<?= $v['name'] ?>" disabled>
                            </td>
                            <td>
                            </td>
                        </tr>
                        <?
                    endforeach;
                endforeach;
            endif;
            ?>

            <? if (!empty($data_field['columns'])): ?>
                <?
                foreach ($data_field['columns'] as $k => $v):
                    $i++;
                    ?>
                    <tr data-type="saved">
                        <th data-context="num_column"><?= $i ?></th>
                        <td style="display: none;"><input class="form-control" data-context="key_column" type="text"
                                   placeholder="Ключ колонки" value="<?= $k ?>" disabled></td>
                        <td><input class="form-control" data-context="name_column" type="text"
                                   placeholder="Название колонки" value="<?= $v['name'] ?>"></td>
                        <td>
                            <button style="display: none;" data-click="save_column" type="button"
                                    class="btn btn-success"><i class="fa fa-floppy-o"
                                                               aria-hidden="true"></i></button>
                            <button data-click="column_move_up" type="button" class="btn btn-info"><i
                                        class="fa fa-arrow-up" aria-hidden="true"></i></button>
                            <button data-click="column_move_down" type="button" class="btn btn-info"><i
                                        class="fa fa-arrow-down" aria-hidden="true"></i></button>
                            <button data-click="column_delete" type="button" class="btn btn-danger"><i
                                        class="fa fa-trash" aria-hidden="true"></i></button>
                        </td>
                    </tr>
                <? endforeach; ?>
            <? endif; ?>
            </tbody>
        </table>

        <button type="button" data-click="add_column_table" class="btn btn-primary">Добавить колонку
        </button>
                
        <button type="button" data-click="remove_all_column_table" class="btn btn-danger">Удалить все колонки
        </button>
        <?
        $res = ob_get_contents();
        ob_end_clean();


        return $res;
    }

    public function save(CIField $obj, $params)
    {
        $params_input = json_decode($params['data_for_save'], true);
//        $data_save = $obj->getData();

        if($params['type_save'] == 'import_csv')
        {
            if(!empty($_FILES)) {
                $res = FL::loadFiles([
                    'formats' => [
                        'application/vnd.ms-excel'
                    ]
                ]);

                if(empty($res['errors']))
                {
                    $fileData = FL::getFileById($res['load_ids'][0]);

                    $file = $fileData['data'][0]['path'];

                    $errors = 0;

                    $columns = [];
                    $columns_keys = [];

                    $rows = [];

                    $f = fopen($file, "rt") or die("Ошибка!");


                    for ($i=0; ($data=fgetcsv($f,0,";"))!==false; $i++) {

                        $cod = mb_detect_encoding($data[0]);

                        if($cod == 'UTF-8')
                        {
                            if(
                                $i == 0
                            )
                            {
                                if($params['has_not_header'] == 'true')
                                {
                                    $ic = 0;
                                    foreach ($data as $columnName)
                                    {
                                        $ic++;
                                        $k = Uuid::uuid4()->toString();

                                        $columns[$k] = [
                                            'name' => 'Поле '.$ic
                                        ];

                                        $columns_keys[] = $k;
                                    }


                                    $row = array_combine($columns_keys, $data);
                                    $rows[] = $row;
                                }
                                else
                                {
                                    foreach ($data as $columnName)
                                    {
                                        $k = Uuid::uuid4()->toString();

                                        $columns[$k] = [
                                            'name' => $columnName
                                        ];

                                        $columns_keys[] = $k;
                                    }
                                }
                            }
                            else
                            {
                                if(sizeof($columns_keys) == sizeof($data))
                                {
                                    $row = array_combine($columns_keys, $data);
                                    $rows[] = $row;
                                }
                            }
                        }
                        else {
                            $errors++;
                        }

                    }
                    fclose($f);

                    FL::removeFileById($res['load_ids'][0]);

                    if($errors == 0)
                    {
                        $data_field = json_decode($obj->getData(), 1);

                        $data_save = [
                            'name' => $data_field['name'],
                            'pid' => $data_field['pid'],
                            'columns' => $columns,
                            'rows' => $rows
                        ];

                        return parent::saveDB($obj, json_encode($data_save));
                    }
                }
            }
        }

        switch ($params_input['type_save']) {
            case 'first_save':
                $data_save = [
                    'name' => $params_input['name_table'],
                    'pid' => $params_input['type_table'],
                    'columns' => [],
                    'rows' => []
                ];

                $data_save = json_encode($data_save);

                return parent::saveDB($obj, $data_save);
                break;

            case 'second_save':
                $data_save = [
                    'name' => $params_input['name_table'],
                    'pid' => $params_input['type_table'],
                    'columns' => !empty($params_input['columns']) ? $params_input['columns'] : [],
                    'rows' => !empty($params_input['rows']) ? $params_input['rows'] : []
                ];

                $data_save = json_encode($data_save);

                return parent::saveDB($obj, $data_save);
                break;

            case 'save_columns':
                $data_field = json_decode($obj->getData(), 1);

                $data_save = [
                    'name' => $params_input['name_table'],
                    'pid' => $data_field['pid'],
                    'columns' => $params_input['columns'],
                    'rows' => !empty($data_field['rows']) ? $data_field['rows'] : []
                ];

                $data_save = json_encode($data_save);

                return parent::saveDB($obj, $data_save);
                break;

            case 'save_rows':
                $data_field = json_decode($obj->getData(), 1);

                $data_save = [
                    'name' => $params_input['name_table'],
                    'pid' => $data_field['pid'],
                    'rows' => $params_input['data_for_save'],
                    'columns' => !empty($data_field['columns']) ? $data_field['columns'] : []
                ];

                $data_save = json_encode($data_save);

                return parent::saveDB($obj, $data_save);
                break;
        }

    }

    /**
     * Получить таблицу данных
     *
     * @param bool $need_functional_edit - возможность редактирования данных
     */
    private function getTableData(/*$columns = [], $rows = []*/ $data_field, $need_functional_edit = false)
    {
        //= $this->getTableData($arr_data_parents_column, !empty($data_field['rows']) ? $data_field['rows'] : [], true);

        if ($data_field['pid'] == 'root')
        {
            $arr_data_parents_column = &$data_field['columns'];
        }
        else
        {
            $res_db_parent_table = DB::select('fields', '"id" = ?', [$data_field['pid']]);

            $name_parent = json_decode($res_db_parent_table['data'][0]['data'], true)['name'];

            $data_parents_column = $this->getParentsColumnData($data_field['pid']);

            $arr_data_parents_column = [];

            if (!empty($data_parents_column)) {
                foreach ($data_parents_column as $arr_column) {
                    $arr_data_parents_column = array_merge($arr_data_parents_column, $arr_column);
                }
            }

            $arr_data_parents_column = array_merge($arr_data_parents_column, $data_field['columns']);
        }

        $columns = $arr_data_parents_column;
        $rows = !empty($data_field['rows']) ? $data_field['rows'] : [];

        ob_start();
        $i = 0;
        ?>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>#</th>
                <? if (!empty($columns)): ?>
                    <? foreach ($columns as $k => $v): ?>
                        <th><?= $v['name'] ?></th>
                    <? endforeach; ?>
                <? endif; ?>
            </tr>
            </thead>
            <tbody>
            <? if (!empty($rows)): ?>
                <? foreach ($rows as $row): ?>
                    <tr data-context="row_table">
                        <td data-context="row_num"><?= ++$i ?></td>
                        <? if (!empty($columns)): ?>
                            <? foreach ($columns as $k => $v): ?>
                                <td data-key="<?= $k ?>" data-context="row_value">
                                <? if($need_functional_edit): ?>
                                    <input type="text" name="<?= $k ?>" class="form-control"
                                           value="<?= !empty($row[$k]) ? $row[$k] : '' ?>">
                                    <? else: ?>
                                    <?= !empty($row[$k]) ? $row[$k] : '' ?>
                                    <? endif; ?>
                                </td>
                            <? endforeach; ?>
                        <? endif; ?>
                    </tr>
                <? endforeach; ?>
            <? endif; ?>

            <tr data-context="row_table">
                <? if ($need_functional_edit): ?>
                    <td data-context="row_num"><?= ++$i ?></td>
                    <? if (!empty($columns)): ?>
                        <? foreach ($columns as $k => $v): ?>
                            <td data-key="<?= $k ?>" data-context="row_value">
                                <input type="text" name="<?= $k ?>" class="form-control" value="">
                            </td>
                        <? endforeach; ?>
                    <? endif; ?>
                <? endif; ?>
            </tr>

            </tbody>
        </table>
        <?
        $content = ob_get_contents();
        ob_end_clean();

        return $content;
    }

    // Получить массив родительских колонок
    private function getParentsColumnData($pid)
    {
        $data_columns = [

        ];

        $ar_load_pids = [$pid];

        while (true) {
            $res_db_parent_table = DB::select('fields', '"id" = ?', [$pid]);
            $data_table = json_decode($res_db_parent_table['data'][0]['data'], true);

            $data_columns[] = $data_table['columns'];

            if (empty($data_table) || $data_table['pid'] == 'root')
                break;
            else
                $pid = $data_table['pid'];

            if (in_array($pid, $ar_load_pids))
                break;
            else {
                $ar_load_pids[] = $pid;
            }
        }

        $data_columns = array_reverse($data_columns);

        return !empty($data_columns) ? $data_columns : null;
    }

    /**
     * Вызывается при удалении поля в узле классификатора
     * @param CIField $obj
     * @return mixed
     */
    public function delete(CIField $obj)
    {
        // TODO: Implement delete() method.
    }

    public static function adapterImportData($data)
    {
        $data = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

        preg_match_all('~#ID_\d*#~', $data, $matches);

        if(!empty($matches[0]))
        {
            $arIdsPattern = array_unique($matches[0]);

            $arUuid = [];

            foreach ($arIdsPattern as $p)
            {
                $arUuid[] = Uuid::uuid4()->toString();
            }
            $data = str_replace($arIdsPattern, $arUuid, $data);

        }

        return $data;
    }

    public function serializeData(CIField $obj)
    {
        return json_decode($obj->getData());
    }
}