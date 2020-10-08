<?php

/**
 * Красиво отобразить данные через <pre>
 *
 * @param mixed $array - какое-то значение
 * @param bool $comment - вывести в <!-- -->
 * @param bool $dump - вывести через var_dump
 */
function pre($array, $comment = false, $dump = false)
{
    if ($comment) echo '<!--';

    echo '<pre>';

    if ($dump)
        var_dump($array);
    else
        print_r($array);

    echo '</pre>';

    if ($comment) echo '-->';
}

/**
 * Редирект на $path
 *
 * @param $path - url redirect
 */
function redirect(string $path): void
{
    header('location: ' . $path);
}

/**
 * @param string $key - ключ для получения
 * @param string|null $module_name - имя модуля
 * @return mixed
 */
function get_config_modules(string $key)
{
    global $config, $local_data;

    $module_name = $local_data['module_name'];

    return $config['modules'][$module_name][$key] == null ?
        false : $config['modules'][$module_name][$key];
}

function echoFilesContent($arr_files, $header_type = null)
{

    if($header_type !== null)
    {
        global $config;

        // Отключаем шаблонизатор
        $config['load_tpl'] = false;

        header('Expires: 0');
        header('Pragma: no-cache');
        header('Last-Modified: ' . gmdate("D, d M Y H:i:s") . ' GMT');
    }

    switch ($header_type)
    {
        case 'css':
            header('Content-type: text/css; charset: UTF-8');
            break;
        case 'js':
            header('Content-Type: application/javascript; charset=utf-8');
            break;
    }

    foreach ($arr_files as $item)
        echo file_get_contents($item);
}


// Получение корректных url_param
$path_info = $_SERVER['REQUEST_URI'];
$param = explode('/', $path_info);
@array_shift($param);

if (@$param[0] == 'index.php') @array_shift($param);
if (empty($param[0])) $param = array('root');

$config['url'] = $url = $param;

if ($config['url'][0] == 'api')
    $config['api_mode'] = true;

else if ($config['url'][0] == 'scripts')
    $config['scripts_mode'] = true;



