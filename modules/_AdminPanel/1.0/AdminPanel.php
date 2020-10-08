<?

$local_data['module_name'] = $name;

$config['modules'][$local_data['module_name']]['js_files'] = [];

// Путь до компонентов админки
$config['path']['admin_components'] = $config['path']['modules'] . '_AdminPanel/1.0/site/api/components/';
$config['path']['admin_methods'] =$config['path']['modules'] . '_AdminPanel/1.0/site/api/methods/';

if (
    $system['user']->is_auth() &&
    $system['user']->checkPrivilege('show_admin')
) {
    $config['modules'][$local_data['module_name']]['js_files'][] = $config['path']['modules'] . '_AdminPanel/1.0/js/AdminPanel.js';
}

// Подключаем файл
require_once 'HeadFiles.php';

if ($url[0] == 'admin_js')
    echoFilesContent($config['modules'][$local_data['module_name']]['js_files'], 'js');

if ($url[0] == 'admin_css')
    echoFilesContent($config['modules'][$local_data['module_name']]['css_files'], 'css');

// Url при котором будет открываться админ-панель
if ($config['admin_url'] == null)
    $config['modules'][$local_data['module_name']]['admin_url'] = 'admin';
else
    $config['modules'][$local_data['module_name']]['admin_url'] = $config['admin_url'];


// Подключаем админ-панель
if ($config['load_tpl']) {


    // root папка админ панели
    $config['path']['admin_panel_root'] = $config['path']['modules'] . '_AdminPanel/1.0/';

    if ($url[0] == $config['modules'][$local_data['module_name']]['admin_url']) {

        $config['status_admin_panel'] = true;

        if ($config['debug'] == false)
            $config['modules'][$local_data['module_name']]['cache'] = get_config_modules('cache_tpl_path');
        else
            $config['modules'][$local_data['module_name']]['cache'] = false;

        $loader_admin = new Twig_Loader_Filesystem($module_path . 'twig_tpl/');
        $SYS->TPL_ADMIN = new Twig_Environment($loader_admin, array(
            //'cache' => get_config_modules('cache_tpl_path'),
            'cache' => $config['modules'][$local_data['module_name']]['cache'],
        ));



        // Устанавливаем шаблонизатор в роутере
        $SYS->ROUTER->set('name_object_tpl', 'TPL_ADMIN');

        // Устанавливаем пространство имен для кеширования
        \Module\Cache\v10\Cache::$namespace_models = 'AdminPanel\\v10\\Models\\';



        // Устанавливаем путь до контроллеров админ-панели
        $SYS->ROUTER->set('path_with_controllers',
            $config['path']['admin_panel_root'] . 'site/controllers/'
        );

        // Устанавливаем путь до преконтроллеров админ-панели
        $SYS->ROUTER->set('path_with_precontrollers',
            $config['path']['admin_panel_root'] . 'site/precontrollers/'
        );

        // Устанавливаем namespace для контроллеров админ-панели
        $SYS->ROUTER->set('namespace_controllers',
            'AdminPanel\\v10\\Controllers\\'
        );



        // Подключаем роуты админ-панели
        require_once $config['path']['admin_panel_root'].'/site/routes.php';



        if ($SYS->ROUTER->checkRout())
        {
            $SYS->ROUTER->run();
        }
//
//        die;
//
//        $params = [];
//
//
//        if (
//            $system['user']->is_auth() &&
//            $system['user']->check_privilege('show_admin')
//        ) {
//            echo $SYS->TPL_ADMIN->render('root.html', $params);
//        } else {
//            echo $SYS->TPL_ADMIN->render('login.html', $params);
//        }
    } else {
        $config['status_admin_panel'] = false;
    }
}


?>