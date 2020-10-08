<?php

use Module\Database\v11\DB;

// Отвечает за методы с авторизацией через authkey
interface AuthKeyLogin {

    /**
     * Авторизоваться по authkey
     *
     * P.S: Метод ищет переданный authkey по переданной колонке, если находит, то берет данные и подставляет
     *
     * @param $auth_key
     * @param $column_auth_key
     * @return bool
     */
    public function authWithAuthKey($auth_key, $column_auth_key): bool;

    /**
     * Проверить есть ли у пользователя authkey
     *
     * @param string $auth_key
     * @param string $column_auth_key
     * @param int $id
     * @return mixed
     */
    public function checkHasAuthKeyById(string $auth_key, string $column_auth_key, int $id);

    /**
     *
     * Подгрузить привилегии
     *
     * @return mixed
     */
    public function loadPrivilege();
}

class Authorization implements AuthKeyLogin
{

    public static $name_modul = '_Authorization';

    function __construct()
    {
        // Авторизован ли пользователь?
        $this->auth = 0;

        // Данные пользователя
        $this->data = [];

        // Привилегии пользователя
        $this->privilege = [];
    }

    /**
     * Добавить поля
     *
     * @param array $array - поля
     */
    public function addFieldSite(Array $array)
    {
        global $config;

        if ($config['modules'][self::$name_modul]['site_fields'] == null)
            $config['modules'][self::$name_modul]['site_fields'] = [];

        foreach ($array as $item) {
            $config['modules'][self::$name_modul]['site_fields'][] = $item;
        }

        $config['modules'][self::$name_modul]['site_fields']
            = array_unique($config['modules'][self::$name_modul]['site_fields']);
    }

    /**
     * Активация плагина.
     */
    public function activate(): void
    {
        $res = DB::sql('
            CREATE TABLE users
            (
                id integer NOT NULL DEFAULT nextval(\'users_id_seq\'::regclass),
                login character(250) COLLATE pg_catalog."default" NOT NULL,
                password character(100) COLLATE pg_catalog."default" NOT NULL,
                reset_key character(100) COLLATE pg_catalog."default",
                privilege text[] COLLATE pg_catalog."default",
                CONSTRAINT users_pkey PRIMARY KEY (id)
            )  
        ');

        if ($res['result'] == 0) {
            exit($res['error']);
        }

    }

    /**
     * Авторизоваться
     *
     * @param String $login - логин
     * @param String $password - пароль (без хеша)
     * @param bool $need_loadPrivilege - нужно ли подгрузить привилегии
     */
    public function auth(string $login, string $password, bool $need_loadPrivilege = false)
    {
        $password_sha1 = sha1($password);

        $res = self::checkHasUser($login, $password_sha1);


        if ($res != false) {

            if($need_loadPrivilege)
            {
                $this->setData(
                    $this->getDataById($res['data'][0]['id'])
                );

                // TODO: if($need...) $this->loadPrivilege
            }
            else
            {
                $this->setData($res);
            }

            $_SESSION['auth_key'] = $this->getSessionKey();
            $_SESSION['id'] = $this->data['id'];
        } else {
            $this->logOut();
        }

    }

    // Взять данные пользователя по id
    public function getDataById(int $id)
    {
        $res = DB::sql('
        SELECT *, array_to_json(privilege) AS privilege FROM users WHERE id = ?
        ', [$id]);

        if ($res['result'] == 1) {

            // Обрабатываем привилегии
            $res['data'][0]['privilege'] = json_decode($res['data'][0]['privilege']);
            return $res;
        } else
            return false;
    }

    // Взять данные пользователя по login
    public function getDataByLogin(string $login)
    {
        $res = DB::sql('
        SELECT *, array_to_json(privilege) AS privilege FROM users WHERE login = ?
        ', [$login]);

        if ($res['result'] == 1) {

            // Обрабатываем привилегии
            $res['data'][0]['privilege'] = json_decode($res['data'][0]['privilege']);
            return $res;
        } else
            return false;
    }

    /**
     * Установить данные в объект
     *
     * @param Array $data - логин
     *
     * */
    private function setData($data)
    {
        $this->auth = 1;

        if (is_array($data['data'][0]['privilege']))
            $this->privilege = array_flip($data['data'][0]['privilege']);

        unset($data['data'][0]['privilege']);

        $this->data = $data['data'][0];
    }

    /**
     * Обновить данные пользователя
     * 
     * @param array $data
     */
    static function set(array $data, int $user_id) {
        DB::update('users', $data, 'id = ?', [
            $user_id
        ]);
    }

    /**
     * Обновить данные пользователя по логину
     *
     * @param array $data
     */
    static function setWithLogin(array $data, string $login) {
        DB::update('users', $data, 'login = ?', [
            $login
        ]);
    }

    /**
     * Проверить если ли пользователь с бд с таким логином и паролем
     *
     * @param String $login - логин
     * @param String $password_sha1 - пароль (хешированный sha1)
     *
     * @return bool|mixed - 0 - не найден. Array - найден.
     */
    static function checkHasUser(string $login, string $password_sha1)
    {

        $res = DB::select('users',
            'login = ? AND password = ?',
            [$login, $password_sha1]
        );

        if ($res['result'] == 1) {
            return $res;
        } else
            return false;
    }

    /**
     * Проверить если ли пользователь с бд с таким логином и паролем
     *
     * @param String $login - логин
     *
     * @return bool|mixed - 0 - не найден. Array - найден.
     */
    static function checkHasUserLogin(string $login)
    {

        $res = DB::sql('
        SELECT id FROM users WHERE login = ?
        ', [$login]);

        return $res['result'] == 1 ? true : false;
    }

    // Получить sha1 ключ сессии
    private function getSessionKey($id = null)
    {
        if ($id == null) $id = @$this->data['id'];

        if (empty($id))
            return false;
        else
            return sha1('user_' . $id);
    }

    /**
     * Авторизован ли пользователь? Глубокая проверка. Если нет данных пользователя, то автоматом подгрузит
     *
     * @return int 0 - не авторизован | 1 - авторизован
     */
    public function checkAuth()
    {

        if (
            !empty($_SESSION['auth_key']) &&
            !empty($_SESSION['id']) &&
            $this->getSessionKey($_SESSION['id']) == $_SESSION['auth_key']
        ) {

            // TODO: getDataById - подгружает привилегии, убрать это!

            // Подгружаем данные
            if (empty($this->data['id']))
                $this->setData($this->getDataById($_SESSION['id']));

            return 1;
        } else {
            return 0;
        }
    }

    // Проверяем авторизован ли пользователь, короткая проверка
    public function is_auth(): bool
    {
        if ($this->auth == 1)
            return true;
        else
            return false;
    }

    // Выход из аккаунта
    public function logOut()
    {
        unset($_SESSION['auth_key']);
        unset($_SESSION['id']);

        $this->auth = 0;
        $this->data = [];
        $this->privilege = [];
    }

    public static function setResetKey($login)
    {
        $key = sha1(uniqid());
        DB::sql('
            UPDATE public.users
            SET reset_key = ? 
            WHERE login = ?;
        ', [$key, $login]);
    }

    static function regUser($data)
    {
        global $config;

        // Колонки для вставки
        $column = [];

        // Параметры
        $params = [];

        if (
            $data['login'] != null &&
            $data['password'] != null
        ) {

            // Проверяем нет ли такого пользователя в бд
            if (self::checkHasUserLogin($data['login'])['result'] == 0) {
                $data['password'] = sha1($data['password']);

                $array_site_fields = $config['modules'][self::$name_modul]['site_fields'];

                if (empty($array_site_fields)) $array_site_fields = [];

                array_push($array_site_fields, 'login', 'password');

                foreach ($array_site_fields as $key) {
                    if (!empty($data[$key])) {
                        $column[] = '"' . $key . '"';
                        $val = $data[$key];
                        $params[] = $val;
                    }
                }

                $arr_params = array_fill(0, sizeof($column), '?');
                $sql = 'INSERT INTO users (' . implode(',', $column) . ') 
            VALUES (' . implode(',', $arr_params) . ');';

                $res = DB::sql($sql, $params);

                $res['comment'] = 'Success reg user';

                return $res;
            } else
                return [
                    'result' => 0,
                    'error' => 'This login has in data base',
                ];


        } else
            return [
                'result' => 0,
                'error' => 'Parameters password and login can not be null',
            ];
    }

    // Проверить привилегию
    public function checkPrivilege(string $privilege): bool
    {

        if ($this->is_auth())
            return array_key_exists($privilege, $this->privilege);
        else
            return false;
    }

    /**
     * Авторизоваться по authkey
     *
     * P.S: Метод ищет переданный authkey по переданной колонке, если находит, то берет данные и подставляет
     *
     * @param $auth_key
     * @param $column_auth_key
     * @return bool
     */
    public function authWithAuthKey($auth_key, $column_auth_key): bool
    {
        // TODO: Implement authWithAuthKey() method.
    }

    /**
     * Проверить есть ли у пользователя authkey
     *
     * @param string $auth_key
     * @param string $column_auth_key
     * @param int $id
     * @return mixed
     */
    public function checkHasAuthKeyById(string $auth_key, string $column_auth_key, int $id)
    {
        // TODO: Implement checkHasAuthKeyById() method.
    }

    /**
     *
     * Подгрузить привилегии
     *
     * @return mixed
     */
    public function loadPrivilege()
    {
        // TODO: Implement loadPrivilege() method.
    }
}


$system['user'] = new Authorization();

// Попытка авторизации
//$system['user']->auth('admin', 'qweqwe22');

// Проверяем авторизован ли пользователь, если нет, то выход
if ($system['user']->checkAuth() == 0)
    $system['user']->logOut();

// Короткая проверка
//$system['user']->is_auth() - короткая проверка без учета сессии и подгруженных данных.

// Глубокая проверка
// if ($system['user']->checkAuth() == 0) - если нет данных пользователя, но есть сессии - подгрузит данные. Если есть сессия
// и есть данные - то вернет ок без проверки. Проверяет глубоко сверяя ключи сессии


//Authorization::setResetKey('admin');

if ($_GET['action'] == 'logout') {
    $system['user']->logOut();
    header('location: /');
}





