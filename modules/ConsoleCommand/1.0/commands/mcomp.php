<?php

$name_command = 'Make Component';
echo 'Start action: ' . $name_command . PHP_EOL;

if (isset($argv[2])) {

    $argv[2] = ucfirst($argv[2]);

    $name_comp = $argv[2] . '.php';

    echo 'Make component: ' . $name_comp.PHP_EOL;

    $path_comp = $config['path']['components'] . $name_comp;

    if (!is_file($path_comp)) {

        $content = <<<EOT
<?php
// Вызов компонента в разметке: <section data-component="$argv[2]"></section>

// Результат нахождения компонента успешен
\$response['result'] = true;

// Файл является компонентом
\$handler_action_component = true;

// Содержимое компонента
\$response['component'] = '<h2>Содержимое компонента $argv[2]</h2>';
EOT;

        $result = file_put_contents($path_comp, $content);

        if($result)
        {
            echo 'Success make component: '.$name_comp;
        }
        else
        {
            echo 'Fail make component: '.$name_comp;
        }
    } else {
        echo $name_comp . ' if found! Need create component with new name!' . PHP_EOL;
    }


} else {
    echo 'Not search <NAME_COMPONENT>: ' . $name_console_file . ' ' . $action . ' <NAME_COMPONENT>' . PHP_EOL;
}
