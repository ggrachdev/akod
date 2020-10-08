system.isNum = function (value) {
    value = parseInt(value);
    return (value instanceof Number || typeof value === 'number') && !isNaN(value);
};


// Инициализация формы
// system.init_form = function (form_selector) {
//
//     $(form_selector)
//         .attr({'data-form-id': system.generate_rand_id(10)})
//         .find('[name]').each(
//         function () {
//             var data_element = $(this).attr('name');
//             $('[data-error-element=' + data_element + ']').hide();
//         }
//     );
//
//     $(form_selector).prepend('<input name="time_init" type="hidden" value="' + $.now() + '">')
//         .prepend('<input name="secret_key" type="hidden" value="' + $.now().toString(16) + '">');
// };
system.init_form = function (el_form) {

    el_form.setAttribute('data-form-id', system.generateRandId(10));


    // TODO: rewrite code down
    // $(form_selector)
    //     .attr({'data-form-id': system.generate_rand_id(10)})
    //     .find('[name]').each(
    //     function () {
    //         var data_element = $(this).attr('name');
    //         $('[data-error-element=' + data_element + ']').hide();
    //     }
    // );

    FD.prepend(el_form,
        '<input name="time_init" type="hidden" value="' + Date.now() + '">')
        .prepend(el_form,
            '<input name="secret_key" type="hidden" value="' + Date.now().toString(16) + '">')
        .prepend(el_form,
            '<input name="link" type="hidden" value="' + location.href + '">');
        
    if(system.inAdmin())
    {
        FD.prepend(el_form,
            '<input name="sk" type="hidden" value="' + location.sk + '">');
    }



    // Слушатель отправки формы
    el_form.addEventListener('submit', function (e) {
        e.preventDefault();

        var that = this;
        // var that = el_form;

        var data_action = that.getAttribute('data-action');
        var data_form = that.getAttribute('data-form');
        var data_form_id = that.getAttribute('data-form-id');
        var data_valid = that.getAttribute('valid');
        var errors = 0; // Количество ошибок при валидации через JS
        var form_keys = []; // Ключи формы

        var elem_form = FD.qs('[data-form-id="' + data_form_id + '"]');
        var form_data = new FormData(elem_form);

        // Загружаем файлы
        var elements_input_file = FD.qsa('[data-form-id="' + data_form_id + '"] input[type="file"]');
        if (elements_input_file.length > 0) {
            var file_iteration = 0;
            for (var input_file in elements_input_file) {
                if (system.isNum(input_file)) {
                    if (elements_input_file[input_file].files.length > 0) {
                        file_iteration++;

                        for (var file in elements_input_file[input_file].files)
                            form_data.append('file_' + file_iteration, elements_input_file[input_file].files[file])
                    }
                }
            }
        }

        // Пример добавления файлов
        // var file_input = document.querySelector('#exampleFormControlFile1');
        // form_data.append('image', file_input.files[0]);
        // form_data.append('test', 'test');

        form_data.append('action', data_action);
        form_data.append('form_id', data_form_id);
        form_data.append('data_form', data_form);

        console.log('Форма отправляется:', Array.from(form_data));

        FD.runAll('[name]', function (element_name) {
            var data_element = element_name.getAttribute('name');
            var data_type = element_name.getAttribute('data-type');
            var value = element_name.getAttribute('value');
            var attr_required = element_name.hasAttribute('required');
            var data_valid = element_name.getAttribute('data-valid');

            if (typeof attr_required !== 'undefined' && attr_required !== false) {
                form_keys[form_keys.length] = data_element;
                // Если нужно провалидировать через js - проходиися по именам и проверяем на ошибки
                if (data_valid == 'js') {
                    var rules = {};

                    switch (data_type) {
                        case 'email':
                            rules = {
                                required: true,
                                email: {
                                    message: 'Email введен не корректно'
                                },
                                stop: true,
                            };
                            break;

                        case 'name':
                            rules = {
                                required: {
                                    message: 'Поле не может быть пустым',
                                    required: true
                                },
                                stop: true,
                            };
                            break;

                        case 'password':
                            rules = {
                                required: true,
                                min: {
                                    validate: function (value, pars) {
                                        return typeof value === 'string' && value.length >= 5;
                                    },
                                    message: 'Минимальная длина пароля 5 символов',
                                    min: 5
                                },
                                stop: true,
                                max: 100,
                            };
                            break;
                    }

                    // TODO: Remove dependence approve js
                    var result = approve.value(value, rules);

                    if (result.approved === true) {
                        $(this).removeClass('input_error').addClass('input_success');
                        $('[data-error-element=' + data_element + ']').hide();
                    }
                    else {
                        $(this).removeClass('input_success').addClass('input_error');
                        $('[data-error-element=' + data_element + ']').text(result.errors[0]).show();
                    }

                    if (result.errors.length > 0)
                        errors += result.errors.length;
                }
            }
        }, true, that);

        // $(this).find('[name]').each(
        //     function () {
        //         var data_element = $(this).attr('name');
        //         var data_type = $(this).data('type');
        //         var value = $(this).val();
        //         var attr_required = $(this).attr('required');
        //         if (typeof attr_required !== 'undefined' && attr_required !== false) {
        //             form_keys[form_keys.length] = data_element;
        //             // Если нужно провалидировать через js - проходиися по именам и проверяем на ошибки
        //             if (data_valid == 'js') {
        //                 var rules = {};
        //
        //                 switch (data_type) {
        //                     case 'email':
        //                         rules = {
        //                             required: true,
        //                             email: {
        //                                 message: 'Email введен не корректно'
        //                             },
        //                             stop: true,
        //                         };
        //                         break;
        //
        //                     case 'name':
        //                         rules = {
        //                             required: {
        //                                 message: 'Поле не может быть пустым',
        //                                 required: true
        //                             },
        //                             stop: true,
        //                         };
        //                         break;
        //
        //                     case 'password':
        //                         rules = {
        //                             required: true,
        //                             min: {
        //                                 validate: function (value, pars) {
        //                                     return typeof value === 'string' && value.length >= 5;
        //                                 },
        //                                 message: 'Минимальная длина пароля 5 символов',
        //                                 min: 5
        //                             },
        //                             stop: true,
        //                             max: 100,
        //                         };
        //                         break;
        //                 }
        //
        //                 // TODO: Remove dependence approve js
        //                 var result = approve.value(value, rules);
        //
        //                 if (result.approved === true) {
        //                     $(this).removeClass('input_error').addClass('input_success');
        //                     $('[data-error-element=' + data_element + ']').hide();
        //                 }
        //                 else {
        //                     $(this).removeClass('input_success').addClass('input_error');
        //                     $('[data-error-element=' + data_element + ']').text(result.errors[0]).show();
        //                 }
        //
        //                 if (result.errors.length > 0)
        //                     errors += result.errors.length;
        //             }
        //         }
        //     }
        // );

        if (errors === 0) {
            form_data.append('keys', form_keys); // Ключи формы
            system.send_request(form_data);
        }

        if (data_valid == 'js' || data_valid == 'ajax')
            return false;

        return false;

    });


};

// Установить ошибки на форму
system.set_errors_form = function (data) {

    var keys = data.response.keys.split(',');
    var form_id = data.response.form_id;
    var data_form = data.response.data_form;

    var form = $('[data-form="' + data_form + '"][data-form-id="' + form_id + '"]');

    if ('errors' in data.response) {
        $('[data-context="errors"]').text(data.response['errors']).show();
    }
    else {
        $('[data-context="errors"]').text('').hide();
    }

    keys.forEach(function (item) {

        var element = $('[name=' + item + ']');

        if (item in data.response) {
            var error = data.response[item];
            $('[data-error-element=' + item + ']').text(error).show();
            $(element).removeClass('input_success').addClass('input_error');
        }
        else {
            $('[data-error-element=' + item + ']').hide();
            $(element).removeClass('input_success').removeClass('input_error');
        }

    });
};

// Первичная проходка по всем формам
// $('[validator][data-form]').each(function () {
//
//     system.init_form(this);
// });

system.initForms = function () {
    FD.runAll('[validator][data-form]', function (elem_form) {
        system.init_form(elem_form);
    });
};




document.addEventListener("DOMContentLoaded", function() {
    system.initForms();
});


