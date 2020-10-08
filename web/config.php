<?php

// Поля
$config['fields'] = [
    'text' => \Classes\Fields\FieldText::class,
    'number' => \Classes\Fields\FieldNumber::class,
    'gallery' => \Classes\Fields\FieldGallery::class,
    'table' => \Classes\Fields\FieldTable::class,
    'html' => \Classes\Fields\FieldHtml::class,
    'file' => \Classes\Fields\FieldFile::class,
];


// Debug режим
$config['debug'] = true;

// Подгрузить .ENV файл с настройками
$config['has_env'] = false;

// Текущая папка
$config['path']['cwd'] = getcwd() ;
$config['path']['site'] = $_SERVER['REQUEST_SCHEME'].'://'.explode(':', $_SERVER['HTTP_HOST'])[0];

// ROOT сайта
$config['path']['root'] = $config['path']['cwd'] . '/';

// Папка с модулями
$config['path']['modules'] = $config['path']['cwd'] . '/../modules/';

// Папка с api методами
$config['path']['methods'] = $config['path']['cwd'] . '/site/api/methods/';

// Папка с контроллерами
$config['path']['controllers'] = $config['path']['cwd'] . '/site/controllers/';

// Папка с преконтроллерами
$config['path']['precontrollers'] = $config['path']['cwd'] . '/site/precontrollers/';

// Папка с моделями
$config['path']['models'] = $config['path']['cwd'] . '/site/models/';

// Папка с компонентами
$config['path']['components'] = $config['path']['cwd'] . '/site/api/components/';

// Папка с классами
$config['path']['classes'] = $config['path']['cwd'] . '/site/classes/';

// Папка с mvc
$config['path']['mvc'] = $config['path']['cwd'] . '/site/';

// Папка для crop
$config['path']['crop'] = $config['path']['cwd'] . '/assets/files/images/crop/';

// Папка с файлами
$config['path']['files'] = $config['path']['cwd'] . '/assets/files/';

// Сайт
$config['site'] = 'http://66.666.66.66/';

// Секретный ключ
$config['secret_key'] = 'example';

$config['db']['db'] = 'example';
$config['db']['host'] = '127.0.0.1';
$config['db']['user'] = 'example';
$config['db']['password'] = 'example';
$config['db']['type'] = 'pgsql';

// Подключаемые модули
$config['modules'] = [
    // Админ-панель
    '_AdminPanel' => ['version' => '1.0', 'scripts' => false],
];
?>
