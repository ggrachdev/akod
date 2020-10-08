import {emptyForm, getLoaderDom, hideLoader, unlockBody} from "../functions";
import {ClassifierTree} from "../classes/ClassifierTree";
import {Data} from "../classes/Data";
import {CatalogController} from "../controllers/catalogController";
declare var $: any;
declare var system: any;
declare var render: any;

function rendersCatalog() {

    // После операции поиска
    render.render_search_classifiers = (data: any) => {
        $('[data-context="search_result"]').html(data.response.view);
    };

    // После нажатия на кнопку права доступа
    render.render_manager_privilege = (data: any) => {

        if (data.response.result == true) {

            switch (data.response.action_privilege) {

                case 'add_email':
                    system.alert.add('Права доступа успешно добавлены!', 'success');

                    system.callMethod('manager_privilege', {
                        'id_classifier': system.getLocalData('classifier_id_privilege'),
                        'action_privilege': 'get_privilege_list'
                    });

                    break;

                case 'get_privilege_list':
                    $('[data-context="privilege_load"]').hide();
                    $('[data-context="privilege_list"]').html(data.response.view);
                    $('[data-context="privilege_list"]').show();
                    break;
            }
        }
        else
        {

        }
    };

    // После экспорта классификатора
    render.render_import_classifier = (data: any) => {

        if (data.response.result == true) {
            $('#modal_import_classifier').modal('hide');
            system.alert.add('Импорт успешно закончен!', 'success');
        }
        else
        {

        }
    };

    // После экспорта классификатора
    render.render_export_classifier = (data: any) => {

        var link: any = document.createElement('a');
        link.setAttribute('href',data.response.export_file);
        link.setAttribute('download','export');
        link.click();
        link.remove();
    };

    // Загрузка узла
    render.render_load_data_item = (data: any) => {

        unlockBody();

        if($('[data-click="panel_edit_mode"]').hasClass('on'))
        {
            $('[data-click="panel_edit_mode"]').trigger('click');

            setTimeout(() => {
                if(!$('[data-click="panel_edit_mode"]').hasClass('on'))
                    $('[data-click="panel_edit_mode"]').trigger('click');
            }, 300);
        }

        if (data.response.result === true) {

            $('[data-click="panel_edit_mode"]').removeClass('on');

            Data.catalog_field_is_load = true;
            Data.catalog_field_is_empty = false;
            Data.catalog_is_load = true;

            CatalogController.render();

            $('[data-context="active_element_data"]').empty().html(data.response.view);


                $('[data-item-wrapper="gallery"] > div').slick({
                    infinite: true,
                    slidesToShow: 5,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    arrows: false,
                    slidesToScroll: 1
                });

            system.setLocalDataByKey('now_load_field_id', data.response.id);
        }
        else {
            Data.catalog_field_is_load = true;
            Data.catalog_field_is_empty = true;
            Data.catalog_is_load = true;
            CatalogController.render();
            $('[data-context="active_element_data"]').empty();
            system.setLocalDataByKey('now_load_field_id', data.response.id);
        }




        if(!data.response.can_edit)
        {
            $('[data-click="panel_edit_mode"]').hide();
        }
        else
        {
            $('[data-click="panel_edit_mode"]').show();
        }
    };

    // Сохранение каталога
    render.render_save_classifier = (data: any) => {
        system.alert.add('Классификатор успешно сохранен!', 'success');
    };

    // Создание каталога
    render.render_add_catalog = (data: any) => {
        if (data.response.result == true) {
            $('#modal_add_catalog').modal('hide');
            system.alert.add('Классификатор успешно создан!', 'success');
            // Обновляем компонент
            system.load_component('catalog_list', getLoaderDom());
        }
        else
            system.alert.add('Ошибка создания справочника!!', 'danger');
        hideLoader(data.response.form_id, function () {
            if (data.response.result == true)
                emptyForm(data.response.form_id);
            system.set_errors_form(data);
        });
    };

    // Изменение каталога
    render.render_edit_catalog = (data: any) => {
        if (data.response.result == true) {
            system.alert.add('Классификатор успешно изменен!', 'success');
            // Обновляем компонент
            system.load_component('catalog_list', getLoaderDom());
        }
        else
            system.alert.add('Ошибка изменения классификатора!!', 'danger');
        hideLoader(data.response.form_id, function () {
            if (data.response.result == true) {
                emptyForm(data.response.form_id);
                $('#modal_setting_catalog').modal('hide');
            }
            system.set_errors_form(data);
        });
    };

    // Загрузить классификатор
    render.render_load_classifier = (data: any) => {

        // $('[data-context="data_tree_catalog"]').empty().html('Инициализация классификатора..');

        if (data.response.result == true) {

            data.response.classifier_content = {
                core: {
                    'check_callback': true,
                    "themes" : { "stripes" : true },
                    'data': data.response.classifier_content
                }
            };

                system.setLocalDataByKey('now_classifier', data.response);

                // Загружаем классификатор
                ClassifierTree.loadClassifier();

                // Помечаем что каталог загружен
                Data.catalog_is_load = true;



            $('[data-click="panel_edit_mode"]').removeClass('on');

            CatalogController.render();

            system.alert.add('Классификатор успешно загружен!', 'success');

   /*         setTimeout(() => {

                $('[aria-level="1"].jstree-closed').each(function () {
                    $(this).find('> .jstree-icon').trigger('click');
                });
            }, 300);*/

        }
    };

    // Изменение каталога
    render.render_delete_catalog = (data: any) => {
        if (data.response.result == true) {
            system.alert.add('Классификатор успешно удален!', 'success');
            // Обновляем компонент
            system.load_component('catalog_list', getLoaderDom());
        }
        else
            system.alert.add('Ошибка удаления классификатора!!', 'danger');
    };
}
export {rendersCatalog};