declare var $: any;
declare var system: any;

// Скрыть крутилку загрузки форм
function hideLoader(form_id: string, callback: any) {
    setTimeout(function () {
        const element_form = $('[data-form-id="' + form_id + '"]');
        element_form.find('.form__body').fadeTo("opacity", 1);
        element_form.find('.form__loader').hide();
        callback();
    }, 1000);
}

function lockBody() {
    $('body').attr('data-lock', 'on');
    $('.load_lock').show();
}

function DoWithTrue( callback_do: any, callback_true: any, delay?: number, max_count?: number)
{
    delay = delay || 200;
    max_count = max_count || 10;

    var count_iterations: number = 0;
    var interval_action: any = setInterval(function() {
        count_iterations++;

        if(count_iterations > max_count)
        {
            clearInterval(interval_action);
        }

        if(callback_true())
        {
            clearInterval(interval_action);
            callback_do();
        }
    }, delay);
}

function unlockBody() {
    setTimeout(function () {
        $('body').removeAttr('data-lock');
        $('.load_lock').hide();
    }, 500);
}

// Очистить форму
function emptyForm(form_id: string) {
    $('[data-form-id="' + form_id + '"]')
        .find('input[type="text"], input[type="email"], input[type="number"]').each(
        function () {
            $(this).val('');
        });
}

// Вернуть dom крутилки
function getLoaderDom() {
    return ` <div class="spinner-border m-auto" role="status">
              <span class="sr-only">Loading...</span>
            </div>`;
}

export {hideLoader, emptyForm, getLoaderDom, lockBody, unlockBody, DoWithTrue};