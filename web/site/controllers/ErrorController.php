<?php

namespace Controllers;

class ErrorController
{
    public function runAction() {
        header("HTTP/1.0 404 Not Found");
        echo 'Страница не найдена<br>';
        echo '<a href="/">Вернуться на главную</a>';
    }
}