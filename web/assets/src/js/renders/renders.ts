import {emptyForm, getLoaderDom, hideLoader} from "../functions";

declare var $: any;
declare var system: any;
declare var render: any;

function rendersRequire() {

    // Проверка смены данных пользователя
    render.render_forgot_password = (data: any) => {
        if (data.response.result == true)
        {
            system.alert.add('Новый пароль отправлен на email', 'success');
            hideLoader(data.response.form_id, function () {
            });
        }
        else {
            system.alert.add(data.response.error, 'danger');
            hideLoader(data.response.form_id, function () {

            });
        }
    };

    // Проверка смены данных пользователя
    render.render_check_change_data = (data: any) => {
        if (data.response.result == true)
        {
            system.alert.add('Данные успешно изменены!', 'success');
            hideLoader(data.response.form_id, function () {
            });
        }
        else {
            system.alert.add(data.response.error, 'danger');
            hideLoader(data.response.form_id, function () {

            });
        }
    };

    // Проверка входа
    render.render_check_login_form = (data: any) => {
        if (data.response.result == true)
            system.redirect('/cabinet');
        else {
            system.alert.add('Ошибка авторизации!', 'danger');
            hideLoader(data.response.form_id, function () {
                system.set_errors_form(data);
            });
        }
    };

    // Проверка регистрации
    render.render_check_sign_up_form = (data: any) => {
        if (data.response.result == true)
            system.redirect('/cabinet');
        else {
            system.alert.add('Ошибка регистрации!', 'danger');
            hideLoader(data.response.form_id, function () {
                system.set_errors_form(data);
            });
        }
    };
}

export {rendersRequire};