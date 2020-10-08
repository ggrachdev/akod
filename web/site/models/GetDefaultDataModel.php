<?php

namespace Models;

// Вызвать данную модель с кешированием
// $data = Cache::requireModеl('GetDefaultDataModel', $time_sec = 30, $key = null, $params);

use Module\Database\v11\DB;

class GetDefaultDataModel {
    public static function getData(...$params) {
        $data = [];
        return $data;
    }
}