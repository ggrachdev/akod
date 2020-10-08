<?php

$name_command = 'Make Model';
echo 'Start action: ' . $name_command . PHP_EOL;

if (isset($argv[2])) {

    $name_model_class = ucfirst($argv[2].'Model');

    $name_model = $name_model_class . '.php';

    echo 'Make model: ' . $name_model.PHP_EOL;

    $path_model = $config['path']['models'] . $name_model;

    if (!is_file($path_model)) {

        $content = <<<EOT
<?php

namespace Models;

// Вызвать данную модель с кешированием
// \$data = Cache::requireModеl('$name_model_class', \$time_sec = 30, \$key = null, \$params);

use Module\\Database\\v11\\DB;

class $name_model_class {
    public static function getData(...\$params) {
        \$data = [];
        return \$data;
    }
}
EOT;

        $result = file_put_contents($path_model, $content);

        if($result)
        {
            echo 'Success make model: '.$name_model;
        }
        else
        {
            echo 'Fail make model: '.$name_model;
        }
    } else {
        echo $name_model . ' if found! Need create model with new name!' . PHP_EOL;
    }


} else {
    echo 'Not search action: <NAME_MODEL> ' . $name_console_file . ' ' . $action . ' <NAME_MODEL>' . PHP_EOL;
}
