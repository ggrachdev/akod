// При клике по черному фону модалки закрываем ее
FD.runAll('.modal__lock', function (element) {

    element.addEventListener('click', function () {
        var modal = element.closest('.modal');
        FD.hide(modal);
    });

});

// Вызываем модалку
FD.runAll('[data-modal]', function (element) {

    element.addEventListener('click', function () {
        var callback = element.getAttribute('data-callback');

        FD.html(FD.qs('#' + element.getAttribute('data-modal') + ' .modal__body__content'), 'Загрузка...');

        FD.show(FD.qs('#' + element.getAttribute('data-modal')));

        if (callback in window)
            setTimeout(function () {
                window[callback]();
            }, 400);
    });


});

// Установить данные редактирования пользователя в модалку
function setModalUserEditData() {

    var data_edit_user = system.getLocalData('edit_user');
    var content = '';

    var $content_modal = FD.qs('#edit_user .modal__body__content');

    for (key in data_edit_user) {
        if (key === 'privilege' || key === 'name_local_data') continue;

        content += '<form enctype="multipart/form-data" data-action="edit_user" data-form="edit_user" validator>';
        content += '<h4>' + key + '</h4>';

        // if (key === 'id')
        //     content += '<input class="mb-10 w-100" name="'+key+'" type="text" value="' + data_edit_user[key] + '" disabled />';
        // else
        content += '<input class="mb-10 w-100" name="' + key + '" type="text" value="' + data_edit_user[key] + '" />';
    }

    content += '<input name="sk" type="hidden" value="' + system.sk + '">';
    content += '<input class="btn-green-small d-b" type="submit" value="Изменить">';
    content += '</form>';

    FD.empty($content_modal);

    FD.prepend($content_modal, content);

    // Переинициализируем форму
    system.init_form(FD.qs('[data-form="edit_user"]'));
}

function setModalAddBlockData() {

    system.callMethod('get_table_for_add_block', {});
}

render.render_edit_user = function (input) {
    if (input.response.result) {

    }
    else {
        alert('Что-то пошло не так');
    }
};

render.render_get_table_for_add_block = function (input) {
    if (input.response.result) {
        console.log(input.response);
        FD.html(FD.qs('#add_block .modal__body__content'), input.response.content);
    }
    else {
        alert('Что-то пошло не так');
    }
};