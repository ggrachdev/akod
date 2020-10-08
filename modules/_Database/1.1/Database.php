<?php

namespace Module\Database\v11;

use PDO;
use PDOException;

interface DataBaseV11
{

    static function checkСonnected();

    static function setup(array $params_setup);

    static function connect();

    static function disconnect();

    static function select($data, string $where, array $params);

    static function sql(string $query, array $params = [], string $type = 'query');

    static function insert($table, $insert_data);

    static function delete(string $table, string $sql_where, array $params);

    static function hide(string $table, string $sql_where, string $column_hide);

    static function update(string $table, array $values, string $where_sql = null, array $params = []);

    static function create(string $sql, array $params);

    // Включить режим транзакции
    static function startTransaction();

    // Выполнить транзакции
    static function commit();

    // Откатить транзакции
    static function rollback();

    // Проверка, успешен ли запрос
    static function isSuccess(&$response, $select_request = false);
}

class DB implements DataBaseV11
{
    // Объект pdo
    static $pdo;

    // Статус транзакции
    static $status_start_transaction = false;

    // Конфиги
    static $dsn;

    // Поддерживается ли соединение сейчас
    static $is_connected = false;

    // Поддерживается ли соединение сейчас
    static $is_setup = false;

    // Параметры установок для соедиения
    static $params_setup;

    // Последний тип запроса
    static $last_type_query;

    // Соединиться с бд
    static function connect()
    {
        // Если нет соединения и установлены параметры
        if (self::$is_connected === false && self::$is_setup === true) {

            $opt = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ];

            $params = &self::$params_setup;

            // В зависимости от типа бд могу  быть разные $dsn
            // TODO: ADD SQLITE
            switch ($params['type']) {
                case 'pgsql':
                    $dsn = 'pgsql:host=' . $params['host'] . ';dbname=' . $params['db'];
                    break;
                case 'mysql':
                case 'mariadb':
                    $dsn = 'mysql:host=' . $params['host'] . ';dbname=' . $params['db'];
                    break;
            }

            try {
                self::$pdo = new PDO($dsn, $params['user'], $params['pass'], $opt);
            } catch (PDOException $e) {
                $pdo = null;
                die('Подключение не удалось: ' . $e->getMessage());
            }
        }
    }

    // Отсоединиться от бд
    static function disconnect()
    {
        self::$pdo = null;
        self::$is_connected = false;
    }

    static function select($data, string $where = null, array $params = [])
    {
        self::$last_type_query = 'select';

        if (is_array($data))
            $query = 'SELECT ' . $data[1] . ' FROM ' . $data[0];
        else
            $query = 'SELECT * FROM ' . $data;

        if ($where !== null) {
            $query .= ' WHERE ' . $where;
        }

        return self::sql($query, $params);
    }

    static function insert($table, $insert_data)
    {
        self::$last_type_query = 'insert';

        if (self::isAssoc($insert_data)) {
            $query = 'INSERT INTO ' . $table . ' (' . self::transformArray(array_keys($insert_data), '"') . ') VALUES (' . self::getArrPlaceholders($insert_data) . ');';
            return self::sql($query, array_values($insert_data), 'last_id');
        } else {
            $query = 'INSERT INTO ' . $table . ' VALUES (' . self::getArrPlaceholders($insert_data) . ');';
            return self::sql($query, $insert_data, 'last_id');
        }


    }

    static function transformArray(array $array, $glue = '\'', $delimiter = ',')
    {
        return $glue . implode($glue . $delimiter . $glue, $array) . $glue;
    }

    static function getArrPlaceholders(array $array, $glue = '', $delimiter = ',')
    {
        return self::transformArray(array_fill(0, sizeof($array), '?'), $glue, $delimiter);
    }

    static function delete(string $table, string $sql_where, array $params = [])
    {
        self::$last_type_query = 'delete';

        $query = 'DELETE FROM ' . $table . ' WHERE ' . $sql_where . ';';

        return self::sql($query, $params);
    }

    static function update(string $table, array $values, string $where_sql = null, array $params = [])
    {
        self::$last_type_query = 'update';

        $set_sql = '';
        foreach ($values as $k => $v)
            $set_sql .= '"' . $k . '" = ?, ';
        $set_sql = rtrim($set_sql, ', ');
        if ($where_sql !== null)
            $query = 'UPDATE ' . $table . ' SET ' . $set_sql . ' WHERE ' . $where_sql;
        else
            $query = 'UPDATE ' . $table . ' SET ' . $set_sql;

        $query .= ';';

        return self::sql($query, array_merge(array_values($values), $params));
    }

    static function create(string $sql, array $params)
    {
        self::$last_type_query = 'create';

        // TODO: Implement create() method.
    }

    static function startTransaction()
    {
        if (
            !self::$status_start_transaction &&
            !self::$pdo::inTransaction()
        ) {
            self::$status_start_transaction = true;
            self::$pdo::beginTransaction();
        }
    }

    static function commit()
    {
        if (
            self::$status_start_transaction &&
            self::$pdo::inTransaction()
        ) {
            self::$status_start_transaction = false;
            self::$pdo::commit();
        }
    }

    static function rollback()
    {
        if (
            self::$status_start_transaction &&
            self::$pdo::inTransaction()
        ) {
            self::$status_start_transaction = false;
            self::$pdo::rollBack();
        }
    }

    static function sql(string $query, array $params = [], string $type = 'query')
    {
        global $config;

//        self::checkСonnected();

        if ($config['debug'] === true) {
            if ($config['query'] == null) $config['query'] = [];
            $config['query'][] = ['query' => $query, 'params' => $params];
        }

        // В режиме транзакции выполняем код без перехвата ошибок
        if (self::$status_start_transaction) {
            $stmt = self::$pdo->prepare($query);
            $stmt->execute($params);

            switch ($type) {
                case 'query':
                    $data['data'] = $stmt->fetchAll();
                    break;
                case 'last_id':
                    $data['data']['last_id'] = self::$pdo->lastInsertId();
                    break;
            }
        } else {
            try {
                $stmt = self::$pdo->prepare($query);
                $stmt->execute($params);;

                switch ($type) {
                    case 'query':
                        $data['data'] = $stmt->fetchAll();
                        break;
                    case 'last_id':
                        $data['data']['last_id'] = self::$pdo->lastInsertId();
                        break;
                }
            } catch (PDOException $e) {
                $data['result'] = 0;
                $data['error'] = $e->getMessage();
            }
        }


        if (!empty($data['data']))
            $data['result'] = 1;
        return $data;

    }

    static function setup(array $params_setup)
    {
        self::$params_setup = $params_setup;
        self::$is_setup = true;
    }

    // Проверяем установлено ли соединение, если нет - то подключаемся
    static function checkСonnected()
    {
        if (self::$is_connected === false && self::$is_setup === true)
            self::connect();
    }

    static function isAssoc(array $arr)
    {
        if (array() === $arr) return false;
        return array_keys($arr) !== range(0, count($arr) - 1);
    }

    // Пометить поле скрытым от пользователя
    static function hide(string $table, string $sql_where, string $column_hide)
    {
        // TODO: Implement hide() method.
    }

    static function isSuccess(&$response, $is_select_request = false)
    {
        if ($is_select_request) {
            return !empty($response['data']);
        } elseif (self::$last_type_query !== 'select') {
            if ($response['result'] == true)
                return true;
            else
                return false;
        } else
            return null;
    }
}

$type = $config['db']['type'];
$host = $config['db']['host'];
$db = $config['db']['db'];
$user = $config['db']['user'];
$pass = $config['db']['password'];
$charset = 'utf8';

DB::setup([
    'type' => $type,
    'host' => $host,
    'db' => $db,
    'user' => $user,
    'pass' => $pass,
    'charset' => $charset
]);
DB::connect();