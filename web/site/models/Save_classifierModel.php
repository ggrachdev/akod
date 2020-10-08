<?php

namespace Models;

// Вызвать данную модель с кешированием
// $data = Cache::requireModеl('Save_classifierModel', $time_sec = 30, $key = null, $params);

use Module\Database\v11\DB;

class Save_classifierModel {
    public static function getData(...$params) {
        $data = [];
        return $data;
    }
}