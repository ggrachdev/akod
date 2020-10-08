<?

namespace Controllers;

use Models\GetMenuModel;

class AuthController
{

    private function getParams(array $block_params, $title)
    {
        $params['menu'] = GetMenuModel::getData('login');
        $params['url'] = $this->router->getUrl(0);
        $params['blocks'] = $block_params;
        $params['title'] = $title;
        $params['menu_type'] = 'login';

        return ['add_blocks', $params];
    }

    public function logInAction()
    {
        return $this->getParams(['path' => 'login_form.twig'], 'Авторизация');
    }

    public function forgotPasswordAction()
    {
        return $this->getParams(['path' => 'forgot_password_form.twig'], 'Восстановить пароль');
    }

    public function signUpAction()
    {
        return $this->getParams(['path' => 'sign_up_form.twig'], 'Регистрация');
    }

    public function restorePassAction()
    {
        // TODO: Сделать страницу восстановления пароля
        return $this->getParams(['path' => 'sign_up.twig'], 'Восстановление пароля');
    }
}