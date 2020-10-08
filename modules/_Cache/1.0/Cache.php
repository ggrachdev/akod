<?php

namespace Module\Cache\v10;

use Phpfastcache\Helper\Psr16Adapter;

class Cache {

    // Был ли подключен класс для кеширования
    static $is_require = false;

    // Объект класса для кеширования
    static $adapter = null;

    // Тип кеширования
    static $type = 'Files';

    // Namespace models
    static $namespace_models = 'Models\\';

    // Время. Кешировать по умолчанию на 5 минут
    static $time_sec_cache = 300;

    static function set($key, $data, int $time_sec = null)
    {
        if($time_sec === null)
            $time_sec = self::$time_sec_cache;

        if(self::checkRequire())
        {
            return self::$adapter->set($key, $data, $time_sec);
        }
    }

    static function get($key)
    {
        if(self::checkRequire())
        {

            return self::$adapter->get($key);
        }
    }

    static function has($key)
    {
        if(self::checkRequire())
        {
            return self::$adapter->has($key);
        }
    }

    // Очистить весь кеш
    static function clear()
    {
        if(self::checkRequire())
        {
            return self::$adapter->clear();
        }
    }

    // Удалить элемен по ключу
    static function delete($key)
    {
        // TODO:: не работает :(
        if(self::checkRequire())
        {
            return self::$adapter->delete($key);
        }
    }

    static function requireModеl(

        // Путь до модели
        $path,
        $time = null,
        string $key = null,
        array $params_model = null
    )
    {

        if($time === null)
            $time = self::$time_sec_cache;

        // Если нет ключа - берем сессию
        if($key === null)
        {
            if(empty($_SESSION))
                $_SESSION[md5($path)] = true;

            $key = md5(json_encode($_SESSION));
        }

        $module = self::$namespace_models.$path;

        $result = self::get($key);

        if($result !== null)
        {
            return $result;
        }
        else
        {
            if($params_model === null) $params_model = [];

            $result_new = call_user_func_array([$module, "getData"], $params_model);

            self::set($key, $result_new, $time);

            return $result_new;
        }

    }

    private static function checkRequire(): bool
    {
        if(!self::$is_require)
        {
            self::$adapter = new Psr16Adapter(self::$type);
            self::$is_require = true;
        }

        return true;
    }
}