import {clickersInit} from "../clickers/catalogClickers";
import {Data} from "../classes/Data";
import {ClassifierItem, ClassifierTree} from "../classes/ClassifierTree";

declare const $: any;
declare const system: any;

class CatalogController {
    public run() {


        $(document).on('change', '[data-type-privilege]', function () {

            var type: string = $(this).attr('data-type-privilege');

            var status: string = $(this).is(':checked') ? 'checked' : 'not checked';

            if(status == 'checked')
            {
                $(this).closest('[data-wrapper-id]').find(`[data-privilege-type="${type}"]`).show();
            }
            else
            {
                $(this).closest('[data-wrapper-id]').find(`[data-privilege-type="${type}"]`).hide();
            }

            switch (type) {
                case 'edit_classifier':
                case 'edit_privilege':
                    system.callMethod('manager_privilege', {
                        'type': type,
                        'status': status,
                        'id_user': $(this).closest('[data-id-privilege]').attr('data-id-privilege'),
                        'id_classifier': system.getLocalData('classifier_id_privilege'),
                        'action_privilege': 'edit_privilege'
                    });
                    break;
            }
        });


        $(document).on('input', '[data-input="search_classifiers"]', function () {
            $('[data-context="search_result"]').html('');
        });

        clickersInit();

        $('[data-form="form_add_catalog"] #name_catalog').on('keyup', function () {
            let this_text = $(this).val();

            if (this_text.length > 0)
                $(this).closest('.modal-content').find('name-catalog').html('"' + this_text.trim() + '"');
            else
                $(this).closest('.modal-content').find('name-catalog').html('');
        });

        $('[data-submit]').on('click', function (e: any) {
            e.preventDefault();
            console.log($(this).data('submit'));

            var $form: any = document.querySelector('[data-form="' + $(this).data('submit') + '"]');

            $form.submit();
        });
    }

    public static renderBreadcrumbs() {

        if (Data.catalog_field_is_load) {
            console.log('renderBreadcrumbs');
            $('.breadcrumbs').show();

            var $now_li: any = $('li[aria-selected="true"]');

            var now_id: any = $now_li.attr('id');

            var now_name: any = $now_li.find('> a').html().split('</i>')[1];

            var bread_data: any = [
                {
                    'name': now_name,
                    'id': now_id
                }
            ];

            var has_parent_li: boolean = $now_li.closest('ul').closest('li').length > 0;

            while(has_parent_li)
            {
                $now_li = $now_li.closest('ul').closest('li[role="treeitem"]');

                now_id = $now_li.attr('id');

                now_name = $now_li.find('> a').html().split('</i>')[1];

                bread_data[bread_data.length] = {
                    'name': now_name,
                    'id': now_id
                };

                has_parent_li = $now_li.closest('ul').closest('li[role="treeitem"]').length > 0;
            }

            bread_data = bread_data.reverse();


            /*
             <div class="breadcrumbs" style="display: none;">
             <a href="/">Test</a> &gt;
             <a href="/">Test</a> &gt;
             <span>Текущий элемент</span>
             </div>
             */

            var bread_view: string = ``;
            for (var i: number = 0; i < bread_data.length; i++) {
                var data = bread_data[i];

                if(i == bread_data.length - 1)
                {
                    bread_view += ` <span>${data.name}</span>`;
                }
                else
                {
                    bread_view += ` <a href='#' data-click-breadcrumbs="${data.id}">${data.name}</a> &gt`;

                }

                $('.breadcrumbs').html(bread_view.trim());
                console.log(data);
            }

        }
        else
        {
            $('.breadcrumbs').hide();
        }

    }

    // Рендер всех необходимых элементов страницы с классификаторами
    public static render() {

        console.log('render');

        Data.mode_edit = $('[data-click="panel_edit_mode"]').hasClass('on');

        if (Data.catalog_field_is_load) {
            // Показываем панель загрузки
            $('[data-context="panel_edit"]').show();

        }
        else {

            // Показываем панель загрузки
            $('[data-context="panel_edit"]').hide();
        }

        // Удаляем кнопки добавления доп поля
        $('[data-context="active_element_data"] [data-item][data-init-edit="on"]').each(function () {
            $(this).removeAttr('data-init-edit');
            $(this).find('[data-context="edit_field"]').remove();
        });
        $('[data-context="active_element_data"] [data-num]').each(function () {
            $(this).remove();
        });

        let inum: number = 0;

        $('[data-context="active_element_data"] [data-item]').each(function () {
            $(this).attr('data-sort', ++inum);
        });

        // Если включен режим редактирования, то показыаем рядом со всеми полями кнопки редактирования
        if (Data.mode_edit) {


            let i = 0;

            $('[data-context="active_element_data"] [data-item]').each(function () {
                i++;

                let sort: any = i;

                $(this).attr('data-init-edit', 'on');

                $(this).before(`<div data-num="${sort}" data-click="add_field_in_edit_mode">
                    <h6>Добавить поле</h6>
                    <i class="fa fa-plus-square"></i>
                </div>`);

                $(this).append(`
                <div data-context="edit_field">
                    <i data-click="move_top_field" data-type="${$(this).data('item')}" title="Переместить поле выше" class="fa fa-arrow-circle-up"></i>     
                    <i data-click="move_down_field" data-type="${$(this).data('item')}" title="Переместить поле ниже" class="fa fa-arrow-circle-down"></i>     
                    <i data-click="edit_field" data-type="${$(this).data('item')}" title="Изменить поле" class="fa fa-pencil-square"></i>     
                    <i data-click="delete_field" title="Удалить поле" class="fa fa-trash"></i>   
                </div>
                `)
            });

            if (i > 0 || Data.catalog_field_is_empty)
                $('[data-context="active_element_data"]').append(`<div data-num="${++i}" data-click="add_field_in_edit_mode">
                <h6>Добавить поле</h6>
                <i class="fa fa-plus-square"></i>
            </div>`);
        }




        this.renderBreadcrumbs();

    }
}

export {CatalogController};