<?

global $system, $config, $local_data;

$admin_path = $config['modules'][$local_data['module_name']]['admin_url'];

if ($system['user']->is_auth() &&
    $system['user']->checkPrivilege('show_admin')
)
{

    redirect('/'.$admin_path.'/main');
}

return true;
