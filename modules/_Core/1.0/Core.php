<?

use Module\Database\v11\DB;

/**
 * Переменные ядра:
 *
 * $SYS - для хранения объектов модулей
 * $config - для хранения конфигов
 * $system - для хранения системной информации
 * $local_data - для хранения локальной информации
 */

// Подгружаем функции
require_once $config['path']['root'] . 'functions.php';

// Подгружаем ли шаблонизатор
$config['load_tpl'] = true;

// Режим загрузки скриптов
$config['scripts_mode'] = false;

// Режим загрузки api
$config['api_mode'] = false;

if ($config['debug'] == true)
    $config['memory_start'] = memory_get_usage();

$SYS = new stdClass();

if ($config['has_env'] === true) {
    $dotenv = Dotenv\Dotenv::create($config['path']['root']);
    $dotenv->load();
}

if ($url[0] != 'scripts')
    session_start();

$config['scripts_modules'] = [];
$config['scripts_modules'][] = $config['path']['modules'] . '_Core/1.0/js/FunctionsDOM.js';
$config['scripts_modules'][] = $config['path']['modules'] . '_Core/1.0/js/Core.js';

// Стандартно подключаемые модули
$core_modules = [
    // Роутер
    '_Router' => ['version' => '1.0', 'scripts' => false],

    // Уведомления
    '_Alert' => ['version' => '1.0'],

    // Валидатор
    '_MultiValidator' => ['version' => '1.0'],

    // Работа с БД
    '_Database' => ['version' => '1.1', 'scripts' => false],

    // Шаблонизатор
    '_Tpl' => ['version' => '1.0', 'scripts' => false],

    // Авторизация
    '_Authorization' => ['version' => '1.0', 'scripts' => false]
];
$config['modules'] = array_merge($core_modules, $config['modules']);

// Функции ядра
require_once 'CoreFunctions.php';
require_once 'CoreClasses.php';

// Загрузчик модулей
require_once $config['path']['modules'] . '_ModuleLoader/1.0/ModuleLoader.php';


// Если режим отдачи скриптов
if ($url[0] === 'scripts') {
    $config['scripts_mode'] = true;
    $config['load_tpl'] = false;
    echoFilesContent($config['scripts_modules'], 'js');
} else {
    // Подключаем конфиги над модулями
    require_once $config['path']['root'] . 'config_modules.php';
}


// Если запрос отправляется на /api
if ($url[0] === 'api') {
    require_once 'apiHandler.php';
}

// Подгрузить ли шаблонизатор
if ($config['scripts_mode'] === false
    && $config['api_mode'] === false
    && $config['status_admin_panel'] === false
    && $config['load_tpl'] === true
) {
    // Подключаем файл с роутами
    require_once $config['path']['mvc'] . 'routes.php';

    // Если данному роуту соответствуют добавленный роуты, то запускаем контроллер
    if ($SYS->ROUTER->checkRout()) $SYS->ROUTER->run();

}
else
    exit;


if ($config['debug'] == true)
    $config['memory_end'] = (memory_get_usage() - $config['memory_start']) / (1024 * 1024);

DB::disconnect();
?>