<?

namespace Controllers;

use Models\GetMenuModel;

class IndexController
{
    public function runAction($router)
    {
        global $system;

        $header_menu = [];
        $blocks = [];
        $params = [];

        if ($system['user']->auth == 0) {
        } else {
            $header_menu[] = ['name' => 'Выход', 'url' => '?action=logout'];
            $header_menu[] = ['name' => 'Профиль', 'url' => 'cabinet'];
            $header_menu[] = ['name' => 'Справочники', 'url' => 'catalogs'];
            $header_menu[] = ['name' => 'Типы элементов', 'url' => 'empty'];
        }

       if ($router->getUrl(0) == 'sign-up') {
            if ($system['user']->auth == 1) {
                redirect('/cabinet');
            } else
                $blocks[] = ['path' => 'sign_up_form.twig'];
        } else if ($router->getUrl(0) == 'forgot-password') {
            $blocks[] = ['path' => 'forgot_password_form.twig'];
        } else if ($router->getUrl(0) == 'cabinet') {
            $blocks[] = ['path' => 'forgot_password_form.twig'];
        } else if ($router->getUrl(0) == 'catalogs') {
            $blocks[] = ['path' => 'catalog.twig'];
        }

        $params['menu'] = GetMenuModel::getData('classifier');;
        $params['url'] = $router->getUrl(0);
        $params['blocks'] = $blocks;



        return ['add_blocks', $params];
    }
}
