<?        
/** Example:
 *
 * Добавить роут с наличием get и post запроса и привязать
 * контроллер -  'controller_name'
 * $ROUTER('test', 'controller_name')->addRequest('GET&post');
 *
 * Добавить роут 'test' с наличием request запроса и привязать
 * контроллер -  'controllerTest'
 * $ROUTER('test', 'controllerTest')->addRequest('request');
 *
 * Добавить роут без проверки на наличие запроса и привязать
 * контроллер -  'url'
 * $ROUTER('test', 'url');
 *
 * Получить 0-вой роут из url с delimiter /
 * $ROUTER->getUrl(0);
 *
 * Получить массив роутов
 * $ROUTER->getUrl();
 *
 * Проверить соответствует ли url[0] какому-либо из роутов
 * $ROUTER->checkRout()
 *
 * Преконтроллер выполняется перед запуском роута и должен вернуть true.
 * Если вернет false - то контроллер и следующий преконтроллер не будет выполняться
 *
 *
 * Получить контроллер если роут из url соответствует добавленным роутам
 * P.S: Запускать строго после checkRout()
 * Router::getController()
 */
interface RouterMethods
{
    function __construct(array $params = []);

    // Добавить роутеры url
    function addUrlRoutes();

    // Получить роут
    function getUrl($number);

    // Добавить роут
    function add(string $rout, string $controller, $action = null, array $precontrollers): Router;

    // Добавить преконтроллеры для обработки
    function addPrecontrollers(array $arr_pre): void;

    // Добавить роут
    function __invoke(string $rout, string $controller): Router;

    // Добавить группу роутов
    function addGroup(array $params);

    // Добавить фильтр запроса (POST,GET..) для роутера
    function addRequest(string $filter_request): Router;

    // Проверить - соответствует ли url[0] роуту
    function checkRout(): bool;

    // Вернуть полный путь
    function getFullPath(): string;

    // Устанить значения
    function set($key, $value);

    // Запуск контроллера и экшена
    function run();
}

Class Router implements RouterMethods
{

    // 404 страница
    public $redirect_404_url = '/404';

    // Откуда подключаются контроллеры
    private $path_with_controllers = null;

    // Откуда подключаются преконтроллеры
    private $path_with_precontrollers = null;

    // URL роуты
    private $url_routes = [];

    // Последний, добавленный роут
    private $last_rout;

    // Роуты
    private $routes = [];

    // Режим проверки соответствия url правилам
    public $mode_check_rout = 'FIRST_URL';

    // Название объекта шаблонизатора
    private $name_object_tpl = 'TPL';

    // Название объекта шаблонизатора
    private $namespace_controllers = 'Controllers\\';

    // Активный контроллер
    static $active_controller;

    // Активный action
    static $active_action;

    // Precontroller's
    static $precontrollers = [];


    function __construct(array $params = [])
    {
        if (!empty(($params)) && is_array($params)) {
            foreach ($params as $k => $v) {
                switch ($k) {

                    // Путь до контроллеров
                    case 'controllers_path':
                        $this->path_with_controllers = $v;
                        break;

                        // Название свойства шаблонизатора в объекте SYS
                    case 'name_object_tpl':
                        $this->name_object_tpl = $v;
                        break;

                        // Пространство имен подключаемого контроллера
                    case 'namespace_controllers':
                        $this->namespace_controllers = $v;
                        break;

                        // Пространство имен подключаемого контроллера
                    case 'precontrollers_path':
                        $this->path_with_precontrollers = $v;
                        break;
                }
            }
        }

        $this->addUrlRoutes();
    }

    public function addUrlRoutes()
    {
        $path_info = explode('?', $_SERVER['REQUEST_URI'])[0];

        $param = explode('/', $path_info);
        @array_shift($param);

        if (@$param[0] == 'index.php') @array_shift($param);

        if (empty($param[0])) $param = array('root');

        $this->url_routes = $param;

        return $this;
    }

    // Вернуть активный контроллер
    static function getController()
    {
        return self::$active_controller;
    }

    // Вернуть активный action
    static function getAction()
    {
        return self::$active_action;
    }

    public function __invoke(string $rout, string $controller): Router
    {
        return $this->add($rout, $controller);
    }

    public function add(string $rout, string $controller, $action = null, array $precontrollers = []): Router
    {

        // Запоминаем last_rout, чтобы чейнить над ним
        $this->last_rout = $rout;

        // Добавляем роут в массив router
        // Если пользователь не указал action, то будет запускать action run
        $this->routes[$rout] = [
            'controller' => $controller,
            'action' => ($action !== null ? $action : 'run'),
            'precontrollers' => (sizeof($precontrollers) > 0 ? $precontrollers : null),
        ];

        return $this;
    }

    /**
     * @param array $arr_pre - массив с преконтроллерами
     */
    public function addPrecontrollers(array $arr_pre): void
    {
        if (sizeof($arr_pre) > 0) {

            // Добавляем преконтроллеры
            foreach ($arr_pre as $alias => $precontrollers) {
                if (is_array($precontrollers))
                    self::$precontrollers[$alias] = $precontrollers;
                else
                    self::$precontrollers[$precontrollers] = [$precontrollers];

            }
        }
    }

    public function addRequest(string $filter_request): Router
    {
        $filter_request = mb_strtolower($filter_request);

        switch ($filter_request) {
            case 'get':
                $this->routes[$this->last_rout] = [
                    'filter_request' => ['get']
                ];
                break;

            case 'post':
                $this->routes[$this->last_rout] = [
                    'filter_request' => ['post']
                ];
                break;

            case 'request':
                $this->routes[$this->last_rout] = [
                    'filter_request' => ['request']
                ];
                break;

            case 'post&get':
            case 'get&post':
                $this->routes[$this->last_rout] = [
                    'filter_request' => ['post', 'get']
                ];
                break;
        }

        return $this;

    }

    public function checkRout(): bool
    {

        // Обозначаем, найден ли данный запрос среди правил
        $this_request_is_found = false;

        if (
            !empty($this->routes) &&
            is_array($this->routes)
        ) {

            // Ищем запрос среди правил в зависимости от режима
            switch ($this->mode_check_rout) {
                case 'REGEXP':
                    $full_path = $this->getFullPath();

                    foreach ($this->routes as $rule_start => $params) {
                        $rule = '~^' . $rule_start . '$~';

                        if (preg_match($rule, $full_path)) {
                            $rout = $this->routes[$rule_start];
                            $this_request_is_found = true;
                            break;
                        }
                    }
                    break;

                case 'REGEXP_LITE':
                    $full_path = $this->getFullPath();

                    foreach ($this->routes as $rule_start => $params) {
                        $rule = '~^' . str_replace(
                                ['{int}', '{!int}', '{str}', '{!str}'],
                                ['\d*', '\D*', '\D*', '\d*'],
                                $rule_start
                            ) . '$~';

                        if (preg_match($rule, $full_path)) {
                            $rout = $this->routes[$rule_start];
                            $this_request_is_found = true;
                            break;
                        }
                    }

                    break;

                case 'FIRST_URL':
                    // В качестве роута, который будем сранивать с массивом роутов берем нулевой url
                    if(array_key_exists($this->getUrl(0), $this->routes))
                    {
                        $rout = $this->routes[$this->getUrl(0)];
                        $this_request_is_found = true;
                    }
                    break;
            }

            if ($this_request_is_found) {
                // Проверка преконтроллеров
                if ($rout['precontrollers'] !== null) {

                    global $SYS, $config, $system, $local_data;
                    foreach ($rout['precontrollers'] as $precontroller_group) {

                        $precontrollers_this_request = self::$precontrollers[$precontroller_group];

                        foreach ($precontrollers_this_request as $precontroller) {
                            $path_precontroller = $this->path_with_precontrollers . $precontroller . '.php';

                            if (is_file($path_precontroller)) {
                                $res_precontroller = include_once $path_precontroller;

                                if ($res_precontroller !== true) return false;

                            } else {
                                return false;
                            }
                        }


                    }
                }


                // Проверяем роут на наличие фильтров для запросов
                if (!empty($rout['filter_request'])) {
                    foreach ($rout['filter_request'] as $item) {
                        switch ($item) {
                            case 'get':
                                if (empty($_GET))
                                    return false;
                                break;

                            case 'post':
                                if (empty($_POST))
                                    return false;
                                break;

                            case 'request':
                                if (empty($_REQUEST))
                                    return false;
                                break;
                        }
                    }
                }


                // Задаем актуальные controller и action
                self::$active_controller = $rout['controller'];
                self::$active_action = $rout['action'];

                return true;
            } else {
                redirect($this->redirect_404_url);
                return false;
            }

        } else {
            redirect($this->redirect_404_url);
            return false;
        }

    }

    public function addGroup(array $params)
    {
        // TODO: Implement addGroup() method.
    }

    public function getUrl($number = null)
    {
        if ($number === null)
            return $this->url_routes;
        else
            return array_key_exists($number, $this->url_routes)
                ? $this->url_routes[$number] : false;
    }

    public function run()
    {

        if ($this->path_with_controllers !== null &&
            is_string($this->path_with_controllers)
        ) {

            $name_controller = self::getController() . 'Controller';


            // Подключаем файл контроллера, предварительно проверив, есть ли он
            $path_controller = $this->path_with_controllers . $name_controller . '.php';

            if (is_file($path_controller)) {

                // Your cms global
                global $SYS, $config, $system;

                require_once $path_controller;

                // Создаем объект контроллера и вызываем action
                $class_name = $this->namespace_controllers.$name_controller;
                $contoller = new $class_name;

                $contoller->router = &$this;

                $name_action = self::getAction() . 'Action';

                // Вызываем action
                $params_twig = $contoller->$name_action();

                // Если action возвращает данные для шаблонизатора, то подключаем его и выводим данные
                if (!empty($params_twig[0]) &&
                    !empty($params_twig[1]
                    )
                ) {

                    // Название шаблонизатора обработчика
                    $name_object_tpl = $this->name_object_tpl;

                    echo $SYS->$name_object_tpl->render($params_twig[0] . '.twig', $params_twig[1]);
                }

            } else
                throw new Exception('Not found controller file');

        } else
            throw new Exception('Not found path in controller folder');
    }

    function getFullPath(): string
    {
        return rtrim(trim(implode('/', $this->getUrl())), '/');
    }

    function set($key, $value)
    {
        $this->$key = $value;
    }
}

$SYS->ROUTER = new Router([
    'controllers_path' => $config['path']['controllers'],
    'precontrollers_path' => $config['path']['precontrollers']
]);




