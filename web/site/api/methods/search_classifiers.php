<?
# Добавление нового справочника

use Classes\Classifier;
use Module\Core\v10\Core;
use Module\Database\v11\DB;
use Module\FileLoader\v10\FL;
use Module\Log\v10\Log;
use Classes\SphinxFacade;

$handler_render_action = true;

$querySphinx = [];

$params['val'] = str_replace(['"', "'", '(', ')'], ['', ''], $params['val']);

// 1

$search_from_name = $params['search_from_name'] == "true";
$search_from_item = $params['search_from_item'] == "true";
$search_from_content = $params['search_from_content'] == "true";

if ($params['search_from_name'] == "true") {
    $querySphinx[] = "MATCH('" . $params['val'] . "') and type_content = '1' or type_content = '2' ";
}

if ($search_from_name && !$search_from_item && !$search_from_content) {
    $querySphinx = "MATCH('" . $params['val'] . "') and type_content = '0'";
} else if (!$search_from_name && $search_from_item && !$search_from_content) {
    $querySphinx = "MATCH('" . $params['val'] . "') and type_content = '1'";
} else if (!$search_from_name && !$search_from_item && $search_from_content) {
    $querySphinx = "MATCH('" . $params['val'] . "') and type_content = '2'";
} else if ($search_from_name && !$search_from_item && $search_from_content) {
    $querySphinx = "MATCH('" . $params['val'] . "') and type_content != '1'";
} else if (!$search_from_name && $search_from_item && $search_from_content) {
    $querySphinx = "MATCH('" . $params['val'] . "') and type_content != '0'";
} else if ($search_from_name && $search_from_item && !$search_from_content) {
    $querySphinx = "MATCH('" . $params['val'] . "') and type_content != '2'";
} else if ($search_from_name && $search_from_item && $search_from_content) {
    $querySphinx = "MATCH('" . $params['val'] . "')";
}

$resSphinx = SphinxFacade::query('WHERE ' . $querySphinx);

$idsClassifierSphinx = [];

if (!empty($resSphinx)) {
    foreach ($resSphinx as $k => $v) {
        $idsClassifierSphinx[] = $v[1];
    }

    $idsClassifierSphinx = array_unique($idsClassifierSphinx);
}

if (empty($idsClassifierSphinx)) {
    $res = DB::select(['catalogs', 'id, name, type'], 'name LIKE ? ', ['%' . $params['val'] . '%']);
} else {
    $res = DB::select(['catalogs', 'id, name, type'], 'id IN (' . implode(',', $idsClassifierSphinx) . ')', []);
}

if (!empty($res['data'])) {

    $arIds = [];

    $arResult = [
    ];
    foreach ($res['data'] as $row) {
        $arIds[] = $row['id'];

        $arPrivilege = [];

        if ($row['type'] == 'public')
            $arPrivilege[] = 'show';

        $arResult[$row['id']] = [
            'id' => $row['id'],
            'name' => $row['name'],
            'privileges' => $arPrivilege
        ];
    }

    $res_privileges = DB::select('catalog_privileges', 'id_catalog IN (' . implode(',', $arIds) . ') AND id_user = ? ', [$system['user']->data['id']]);

    foreach ($res_privileges['data'] as $privilege_row) {

        if ($privilege_row['value'] == 'true') {
            if (
                    !in_array(
                            $privilege_row['type'],
                            $arResult[$privilege_row['id_catalog']]['privileges'])
            ) {
                $arResult[$privilege_row['id_catalog']]['privileges'][] = $privilege_row['type'];
            }
        }
    }

    ob_start();
    $count = 0;

    if (!empty($arResult)):
        ?>

        <? foreach ($arResult as $classifier): ?>
            <?
            if (!in_array('show', $classifier['privileges'])) {
                continue;
            }
            $count++;
            ?>
            <div data-local="<?= Core::genLocalData($classifier, 'catalog_setting_modal', ['id_user_creator', 'last_update', 'hash', 'id_editor_user', 'data_json']) ?>"
                 class="btn-group w-100" role="group" aria-label="Basic example">
                <button data-click="load_classifier" type="button" class="btn btn-light text-left w-75">
            <? if ($classifier['type'] == 'public'): ?><span class="fa fa-lock"></span><? else: ?><span class="fa fa-unlock"></span><? endif; ?> <?= $classifier['name'] ?>
                </button>
            <? if (in_array('edit', $classifier['privileges'])): ?>
                    <button data-modal="#modal_setting_catalog" type="button" class="btn btn-light w-5">
                        <span class="fa fa-gear"></span>
                    </button>
            <? endif; ?>
            </div>
        <? endforeach; ?>

        <? if ($count == 0): ?>
            <h5>Нет найденных результатов</h5>
        <? endif; ?>

    <? else: ?>
        <h5>Нет найденных результатов</h5>
    <?
    endif;

    $response['view'] = ob_get_contents();
    ob_end_clean();
} else {
    $response['view'] = '<h5>Нет найденных результатов</h5>';
}
?>