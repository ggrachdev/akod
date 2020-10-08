<?php

$name_command = 'Make Controller';
echo 'Start action: ' . $name_command . PHP_EOL;

if (isset($argv[2])) {

    $name_controller_class = ucfirst($argv[2].'Controller');

    $name_controller = $name_controller_class . '.php';

    echo 'Make Controller: ' . $name_controller.PHP_EOL;

    $path_controller = $config['path']['controllers'] . $name_controller;

    if (!is_file($path_controller)) {

        $content = <<<EOT
<?php

namespace Controllers;

class $name_controller_class {
    public function runAction() {
        global \$system, \$config;
        
        \$name_view = 'your_view';
        return [\$name_view, \$params];
    }
}
EOT;

        $result = file_put_contents($path_controller, $content);

        if($result)
        {
            echo 'Success make controller: '.$name_controller;
        }
        else
        {
            echo 'Fail make controller: '.$name_controller;
        }
    } else {
        echo $name_controller . ' if found! Need create controller with new name!' . PHP_EOL;
    }


} else {
    echo 'Not search action: <NAME_CONTROLLER> ' . $name_console_file . ' ' . $action . ' <NAME_CONTROLLER>' . PHP_EOL;
}
