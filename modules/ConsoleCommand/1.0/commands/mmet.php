<?php

$name_command = 'Make Method';
echo 'Start action: ' . $name_command . PHP_EOL;

if (isset($argv[2])) {

    $name_comp = $argv[2] . '.php';

    echo 'Make component: ' . $name_comp.PHP_EOL;

    $path_comp = $config['path']['methods'] . $name_comp;

    if (!is_file($path_comp)) {

        if($argv[3] === 'auto')
        {
            $content = <<<EOT
<?php

// Успешность результата
\$response['result'] = false;

// Автоматическая подстановка функции-обработчика
\$handler_render_action = true;
EOT;
        }
        else
        {
            $content = <<<EOT
<?php

// Успешность результата
\$response['result'] = false;

// Название функции-обработчика
\$response['render'] = 'name_render';
EOT;
        }


        $result = file_put_contents($path_comp, $content);

        if($result)
        {
            echo 'Success make method: '.$name_comp;
        }
        else
        {
            echo 'Fail make method: '.$name_comp;
        }
    } else {
        echo $name_comp . ' if found! Need create method with new name!' . PHP_EOL;
    }


} else {
    echo 'Not search <NAME_METHOD>: ' . $name_console_file . ' ' . $action . ' <NAME_METHOD> [<AUTO_RENDER_NAME>]' . PHP_EOL;
}
