<?php


$config['path']['this_module_path'] = $config['path']['modules'] . 'ConsoleCommand/1.0/';

if (isset($argv[1])) {
    $action = $argv[1];

    $path_action = $config['path']['this_module_path'] . 'commands/' . $action . '.php';

    if (is_file($path_action)) {
        include_once $path_action;

    } else {
        echo 'Not found action: '.$action;
    }
} else {
    echo 'Not search action: php '.$name_console_file.' <ACTION> <PARAM 1> ... <PARAM N>'.PHP_EOL;
}
