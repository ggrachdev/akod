<?

namespace AdminPanel\v10\Controllers;

// Контроллер панели управления

use AdminPanel\v10\Models\GetDefaultDataModel;
use Module\Form\v10\Form;

class MainController
{

    private function getParams($title)
    {
        global $config;

        $params = GetDefaultDataModel::getData();


        $params['url'] = $this->router->getUrl(0);
        $params['title'] = $title;

        // Выравнивание по левому краю
        $params['align_left'] = true;

        $params['content'] = 'Контент';

        return ['main', $params];
    }

    public function logInAction()
    {
        return $this->getParams('Панель управления');
    }
}