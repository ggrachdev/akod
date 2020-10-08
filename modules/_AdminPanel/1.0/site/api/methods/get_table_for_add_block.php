<?

use Module\Database\v11\DB;
use Module\Form\v10\Form;

global $config;

$response['result'] = false;
$handler_render_action = true;

// TODO: need to check access
if ($system['user']->is_auth() &&
    $system['user']->checkPrivilege('show_admin')
) {

    // Получаем все таблицы из бд
    $tables = DB::sql("SELECT DISTINCT table_name 
from information_schema.columns 
where table_schema='public'");

    $response['result'] = true;

    $response['content'] = Form::generateForm([
        '.form_modal [data-form=form_login] [data-action=log_in] [validator]',
        'h [name=sk] {' . $config['secret_key'] . '}',
        '+ <h3 class="ta-l">Таблица для привязки:</h3>',
        't [name=email] {' . $_GET['TEST'] . '} (Ваш%%логин) !',
        '+ <h3 class="ta-l">Название блока:</h3>',
        't [name=name_block] (Название%%блока) !',
        'sb {Войти}',
    ]);
}


?>