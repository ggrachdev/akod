// Проверяем авторизацию

render.render_log_in = function (input) {

    if (input.response.result) {
        system.redirect('/' + system.root_admin + '/main');
    }
    else {
        alert('Что-то пошло не так');
    }
};