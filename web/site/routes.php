<?

// Задаем простой режим проверки роутов по регулярным выражением
$SYS->ROUTER->mode_check_rout = 'REGEXP_LITE';

// Добавляем преконтроллеры
$SYS->ROUTER->addPrecontrollers(
    [
        'checkAuth',
        // Проверка доступов на внутренние страницы каталога
        'checkAccess' => ['checkAuthCabinet', 'checkAccess']
    ]
);

// Авторизация
$SYS->ROUTER->add('root', 'Auth', 'logIn', ['checkAuth']);
$SYS->ROUTER->add('log-in', 'Auth', 'logIn', ['checkAuth']);
$SYS->ROUTER->add('forgot-password', 'Auth', 'forgotPassword', ['checkAuth']);
// Регистрация
$SYS->ROUTER->add('sign-up', 'Auth', 'signUp', ['checkAuth']);

$SYS->ROUTER->add('doc-generator/word', 'DocGenerator', 'generateWord');
$SYS->ROUTER->add('doc-generator/excel', 'DocGenerator', 'generateExcelTable');
$SYS->ROUTER->add('doc-generator/tsv', 'DocGenerator', 'generateTsvForIndex');

// TODO: Сделать восстановление пароля

// Будет вызван по умолчанию экшн runAction в контроллере catalog
$SYS->ROUTER->add('cabinet', 'Cabinet', null, ['checkAccess']);
$SYS->ROUTER->add('catalogs', 'Catalog', null, ['checkAccess']);
$SYS->ROUTER->add('speller/1/correct', 'Speller', 'getData');


// При роуте 404 вызываем контроллер error runAction
$SYS->ROUTER->add('404', 'Error');


