<?
use Classes\Classifier;
use Classes\PrivilegeManager;
use Module\Core\v10\Core;

$response['result'] = false;
$handler_action_component = true;

if ($system['user']->auth == 1)
{

    // Получаем доступные каталоги для данного пользователя
    $user_catalogs = Classifier::getAvailableListCatalog($system['user']->data['id']);

    $response['component'] = '';

    if(!empty($user_catalogs['data']))
    {
        foreach ($user_catalogs['data'] as $catalog) {
            $icon_lock = $catalog['type'] == 'public' ? 'unlock' : 'lock';

            $response['component'] .= '
            <div data-local="'.Core::genLocalData($catalog, 'catalog_setting_modal', ['id_user_creator', 'last_update', 'hash', 'id_editor_user', 'data_json']).'" class="btn-group w-100" role="group" aria-label="Basic example">
                <button data-click="load_classifier" type="button" class="btn btn-light text-left w-75">
                    <span class="fa fa-'.$icon_lock.'"></span> '.$catalog['name'].'
                </button>
                <button '.(PrivilegeManager::hasPrivilege('edit', $catalog['id']) ? '' : 'style="display: none;"').' data-modal="#modal_setting_catalog" type="button" class="btn btn-light w-5">
                    <span class="fa fa-gear"></span>
                </button>
            </div>';
        }
    }
    else
        $response['component'] = '<h6 class="text-secondary">- Нет доступных классификаторов</h6>';

    $response['result'] = true;
    $response['_component'] = '
            <div class="btn-group w-100" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-info text-left w-75">
                    <span class="fa fa-lock"></span> Активный классификатор
                </button>
                <button type="button" class="btn btn-info w-5"><span class="fa fa-gear"></span></button>
            </div>

            <div class="btn-group w-100" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-light text-left w-75">
                    <span class="fa fa-lock"></span> Не активный классификатор
                </button>
                <button type="button" class="btn btn-light w-5"><span class="fa fa-gear"></span></button>
            </div>

            <div class="btn-group w-100" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-light text-left w-75">
                    <span data-toggle="tooltip" title="Каталог доступен другим пользователям" class="fa fa-unlock"></span> Не активный справочник
                </button>
                <button data-toggle="modal" data-target="#modal_setting_catalog" type="button" class="btn btn-light w-5">
                    <span data-toggle="tooltip" title="Настройки справочника" class="fa fa-gear"></span></button>
            </div>
    ';
}
else
    $response['errors'] = 'Ошибка создания каталога!';


?>