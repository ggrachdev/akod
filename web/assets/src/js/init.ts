import {getLoaderDom, unlockBody} from "./functions";
declare var $: any;
declare var system: any;

function init() {

    // Анимация крутилки при submit форм
    $('.form').submit(function () {
        $(this).find('.form__body').fadeTo("opacity", 0);
        $(this).find('.form__loader').show();
    });

    // Поиск компонентов и вставка крутилок
    $('section[data-component]').each(function () {
        $(this).html(getLoaderDom());
    });

    $(document).on('click', '.load_lock', function () {
       unlockBody();
    });

    // Слушатель открытия модальных окон
    $(document).on('click', '[data-modal]', function () {
        const modal_id = $(this).data('modal');
        $(modal_id).modal('show');
        switch (modal_id) {
            case '#modal_setting_catalog':
                system.setLocalData($(this).closest('[data-local]')[0]);
                console.table(system.local_data);

                $('#modal_setting_catalog').find('name-catalog').text(system.getLocalData('catalog_setting_modal', 'name'));
                $('[data-form="form_edit_catalog"]').attr({'data-id-catalog': system.getLocalData('catalog_setting_modal', 'id')});
                $('[data-form="form_edit_catalog"] [name="name_catalog"]').val(system.getLocalData('catalog_setting_modal', 'name'));
                $('[data-form="form_edit_catalog"] [name="id"]').val(system.getLocalData('catalog_setting_modal', 'id'));

                // Переключаем радио-input'ы
                if (system.getLocalData('catalog_setting_modal', 'type') === 'public')
                    $('#radioSettingPublicCatalog').trigger('click');
                else
                    $('#radioSettingPrivateCatalog').trigger('click');

                break;
        }
    });
}

export {init};