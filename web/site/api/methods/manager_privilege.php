<?

# Запросы для управления правами доступа


use Classes\PrivilegeManager;
use Module\Database\v11\DB;

$response['result'] = false;

if (
    !empty($params['action_privilege']) &&
    !empty($params['id_classifier'])
) {

    $response['action_privilege'] = $params['action_privilege'];

    switch ($params['action_privilege']) {
        case 'add_email':

            if (
                !empty($params['email']) &&
                PrivilegeManager::hasPrivilege('edit_privilege', $params['id_classifier'])
            ) {

                if (Authorization::checkHasUserLogin($params['email'])) {
                    if (!PrivilegeManager::has(
                        'show',
                        Authorization::getDataByLogin($params['email'])['data'][0]['id'],
                        $params['id_classifier'],
                        'true'
                    )
                    ) {
                        PrivilegeManager::add(
                            $system['user']->data['id'],
                            $params['id_classifier'],
                            Authorization::getDataByLogin($params['email'])['data'][0]['id'],
                            'show',
                            'true'
                        );

                        $response['result'] = true;
                    }
                }
            }
            break;

        case 'edit_privilege':

            if (
                !empty($params['type']) &&
                !empty($params['status']) &&
                !empty($params['id_user']) &&
                in_array($params['type'], ['edit_privilege', 'edit_classifier']) &&
                PrivilegeManager::hasPrivilege('edit_privilege', $params['id_classifier'])
            ) {

                $data = Authorization::getDataById($params['id_user']);
                $us_id = $data['data'][0]['id'];

                $type_privilege = [
                    'edit_privilege' => 'edit_privilege',
                    'edit_classifier' => 'edit'
                ][$params['type']];

                DB::delete('catalog_privileges', 'id_catalog = ? AND id_user = ? AND type = ? ', [$params['id_classifier'], $params['id_user'], $type_privilege]);

                if ($params['status'] == 'checked') {
                    PrivilegeManager::add(
                        $system['user']->data['id'],
                        $params['id_classifier'],
                        $data['data'][0]['id'],
                        $type_privilege,
                        'true'
                    );
                } else {
                    // ... удалили выше
                }
            }
            break;

        case 'get_privilege_list':

            $response['result'] = true;


            ob_start();

            if (PrivilegeManager::hasPrivilege('edit_privilege', $params['id_classifier'])):
                $res_db = DB::select('catalog_privileges', 'id_catalog = ?', [$params['id_classifier']]);

                $arUsers = [];

                if ($res_db['result'] == 1):
                    foreach ($res_db['data'] as $row) {
                        if (!array_key_exists($row['id_user'], $arUsers)) {
                            $arUsers[$row['id_user']] = [
                                'privilege' => [
                                    $row['type'] => $row['value']
                                ]
                            ];
                        } else {
                            $arUsers[$row['id_user']]['privilege'][$row['type']] = $row['value'];
                        }
                    }
                endif;

                foreach ($arUsers as $k => $u) {
                    $data = Authorization::getDataById($k);
                    $arUsers[$k]['login'] = $data['data'][0]['login'];
                    $arUsers[$k]['name'] = $data['data'][0]['name'];
                    $arUsers[$k]['surname'] = $data['data'][0]['surname'];
                    $arUsers[$k]['patronymic'] = $data['data'][0]['patronymic'];
                }
                foreach ($arUsers as $us_id => $user):
                    $edit = $user['privilege']['edit'] == true;
                    $show = $user['privilege']['show'] == true;
                    $edit_privilege = $user['privilege']['edit_privilege'] == true;
                    ?>

                    <div data-wrapper-id="<?= $us_id ?>">
                        <button type="button" class="btn btn-outline-primary" data-context="user_privilege"
                                data-id="<?= $us_id ?>">
                            <?= $user['surname'] ?> <?= $user['name'] ?> <?= $user['patronymic'] ?>
                            <b>(<?= $user['login'] ?>)</b>

                            <span class="badge badge-light" data-privilege-type="edit_classifier"
                                  <? if (!$edit): ?>style="display: none;" <? endif; ?>>Редактирование</span>

                            <span class="badge badge-light" data-privilege-type="edit"
                                  <? if (!$show): ?>style="display: none;" <? endif; ?>>Просмотр</span>

                            <span class="badge badge-light" data-privilege-type="edit_privilege"
                                  <? if (!$edit_privilege): ?>style="display: none;" <? endif; ?>>Редактирование прав</span>


                            <span class="badge badge-danger"><i class="fa fa-times" aria-hidden="true"
                                                                data-click="delete_all_privilege"></i></span>
                        </button>
                        <div class="mt-1" data-id-privilege="<?= $us_id ?>" style="display: none;">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" data-type-privilege="edit_classifier"
                                       id="editclassifier<?= $us_id ?>" <? if ($edit): ?>checked<?endif;
                                ?>>
                                <label class="form-check-label" for="editclassifier<?= $us_id ?>">Редактирование
                                    классификатора</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" data-type-privilege="edit_privilege"
                                       id="editprivilege<?= $us_id ?>" <? if ($edit_privilege): ?>checked<?endif;
                                ?>>
                                <label class="form-check-label" for="editprivilege<?= $us_id ?>">Редактирование прав
                                    доступа</label>
                            </div>
                        </div>
                        <br>
                        <br>
                    </div>
                    <?
                endforeach;
                ?>

                <button type="button" class="btn btn-primary" data-click="add_privilege_user">Добавить</button>

            <? else: ?>
                <h4>Вы не имеете права редактировать права доступа</h4>
            <? endif; ?>
            <?
            $response['view'] = ob_get_contents();
            ob_end_clean();


            break;

        case 'delete_all_privilege':
            if(
                !empty($params['id_user']) &&
                PrivilegeManager::hasPrivilege('edit_privilege', $params['id_classifier'])
            )
            {
                DB::delete('catalog_privileges', 'id_catalog = ? AND id_user = ?', [
                    $params['id_classifier'], $params['id_user']
                ]);
            }
            break;
    }
}


$handler_render_action = true;


?>