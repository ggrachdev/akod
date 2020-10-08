system.alert = {

    // Инициализация тела для alert'ов
    init: function () {
        FD.append(
            FD.qs('body'),
            '<div class="text-right" style="z-index: 9999; position: fixed; top: 30px; right: 30px;" id="system-alert-wrapper"></div>');
        return this;
    },

    // Добавить alert в тело
    add: function (message, type, timer) {

		var timer = timer || 3000;
		var type = type || 'info';
        var rand_id = system.generateRandId(10);

        FD.prepend(FD.qs('#system-alert-wrapper'), '' +
            '<div style="display: none; width: 300px;" data-alert="' + rand_id + '" class="alert text-left alert-' + type + ' op-9" role="alert">' +
            message +
            '&nbsp;&nbsp;<button style="position: absolute; top: 24%; right: 10px;" type="button" class="close" data-dismiss="alert" aria-label="Close">' +
            '<span aria-hidden="true">&times;</span>' +
            '</button>' +
            '</div>');

        $('[data-alert="' + rand_id + '"]').fadeIn(200);

        setTimeout(function () {
            var element = $('[data-alert="' + rand_id + '"]');
            element.fadeOut(200, function () {
                element.remove();
            });
        }, timer);


        return this;
    }
};

system.alert.init();