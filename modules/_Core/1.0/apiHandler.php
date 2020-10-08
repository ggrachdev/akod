<?

if ($_REQUEST['action'] != null) {

    $name_action = $_REQUEST['action'];

    unset($_REQUEST['action']);

    $params = $_REQUEST;

    // Рендер функции с префиксом render_
    $handler_render_action = false;

    // Рендер функции в методе render_component
    $handler_action_component = false;

    // Множественный вызов компонентов
    if ($name_action === 'multicomponent_loader') {
        $components = explode(',', $_REQUEST['components']);
        $response['components'] = [];
        foreach ($components as $comp) {

            if (isset($params['sk']) && $params['sk'] === $config['secret_key']) {
                $action = $config['path']['admin_components'] . $comp . '.php';
            } else {
                $action = $config['path']['components'] . $comp . '.php';
            }

            if (is_file($action)) {
                if (is_file($action)) {
                    include_once($action);
                    if ($response['result'] === true)
                        $response['components'][$comp] = $response['component'];
                } else
                    exit('Not found action ' . $name_action);
            }
            $response['multicomponent_loader'] = true;
        }
    } else {

        // Файл с экшеном
        if (isset($params['component_name'])) {
            if (isset($params['sk']) && $params['sk'] === $config['secret_key']) {
                $action = $config['path']['admin_components'] . $name_action . '.php';
            } else {
                $action = $config['path']['components'] . $name_action . '.php';
            }
        } else {

            if(isset($params['sk']) && $params['sk'] === $config['secret_key'])
            {
                $action = $config['path']['admin_methods'] . $name_action . '.php';
            }
            else
            {
                $action = $config['path']['methods'] . $name_action . '.php';
            }
        }

        if (is_file($action))
            include_once($action);
    }

    @header('Expires: 0');
    @header('Pragma: no-cache');
    @header('Last-Modified: ' . gmdate("D, d M Y H:i:s") . ' GMT');
    @header('Content-Type: application/javascript; charset=utf-8');


    if (@$response !== false) {

        if ($handler_render_action === true)
            $response['render'] = 'render_' . $name_action;

        if ($handler_action_component === true) {
            $response['render'] = 'render_component';
            $response['component_name'] = $_REQUEST['component_name'];
        }

        echo json_encode(array('response' => $response));

    }
}

