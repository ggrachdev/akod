import {emptyForm, getLoaderDom, hideLoader, unlockBody} from "../functions";
import {ClassifierTree} from "../classes/ClassifierTree";
import {Data} from "../classes/Data";
import {CatalogController} from "../controllers/catalogController";
import {Field} from "../field_handlers/InterfaceField";
import {FieldManager} from "../classes/FieldManager";

declare var $: any;
declare var system: any;
declare var render: any;

function rendersField() {

    // Проверка после запроса на обновление каких-либо данных поля
    render.render_refresh_field = (data: any) => {
        var now_object: any = system.getLocalData("now_field_instance");
        now_object.handlerRefresh(data);
    };

    // Проверка после сохранения поля
    render.render_save_field = (data: any) => {

        var now_object_field: any = system.getLocalData("now_field_instance");
        now_object_field.handlerAfterSave(data);

        if (data.response.result == true) {
            if (data.response.need_hide_alerts != 'true')
                system.alert.add('Поле успешно сохранено!', 'success');
        }
        else {
            system.alert.add('Поле не удалось сохранить', 'danger');
        }

        if (data.response.need_hide_alerts != 'true')
            unlockBody();

        if (data.response.need_close_modal != 'false' ) {
            $('#modal_edit_field').modal('hide');
        }

        if (data.response.need_hide_alerts != 'true')
            $('a.jstree-clicked').trigger('click');

        if (data.response.need_hide_alerts != 'true')
        {
            setTimeout(function () {
                // Перегружаем режим редактирования
                $('[data-click="panel_edit_mode"]').removeClass('on').trigger('click');
            }, 100);
        }
    };

    // Проверка после редактирования поля
    render.render_edit_field = (data: any) => {
        if (data.response.result == true) {

            const id_form_edit_field = system.generateRandId();

            $('#modal_edit_field .modal-body').empty().append(`
               <form id="${id_form_edit_field}" class="form" data-form="form_change_field" data-action="add_field" enctype="multipart/form-data">
            `);


            $('#modal_edit_field').modal('show').attr('data-type-field', data.response.type_field);

            $('#modal_edit_field form').html(
                `
                <div class="edit_body">
                <input name="type" value="${data.response.type_field}" type="hidden">
                ${data.response.edit_html}
                </div>
                `
            );


            $('#modal_edit_field form').append(
                `<div class="edit_footer"><button class="btn btn-success" type="submit">Сохранить</button></div>`
            );

            var field: any = FieldManager.getFieldObject(data.response.type_field);

            if (field != null) {
                // Устанавливаем в объект-обработчик поля его тип и id поля
                Field.type_field = data.response.type_field;
                Field.id_field = data.response.id_field;

                // Инициализируем поле
                var res_init = field.init(id_form_edit_field);

                // Объект формы
                system.setLocalDataByKey('now_field_instance', field);
            }
        }
        else {
            system.alert.add('Поле не удалось редактировать', 'danger');
        }
    };

    // Проверка удаления поля каталога
    render.render_delete_field = (data: any) => {
        if (data.response.result == true) {
            system.alert.add('Поле успешно удалено!', 'success');

            // Снова загружаем поле
            $(`#${data.response.id_field}_anchor`).trigger('click');

            // Перезагружаем каталог
            $('.jstree-clicked').trigger('click');

            setTimeout(function () {
                // Перегружаем режим редактирования
                $('[data-click="panel_edit_mode"]').removeClass('on');
                $('[data-click="panel_edit_mode"]').trigger('click');
            }, 100);
        }
        else {
            system.alert.add('Поле не удалено', 'danger');
        }

        unlockBody();
    };

    // Проверка создания поля каталога
    render.render_add_field = (data: any) => {
        if (data.response.result == true) {
            // system.alert.add('Поле успешно добавлено!', 'success');

            // Снова загружаем поле
            // $(`#${data.response.id_field}_anchor`).trigger('click');
            $('.jstree-clicked').trigger('click');

            setTimeout(function () {
                // Перегружаем режим редактирования
                $('[data-click="panel_edit_mode"]').removeClass('on');
                $('[data-click="panel_edit_mode"]').trigger('click');
            }, 1000);
        }
        else {
            system.alert.add('Поле не создано', 'danger');
        }

        hideLoader(data.response.form_id, function () {
            $('#modal_add_field').modal('hide');
        });

        unlockBody();
    };

}

export {rendersField};