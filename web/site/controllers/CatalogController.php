<?

//$catalog = new CItem();
//$catalog->create([
//    ''=>'',
//]);



namespace Controllers;

use Models\GetDefaultDataModel;
use Models\GetMenuModel;

class CatalogController
{
    public function runAction()
    {
        global $system, $config;


        $blocks = [];
        $params = GetDefaultDataModel::getData();

        $blocks[] = ['path' => 'classifiers.twig'];

        $params['menu'] = GetMenuModel::getData('classifier');
        $params['url'] = $this->router->getUrl(0);
        $params['blocks'] = $blocks;
        $params['title'] = 'Классификаторы';
        $params['user'] = $system['user']->data; 


        return ['add_blocks', $params];

    }
}

