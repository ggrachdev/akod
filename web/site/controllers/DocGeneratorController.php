<?

namespace Controllers;

use Classes\CIFields;
use Classes\PrivilegeManager;
use Models\GetMenuModel;
use Classes\SphinxFacade;

class DocGeneratorController
{

    /*    private function getParams(array $block_params, $title)
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

        public function signUpAction()
        {
            return $this->getParams(['path' => 'sign_up_form.twig'], 'Регистрация');
        }

        public function restorePassAction()
        {
            // TODO: Сделать страницу восстановления пароля
            return $this->getParams(['path' => 'sign_up.twig'], 'Восстановление пароля');
        }*/

    public function generateTsvForIndexAction()
    {
        $res = SphinxFacade::generateFilesTsv();
        
        die;
    }
    
    public function generateExcelTableAction()
    {

        if (!empty($_GET['uuid'])) {
            $field = CIFields::getFieldById($_GET['uuid']);

            if (empty($field)) die;

            $id_classifier = $field->getClassifierId();
            if (PrivilegeManager::hasPrivilege('show', $id_classifier)) {
                $file = "document.xls";
                header("Content-type: application/vnd.ms-excel");
                header("Content-Disposition: attachment; filename=$file");
                ?>
                <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
                        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html xmlns="http://www.w3.org/1999/xhtml">
                <head>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                </head>
                <?
                echo '<body>';
                echo $field->getHtml();
                echo '</body>';
                die;
            } else {
                echo '<h4>У вас нет прав доступа для просмотра данного поля</h4>';
            }

        }
    }

    public function generateWordAction()
    {
        if (!empty($_GET['classifier_id']) && !empty($_GET['uuid'])) {
            $id_classifier = $_GET['classifier_id'];
            $id_fields = $_GET['uuid'];

            if (PrivilegeManager::hasPrivilege('show', $id_classifier)) {

                $fields = CIFields::getQueueFieldsById($id_fields);
                $view = '';
                while (!$fields->isEmpty()) {
                    $field = $fields->dequeue();
                    $view .= $field->getHtml();
                }
                header('Content-Type: text/html; charset=utf-8');
                header("Content-type: application/vnd.ms-word; charset=utf-8");
                header("Content-Disposition: attachment; Filename=document.doc");

                ?>
                <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html xmlns="http://www.w3.org/1999/xhtml">
                <head>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                </head>
                <?
                echo '<body>';
                echo $view;
                echo '</body>';
            } else {
                echo '<h4>У вас нет прав доступа для просмотра данного поля</h4>';
            }
            die;

        }
        else
        {
            echo 'Не переданы параметры';
        }
    }
}