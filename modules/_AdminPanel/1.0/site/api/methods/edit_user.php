<?
use Module\Database\v11\DB;

$response['result'] = false;
$handler_render_action = true;

// TODO: need to valid params
if ($system['user']->is_auth() &&
    $system['user']->checkPrivilege('show_admin')
) {
    DB::update('users', [
        'login' => trim($params['login']),
        'password' => trim($params['password']),
        'reset_key' => trim($params['reset_key'])
    ], 'id = ?', [$params['id']]);
}


?>