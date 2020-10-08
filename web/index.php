<?php
require_once 'vendor/autoload.php';


$autoload['config'] = ['twig'];

// Настройки ядра
include_once 'config.php';

// Ядро
include_once $config['path']['modules'] . '_Core/1.0/Core.php';





