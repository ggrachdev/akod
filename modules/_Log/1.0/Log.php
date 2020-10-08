<?php

namespace Module\Log\v10;
use Module\Database\v11\DB;

interface LogManager
{
    static function addLog(string $type, string $key, $value);

    static function add(string $key, $value);
}

class Log implements LogManager
{
    static $type_log = 'db';

    static $table_name = 'log';

    static function addLog(string $type, string $key, $value)
    {
        DB::insert('log', [
            'type' => $type,
            'key' => $key,
            'value' => $value
        ]);
    }

    static function add(string $key, $value)
    {
        self::addLog('default', $key, $value);
    }
}