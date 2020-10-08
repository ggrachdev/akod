<?php

$name_command = 'Make new module';
echo 'Start action: ' . $name_command . PHP_EOL;

if(isset($argv[2]) && isset($argv[3]))
{
    // Название модуля
    $name_module = ucfirst($argv[2]);

    // Название класса модуля
    $name_class_module = str_replace('_','',$name_module);

    // Версия модуля
    $version_module = $argv[3];

    // Версия модуля для класса
    $version_module_namespace = 'v'.str_replace('.', '', $version_module);

    // Папка модуля
    $folder_module = $config['path']['modules'].$name_module.'/';

    // Папка модуля с версией
    $folder_module_full = $folder_module.$version_module.'/';

    if(file_exists($folder_module_full))
    {
        echo 'Error!! This modul was create!'.PHP_EOL;
    }
    else
    {

        if(!file_exists($folder_module))
        {
            $res = mkdir($folder_module);
        }
        else
        {
            $res = true;
        }

        if($res === true)
        {
           $res = mkdir($folder_module_full);

           if($res)
           {

               $path_module_class = $folder_module_full.$name_class_module.'.php';
               $path_module_activator = $folder_module_full.'activator'.'.php';

               $content = <<<EOT
<?php

namespace Module\\$name_class_module\\$version_module_namespace;

class $name_class_module {

}
EOT;

               $result = file_put_contents($path_module_class, $content);
               $result_2 = file_put_contents($path_module_activator, '');

               if($result && $result_2)
               {
                   echo 'Success create module!'.PHP_EOL;
               }
           }
           else
               echo 'Error!! Line 39 '.__FILE__.PHP_EOL;

        }
        else
            echo 'Error!! Line 39 '.__FILE__.PHP_EOL;
    }



}
else
{
    echo 'Example: ... nm NameModule 1.0'.PHP_EOL;
}