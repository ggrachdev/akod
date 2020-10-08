<?

// Задаем простой режим проверки роутов по регулярным выражением
$SYS->ROUTER->mode_check_rout = 'REGEXP_LITE';

$admin_path = $config['modules'][$local_data['module_name']]['admin_url'];

// Добавляем преконтроллеры
$SYS->ROUTER->addPrecontrollers(
    [
        'checkAccess',
//        'checkAccess' => ['checkAuthCabinet', 'checkAccess']
    ]
);

// Авторизация
$SYS->ROUTER->add($admin_path.'/login', 'Auth', 'logIn', ['checkAccess']);
$SYS->ROUTER->add($admin_path, 'Auth', 'logIn', ['checkAccess']);

// Все пользователи системы
$SYS->ROUTER->add($admin_path.'/users', 'Users', 'pageListUsers');

// Блоки
$SYS->ROUTER->add($admin_path.'/blocks', 'Blocks', 'getData');

// Данные блоков
$SYS->ROUTER->add($admin_path.'/data', 'BlocksData', 'getData');

// Главная страница админ-панели
$SYS->ROUTER->add($admin_path.'/main', 'Main', 'logIn');

