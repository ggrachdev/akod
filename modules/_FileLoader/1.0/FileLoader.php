<?php

namespace Module\FileLoader\v10;

use Module\Database\v11\DB;
use Module\Log\v10\Log;

interface FileLoaderV10
{
    // Логирование
    static function log($key, $value);

    // Загрузить файл в базу данных
    /*
     * [
            'name' => $params['name'],
            'folder' => $params['folder'],
            'path' => $params,
            'size_mb' => $params['size'],
            'mime_type' => $params['type'],
        ]
     */
    static function loadFileInDB($params);

    // Загрузить файлы
    static function loadFiles(array $arr_params = null): array;

    // Установить параметры для MIME типа
    static function setMimeParams(array $ar_params, bool $replace);

    // Получить формат файла из имени
    static function getFormatFileByName($name);

    // Получить информацию о файле по id
    static function getFileById(int $id, bool $load_file_params, array $where = null);

    static function getFilesById(array $arr_files_id, bool $need_params = false);

    // ***** Работа с параметрами:
    // Получить параметры файла по id
    static function setParamsFileById(int $id, array $file_params);

    static function setParamsFilesById(array $arr_files_id, array $file_params, bool $repeat = false);

    static function getParamsById(int $file_id);

    // Удалить файл по id
    static function removeFileById($id);

    static function removeFilesById(array $arr_files_id);

    // Получить размер файла в мегабайтах
    static function getMbSize(string $inp_size, $val, int $precision = 0);

}

class FL implements FileLoaderV10
{
    /* Данные по каждому mime-типу (куда грузить и т.п)
     *
     * P.S:
     * max_size - в мб
     * MIME типы которых здесь нет - не загрузятся! Ибо нефиг!
     *
     */
    // TODO: Добавить больше форматов


    static $arr_mime_types = [
        'application/vnd.ms-excel' => [
            'max_size' => 'default',
            'formats' => ['csv'],
        ],
        'application/json' => [
            'max_size' => 'default',
            'formats' => ['json', 'js'],
        ],
        'text/plain' => [
            'max_size' => 'default',
            'formats' => ['txt'],
        ],
        'image/png' => [
            'max_size' => 'default',
            'formats' => ['png'],
            'folder' => 'images'
        ],
        'image/jpeg' => [
            'max_size' => 'default',
            'formats' => ['jpeg', 'jpg'],
            'folder' => 'images'
        ],
        'image/bmp' => [
            'max_size' => 'default',
            'formats' => ['bmp'],
            'folder' => 'images'
        ],
        'video/quicktime' => [
            'max_size' => 'default',
            'formats' => ['mov', 'qt'],
            'folder' => 'video'
        ],
        'audio/mp3' => [
            'max_size' => 'default',
            'formats' => ['mp3'],
        ],
        'default' => [
            'max_size' => 100,
            'folder' => 'other'
        ]
    ];

    static function loadFiles(array $arr_params = null): array
    {
        /*
         * Порядок проверки
         *
         * 1) Проходимся по массиву $_FILES
         * 2) Проверяем есть ли MIME Тип
         * 3) Проверяем максимально допустимый размер с фактическим
         * 4) Загружаем
         *
         */
        // TODO: Добавить разумные коды ошибок
        $result_load = [
            'errors' => [],
            'load_ids' => []
        ];
        // Массив с файлами, которые будем загружать:
        $arr_files_for_load = [];
        // Перебираем файлы и фильтруем их:
        if (!empty($_FILES)) {
            foreach ($_FILES as $file) {
                if ($file['error'] == 0) {
                    // Массив с корректными данными, который добавляется в $arr_files_for_load:
                    $arr_file_data = [];
                    // Записываем размер в мегабайтах, переводя байты в мегабайты:
                    $arr_file_data['size'] = self::getMbSize('b', $file['size'], 2);
                    // Оригинальное имя файла:
                    $arr_file_data['name'] = strip_tags($file['name']);
                    // Имя с которым сохранится:
                    $arr_file_data['name'] = uniqid() . '_' . basename($arr_file_data['name']);
                    // Временное имя в "корзине":
                    $arr_file_data['tmp_name'] = $file['tmp_name'];
                    // Проверяем корректность MIME type:
                    if (isset($file['type'])) {
                        // mime тип файла:
                        $arr_file_data['type'] = $file['type'];

                        // Результат проверки формата - параметров
                        $res_check_params = true;

                        if(isset($arr_params['formats']))
                        {
                            if(!in_array($file['type'], $arr_params['formats']))
                            $res_check_params = false;
                        }

                        // Проверяем mime тип файла на допустимость:
                        if (array_key_exists($file['type'], self::$arr_mime_types) && $res_check_params)
                            $file_static_filter = self::$arr_mime_types[$file['type']];
                        else {
                            $error = 'This file has not valid mime type';
                            static::log(__LINE__, $error);
                            $result_load['errors'][] = $error;
                            break;
                        }

                        // Определяем максимально допустимый размер файла данного mime типа
                        if (isset($file_static_filter['max_size'])) {
                            $max_file_size_static = $file_static_filter['max_size'];
                            if ($max_file_size_static === 'default')
                                $max_file_size_static = self::$arr_mime_types['default']['max_size'];
                        } else
                            $max_file_size_static = self::$arr_mime_types['default']['max_size'];

                        // Берем папку загрузки из параметров:
                        if (isset($arr_params['folder'])) {
                            $arr_file_data['folder'] = $arr_params['folder'];
                        } elseif (isset($file_static_filter['folder']))
                            $arr_file_data['folder'] = $file_static_filter['folder'];
                        else
                            $arr_file_data['folder'] = self::$arr_mime_types['default']['folder'];

                        if ($max_file_size_static >= $arr_file_data['size'])
                            $arr_files_for_load[] = $arr_file_data;
                        else {
                            $error = $arr_file_data['name'] . ' - слишком большой';
                            static::log(__LINE__, $error);
                            $result_load['errors'][] = $error;
                            break;
                        }
                    } else {
                        $error = 'Not found size file';
                        static::log(__LINE__, $error);
                        $result_load['errors'][] = $error;
                        break;
                    }
                } else {
                    $error = 'Error load file';
                    static::log(__LINE__, $error);
                    $result_load['errors'][] = $error;
                    break;
                }
            }
        } else {
            $error = '$_FILES is empty';
            static::log(__LINE__, $error);
            $result_load['errors'][] = $error;
        }

        // Загружаем файлы если нет ошибок и не пуст массив
        if (
            !empty($arr_files_for_load) &&
            empty($result_load['errors'])
        ) {
            global $config;
            foreach ($arr_files_for_load as $file_load) {
                // Полный путь файла после загрузки:
                $full_path_after_load = $config['path']['files'] . $file_load['folder'] . '/' . $file_load['name'];
                // Перемещаем файлы:
                if (move_uploaded_file($file_load['tmp_name'], $full_path_after_load)) {
                    // Добавляем в бд данные о файле

                    $res = self::loadFileInDB([
                        'name' => $file_load['name'],
                        'folder' => $file_load['folder'],
                        'path' => $full_path_after_load,
                        'path_root' => str_replace($config['path']['cwd'], '', $full_path_after_load),
                        'size' => $file_load['size'],
                        'type' => $file_load['type'],
                    ]);

                    if(!empty($res['data']['last_id']))
                        $result_load['load_ids'][] = $res['data']['last_id'];

                    // Проверяем результат добавления в бд:
                    if ($res['result'] != 1) {
                        $error = 'Error insert file data in db: ' . $full_path_after_load;
                        static::log(__LINE__, $error);
                        $result_load['errors'][] = $error;
                        break;
                    } else {
                        $last_id = $res['data']['last_id'];
                        // Добавляем параметры файла в базу данных:
                        if (isset($arr_params['params'])) {
                            foreach ($arr_params['params'] as $k => $v)
                                DB::insert('files_params', [
                                    'file_id' => $last_id,
                                    'param' => $k,
                                    'value' => $v
                                ]);
                        }
                    }
                } else {
                    $error = 'Error load file: ' . $full_path_after_load;
                    static::log(__LINE__, $error);
                    $result_load['errors'][] = $error;
                    break;
                }
            }
        }
        return $result_load;
    }

    static function getMbSize(string $inp_size, $val, int $precision = 0)
    {
        $res = 0;
        switch ($inp_size) {
            case 'b':
                $res = $val / (1024 * 1024);
                break;
            case 'kb':
                $res = $val / (1024);
                break;
            case 'gb':
                $res = $val * 1024;
                break;
        }
        return round($res, $precision);
    }

    static function setMimeParams(array $ar_params, bool $replace)
    {
        // TODO: Implement setMimeParams() method.
    }

    static function getFormatFileByName($name)
    {
        // TODO: Implement getFormatFileByName() method.
    }

    static function getFileById(int $file_id, bool $load_file_params = false, array $where = null)
    {
        $data_file = DB::sql('SELECT * FROM files WHERE id = ? ', [$file_id]);
        // Берем параметры
        if($load_file_params && $data_file['result'])
        {
            // TODO: Переписать оптимальнее! Слишком много действий! Переписать в 1 запрос!

            $data_params = static::getParamsById($file_id);

            if($data_params['result'])
            {
                $data_file['data'][0]['params'] = [];

                foreach ($data_params['data'] as $param)
                {
                    $data_file['data'][0]['params'][$param['param']] = $param['value'];
                }
            }
        }

        if($data_file['result'])
            return $data_file;
        else
            return false;
    }

    static function getFilesById(array $arr_files_id, bool $need_params = false)
    {

        $data_files = [
            'data' => [],
            'result' => true
        ];


        foreach ($arr_files_id as $file_id)
        {
            $data_file = self::getFileById($file_id, $need_params);
            if($data_file['result'] != false)
            {
                $data_files['data'][] = $data_file['data'][0];
            }
            else
            {
                return ['result' => 0, 'error' => 'not found $file_id = '.$file_id];
            }
        }

        return $data_files;


    }

    static function setParamsFileById(int $id, array $file_params)
    {
        // TODO: Implement setParamsFileById() method.
    }

    static function setParamsFilesById(array $arr_files_id, array $file_params, bool $repeat = false)
    {
        // TODO: Implement setParamsFilesById() method.
    }

    static function removeFileById($file_id)
    {
        $file_data = static::getFileById($file_id);

        if($file_data !== false)
        {
            $res = static::getFileById($file_id);
            if($res['result'])
            {
                if(unlink($res['data'][0]['path']))
                {
                    DB::delete('files', 'id = ?', [$file_id]);
                    DB::delete('files_params', 'file_id = ?', [$file_id]);
                    return true;
                }
            }

        }

        return false;
    }

    static function removeFilesById(array $arr_files_id)
    {
        foreach ($arr_files_id as $file_id)
        {
            static::removeFileById($file_id);
        }
    }

    static function log($key, $value)
    {
        Log::addLog('FileLoader 1.0', $key, $value);
    }

    static function getParamsById(int $file_id)
    {
        return DB::select('files_params', 'file_id = ?', [$file_id]);
    }

    static function loadFileInDB($params)
    {
//        $params['path'] = realpath($params['path']);

        if(
//            empty(DB::select('files', 'path = ?', [$params['path']])['data'])
        true
        )
        {
            return DB::insert('files', [
                'name' => $params['name'],
                'folder' => $params['folder'],
                'path' => $params['path'],
                'path_root' => $params['path_root'],
                'size_mb' => $params['size'],
                'mime_type' => $params['type'],
                'meta' => !empty($params['meta']) ? $params['meta'] : ''
            ]);
        }
        else
        {

            return DB::update('files', [
                'name' => $params['name'],
                'folder' => $params['folder'],
                'path' => $params['path'],
                'path_root' => $params['path_root'],
                'size_mb' => $params['size'],
                'mime_type' => $params['type'],
            ], 'path = ?', [$params['path']]);
        };

    }
}