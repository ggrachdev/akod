// Для хранения системных свойств
var system = {};

// Для хранения функций для рендеринга
var render = {};

// Для хранения локальных данных
system.local_data = {};

// Установить локальные данные
system.setLocalData = function (element) {
    var ld = window.atob(element.getAttribute('data-local'));
    var json_ld = JSON.parse(ld);
    system.local_data[json_ld.name_local_data] = json_ld;
};

// Установить локальные данные по ключу
system.setLocalDataByKey = function (key, data) {
    system.local_data[key] = data;
};

// Получить локальные данные
system.getLocalData = function (key, value) {
    var value = value || false;
    return !value ? system.local_data[key] : system.local_data[key][value];
};

system.inAdmin = function () {

    if('is_admin' in system)
        if(system.is_admin === true && 'sk' in system)
            return true;

    return false;
}


// Метод для рендеринга компонентов
render.render_component = function (data) {

    // Если ответ с сервера - это загрузка мультикомпонентов
    if ('multicomponent_loader' in data.response) {
        for (comp_item in data.response.components)
            FD.runAll('[data-component="' + comp_item + '"]',
                function (comp) {
                    FD.empty(comp);
                    FD.html(comp, data.response.components[comp_item]);
                }
            );
    }
    else
        FD.runAll('[data-component="' + data.response.component_name + '"]',
            function (component) {
                FD.empty(component);
                FD.html(component, data.response.component);
            }
        );
};

system.url = location.pathname.split('/');
system.url.splice(0, 1);

if (system.url[0] == '')
    system.url[0] = 'root';

system.objectToGetParams = function param(object) {
    var encodedString = '';
    for (var prop in object) {
        if (object.hasOwnProperty(prop)) {
            if (encodedString.length > 0) {
                encodedString += '&';
            }
            encodedString += encodeURI(prop + '=' + object[prop]);
        }
    }
    return encodedString;
};

// Сгенерировать случайный id
system.generateRandId = function (length = 10) {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz12345689";
    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
};

// Сгенерировать случайный id
system.uuidv4 = function () {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );


};

// Редирект куда-либо
system.redirect = function (url) {
    location.href = url;
};

// Отправить запрос на сервер
system.send_request = function (params, failCallback) {

    var failCallback = failCallback || function () {
        };

    /*
     $.ajax({
     type: 'POST',
     url: '/api',
     dataType: 'json',
     data: params,
     success: function (data) {
     try {
     // Если в ответе есть функция рендера, то запускаем ее
     if (data.response.render in render) render[data.response.render](data);
     } catch (err) {}
     }
     });
     */

    var object_send = {};

    for (key in params) {
        var params_element = params[key];
        object_send[params_element.name] = params_element.value;
    }

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/api', true);
    // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // xhr.send(system.objectToGetParams(object_send));
    xhr.send(params);

    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            failCallback();
        } else {
            // вывести результат
            try {
                var data = JSON.parse(xhr.responseText);

                // Если в ответе есть функция рендера, то запускаем ее
                if (data.response.render in render) render[data.response.render](data);
            } catch (err) {
            }
        }
    }

};

// Отправить запрос на сервер с параметрами в виде объекта
system.send_request_object = function (object, failCallback) {

    var failCallback = failCallback || function () {
        };

    var data = new FormData();
    for (key in object) data.append(key, object[key]);

    system.send_request(data, failCallback);
};

// Вызвать метод
system.callMethod = function (name_method, object_data, failCallback) {
    object_data['action'] = name_method;

    if('is_admin' in system)
    if(system.is_admin === true)
        object_data['sk'] = system.sk;

    return system.send_request_object(object_data, failCallback);
};

// Вызвать метод
system.callMethodWithFile = function (name_method, object_data, failCallback) {

    object_data.append('action', name_method);

    if('is_admin' in system)
    if(system.is_admin === true)
        object_data.append('sk', system.sk);

    return system.send_request(object_data, failCallback);
};

// Получить unix time
system.getTimeByUnix = function (unix_time) {
    var unix_date = new Date(unix_time),
        hours = unix_date.getHours(),
        minutes = unix_date.getMinutes(),
        second = unix_date.getSeconds();
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (second < 10) second = '0' + second;
    return hours + ':' + minutes + ':' + second;
};

// Подгрузка компонентов через ajax
system.init_components = function () {

    var components = {};

    // Поиск компонентов
    // $('section[data-component]').each(function () {
    //     var data_component = $(this).data('component');
    //     components[data_component] = true;
    // });

    FD.runAll('section[data-component]', function (el) {
        components[el.getAttribute('data-component')] = true;
    });

    var size_comp = Object.keys(components).length;

    if (size_comp > 0) {
        if (size_comp > 1) {
            system.load_components(components, false)
        }
        else {
            for (component in components)
                system.load_component(component);
        }
    }


};

// Загрузить компонент
system.load_component = function (component_selector, paste_in_component) {

    var paste_in_component = paste_in_component || false;

    if (paste_in_component !== false)
        $('section[data-component="' + component_selector + '"]').html(paste_in_component);

    system.send_request_object({action: component_selector, component_name: component_selector});
};

// Загруззить компоненты
system.load_components = function (components_object, paste_in_component) {

    // Вставляем данные в компонент
    if (paste_in_component !== false)
        for (component_selector in components_object)
            FD.runAll('section[data-component="' + component_selector + '"]',
                function (el) {
                    FD.html(el, paste_in_component);
                });


    var arr_components = [];
    for (comp in components_object)
        arr_components[arr_components.length] = comp;

    system.send_request_object({action: 'multicomponent_loader', components: arr_components});
};

// Инициализация кликеров локальных данных
system.init_local_data_clickers = function () {
    FD.runAll('[data-local-click]', function (element) {

        var local_data = element.getAttribute('data-local-click');
        element.removeAttribute('data-local-click');
        element.setAttribute('data-local', local_data);

        element.addEventListener('click', function () {
            system.setLocalData(element);
        });
    });
};

// Подгружаем компоненты
document.addEventListener("DOMContentLoaded", function (event) {
    system.init_components();
    system.init_local_data_clickers();
});

