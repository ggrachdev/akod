<?

namespace AdminPanel\v10\Controllers;



use AdminPanel\v10\Models\GetDefaultDataModel;
use AdminPanel\v10\Models\GetMenuModel;
use Module\Form\v10\Form;

class AuthController
{

    private function getParams(array $block_params, $title)
    {
        global $config;

        $params = GetDefaultDataModel::getData();

        $params['menu'] = GetMenuModel::getData('auth');
        $params['url'] = $this->router->getUrl(0);
//        $params['blocks'] = $block_params;
        $params['title'] = $title;
        $params['menu_type'] = 'login';
        $params['align_center'] = true;
        $params['form_auth'] = Form::generateForm([
            '.form [data-form=form_login] [data-action=log_in] [validator]',
            'h [name=sk] {'.$config['secret_key'].'}',
            '+ <h2 class="header">Авторизация</h2>',
            '+ <h3 class="ta-l">Логин:</h3>',
            't [name=email] {'.$_GET['TEST'].'} (Ваш%%логин) !',
            '+ <h3 class="ta-l">Пароль:</h3>',
            'p [name=password] (Ваш%%пароль) !',
            'sb {Войти}',
        ]);
        return ['login', $params];
    }

    public function logInAction()
    {
        return $this->getParams(['path' => 'login.html'], 'Авторизация');
    }

    public function signUpAction()
    {
        return $this->getParams(['path' => 'sign_up_form.html'], 'Регистрация');
    }

    public function restorePassAction()
    {
        // TODO: Сделать страницу восстановления пароля
        return $this->getParams(['path' => 'sign_up.html'], 'Восстановление пароля');
    }
}