<?

namespace AdminPanel\v10\Controllers;


use AdminPanel\v10\Models\GetDefaultDataModel;
use AdminPanel\v10\Models\GetMenuModel;
use Module\Core\v10\Core;
use Module\Database\v11\DB;
use Module\Form\v10\Form;

class UsersController
{

    private function getParams($title)
    {
        global $config, $system;

        $params = GetDefaultDataModel::getData();

        $params['url'] = $this->router->getUrl(0);
        $params['title'] = $title;
        $params['align_left'] = true;

        $users_list = '<div class="user_list">';
            $users_list .= '<div class="user_list__header">';
                $users_list .= '<div class="ceil_vsmall"><b>ID</b></div>';
                $users_list .= '<div class="ceil_middle"><b>Логин</b></div>';
                $users_list .= '<div class="ceil_middle"><b>Привилегии</b></div>';
                $users_list .= '<div class="ceil_middle"><b>Действия</b></div>';
            $users_list .= '</div>';
//        pre($system['user']);

        foreach (DB::select('users')['data'] as $ar_user) {
//            pre($ar_user);
            $users_list .= "
        <div class='user_list__item'>
            <div class='ceil_vsmall'>${ar_user['id']}</div>
            <div class='ceil_middle'>${ar_user['login']}</div>";


            // Привилегии
            $users_list .= '<div class="ceil_middle">';
            $users_list .= implode(',', explode(',', str_replace(['{', '}'], '', $ar_user['privilege'])));
            $users_list .= '</div>';

            $users_list .= "<div data-context='actions_user' class='ceil_middle p-10'>
                <span data-callback='setModalUserEditData' data-local-click='".Core::genLocalData($ar_user, 'edit_user')."' data-modal='edit_user' class='btn-green-small'>Изменить</span> 
                <span data-callback='' data-modal='delete_user' class='btn-red-small'>Удалить</span></div>";

            $users_list .= " </div>";

        }



        $users_list .= '<span data-callback="" data-modal="add_user" class="btn-green-small mt-10 d-ib">Добавить</span>';

        $users_list .= '</div>';

        $params['users_list'] = $users_list;

        return ['users_list', $params];
    }

    public function pageListUsersAction()
    {
        return $this->getParams('Список пользователей');
    }
}