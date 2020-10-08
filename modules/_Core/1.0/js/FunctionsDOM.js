var FD = {};

/**
 *
 * Выбрать элемент
 *
 * @param selector - селектор
 * @param element_search_in = искать внутри
 * @returns {Element}
 */
FD.qs = function (selector, element_search_in) {
    var element_search_in = element_search_in || null;
    return element_search_in === null ? document.querySelector(selector) : element_search_in.querySelector(selector);
};

FD.qsa = function (selector, element_search_in) {
    var element_search_in = element_search_in || null;
    return element_search_in === null ? document.querySelectorAll(selector) : element_search_in.querySelectorAll(selector);
};

FD.empty = function (elem) {
    elem.innerHTML = '';
    return this;
};

FD.html = function (elem, html) {
    elem.innerHTML = html;
    return this;
};

FD.remove = function remove(el) {
    // TODO: Потерялась переменная!
    el.parentNode.removeChild(toRemove);
    return this;
};

/**
 * Применить функцию ко всем элементам по селектору
 *
 * @param selector
 * @param handler - функция обработчик
 * @param need_qsa {boolean} - нужен ли querySelectorAll
 */

FD.runAll = function (selector, handler, need_qsa, element_search_in) {
    var need_qsa = need_qsa || true;
    var search_in = search_in || null;

    if (search_in !== null)
        var components = need_qsa ? FD.qsa(selector, element_search_in) : FD.qs(selector, element_search_in);
    else
        var components = need_qsa ? FD.qsa(selector) : FD.qs(selector);

    for (var i = 0; i < components.length; i++) handler(components[i]);
};

FD.prepend = function (elem, insert_data) {
    elem.insertAdjacentHTML('beforeend', insert_data);
    return this;
};

FD.append = function (elem, insert_data) {
    elem.insertAdjacentHTML('afterbegin', insert_data);
    return this;
};


// TODO: Не работает! Исправить!
FD.hide = function (elem) {
    elem.setAttribute("style", "display: none;");
    return this;
};

FD.show = function (elem) {

    elem.style.display = elem.style.display === 'none' ? '' : 'none';

    return this;
};
