import {ClassifierItemData} from "../classes/ClassifierItemData";
import {CatalogController} from "../controllers/catalogController";
import {Data} from "../classes/Data";
import {ClassifierItem, ClassifierTree} from "../classes/ClassifierTree";
declare var $: any;
declare var system: any;


function clickersInit() {

    $(document).on('click', '[data-click="search_classifiers"]', function (e: any) {
        e.preventDefault(); 

        $('[data-context="search_result"]').html('');

        var val: string = $('[data-input="search_classifiers"]').val();

        var search_from_name: boolean = $('#search_from_name').is(':checked');
        var search_from_item: boolean = $('#search_from_item').is(':checked');
        var search_from_content: boolean = $('#search_from_content').is(':checked');
         
        if (val.length > 3)
        {
            if(search_from_name || search_from_item || search_from_content)
            {
                system.callMethod('search_classifiers', {
                    val: val,
                    search_from_name: search_from_name,
                    search_from_item: search_from_item,
                    search_from_content: search_from_content
                });
            }
            else
            {
                system.alert.add('Выберите хотя бы <br>1 параметр для поиска', 'danger');
            }
        }
        else
        {
            system.alert.add('Введите слова для поиска длиннее 3 символов', 'danger');
        }

    });

    $(document).on('click', '[data-click-breadcrumbs]', function (e: any) {
        e.preventDefault();

        var id: number = $(this).attr('data-click-breadcrumbs');

        $(`[role="treeitem"]#${id} > a`).trigger('click');

    });

    $(document).on('click', '#modal_icon_change i', function (e: any) {
        e.preventDefault();

        var id_item: string = system.getLocalData('object_change_icon_jstree').id;

        $('[data-context="data_tree_catalog"]').jstree(true).set_icon(id_item, $(this).attr('class'));


        var item = new ClassifierItem(
            'text',
            id_item
        );

        // Добавляем элемент
        ClassifierTree.actionElement('save', item, id_item);

        $('#modal_icon_change').modal('hide');

    });

    $(document).on('click', '[data-click="get_word_file"]', function (e: any) {
        e.preventDefault();

        if(typeof system.getLocalData('now_load_field_id') != 'undefined')
        {
            var link:any = `/doc-generator/word?classifier_id=${system.local_data.now_classifier.id}&uuid=${system.local_data.now_load_field_id}`;
            console.log(link);
            window.open(link);
        }
        else
        {
            system.alert.add('Для получения WORD файла загрузите какой-нибудь узел', 'danger');
        }

    });

    $(document).on('click', '[data-click="import_json_classifier"]', function (e: any) {
        e.preventDefault();

        // создадим объект данных формы
        var data: any = new FormData();

        var i = 0;
        $('[data-context="file_json_classifier"]').each(function () {
            var files_attr: any = $(this)[0].files;

            if (files_attr.length > 0) {
                i++;
                data.append(`file_load_${i}`, files_attr[0]);
            }
        });

        data.append(`id_classifier`, $('[name="id_classifier_import"]').val());

        system.callMethodWithFile('import_classifier', data);
    });

    $(document).on('click', '[data-click="add_privilege_user"]', function (e: any) {
        var email = prompt('Введите email пользователя');

        if(email.length > 0)
        {
            system.callMethod('manager_privilege', {
                'email': email,
                'id_classifier': system.getLocalData('classifier_id_privilege'),
                'action_privilege': 'add_email'
            });
        }
    });

    $(document).on('click', '[data-click="delete_all_privilege"]', function (e: any) {
        e.preventDefault();

        if(confirm('Удалить все привилегии данного пользователя?'))
        {

            system.callMethod('manager_privilege', {
                'id_user': $(this).closest('[data-id]').attr('data-id'),
                'id_classifier': system.getLocalData('classifier_id_privilege'),
                'action_privilege': 'delete_all_privilege'
            });

            $(`[data-context="privilege_list"] [data-wrapper-id="${$(this).closest('[data-id]').attr('data-id')}"]`).remove();
        }
    });

    $(document).on('click', '[data-click="edit_privilege_classifier"]', function (e: any) {

        $('[data-context="privilege_load"]').show();
        $('[data-context="privilege_list"]').hide();

        system.setLocalDataByKey('classifier_id_privilege', $(this).closest('[data-id-catalog]').attr('data-id-catalog'));
        $('#modal_edit_priivlege').modal('show');
        $('#modal_setting_catalog').modal('hide');

        system.callMethod('manager_privilege', {
            'id_classifier': system.getLocalData('classifier_id_privilege'),
            'action_privilege': 'get_privilege_list'
        });
    });

    //  Экспортировать данные классификатора
    $(document).on('click', '[data-context="user_privilege"]', function (e: any) {
        $(`[data-id-privilege="${$(this).attr('data-id')}"]`).slideToggle();
    });

    //  Экспортировать данные классификатора
    $(document).on('click', '[data-click="export_catalog"]', function (e: any) {
        if (confirm('Скачать данные классификатора в JSON формате?')) {
            var id_classifier: any = $(this).closest('[data-id-catalog]').attr('data-id-catalog');

            system.callMethod('export_classifier', {
                'id_classifier': id_classifier
            });
        }
    });

    //  Импортировать данные в классификатор
    $(document).on('click', '#modal_import_classifier [type="submit"]', function (e: any) {
        e.preventDefault();

        try {
            var jsn: any = $('[name="json_import"]').val();
            var id_classifier: any = $('[name="id_classifier_import"]').val();

            console.log(JSON.parse(jsn));

            system.callMethod('import_classifier', {
                'json': $('[name="json_import"]').val(),
                'id_classifier': id_classifier
            });
        }
        catch (error) {
            system.alert.add('JSON для импорта не валиден', 'danger');
        }
    });

    //  Импортировать данные в классификатор
    $(document).on('click', '[data-click="import_catalog"]', function (e: any) {
        e.preventDefault();
        $('[name="id_classifier_import"]').val($(this).closest('[data-id-catalog]').attr('data-id-catalog'));
        $('#modal_import_classifier').modal('show');
    });

    //  Скрыть узлы классификатора
    $(document).on('click', '[data-click="compress_tree_items"]', function () {
        $('.jstree-open').each(function () {
            $(this).find('> .jstree-icon').trigger('click');
        });
    });

    // Раскрыть узлы классификатора
    $(document).on('click', '[data-click="expand_tree_items"]', function () {
        for (var i: any = 0; i < 10; i++) {
            $('.jstree-closed').each(function () {
                $(this).find('> .jstree-icon').trigger('click');
            });
        }
    });

    $(document).on('click', '[data-click="hide_panel_tree"]', function () {
        $('[data-context="tree_catalog"]').removeClass('col-lg-3').addClass('col-lg-1');

        $('[data-click="hide_panel_tree"]').hide();
        $('[data-click="show_panel_tree"]').show();
    });

    $(document).on('click', '[data-click="show_panel_tree"]', function () {
        $('[data-context="tree_catalog"]').addClass('col-lg-3').removeClass('col-lg-1');

        $('[data-click="hide_panel_tree"]').show();
        $('[data-click="show_panel_tree"]').hide();
    });

    $(document).on('click', '[data-click="show_panel_classifiers"]', function () {
        $('[data-context="list_catalog"]').addClass('col-lg-3').removeClass('col-lg-1');

        $('[data-click="show_panel_classifiers"]').hide();
        $('[data-click="hide_panel_classifiers"]').show();
    });

    $(document).on('click', '[data-click="hide_panel_classifiers"]', function () {
        $('[data-context="list_catalog"]').removeClass('col-lg-3').addClass('col-lg-1');

        $('[data-click="show_panel_classifiers"]').show();
        $('[data-click="hide_panel_classifiers"]').hide();
    });

    // Изменение поля
    $(document).on('click', '[data-click="edit_field"]', function () {
        var id = $(this).closest('[data-id]').data('id');

        ClassifierItemData.editFieldById(id);
    });

    // Удаление поля
    $(document).on('click', '[data-click="delete_field"]', function () {
        var id = $(this).closest('[data-id]').data('id');

        if (confirm('Удалить поле?')) ClassifierItemData.deleteFieldById(id);
    });

    // Загрузка узла
    $(document).on('click', '.jstree-anchor', function () {
        var id = $(this).closest('li').attr('id');
        ClassifierItemData.loadDataById(id);
    });

    // Удаление каталога
    $('[data-click="delete_catalog"]').on('click', function () {

        system.send_request_object({
            'action': 'delete_catalog',
            'id': system.getLocalData('catalog_setting_modal', 'id')
        });
    });

    // Добавить поле в узел
    $(document).on('click', '[data-click="add_field_in_edit_mode"]', function () {
        $('#modal_add_field [name="num_sort"]').val($(this).attr('data-num'));
        $('#modal_add_field [name="id_field"]').val(system.getLocalData('now_load_field_id'));
        $('#modal_add_field [name="id_now_classifier"]').val(system.getLocalData('now_classifier')['id']);
        $('#modal_add_field').modal('show');
    });

    // Поднять поле выше
    $(document).on('click', '[data-click="move_top_field"]', function () {

        var $wrapper: any = $(this).closest('[data-sort]');

        var clone: any = $wrapper.clone();
        if ($('[data-click="panel_edit_mode"]').hasClass('on')) {
            $('[data-click="panel_edit_mode"]').trigger('click');
        }

        if ($wrapper.prev().length > 0) {
            $wrapper.prev().before(clone);
            $wrapper.remove();

            ClassifierTree.moveField($wrapper.attr('data-id'), 'up');
        }

        $('[data-click="panel_edit_mode"]').trigger('click');
        // renum
    });

    // Опустить поле ниже
    $(document).on('click', '[data-click="move_down_field"]', function () {

        var $wrapper: any = $(this).closest('[data-sort]');

        var clone: any = $wrapper.clone();

        if ($('[data-click="panel_edit_mode"]').hasClass('on')) {
            $('[data-click="panel_edit_mode"]').trigger('click');
        }
        if ($wrapper.next().length > 0) {
            $wrapper.next().after(clone);
            $wrapper.remove();

            ClassifierTree.moveField($wrapper.attr('data-id'), 'down');
        }
        $('[data-click="panel_edit_mode"]').trigger('click');

        // renum
    });

    // Включение режима редактирования
    $('[data-click="panel_edit_mode"]').on('click', function () {

        $(this).toggleClass('on');
        CatalogController.render();
    });

    // Загрузка каталога
    $(document).on('click', '[data-click="load_classifier"]', function () {

        $('[data-click="load_classifier"]').removeClass('active');
        $(this).addClass('active');

        system.setLocalData($(this).closest('[data-local]')[0]);

        system.send_request_object({
            'action': 'load_classifier',
            'id': system.getLocalData('catalog_setting_modal', 'id')
        });
    });

}

export {clickersInit};