/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/src/js/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/css/app.scss":
/*!*********************************!*\
  !*** ./assets/src/css/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./assets/src/js/classes/ClassifierItemData.ts":
/*!*****************************************************!*\
  !*** ./assets/src/js/classes/ClassifierItemData.ts ***!
  \*****************************************************/
/*! exports provided: ClassifierItemData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassifierItemData", function() { return ClassifierItemData; });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./assets/src/js/functions.ts");

var ClassifierItemData = /** @class */ (function () {
    function ClassifierItemData() {
    }
    // Загрузить поле по ID
    ClassifierItemData.loadDataById = function (id) {
        Object(_functions__WEBPACK_IMPORTED_MODULE_0__["lockBody"])();
        system.callMethod('load_data_item', {
            id: id,
            'id_classifier': system.getLocalData('now_classifier')['id']
        });
    };
    // Удалить поле по ID
    ClassifierItemData.deleteFieldById = function (id) {
        Object(_functions__WEBPACK_IMPORTED_MODULE_0__["lockBody"])();
        system.callMethod('delete_field', {
            id_field: id
        });
    };
    // Запрос на изменение поля по ID
    ClassifierItemData.editFieldById = function (id) {
        system.callMethod('edit_field', {
            id_field: id
        });
    };
    return ClassifierItemData;
}());



/***/ }),

/***/ "./assets/src/js/classes/ClassifierTree.ts":
/*!*************************************************!*\
  !*** ./assets/src/js/classes/ClassifierTree.ts ***!
  \*************************************************/
/*! exports provided: ClassifierTree, ClassifierItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassifierTree", function() { return ClassifierTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassifierItem", function() { return ClassifierItem; });
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Data */ "./assets/src/js/classes/Data.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

// Служит оберткой над узлом
var ClassifierItem = /** @class */ (function () {
    function ClassifierItem(text, id) {
        this.text = text;
        this.id = id;
    }
    return ClassifierItem;
}());
// Отвечает за операции над деревом узлов
var ClassifierTree = /** @class */ (function () {
    function ClassifierTree() {
    }
    /**
     * Проверить доступность операций над классификатором
     * @returns {boolean}
     */
    ClassifierTree.checkWorkField = function () {
        return !(typeof system.getLocalData('now_classifier') == 'undefined');
    };
    /**
     * Проверить объект узла классификатора на валидность
     *
     * @param data
     */
    ClassifierTree.checkObjectNode = function (data) {
        if ('id' in data &&
            'text' in data &&
            data instanceof ClassifierItem &&
            data.text.trim().length > 0) {
            return true;
        }
        return false;
    };
    /**
     * Получить путь до элемента
     *
     * @param id
     */
    ClassifierTree.getPathToElementWithId = function (id) {
        var search_status = false;
        var result = false;
        function getFiniteValue(obj) {
            function getProp(o, path_o) {
                for (var prop in o) {
                    if (!search_status) {
                        if (prop == 'id') {
                            if (o[prop] == id) {
                                search_status = true;
                                result = path_o;
                                break;
                            }
                        }
                        var path_new = path_o + '///["' + prop + '"]';
                        if (typeof o[prop] === 'object' && !search_status)
                            getProp(o[prop], path_new);
                    }
                }
            }
            getProp(obj, '["classifier_content"]["core"]["data"]');
            return result;
        }
        if (this.checkWorkField()) {
            var obj_classifier = system.getLocalData('now_classifier').classifier_content.core.data;
            return getFiniteValue(obj_classifier);
        }
        else {
            this.showError(0);
        }
        return false;
    };
    /**
     * Добавить элемент классификатора
     *
     * @param action
     * @param item {ClassifierItem} - новый элемент
     * @param id - id элемента относительно которого совершается действие
     */
    ClassifierTree.actionElement = function (action, item, id, params) {
        if (params === void 0) { params = {}; }
        switch (action) {
            // Удалить
            case 'remove':
                var now = system.getLocalData('now_classifier');
                now.classifier_content.core.data = $('[data-context="data_tree_catalog"]').jstree(true).get_json();
                system.setLocalDataByKey('now_classifier', now);
                this.saveClassifier(action, item.id, params);
                this.loadClassifier();
                break;
            // Переименовать
            case 'rename':
            case 'move':
                /*       var last_position = array_path.pop();
                       last_position = parseInt(last_position.replace('["', '').replace('"]', ''));

                       eval(`new_data${array_path.join('')}[${last_position}]['text'] = '${item.text}';`);*/
                // Устанавливаем новые данные
                var now = system.getLocalData('now_classifier');
                now.classifier_content.core.data = $('[data-context="data_tree_catalog"]').jstree(true).get_json();
                system.setLocalDataByKey('now_classifier', now);
                this.saveClassifier(action, item.id);
                this.loadClassifier();
                break;
            // Добавить перед элементом
            case 'before':
            // Добавить после элемента
            case 'after':
                var now = system.getLocalData('now_classifier');
                now.classifier_content.core.data = $('[data-context="data_tree_catalog"]').jstree(true).get_json();
                system.setLocalDataByKey('now_classifier', now);
                this.saveClassifier(action, item.id);
                this.loadClassifier();
                break;
            // Добавить внутри элемента
            case 'in':
                var now = system.getLocalData('now_classifier');
                now.classifier_content.core.data = $('[data-context="data_tree_catalog"]').jstree(true).get_json();
                system.setLocalDataByKey('now_classifier', now);
                this.saveClassifier(action, item.id);
                this.loadClassifier();
                break;
            // Добавить внутри элемента
            case 'save':
                var now = system.getLocalData('now_classifier');
                now.classifier_content.core.data = $('[data-context="data_tree_catalog"]').jstree(true).get_json();
                system.setLocalDataByKey('now_classifier', now);
                this.saveClassifier(action, item.id);
                this.loadClassifier();
                break;
        }
    };
    ClassifierTree.loadClassifier = function () {
        var content = system.getLocalData('now_classifier').classifier_content;
        content.plugins = ["dnd", "contextmenu"];
        $('[data-context="error.not_load_classifier"]').remove();
        // Инциализация событий jstree при нажатии на контекстное меню
        if (!ClassifierTree.is_init_events_jstree) {
            ClassifierTree.is_init_events_jstree = true;
            $('[data-context="data_tree_catalog"]').on("create_node.jstree", function (e, data) {
                if ('parent' in data) {
                    $('[data-context="data_tree_catalog"]').jstree("open_node", data.parent);
                }
                var new_id = system.uuidv4();
                $('[data-context="data_tree_catalog"]').jstree(true).set_id(data.node, new_id);
                var item = new ClassifierItem(data.text, new_id);
                // Добавляем элемент
                ClassifierTree.actionElement('after', item, data.node.id);
            });
            $('[data-context="data_tree_catalog"]').on("delete_node.jstree", function (e, data) {
                var ID = data.node.id;
                var item = new ClassifierItem(data.text, ID);
                // Удаляем элемент
                ClassifierTree.actionElement('remove', item, ID, {
                    'ids_children': data.node.children_d
                });
            });
            $('[data-context="data_tree_catalog"]').on("rename_node.jstree", function (e, data) {
                console.log(data.instance);
                var ID = data.node.id;
                var item = new ClassifierItem(data.text, ID);
                // Добавляем элемент
                ClassifierTree.actionElement('rename', item, ID);
            });
            $('[data-context="data_tree_catalog"]').on("move_node.jstree", function (e, data) {
                var ID = data.node.id;
                var item = new ClassifierItem(data.text, ID);
                // Добавляем элемент
                ClassifierTree.actionElement('move', item, ID);
            });
            $('[data-context="data_tree_catalog"]').on("dnd_move.vakata.jstree", function (e, data) {
                $('[data-context="data_tree_catalog"]').jstree(true).get_json();
            });
        }
        var json_classifier = system.getLocalData('now_classifier').classifier_content.core.data;
        json_classifier = JSON.stringify(json_classifier).replace(/"icon":false/g, '"icon":true');
        $('[data-context="data_tree_catalog"]').jstree(content);
        $('[data-context="data_tree_catalog"]').jstree(true).settings.core.data = JSON.parse(json_classifier);
        $('[data-context="data_tree_catalog"]').jstree(true).refresh(true);
        _Data__WEBPACK_IMPORTED_MODULE_0__["Data"].catalog_is_load = true;
    };
    // Сохранить классификатор
    ClassifierTree.saveClassifier = function (action, action_id, params) {
        if (action === void 0) { action = null; }
        if (action_id === void 0) { action_id = null; }
        if (params === void 0) { params = {}; }
        var data = system.getLocalData('now_classifier').classifier_content.core.data;
        var request_obj = __assign({}, params, { id: system.getLocalData('now_classifier')['id'], 'last_action': action, 'action_id': action_id, data_json: JSON.stringify(data) });
        system.callMethod('save_classifier', request_obj);
    };
    ClassifierTree.showError = function (type) {
        switch (type) {
            case 0:
                system.alert.add('Ошибка: Классификатор недоступен!', 'danger');
                break;
            case 1:
                system.alert.add('Ошибка: Некорректный объект элемента классификатора!', 'danger');
                break;
        }
    };
    /**
     * Переместить поле узла
     *
     * @constructor
     */
    ClassifierTree.moveField = function (field_id, move_to) {
        var params_send = { 'id_field': field_id, 'move_to': move_to };
        system.callMethod('move_field', params_send);
    };
    ClassifierTree.is_init_events_jstree = false;
    return ClassifierTree;
}());



/***/ }),

/***/ "./assets/src/js/classes/Data.ts":
/*!***************************************!*\
  !*** ./assets/src/js/classes/Data.ts ***!
  \***************************************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
var Data = /** @class */ (function () {
    function Data() {
    }
    // Включен ли режим редактирования
    Data.mode_edit = false;
    // Загружено ли поле классификатора
    Data.catalog_field_is_load = false;
    // Нет ли полей у узла
    Data.catalog_field_is_empty = true;
    // Загружен классификатор
    Data.catalog_is_load = false;
    return Data;
}());



/***/ }),

/***/ "./assets/src/js/classes/FieldManager.ts":
/*!***********************************************!*\
  !*** ./assets/src/js/classes/FieldManager.ts ***!
  \***********************************************/
/*! exports provided: FieldManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldManager", function() { return FieldManager; });
/* harmony import */ var _field_handlers_Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../field_handlers/Text */ "./assets/src/js/field_handlers/Text.ts");
/* harmony import */ var _field_handlers_Number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../field_handlers/Number */ "./assets/src/js/field_handlers/Number.ts");
/* harmony import */ var _field_handlers_Gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../field_handlers/Gallery */ "./assets/src/js/field_handlers/Gallery.ts");
/* harmony import */ var _field_handlers_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../field_handlers/Table */ "./assets/src/js/field_handlers/Table.ts");
/* harmony import */ var _field_handlers_Html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../field_handlers/Html */ "./assets/src/js/field_handlers/Html.ts");
/* harmony import */ var _field_handlers_File__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../field_handlers/File */ "./assets/src/js/field_handlers/File.ts");






var FieldManager = /** @class */ (function () {
    function FieldManager() {
    }
    FieldManager.getFieldObject = function (type) {
        var result = null;
        switch (type) {
            case 'text':
                result = new _field_handlers_Text__WEBPACK_IMPORTED_MODULE_0__["Text"]();
                if (_field_handlers_Text__WEBPACK_IMPORTED_MODULE_0__["Text"].is_init == false) {
                    _field_handlers_Text__WEBPACK_IMPORTED_MODULE_0__["Text"].initScripts();
                    _field_handlers_Text__WEBPACK_IMPORTED_MODULE_0__["Text"].is_init = true;
                }
                break;
            case 'gallery':
                result = new _field_handlers_Gallery__WEBPACK_IMPORTED_MODULE_2__["Gallery"]();
                if (_field_handlers_Gallery__WEBPACK_IMPORTED_MODULE_2__["Gallery"].is_init == false) {
                    _field_handlers_Gallery__WEBPACK_IMPORTED_MODULE_2__["Gallery"].initScripts();
                    _field_handlers_Gallery__WEBPACK_IMPORTED_MODULE_2__["Gallery"].is_init = true;
                }
                break;
            case 'file':
                result = new _field_handlers_File__WEBPACK_IMPORTED_MODULE_5__["File"]();
                if (_field_handlers_File__WEBPACK_IMPORTED_MODULE_5__["File"].is_init == false) {
                    _field_handlers_File__WEBPACK_IMPORTED_MODULE_5__["File"].initScripts();
                    _field_handlers_File__WEBPACK_IMPORTED_MODULE_5__["File"].is_init = true;
                }
                break;
            case 'number':
                result = new _field_handlers_Number__WEBPACK_IMPORTED_MODULE_1__["Number"]();
                if (_field_handlers_Number__WEBPACK_IMPORTED_MODULE_1__["Number"].is_init == false) {
                    _field_handlers_Number__WEBPACK_IMPORTED_MODULE_1__["Number"].initScripts();
                    _field_handlers_Number__WEBPACK_IMPORTED_MODULE_1__["Number"].is_init = true;
                }
                break;
            case 'table':
                result = new _field_handlers_Table__WEBPACK_IMPORTED_MODULE_3__["Table"]();
                if (_field_handlers_Table__WEBPACK_IMPORTED_MODULE_3__["Table"].is_init == false) {
                    _field_handlers_Table__WEBPACK_IMPORTED_MODULE_3__["Table"].initScripts();
                    _field_handlers_Table__WEBPACK_IMPORTED_MODULE_3__["Table"].is_init = true;
                }
                break;
            case 'html':
                result = new _field_handlers_Html__WEBPACK_IMPORTED_MODULE_4__["Html"]();
                _field_handlers_Html__WEBPACK_IMPORTED_MODULE_4__["Html"].onAfterOpenFieldModal();
                if (_field_handlers_Html__WEBPACK_IMPORTED_MODULE_4__["Html"].is_init == false) {
                    _field_handlers_Html__WEBPACK_IMPORTED_MODULE_4__["Html"].initScripts();
                    _field_handlers_Html__WEBPACK_IMPORTED_MODULE_4__["Html"].is_init = true;
                }
                break;
        }
        return result;
    };
    return FieldManager;
}());



/***/ }),

/***/ "./assets/src/js/clickers/catalogClickers.ts":
/*!***************************************************!*\
  !*** ./assets/src/js/clickers/catalogClickers.ts ***!
  \***************************************************/
/*! exports provided: clickersInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickersInit", function() { return clickersInit; });
/* harmony import */ var _classes_ClassifierItemData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/ClassifierItemData */ "./assets/src/js/classes/ClassifierItemData.ts");
/* harmony import */ var _controllers_catalogController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/catalogController */ "./assets/src/js/controllers/catalogController.ts");
/* harmony import */ var _classes_ClassifierTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/ClassifierTree */ "./assets/src/js/classes/ClassifierTree.ts");



function clickersInit() {
    $(document).on('click', '[data-click="search_classifiers"]', function (e) {
        e.preventDefault();
        $('[data-context="search_result"]').html('');
        var val = $('[data-input="search_classifiers"]').val();
        var search_from_name = $('#search_from_name').is(':checked');
        var search_from_item = $('#search_from_item').is(':checked');
        var search_from_content = $('#search_from_content').is(':checked');
        if (val.length > 3) {
            if (search_from_name || search_from_item || search_from_content) {
                system.callMethod('search_classifiers', {
                    val: val,
                    search_from_name: search_from_name,
                    search_from_item: search_from_item,
                    search_from_content: search_from_content
                });
            }
            else {
                system.alert.add('Выберите хотя бы <br>1 параметр для поиска', 'danger');
            }
        }
        else {
            system.alert.add('Введите слова для поиска длиннее 3 символов', 'danger');
        }
    });
    $(document).on('click', '[data-click-breadcrumbs]', function (e) {
        e.preventDefault();
        var id = $(this).attr('data-click-breadcrumbs');
        $("[role=\"treeitem\"]#" + id + " > a").trigger('click');
    });
    $(document).on('click', '#modal_icon_change i', function (e) {
        e.preventDefault();
        var id_item = system.getLocalData('object_change_icon_jstree').id;
        $('[data-context="data_tree_catalog"]').jstree(true).set_icon(id_item, $(this).attr('class'));
        var item = new _classes_ClassifierTree__WEBPACK_IMPORTED_MODULE_2__["ClassifierItem"]('text', id_item);
        // Добавляем элемент
        _classes_ClassifierTree__WEBPACK_IMPORTED_MODULE_2__["ClassifierTree"].actionElement('save', item, id_item);
        $('#modal_icon_change').modal('hide');
    });
    $(document).on('click', '[data-click="get_word_file"]', function (e) {
        e.preventDefault();
        if (typeof system.getLocalData('now_load_field_id') != 'undefined') {
            var link = "/doc-generator/word?classifier_id=" + system.local_data.now_classifier.id + "&uuid=" + system.local_data.now_load_field_id;
            console.log(link);
            window.open(link);
        }
        else {
            system.alert.add('Для получения WORD файла загрузите какой-нибудь узел', 'danger');
        }
    });
    $(document).on('click', '[data-click="import_json_classifier"]', function (e) {
        e.preventDefault();
        // создадим объект данных формы
        var data = new FormData();
        var i = 0;
        $('[data-context="file_json_classifier"]').each(function () {
            var files_attr = $(this)[0].files;
            if (files_attr.length > 0) {
                i++;
                data.append("file_load_" + i, files_attr[0]);
            }
        });
        data.append("id_classifier", $('[name="id_classifier_import"]').val());
        system.callMethodWithFile('import_classifier', data);
    });
    $(document).on('click', '[data-click="add_privilege_user"]', function (e) {
        var email = prompt('Введите email пользователя');
        if (email.length > 0) {
            system.callMethod('manager_privilege', {
                'email': email,
                'id_classifier': system.getLocalData('classifier_id_privilege'),
                'action_privilege': 'add_email'
            });
        }
    });
    $(document).on('click', '[data-click="delete_all_privilege"]', function (e) {
        e.preventDefault();
        if (confirm('Удалить все привилегии данного пользователя?')) {
            system.callMethod('manager_privilege', {
                'id_user': $(this).closest('[data-id]').attr('data-id'),
                'id_classifier': system.getLocalData('classifier_id_privilege'),
                'action_privilege': 'delete_all_privilege'
            });
            $("[data-context=\"privilege_list\"] [data-wrapper-id=\"" + $(this).closest('[data-id]').attr('data-id') + "\"]").remove();
        }
    });
    $(document).on('click', '[data-click="edit_privilege_classifier"]', function (e) {
        $('[data-context="privilege_load"]').show();
        $('[data-context="privilege_list"]').hide();
        system.setLocalDataByKey('classifier_id_privilege', $(this).closest('[data-id-catalog]').attr('data-id-catalog'));
        $('#modal_edit_priivlege').modal('show');
        $('#modal_setting_catalog').modal('hide');
        system.callMethod('manager_privilege', {
            'id_classifier': system.getLocalData('classifier_id_privilege'),
            'action_privilege': 'get_privilege_list'
        });
    });
    //  Экспортировать данные классификатора
    $(document).on('click', '[data-context="user_privilege"]', function (e) {
        $("[data-id-privilege=\"" + $(this).attr('data-id') + "\"]").slideToggle();
    });
    //  Экспортировать данные классификатора
    $(document).on('click', '[data-click="export_catalog"]', function (e) {
        if (confirm('Скачать данные классификатора в JSON формате?')) {
            var id_classifier = $(this).closest('[data-id-catalog]').attr('data-id-catalog');
            system.callMethod('export_classifier', {
                'id_classifier': id_classifier
            });
        }
    });
    //  Импортировать данные в классификатор
    $(document).on('click', '#modal_import_classifier [type="submit"]', function (e) {
        e.preventDefault();
        try {
            var jsn = $('[name="json_import"]').val();
            var id_classifier = $('[name="id_classifier_import"]').val();
            console.log(JSON.parse(jsn));
            system.callMethod('import_classifier', {
                'json': $('[name="json_import"]').val(),
                'id_classifier': id_classifier
            });
        }
        catch (error) {
            system.alert.add('JSON для импорта не валиден', 'danger');
        }
    });
    //  Импортировать данные в классификатор
    $(document).on('click', '[data-click="import_catalog"]', function (e) {
        e.preventDefault();
        $('[name="id_classifier_import"]').val($(this).closest('[data-id-catalog]').attr('data-id-catalog'));
        $('#modal_import_classifier').modal('show');
    });
    //  Скрыть узлы классификатора
    $(document).on('click', '[data-click="compress_tree_items"]', function () {
        $('.jstree-open').each(function () {
            $(this).find('> .jstree-icon').trigger('click');
        });
    });
    // Раскрыть узлы классификатора
    $(document).on('click', '[data-click="expand_tree_items"]', function () {
        for (var i = 0; i < 10; i++) {
            $('.jstree-closed').each(function () {
                $(this).find('> .jstree-icon').trigger('click');
            });
        }
    });
    $(document).on('click', '[data-click="hide_panel_tree"]', function () {
        $('[data-context="tree_catalog"]').removeClass('col-lg-3').addClass('col-lg-1');
        $('[data-click="hide_panel_tree"]').hide();
        $('[data-click="show_panel_tree"]').show();
    });
    $(document).on('click', '[data-click="show_panel_tree"]', function () {
        $('[data-context="tree_catalog"]').addClass('col-lg-3').removeClass('col-lg-1');
        $('[data-click="hide_panel_tree"]').show();
        $('[data-click="show_panel_tree"]').hide();
    });
    $(document).on('click', '[data-click="show_panel_classifiers"]', function () {
        $('[data-context="list_catalog"]').addClass('col-lg-3').removeClass('col-lg-1');
        $('[data-click="show_panel_classifiers"]').hide();
        $('[data-click="hide_panel_classifiers"]').show();
    });
    $(document).on('click', '[data-click="hide_panel_classifiers"]', function () {
        $('[data-context="list_catalog"]').removeClass('col-lg-3').addClass('col-lg-1');
        $('[data-click="show_panel_classifiers"]').show();
        $('[data-click="hide_panel_classifiers"]').hide();
    });
    // Изменение поля
    $(document).on('click', '[data-click="edit_field"]', function () {
        var id = $(this).closest('[data-id]').data('id');
        _classes_ClassifierItemData__WEBPACK_IMPORTED_MODULE_0__["ClassifierItemData"].editFieldById(id);
    });
    // Удаление поля
    $(document).on('click', '[data-click="delete_field"]', function () {
        var id = $(this).closest('[data-id]').data('id');
        if (confirm('Удалить поле?'))
            _classes_ClassifierItemData__WEBPACK_IMPORTED_MODULE_0__["ClassifierItemData"].deleteFieldById(id);
    });
    // Загрузка узла
    $(document).on('click', '.jstree-anchor', function () {
        var id = $(this).closest('li').attr('id');
        _classes_ClassifierItemData__WEBPACK_IMPORTED_MODULE_0__["ClassifierItemData"].loadDataById(id);
    });
    // Удаление каталога
    $('[data-click="delete_catalog"]').on('click', function () {
        system.send_request_object({
            'action': 'delete_catalog',
            'id': system.getLocalData('catalog_setting_modal', 'id')
        });
    });
    // Добавить поле в узел
    $(document).on('click', '[data-click="add_field_in_edit_mode"]', function () {
        $('#modal_add_field [name="num_sort"]').val($(this).attr('data-num'));
        $('#modal_add_field [name="id_field"]').val(system.getLocalData('now_load_field_id'));
        $('#modal_add_field [name="id_now_classifier"]').val(system.getLocalData('now_classifier')['id']);
        $('#modal_add_field').modal('show');
    });
    // Поднять поле выше
    $(document).on('click', '[data-click="move_top_field"]', function () {
        var $wrapper = $(this).closest('[data-sort]');
        var clone = $wrapper.clone();
        if ($('[data-click="panel_edit_mode"]').hasClass('on')) {
            $('[data-click="panel_edit_mode"]').trigger('click');
        }
        if ($wrapper.prev().length > 0) {
            $wrapper.prev().before(clone);
            $wrapper.remove();
            _classes_ClassifierTree__WEBPACK_IMPORTED_MODULE_2__["ClassifierTree"].moveField($wrapper.attr('data-id'), 'up');
        }
        $('[data-click="panel_edit_mode"]').trigger('click');
        // renum
    });
    // Опустить поле ниже
    $(document).on('click', '[data-click="move_down_field"]', function () {
        var $wrapper = $(this).closest('[data-sort]');
        var clone = $wrapper.clone();
        if ($('[data-click="panel_edit_mode"]').hasClass('on')) {
            $('[data-click="panel_edit_mode"]').trigger('click');
        }
        if ($wrapper.next().length > 0) {
            $wrapper.next().after(clone);
            $wrapper.remove();
            _classes_ClassifierTree__WEBPACK_IMPORTED_MODULE_2__["ClassifierTree"].moveField($wrapper.attr('data-id'), 'down');
        }
        $('[data-click="panel_edit_mode"]').trigger('click');
        // renum
    });
    // Включение режима редактирования
    $('[data-click="panel_edit_mode"]').on('click', function () {
        $(this).toggleClass('on');
        _controllers_catalogController__WEBPACK_IMPORTED_MODULE_1__["CatalogController"].render();
    });
    // Загрузка каталога
    $(document).on('click', '[data-click="load_classifier"]', function () {
        $('[data-click="load_classifier"]').removeClass('active');
        $(this).addClass('active');
        system.setLocalData($(this).closest('[data-local]')[0]);
        system.send_request_object({
            'action': 'load_classifier',
            'id': system.getLocalData('catalog_setting_modal', 'id')
        });
    });
}



/***/ }),

/***/ "./assets/src/js/controllers/cabinetController.ts":
/*!********************************************************!*\
  !*** ./assets/src/js/controllers/cabinetController.ts ***!
  \********************************************************/
/*! exports provided: CabinetController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabinetController", function() { return CabinetController; });
var CabinetController = /** @class */ (function () {
    function CabinetController() {
    }
    CabinetController.prototype.run = function () {
    };
    return CabinetController;
}());



/***/ }),

/***/ "./assets/src/js/controllers/catalogController.ts":
/*!********************************************************!*\
  !*** ./assets/src/js/controllers/catalogController.ts ***!
  \********************************************************/
/*! exports provided: CatalogController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogController", function() { return CatalogController; });
/* harmony import */ var _clickers_catalogClickers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../clickers/catalogClickers */ "./assets/src/js/clickers/catalogClickers.ts");
/* harmony import */ var _classes_Data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/Data */ "./assets/src/js/classes/Data.ts");


var CatalogController = /** @class */ (function () {
    function CatalogController() {
    }
    CatalogController.prototype.run = function () {
        $(document).on('change', '[data-type-privilege]', function () {
            var type = $(this).attr('data-type-privilege');
            var status = $(this).is(':checked') ? 'checked' : 'not checked';
            if (status == 'checked') {
                $(this).closest('[data-wrapper-id]').find("[data-privilege-type=\"" + type + "\"]").show();
            }
            else {
                $(this).closest('[data-wrapper-id]').find("[data-privilege-type=\"" + type + "\"]").hide();
            }
            switch (type) {
                case 'edit_classifier':
                case 'edit_privilege':
                    system.callMethod('manager_privilege', {
                        'type': type,
                        'status': status,
                        'id_user': $(this).closest('[data-id-privilege]').attr('data-id-privilege'),
                        'id_classifier': system.getLocalData('classifier_id_privilege'),
                        'action_privilege': 'edit_privilege'
                    });
                    break;
            }
        });
        $(document).on('input', '[data-input="search_classifiers"]', function () {
            $('[data-context="search_result"]').html('');
        });
        Object(_clickers_catalogClickers__WEBPACK_IMPORTED_MODULE_0__["clickersInit"])();
        $('[data-form="form_add_catalog"] #name_catalog').on('keyup', function () {
            var this_text = $(this).val();
            if (this_text.length > 0)
                $(this).closest('.modal-content').find('name-catalog').html('"' + this_text.trim() + '"');
            else
                $(this).closest('.modal-content').find('name-catalog').html('');
        });
        $('[data-submit]').on('click', function (e) {
            e.preventDefault();
            console.log($(this).data('submit'));
            var $form = document.querySelector('[data-form="' + $(this).data('submit') + '"]');
            $form.submit();
        });
    };
    CatalogController.renderBreadcrumbs = function () {
        if (_classes_Data__WEBPACK_IMPORTED_MODULE_1__["Data"].catalog_field_is_load) {
            console.log('renderBreadcrumbs');
            $('.breadcrumbs').show();
            var $now_li = $('li[aria-selected="true"]');
            var now_id = $now_li.attr('id');
            var now_name = $now_li.find('> a').html().split('</i>')[1];
            var bread_data = [
                {
                    'name': now_name,
                    'id': now_id
                }
            ];
            var has_parent_li = $now_li.closest('ul').closest('li').length > 0;
            while (has_parent_li) {
                $now_li = $now_li.closest('ul').closest('li[role="treeitem"]');
                now_id = $now_li.attr('id');
                now_name = $now_li.find('> a').html().split('</i>')[1];
                bread_data[bread_data.length] = {
                    'name': now_name,
                    'id': now_id
                };
                has_parent_li = $now_li.closest('ul').closest('li[role="treeitem"]').length > 0;
            }
            bread_data = bread_data.reverse();
            /*
             <div class="breadcrumbs" style="display: none;">
             <a href="/">Test</a> &gt;
             <a href="/">Test</a> &gt;
             <span>Текущий элемент</span>
             </div>
             */
            var bread_view = "";
            for (var i = 0; i < bread_data.length; i++) {
                var data = bread_data[i];
                if (i == bread_data.length - 1) {
                    bread_view += " <span>" + data.name + "</span>";
                }
                else {
                    bread_view += " <a href='#' data-click-breadcrumbs=\"" + data.id + "\">" + data.name + "</a> &gt";
                }
                $('.breadcrumbs').html(bread_view.trim());
                console.log(data);
            }
        }
        else {
            $('.breadcrumbs').hide();
        }
    };
    // Рендер всех необходимых элементов страницы с классификаторами
    CatalogController.render = function () {
        console.log('render');
        _classes_Data__WEBPACK_IMPORTED_MODULE_1__["Data"].mode_edit = $('[data-click="panel_edit_mode"]').hasClass('on');
        if (_classes_Data__WEBPACK_IMPORTED_MODULE_1__["Data"].catalog_field_is_load) {
            // Показываем панель загрузки
            $('[data-context="panel_edit"]').show();
        }
        else {
            // Показываем панель загрузки
            $('[data-context="panel_edit"]').hide();
        }
        // Удаляем кнопки добавления доп поля
        $('[data-context="active_element_data"] [data-item][data-init-edit="on"]').each(function () {
            $(this).removeAttr('data-init-edit');
            $(this).find('[data-context="edit_field"]').remove();
        });
        $('[data-context="active_element_data"] [data-num]').each(function () {
            $(this).remove();
        });
        var inum = 0;
        $('[data-context="active_element_data"] [data-item]').each(function () {
            $(this).attr('data-sort', ++inum);
        });
        // Если включен режим редактирования, то показыаем рядом со всеми полями кнопки редактирования
        if (_classes_Data__WEBPACK_IMPORTED_MODULE_1__["Data"].mode_edit) {
            var i_1 = 0;
            $('[data-context="active_element_data"] [data-item]').each(function () {
                i_1++;
                var sort = i_1;
                $(this).attr('data-init-edit', 'on');
                $(this).before("<div data-num=\"" + sort + "\" data-click=\"add_field_in_edit_mode\">\n                    <h6>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u043B\u0435</h6>\n                    <i class=\"fa fa-plus-square\"></i>\n                </div>");
                $(this).append("\n                <div data-context=\"edit_field\">\n                    <i data-click=\"move_top_field\" data-type=\"" + $(this).data('item') + "\" title=\"\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u0435 \u0432\u044B\u0448\u0435\" class=\"fa fa-arrow-circle-up\"></i>     \n                    <i data-click=\"move_down_field\" data-type=\"" + $(this).data('item') + "\" title=\"\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u0435 \u043D\u0438\u0436\u0435\" class=\"fa fa-arrow-circle-down\"></i>     \n                    <i data-click=\"edit_field\" data-type=\"" + $(this).data('item') + "\" title=\"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u043B\u0435\" class=\"fa fa-pencil-square\"></i>     \n                    <i data-click=\"delete_field\" title=\"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u043B\u0435\" class=\"fa fa-trash\"></i>   \n                </div>\n                ");
            });
            if (i_1 > 0 || _classes_Data__WEBPACK_IMPORTED_MODULE_1__["Data"].catalog_field_is_empty)
                $('[data-context="active_element_data"]').append("<div data-num=\"" + ++i_1 + "\" data-click=\"add_field_in_edit_mode\">\n                <h6>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u043B\u0435</h6>\n                <i class=\"fa fa-plus-square\"></i>\n            </div>");
        }
        this.renderBreadcrumbs();
    };
    return CatalogController;
}());



/***/ }),

/***/ "./assets/src/js/field_handlers/File.ts":
/*!**********************************************!*\
  !*** ./assets/src/js/field_handlers/File.ts ***!
  \**********************************************/
/*! exports provided: File */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return File; });
/* harmony import */ var _InterfaceField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InterfaceField */ "./assets/src/js/field_handlers/InterfaceField.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var File = /** @class */ (function (_super) {
    __extends(File, _super);
    function File() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    File.initScripts = function () {
        $(document).on('click', '[data-click="delete_file"]', function () {
            var $wrapper = $(this).closest('div');
            var id_photo = $wrapper.attr('data-id');
            $wrapper.remove();
            var now_object = system.getLocalData("now_field_instance");
            now_object.save(id_photo, {
                'action_field': 'delete_photo',
            }, false, true);
        });
        $(document).on('click', '[data-click="add_photo_gallery"]', function () {
            var id = system.generateRandId(10);
            $(this).before("\n                <div class=\"field__gallery__input_photo\" data-click=\"photo_wrapper\">\n                    <input type=\"file\" data-context=\"file_gallery_field\" name=\"file_" + id + "\">\n                </div>\n            ");
        });
    };
    File.prototype.handlerInit = function (e) {
        e.preventDefault();
        // создадим объект данных формы
        var data = new FormData();
        var i = 0;
        $('[data-context="file_gallery_field"]').each(function () {
            var files_attr = $(this)[0].files;
            if (files_attr.length > 0) {
                i++;
                data.append("file_load_" + i, files_attr[0]);
            }
        });
        _super.prototype.saveWithFiles.call(this, data);
        return true;
    };
    File.is_init = false;
    return File;
}(_InterfaceField__WEBPACK_IMPORTED_MODULE_0__["Field"]));



/***/ }),

/***/ "./assets/src/js/field_handlers/Gallery.ts":
/*!*************************************************!*\
  !*** ./assets/src/js/field_handlers/Gallery.ts ***!
  \*************************************************/
/*! exports provided: Gallery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gallery", function() { return Gallery; });
/* harmony import */ var _InterfaceField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InterfaceField */ "./assets/src/js/field_handlers/InterfaceField.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Gallery = /** @class */ (function (_super) {
    __extends(Gallery, _super);
    function Gallery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gallery.initScripts = function () {
        $(document).on('click', '[data-click="delete_photo_gallery"]', function () {
            var $wrapper = $(this).closest('div');
            var id_photo = $wrapper.attr('data-id');
            $wrapper.remove();
            var now_object = system.getLocalData("now_field_instance");
            now_object.save(id_photo, {
                'action_field': 'delete_photo',
            }, false, true);
            console.log(id_photo);
        });
        $(document).on('click', '[data-click="add_photo_gallery"]', function () {
            var id = system.generateRandId(10);
            $(this).before("\n                <div class=\"field__gallery__input_photo\" data-click=\"photo_wrapper\">\n                    <input type=\"file\" data-context=\"file_gallery_field\" name=\"file_" + id + "\">\n                </div>\n            ");
        });
    };
    Gallery.prototype.handlerInit = function (e) {
        e.preventDefault();
        // создадим объект данных формы
        var data = new FormData();
        var i = 0;
        $('[data-context="file_gallery_field"]').each(function () {
            var files_attr = $(this)[0].files;
            if (files_attr.length > 0) {
                i++;
                data.append("file_load_" + i, files_attr[0]);
            }
        });
        _super.prototype.saveWithFiles.call(this, data);
        return true;
    };
    Gallery.is_init = false;
    return Gallery;
}(_InterfaceField__WEBPACK_IMPORTED_MODULE_0__["Field"]));



/***/ }),

/***/ "./assets/src/js/field_handlers/Html.ts":
/*!**********************************************!*\
  !*** ./assets/src/js/field_handlers/Html.ts ***!
  \**********************************************/
/*! exports provided: Html */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Html", function() { return Html; });
/* harmony import */ var _InterfaceField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InterfaceField */ "./assets/src/js/field_handlers/InterfaceField.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Html = /** @class */ (function (_super) {
    __extends(Html, _super);
    function Html() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Html.initScripts = function () {
        $(document).on('click', '.tox input', function () { $(this).focus(); });
    };
    Html.onAfterOpenFieldModal = function () {
        tinymce.remove('#field_html_content');
        tinymce.init({
            //spellchecker_languages: "Russian=ru,Ukrainian=uk,English=en",
            //spellchecker_rpc_url: "/speller",
            language: 'ru',
            relative_urls: false,
            remove_script_host: false,
            convert_urls: false,
            selector: '#field_html_content',
            plugins: 'a11ychecker advcode casechange formatpainter linkchecker autolink lists checklist image permanentpen powerpaste fullscreen table advtable tinycomments link',
            toolbar: 'link addcomment showcomments casechange checklist code formatpainter permanentpen table fullscreen',
            toolbar_mode: 'floating',
            default_link_target: "_blank",
            link_context_toolbar: true,
            link_title: true,
            tinycomments_mode: 'embedded',
            images_upload_url: '/other/tinymce_files/upload.php',
            images_upload_handler: function (blobInfo, success, failure) {
                var xhr;
                var formData;
                xhr = new XMLHttpRequest();
                xhr.withCredentials = false;
                xhr.open('POST', '/other/tinymce_files/upload.php?classifier_id=' + system.local_data.now_classifier.id);
                xhr.onload = function () {
                    var json;
                    if (xhr.status != 200) {
                        failure('HTTP Error: ' + xhr.status);
                        return;
                    }
                    json = JSON.parse(xhr.responseText);
                    if (!json || typeof json.location != 'string') {
                        failure('Invalid JSON: ' + xhr.responseText);
                        return;
                    }
                    success(json.location);
                };
                formData = new FormData();
                formData.append('file', blobInfo.blob(), blobInfo.filename());
                xhr.send(formData);
            },
            tinycomments_author: User.surname + ' ' + User.name,
        });
    };
    Html.prototype.handlerInit = function (e) {
        e.preventDefault();
        console.log("\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A html \u043F\u043E\u043B\u044F (html)");
        var data = tinymce.activeEditor.getContent();
        if (data.length > 0) {
            // Сохраняем данные, передав параметры
            _super.prototype.save.call(this, data);
        }
        else {
            system.alert.add('Нельзя сохранить пустое поле', 'success');
        }
        return true;
    };
    Html.is_init = false;
    return Html;
}(_InterfaceField__WEBPACK_IMPORTED_MODULE_0__["Field"]));



/***/ }),

/***/ "./assets/src/js/field_handlers/InterfaceField.ts":
/*!********************************************************!*\
  !*** ./assets/src/js/field_handlers/InterfaceField.ts ***!
  \********************************************************/
/*! exports provided: Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./assets/src/js/functions.ts");

var Field = /** @class */ (function () {
    function Field() {
    }
    /**
     *
     * @param params - доп данные для сохранения
     * @param data_for_save
     */
    Field.prototype.save = function (data_for_save, params, need_close_modal, hide_alerts) {
        if (params === void 0) { params = null; }
        if (need_close_modal === void 0) { need_close_modal = true; }
        if (hide_alerts === void 0) { hide_alerts = false; }
        var params_send;
        if (params == null) {
            params_send = {};
        }
        else {
            params_send = params;
        }
        params_send["type_field"] = Field.type_field;
        params_send["id_field"] = Field.id_field;
        params_send["data_for_save"] = data_for_save;
        params_send["need_close_modal"] = need_close_modal;
        params_send["need_hide_alerts"] = hide_alerts;
        if (hide_alerts == false)
            Object(_functions__WEBPACK_IMPORTED_MODULE_0__["lockBody"])();
        system.callMethod('save_field', params_send);
    };
    /**
     *
     * @param params - доп данные для сохранения
     * @param form_data
     */
    Field.prototype.saveWithFiles = function (form_data, params) {
        if (params === void 0) { params = null; }
        if (form_data instanceof FormData) {
            //TODO: Add params
            /*
             form_data.append(`data_for_save`, params);
            */
            if (params != null) {
                var keys_params = Object.keys(params);
                for (var i = 0; i < keys_params.length; i++) {
                    form_data.append(keys_params[i], params[keys_params[i]]);
                }
            }
            form_data.append("type_field", Field.type_field);
            form_data.append("id_field", Field.id_field);
            form_data.append("data_for_save", 'is_file');
            Object(_functions__WEBPACK_IMPORTED_MODULE_0__["lockBody"])();
            system.callMethodWithFile('save_field', form_data);
        }
    };
    /*    constructor(type_field: string, id_field: string)
        {
            this.type_field = type_field;
            this.id_field = id_field;
        }*/
    Field.prototype.handlerInit = function (e) {
        return true;
    };
    // Отвечает за получение данных поля для каких-либо действий обновления существующего рендера
    Field.prototype.refresh = function (action, params) {
        var params_send;
        if (params == null) {
            params_send = {};
        }
        else {
            params_send = params;
        }
        params_send["type_field"] = Field.type_field;
        params_send["id_field"] = Field.id_field;
        params_send["action_refresh"] = action;
        system.callMethod('refresh_field', params_send);
    };
    Field.prototype.init = function (id_edit_form) {
        Field.$form = $("#" + id_edit_form);
        Field.selector_form = "#" + id_edit_form;
        if (Field.$form.length > 0) {
            $(document).on('submit', "#" + id_edit_form, this.handlerInit);
            return true;
        }
        return false;
    };
    Field.prototype.handlerRefresh = function (response) { };
    Field.prototype.handlerAfterSave = function (response) {
    };
    return Field;
}());



/***/ }),

/***/ "./assets/src/js/field_handlers/Number.ts":
/*!************************************************!*\
  !*** ./assets/src/js/field_handlers/Number.ts ***!
  \************************************************/
/*! exports provided: Number */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Number", function() { return Number; });
/* harmony import */ var _InterfaceField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InterfaceField */ "./assets/src/js/field_handlers/InterfaceField.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Number = /** @class */ (function (_super) {
    __extends(Number, _super);
    function Number() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Number.initScripts = function () {
    };
    Number.prototype.handlerInit = function (e) {
        e.preventDefault();
        console.log("\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u043B\u044F (text)");
        var data = $(_InterfaceField__WEBPACK_IMPORTED_MODULE_0__["Field"].selector_form).find('input[type="number"]').val().trim();
        if (data.length > 0) {
            // Сохраняем данные, передав параметры
            _super.prototype.save.call(this, data);
        }
        else {
            system.alert.add('Нельзя сохранить пустое поле с числом', 'success');
        }
        return true;
    };
    Number.is_init = false;
    return Number;
}(_InterfaceField__WEBPACK_IMPORTED_MODULE_0__["Field"]));



/***/ }),

/***/ "./assets/src/js/field_handlers/Table.ts":
/*!***********************************************!*\
  !*** ./assets/src/js/field_handlers/Table.ts ***!
  \***********************************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var _InterfaceField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InterfaceField */ "./assets/src/js/field_handlers/InterfaceField.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions */ "./assets/src/js/functions.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Table.renumColumns = function () {
        var num = 0;
        $('[data-type]').each(function () {
            if ($(this).data('type') == 'saved' || $(this).data('type') == 'parent') {
                num++;
                $(this).find('[data-context="num_column"]').html(num);
            }
        });
    };
    Table.initContextMenu = function () {
        setTimeout(function () {
            $.contextMenu('destroy', '[data-context="row_table"]');
            $('[data-context="row_table"]').removeClass('context-menu-active');
            $.contextMenu({
                selector: '#modal_edit_field [data-context="row_table"]',
                items: {
                    add_up: {
                        name: "Добавить сверху", callback: function (key, opt) {
                            var now_object = system.getLocalData("now_field_instance");
                            var clone = $(this).clone();
                            clone.find('input').val('');
                            $(this).before(clone);
                            Table.initContextMenu();
                            Table.renumColumnData();
                            now_object.saveRows();
                        }
                    },
                    add_down: {
                        name: "Добавить снизу", callback: function (key, opt) {
                            var now_object = system.getLocalData("now_field_instance");
                            var clone = $(this).clone();
                            clone.find('input').val('');
                            $(this).after(clone);
                            Table.initContextMenu();
                            Table.renumColumnData();
                            now_object.saveRows();
                        }
                    },
                    up: {
                        name: "Поднять вверх", callback: function (key, opt) {
                            var now_object = system.getLocalData("now_field_instance");
                            var clone = $(this).clone();
                            var prev = $(this).prev();
                            if (prev.length != 0) {
                                prev.before(clone);
                                $(this).remove();
                                Table.initContextMenu();
                                Table.renumColumnData();
                                now_object.saveRows();
                            }
                        }
                    },
                    down: {
                        name: "Опустить вниз", callback: function (key, opt) {
                            var now_object = system.getLocalData("now_field_instance");
                            var clone = $(this).clone();
                            var next = $(this).next();
                            if (next.length != 0) {
                                next.after(clone);
                                $(this).remove();
                                Table.initContextMenu();
                                Table.renumColumnData();
                                now_object.saveRows();
                            }
                        }
                    },
                    delete: {
                        name: "Удалить", callback: function (key, opt) {
                            var now_object = system.getLocalData("now_field_instance");
                            $(this).remove();
                            Table.initContextMenu();
                            Table.renumColumnData();
                            now_object.saveRows();
                        }
                    },
                    delete_all: {
                        name: "Удалить все строки", callback: function (key, opt) {
                            var now_object = system.getLocalData("now_field_instance");
                            $('#tableData [data-context="row_table"]:not(:last)').remove();
                            Table.initContextMenu();
                            Table.renumColumnData();
                            now_object.saveRows();
                        }
                    },
                }
            });
        }, 200);
    };
    Table.initScripts = function () {
        Table.initContextMenu();
        $(document).on('click', '[data-click="export_xls_table"]', function (e) {
            e.preventDefault();
            console.log(system.getLocalData("now_field_instance"));
            location.href = "/doc-generator/excel?uuid=" + _InterfaceField__WEBPACK_IMPORTED_MODULE_0__["Field"].id_field;
        });
        $(document).on('click', '[data-click="import_csv"]', function (e) {
            e.preventDefault();
            var now_object = system.getLocalData("now_field_instance");
            now_object.importCsv();
        });
        $(document).on('click', '[data-click="column_move_up"]', function () {
            var clone = $(this).closest('tr').clone();
            var prev = $(this).closest('tr').prev();
            if (prev.attr('data-type') !== 'parent') {
                $(this).closest('tr').prev().before(clone);
                $(this).closest('tr').remove();
                var now_object = system.getLocalData("now_field_instance");
                now_object.saveColumns();
                Table.renumColumns();
            }
        });
        $(document).on('click', '[data-click="column_move_down"]', function () {
            var clone = $(this).closest('tr').clone();
            var next = $(this).closest('tr').next();
            if (next.length > 0) {
                $(this).closest('tr').next().after(clone);
                $(this).closest('tr').remove();
                var now_object = system.getLocalData("now_field_instance");
                now_object.saveColumns();
                Table.renumColumns();
            }
        });
        $(document).on('input', '[data-context="row_value"]', function () {
            var now_object = system.getLocalData("now_field_instance");
            now_object.saveRows();
        });
        $(document).on('click', '[data-click="column_delete"]', function (e) {
            $(this).closest('tr').remove();
            Table.renumColumns();
        });
        $(document).on('click', '[data-click="remove_all_column_table"]', function (e) {
            $('#tableColumns tr:not(:last)').remove();
            $('[data-click="save_column"]').trigger('click');
            Table.renumColumns();
        });
        $(document).on('input', '[data-context="name_column"]', function (e) {
            var $tr = $(this).closest('tr');
            $tr.find('[data-click="save_column"]').show();
            Table.renumColumns();
        });
        $(document).on('click', '[data-click="save_column"]', function (e) {
            var now_object = system.getLocalData("now_field_instance");
            var $tr = $(this).closest('tr');
            var now_key = $tr.find('[data-context="key_column"]').val().trim();
            var now_name = $tr.find('[data-context="name_column"]').val().trim();
            var count = 0;
            $('[data-context="key_column"]').each(function () {
                if ($(this).val().trim() == now_key)
                    count++;
            });
            if (count > 1) {
                system.alert.add('Такой ключ уже существует', 'danger');
                return;
            }
            if (now_key.length != 0) {
                if (now_name.length != 0) {
                    $(this).closest('td').find('button').show();
                    $(this).hide();
                    $tr.attr('data-type', 'saved');
                    now_object.saveColumns();
                    Object(_functions__WEBPACK_IMPORTED_MODULE_1__["DoWithTrue"])(function () {
                        now_object.saveRows();
                        Object(_functions__WEBPACK_IMPORTED_MODULE_1__["DoWithTrue"])(function () {
                            now_object.refreshRown();
                            Object(_functions__WEBPACK_IMPORTED_MODULE_1__["DoWithTrue"])(function () {
                                Table.renumColumns();
                            }, function () {
                                return Table.save_rows_finish;
                            });
                        }, function () {
                            return Table.save_rows_finish;
                        });
                    }, function () {
                        return Table.save_columns_finish;
                    }, 100, 50);
                    /*  setTimeout(() => {
                          now_object.saveRows();
  
                          setTimeout(() => {
                              now_object.refreshRown();
                          }, 4000);
                      }, 4000);*/
                    $tr.find('[data-context="key_column"]').attr('disabled', true);
                }
                else {
                    system.alert.add('Введите имя колонки!', 'danger');
                }
            }
            else {
                system.alert.add('Введите уникальный ключ колонки!', 'danger');
            }
        });
        $(document).on('click', '[data-click="add_column_table"]', function (e) {
            e.preventDefault();
            $('#tableColumns tbody').append("\n                <tr data-type=\"not_saved\">\n                    <th data-context=\"num_column\"></th>\n                    <td style=\"display: none;\"><input class=\"form-control\" data-context=\"key_column\" value=\"" + system.uuidv4() + "\" type=\"text\" placeholder=\"\u041A\u043B\u044E\u0447 \u043A\u043E\u043B\u043E\u043D\u043A\u0438\"></td>\n                    <td><input class=\"form-control\" data-context=\"name_column\" type=\"text\" placeholder=\"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043B\u043E\u043D\u043A\u0438\"></td>\n                    <td>\n                        <button data-click=\"save_column\" type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i></button>\n                        <button style=\"display: none;\" data-click=\"column_move_up\" type=\"button\" class=\"btn btn-info\"><i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i></button>\n                        <button style=\"display: none;\" data-click=\"column_move_down\" type=\"button\" class=\"btn btn-info\"><i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i></button>\n                        <button style=\"display: none;\" data-click=\"column_delete\" type=\"button\" class=\"btn btn-danger\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n                    </td>\n                </tr>\n            ");
        });
        $(document).on('change', '[name="show_only_parent_fields_table"]', function () {
            if ($(this).is(':checked')) {
                var parent_id = $('li[role="treeitem"][aria-selected="true"]').closest('ul').closest('li[role="treeitem"]').attr('id');
                if (typeof parent_id != 'undefined') {
                    var count = 0;
                    $('[name="root_table"]').find('option').each(function () {
                        if ($(this).attr('data-id-item') != parent_id) {
                            $(this).hide();
                        }
                        else {
                            count++;
                            $(this).show();
                            if (count == 1) {
                                $(this).prop('selected', true);
                            }
                        }
                    });
                    if (count == 0) {
                        $('[data-error="not_found_table_parent"]').show();
                        $('[name="root_table"]').hide();
                    }
                    else {
                        $('[name="root_table"]').show();
                        $('[data-error="not_found_table_parent"]').hide();
                    }
                }
            }
            else {
                console.log('not checked');
                $('[name="root_table"]').show();
                $('[data-error="not_found_table_parent"]').hide();
                $('[name="root_table"]').find('option').each(function () {
                    $(this).show();
                });
            }
        });
        $(document).on('change', '[data-type-field="table"] form', function () {
            if ($('[data-context="change_pid_table"]').length > 0) {
                $(this).serializeArray().forEach(function (item, i) {
                    if (item['name'] == 'type_table_parent') {
                        if (item['value'] == 'root') {
                            $('[data-context="select_root_table"]').hide();
                        }
                        else {
                            $('[data-context="select_root_table"]').show();
                            if (typeof $('[data-context="select_root_table"]').attr('data-init') == 'undefined') {
                                $('[data-context="select_root_table"]').attr('data-init', 'true');
                            }
                        }
                    }
                });
            }
        });
    };
    Table.renumColumnData = function () {
        var num = 0;
        $('[data-context="row_num"]').each(function () {
            num++;
            $(this).html(num);
        });
    };
    Table.prototype.handlerAfterSave = function (response) {
        console.log('handlerAfterSave');
        Table.save_rows_finish = true;
        Table.save_columns_finish = true;
    };
    Table.prototype.saveColumns = function () {
        var now_object = system.getLocalData("now_field_instance");
        var data = {
            'type_save': 'save_columns',
            'name_table': $('[name="name_table"]').val().trim(),
        };
        var data_column = {};
        $('#tableColumns tbody tr[data-type="saved"]').each(function () {
            data_column[$(this).find('[data-context="key_column"]').val().trim()] = {
                'name': $(this).find('[data-context="name_column"]').val().trim()
            };
        });
        data['columns'] = data_column;
        data['rows'] = [];
        data['not_close_modal_edit'] = true;
        Table.save_columns_finish = false;
        now_object.save(JSON.stringify(data), null, false);
    };
    Table.prototype.saveRows = function () {
        console.log('saveRows');
        var keys = {};
        var data = [];
        // Узнаем список ключей
        $('#tableData thead th').each(function () {
            var key = $(this).html().trim();
            if (key != '#') {
                keys[key] = '';
            }
        });
        // Узнаем список ключей
        $('#tableData [data-context="row_table"]').each(function () {
            var data_row = {};
            $(this).find('[data-key]').each(function () {
                var value = $(this).find('input').val();
                var key = $(this).attr('data-key');
                data_row[key] = value;
            });
            data[data.length] = data_row;
        });
        var data_save_rows = {};
        data_save_rows['data_for_save'] = data;
        data_save_rows['type_save'] = 'save_rows';
        data_save_rows['name_table'] = $('#nameTable').val();
        Table.save_rows_finish = false;
        _super.prototype.save.call(this, JSON.stringify(data_save_rows), null, false, true);
    };
    Table.prototype.importCsv = function () {
        // создадим объект данных формы
        var data = new FormData();
        var i = 0;
        $('[data-context="file_csv"]').each(function () {
            var files_attr = $(this)[0].files;
            if (files_attr.length > 0) {
                i++;
                data.append("file_load_" + i, files_attr[0]);
            }
        });
        data.append("has_not_header", $('[name="csv_has_not_header"]').is(':checked'));
        _super.prototype.saveWithFiles.call(this, data, {
            'type_save': 'import_csv'
        });
    };
    Table.prototype.refreshRown = function () {
        Table.refresh_rows_finish = false;
        var data = {};
        _super.prototype.refresh.call(this, 'refresh_rows', data);
    };
    Table.prototype.refreshColumns = function () {
        Table.refresh_columns_finish = false;
        var data = {};
        _super.prototype.refresh.call(this, 'refresh_columns', data);
    };
    Table.prototype.handlerInit = function (e) {
        e.preventDefault();
        var name_table = $('[name="name_table"]').val();
        var type_save = $('[name="type_save"]').val();
        var data = {};
        if (name_table.length > 0) {
            // Первичное сохранение
            if (type_save == 'first_save') {
                data['type_save'] = type_save;
                data['name_table'] = name_table;
                data['type_table'] = $('[name="type_table_parent"]:checked').val();
                if (data['type_table'] == 'other_table') {
                    data['type_table'] = $('[name="root_table"]').val();
                }
                _super.prototype.save.call(this, JSON.stringify(data));
            }
            else if (type_save == 'second_save') {
                var now_object = system.getLocalData("now_field_instance");
                // При нажатии на кнопку сохранить
                now_object.saveColumns();
                // DoWithTrue(callback_true: any, callback_do: any, delay?: number, max_count?: number)
                Object(_functions__WEBPACK_IMPORTED_MODULE_1__["DoWithTrue"])(function () {
                    now_object.saveRows();
                    Object(_functions__WEBPACK_IMPORTED_MODULE_1__["DoWithTrue"])(function () {
                        now_object.refreshColumns();
                    }, function () {
                        return Table.save_rows_finish;
                    }, 100, 50);
                }, function () {
                    return Table.save_columns_finish;
                }, 100, 50);
                /*      setTimeout(() => {
      
                          setTimeout(() => {
                              now_object.refreshColumns();
                          }, 4000);
      
                      }, 4000);*/
            }
            else {
            }
        }
        return true;
        // super.saveWithFiles(data);
    };
    Table.prototype.handlerRefresh = function (response) {
        console.log('handlerRefresh Table');
        console.log(response);
        switch (response.response.refresh_data.action_refresh) {
            case 'refresh_rows':
                Table.refresh_rows_finish = true;
                $('#tableData').each(function () {
                    $(this).html("<br>" + response.response.refresh_data.html);
                });
                Table.initContextMenu();
                break;
            case 'refresh_columns':
                Table.refresh_rows_finish = true;
                $('#tableColumns').html("<br>" + response.response.refresh_data.html);
                break;
        }
    };
    Table.is_init = false;
    Table.save_columns_finish = false;
    Table.save_rows_finish = false;
    Table.refresh_columns_finish = false;
    Table.refresh_rows_finish = false;
    return Table;
}(_InterfaceField__WEBPACK_IMPORTED_MODULE_0__["Field"]));



/***/ }),

/***/ "./assets/src/js/field_handlers/Text.ts":
/*!**********************************************!*\
  !*** ./assets/src/js/field_handlers/Text.ts ***!
  \**********************************************/
/*! exports provided: Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var _InterfaceField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InterfaceField */ "./assets/src/js/field_handlers/InterfaceField.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Text.initScripts = function () {
    };
    Text.prototype.handlerInit = function (e) {
        e.preventDefault();
        console.log("\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u043B\u044F (text)");
        var data = $(_InterfaceField__WEBPACK_IMPORTED_MODULE_0__["Field"].selector_form).find('textarea').val().trim();
        if (data.length > 0) {
            // Сохраняем данные, передав параметры
            _super.prototype.save.call(this, data);
        }
        else {
            system.alert.add('Нельзя сохранить пустое поле', 'success');
        }
        return true;
    };
    Text.is_init = false;
    return Text;
}(_InterfaceField__WEBPACK_IMPORTED_MODULE_0__["Field"]));



/***/ }),

/***/ "./assets/src/js/functions.ts":
/*!************************************!*\
  !*** ./assets/src/js/functions.ts ***!
  \************************************/
/*! exports provided: hideLoader, emptyForm, getLoaderDom, lockBody, unlockBody, DoWithTrue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideLoader", function() { return hideLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyForm", function() { return emptyForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoaderDom", function() { return getLoaderDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lockBody", function() { return lockBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unlockBody", function() { return unlockBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoWithTrue", function() { return DoWithTrue; });
// Скрыть крутилку загрузки форм
function hideLoader(form_id, callback) {
    setTimeout(function () {
        var element_form = $('[data-form-id="' + form_id + '"]');
        element_form.find('.form__body').fadeTo("opacity", 1);
        element_form.find('.form__loader').hide();
        callback();
    }, 1000);
}
function lockBody() {
    $('body').attr('data-lock', 'on');
    $('.load_lock').show();
}
function DoWithTrue(callback_do, callback_true, delay, max_count) {
    delay = delay || 200;
    max_count = max_count || 10;
    var count_iterations = 0;
    var interval_action = setInterval(function () {
        count_iterations++;
        if (count_iterations > max_count) {
            clearInterval(interval_action);
        }
        if (callback_true()) {
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
function emptyForm(form_id) {
    $('[data-form-id="' + form_id + '"]')
        .find('input[type="text"], input[type="email"], input[type="number"]').each(function () {
        $(this).val('');
    });
}
// Вернуть dom крутилки
function getLoaderDom() {
    return " <div class=\"spinner-border m-auto\" role=\"status\">\n              <span class=\"sr-only\">Loading...</span>\n            </div>";
}



/***/ }),

/***/ "./assets/src/js/index.ts":
/*!********************************!*\
  !*** ./assets/src/js/index.ts ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../css/app.scss */ "./assets/src/css/app.scss");
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "./assets/src/js/router.ts");
/* harmony import */ var _renders_renders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renders/renders */ "./assets/src/js/renders/renders.ts");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init */ "./assets/src/js/init.ts");
/* harmony import */ var _renders_rendersField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renders/rendersField */ "./assets/src/js/renders/rendersField.ts");
/* harmony import */ var _renders_rendersCatalog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renders/rendersCatalog */ "./assets/src/js/renders/rendersCatalog.ts");
 // Импортируем стили





Object(_init__WEBPACK_IMPORTED_MODULE_3__["init"])();
// Инициируем рендеры
Object(_renders_renders__WEBPACK_IMPORTED_MODULE_2__["rendersRequire"])();
// Рендеры связанные с полями
Object(_renders_rendersField__WEBPACK_IMPORTED_MODULE_4__["rendersField"])();
// Рендеры связанные с каталогом
Object(_renders_rendersCatalog__WEBPACK_IMPORTED_MODULE_5__["rendersCatalog"])();
// Запускаем роутер
Object(_router__WEBPACK_IMPORTED_MODULE_1__["router"])();


/***/ }),

/***/ "./assets/src/js/init.ts":
/*!*******************************!*\
  !*** ./assets/src/js/init.ts ***!
  \*******************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./assets/src/js/functions.ts");

function init() {
    // Анимация крутилки при submit форм
    $('.form').submit(function () {
        $(this).find('.form__body').fadeTo("opacity", 0);
        $(this).find('.form__loader').show();
    });
    // Поиск компонентов и вставка крутилок
    $('section[data-component]').each(function () {
        $(this).html(Object(_functions__WEBPACK_IMPORTED_MODULE_0__["getLoaderDom"])());
    });
    $(document).on('click', '.load_lock', function () {
        Object(_functions__WEBPACK_IMPORTED_MODULE_0__["unlockBody"])();
    });
    // Слушатель открытия модальных окон
    $(document).on('click', '[data-modal]', function () {
        var modal_id = $(this).data('modal');
        $(modal_id).modal('show');
        switch (modal_id) {
            case '#modal_setting_catalog':
                system.setLocalData($(this).closest('[data-local]')[0]);
                console.table(system.local_data);
                $('#modal_setting_catalog').find('name-catalog').text(system.getLocalData('catalog_setting_modal', 'name'));
                $('[data-form="form_edit_catalog"]').attr({ 'data-id-catalog': system.getLocalData('catalog_setting_modal', 'id') });
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



/***/ }),

/***/ "./assets/src/js/renders/renders.ts":
/*!******************************************!*\
  !*** ./assets/src/js/renders/renders.ts ***!
  \******************************************/
/*! exports provided: rendersRequire */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rendersRequire", function() { return rendersRequire; });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./assets/src/js/functions.ts");

function rendersRequire() {
    // Проверка смены данных пользователя
    render.render_forgot_password = function (data) {
        if (data.response.result == true) {
            system.alert.add('Новый пароль отправлен на email', 'success');
            Object(_functions__WEBPACK_IMPORTED_MODULE_0__["hideLoader"])(data.response.form_id, function () {
            });
        }
        else {
            system.alert.add(data.response.error, 'danger');
            Object(_functions__WEBPACK_IMPORTED_MODULE_0__["hideLoader"])(data.response.form_id, function () {
            });
        }
    };
    // Проверка смены данных пользователя
    render.render_check_change_data = function (data) {
        if (data.response.result == true) {
            system.alert.add('Данные успешно изменены!', 'success');
            Object(_functions__WEBPACK_IMPORTED_MODULE_0__["hideLoader"])(data.response.form_id, function () {
            });
        }
        else {
            system.alert.add(data.response.error, 'danger');
            Object(_functions__WEBPACK_IMPORTED_MODULE_0__["hideLoader"])(data.response.form_id, function () {
            });
        }
    };
    // Проверка входа
    render.render_check_login_form = function (data) {
        if (data.response.result == true)
            system.redirect('/cabinet');
        else {
            system.alert.add('Ошибка авторизации!', 'danger');
            Object(_functions__WEBPACK_IMPORTED_MODULE_0__["hideLoader"])(data.response.form_id, function () {
                system.set_errors_form(data);
            });
        }
    };
    // Проверка регистрации
    render.render_check_sign_up_form = function (data) {
        if (data.response.result == true)
            system.redirect('/cabinet');
        else {
            system.alert.add('Ошибка регистрации!', 'danger');
            Object(_functions__WEBPACK_IMPORTED_MODULE_0__["hideLoader"])(data.response.form_id, function () {
                system.set_errors_form(data);
            });
        }
    };
}



/***/ }),

/***/ "./assets/src/js/renders/rendersCatalog.ts":
/*!*************************************************!*\
  !*** ./assets/src/js/renders/rendersCatalog.ts ***!
  \*************************************************/
/*! exports provided: rendersCatalog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rendersCatalog", function() { return rendersCatalog; });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./assets/src/js/functions.ts");
/* harmony import */ var _classes_ClassifierTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/ClassifierTree */ "./assets/src/js/classes/ClassifierTree.ts");
/* harmony import */ var _classes_Data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/Data */ "./assets/src/js/classes/Data.ts");
/* harmony import */ var _controllers_catalogController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/catalogController */ "./assets/src/js/controllers/catalogController.ts");




function rendersCatalog() {
    // После операции поиска
    render.render_search_classifiers = function (data) {
        $('[data-context="search_result"]').html(data.response.view);
    };
    // После нажатия на кнопку права доступа
    render.render_manager_privilege = function (data) {
        if (data.response.result == true) {
            switch (data.response.action_privilege) {
                case 'add_email':
                    system.alert.add('Права доступа успешно добавлены!', 'success');
                    system.callMethod('manager_privilege', {
                        'id_classifier': system.getLocalData('classifier_id_privilege'),
                        'action_privilege': 'get_privilege_list'
                    });
                    break;
                case 'get_privilege_list':
                    $('[data-context="privilege_load"]').hide();
                    $('[data-context="privilege_list"]').html(data.response.view);
                    $('[data-context="privilege_list"]').show();
                    break;
            }
        }
        else {
        }
    };
    // После экспорта классификатора
    render.render_import_classifier = function (data) {
        if (data.response.result == true) {
            $('#modal_import_classifier').modal('hide');
            system.alert.add('Импорт успешно закончен!', 'success');
        }
        else {
        }
    };
    // После экспорта классификатора
    render.render_export_classifier = function (data) {
        var link = document.createElement('a');
        link.setAttribute('href', data.response.export_file);
        link.setAttribute('download', 'export');
        link.click();
        link.remove();
    };
    // Загрузка узла
    render.render_load_data_item = function (data) {
        Object(_functions__WEBPACK_IMPORTED_MODULE_0__["unlockBody"])();
        if ($('[data-click="panel_edit_mode"]').hasClass('on')) {
            $('[data-click="panel_edit_mode"]').trigger('click');
            setTimeout(function () {
                if (!$('[data-click="panel_edit_mode"]').hasClass('on'))
                    $('[data-click="panel_edit_mode"]').trigger('click');
            }, 300);
        }
        if (data.response.result === true) {
            $('[data-click="panel_edit_mode"]').removeClass('on');
            _classes_Data__WEBPACK_IMPORTED_MODULE_2__["Data"].catalog_field_is_load = true;
            _classes_Data__WEBPACK_IMPORTED_MODULE_2__["Data"].catalog_field_is_empty = false;
            _classes_Data__WEBPACK_IMPORTED_MODULE_2__["Data"].catalog_is_load = true;
            _controllers_catalogController__WEBPACK_IMPORTED_MODULE_3__["CatalogController"].render();
            $('[data-context="active_element_data"]').empty().html(data.response.view);
            $('[data-item-wrapper="gallery"] > div').slick({
                infinite: true,
                slidesToShow: 5,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false,
                slidesToScroll: 1
            });
            system.setLocalDataByKey('now_load_field_id', data.response.id);
        }
        else {
            _classes_Data__WEBPACK_IMPORTED_MODULE_2__["Data"].catalog_field_is_load = true;
            _classes_Data__WEBPACK_IMPORTED_MODULE_2__["Data"].catalog_field_is_empty = true;
            _classes_Data__WEBPACK_IMPORTED_MODULE_2__["Data"].catalog_is_load = true;
            _controllers_catalogController__WEBPACK_IMPORTED_MODULE_3__["CatalogController"].render();
            $('[data-context="active_element_data"]').empty();
            system.setLocalDataByKey('now_load_field_id', data.response.id);
        }
        if (!data.response.can_edit) {
            $('[data-click="panel_edit_mode"]').hide();
        }
        else {
            $('[data-click="panel_edit_mode"]').show();
        }
    };
    // Сохранение каталога
    render.render_save_classifier = function (data) {
        system.alert.add('Классификатор успешно сохранен!', 'success');
    };
    // Создание каталога
    render.render_add_catalog = function (data) {
        if (data.response.result == true) {
            $('#modal_add_catalog').modal('hide');
            system.alert.add('Классификатор успешно создан!', 'success');
            // Обновляем компонент
            system.load_component('catalog_list', Object(_functions__WEBPACK_IMPORTED_MODULE_0__["getLoaderDom"])());
        }
        else
            system.alert.add('Ошибка создания справочника!!', 'danger');
        Object(_functions__WEBPACK_IMPORTED_MODULE_0__["hideLoader"])(data.response.form_id, function () {
            if (data.response.result == true)
                Object(_functions__WEBPACK_IMPORTED_MODULE_0__["emptyForm"])(data.response.form_id);
            system.set_errors_form(data);
        });
    };
    // Изменение каталога
    render.render_edit_catalog = function (data) {
        if (data.response.result == true) {
            system.alert.add('Классификатор успешно изменен!', 'success');
            // Обновляем компонент
            system.load_component('catalog_list', Object(_functions__WEBPACK_IMPORTED_MODULE_0__["getLoaderDom"])());
        }
        else
            system.alert.add('Ошибка изменения классификатора!!', 'danger');
        Object(_functions__WEBPACK_IMPORTED_MODULE_0__["hideLoader"])(data.response.form_id, function () {
            if (data.response.result == true) {
                Object(_functions__WEBPACK_IMPORTED_MODULE_0__["emptyForm"])(data.response.form_id);
                $('#modal_setting_catalog').modal('hide');
            }
            system.set_errors_form(data);
        });
    };
    // Загрузить классификатор
    render.render_load_classifier = function (data) {
        // $('[data-context="data_tree_catalog"]').empty().html('Инициализация классификатора..');
        if (data.response.result == true) {
            data.response.classifier_content = {
                core: {
                    'check_callback': true,
                    "themes": { "stripes": true },
                    'data': data.response.classifier_content
                }
            };
            system.setLocalDataByKey('now_classifier', data.response);
            // Загружаем классификатор
            _classes_ClassifierTree__WEBPACK_IMPORTED_MODULE_1__["ClassifierTree"].loadClassifier();
            // Помечаем что каталог загружен
            _classes_Data__WEBPACK_IMPORTED_MODULE_2__["Data"].catalog_is_load = true;
            $('[data-click="panel_edit_mode"]').removeClass('on');
            _controllers_catalogController__WEBPACK_IMPORTED_MODULE_3__["CatalogController"].render();
            system.alert.add('Классификатор успешно загружен!', 'success');
            /*         setTimeout(() => {
         
                         $('[aria-level="1"].jstree-closed').each(function () {
                             $(this).find('> .jstree-icon').trigger('click');
                         });
                     }, 300);*/
        }
    };
    // Изменение каталога
    render.render_delete_catalog = function (data) {
        if (data.response.result == true) {
            system.alert.add('Классификатор успешно удален!', 'success');
            // Обновляем компонент
            system.load_component('catalog_list', Object(_functions__WEBPACK_IMPORTED_MODULE_0__["getLoaderDom"])());
        }
        else
            system.alert.add('Ошибка удаления классификатора!!', 'danger');
    };
}



/***/ }),

/***/ "./assets/src/js/renders/rendersField.ts":
/*!***********************************************!*\
  !*** ./assets/src/js/renders/rendersField.ts ***!
  \***********************************************/
/*! exports provided: rendersField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rendersField", function() { return rendersField; });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ "./assets/src/js/functions.ts");
/* harmony import */ var _field_handlers_InterfaceField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../field_handlers/InterfaceField */ "./assets/src/js/field_handlers/InterfaceField.ts");
/* harmony import */ var _classes_FieldManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/FieldManager */ "./assets/src/js/classes/FieldManager.ts");



function rendersField() {
    // Проверка после запроса на обновление каких-либо данных поля
    render.render_refresh_field = function (data) {
        var now_object = system.getLocalData("now_field_instance");
        now_object.handlerRefresh(data);
    };
    // Проверка после сохранения поля
    render.render_save_field = function (data) {
        var now_object_field = system.getLocalData("now_field_instance");
        now_object_field.handlerAfterSave(data);
        if (data.response.result == true) {
            if (data.response.need_hide_alerts != 'true')
                system.alert.add('Поле успешно сохранено!', 'success');
        }
        else {
            system.alert.add('Поле не удалось сохранить', 'danger');
        }
        if (data.response.need_hide_alerts != 'true')
            Object(_functions__WEBPACK_IMPORTED_MODULE_0__["unlockBody"])();
        if (data.response.need_close_modal != 'false') {
            $('#modal_edit_field').modal('hide');
        }
        if (data.response.need_hide_alerts != 'true')
            $('a.jstree-clicked').trigger('click');
        if (data.response.need_hide_alerts != 'true') {
            setTimeout(function () {
                // Перегружаем режим редактирования
                $('[data-click="panel_edit_mode"]').removeClass('on').trigger('click');
            }, 100);
        }
    };
    // Проверка после редактирования поля
    render.render_edit_field = function (data) {
        if (data.response.result == true) {
            var id_form_edit_field = system.generateRandId();
            $('#modal_edit_field .modal-body').empty().append("\n               <form id=\"" + id_form_edit_field + "\" class=\"form\" data-form=\"form_change_field\" data-action=\"add_field\" enctype=\"multipart/form-data\">\n            ");
            $('#modal_edit_field').modal('show').attr('data-type-field', data.response.type_field);
            $('#modal_edit_field form').html("\n                <div class=\"edit_body\">\n                <input name=\"type\" value=\"" + data.response.type_field + "\" type=\"hidden\">\n                " + data.response.edit_html + "\n                </div>\n                ");
            $('#modal_edit_field form').append("<div class=\"edit_footer\"><button class=\"btn btn-success\" type=\"submit\">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button></div>");
            var field = _classes_FieldManager__WEBPACK_IMPORTED_MODULE_2__["FieldManager"].getFieldObject(data.response.type_field);
            if (field != null) {
                // Устанавливаем в объект-обработчик поля его тип и id поля
                _field_handlers_InterfaceField__WEBPACK_IMPORTED_MODULE_1__["Field"].type_field = data.response.type_field;
                _field_handlers_InterfaceField__WEBPACK_IMPORTED_MODULE_1__["Field"].id_field = data.response.id_field;
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
    render.render_delete_field = function (data) {
        if (data.response.result == true) {
            system.alert.add('Поле успешно удалено!', 'success');
            // Снова загружаем поле
            $("#" + data.response.id_field + "_anchor").trigger('click');
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
        Object(_functions__WEBPACK_IMPORTED_MODULE_0__["unlockBody"])();
    };
    // Проверка создания поля каталога
    render.render_add_field = function (data) {
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
        Object(_functions__WEBPACK_IMPORTED_MODULE_0__["hideLoader"])(data.response.form_id, function () {
            $('#modal_add_field').modal('hide');
        });
        Object(_functions__WEBPACK_IMPORTED_MODULE_0__["unlockBody"])();
    };
}



/***/ }),

/***/ "./assets/src/js/router.ts":
/*!*********************************!*\
  !*** ./assets/src/js/router.ts ***!
  \*********************************/
/*! exports provided: router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony import */ var _controllers_cabinetController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/cabinetController */ "./assets/src/js/controllers/cabinetController.ts");
/* harmony import */ var _controllers_catalogController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/catalogController */ "./assets/src/js/controllers/catalogController.ts");


function router() {
    var controller = null;
    switch (system.url[0]) {
        case 'catalogs':
            controller = new _controllers_catalogController__WEBPACK_IMPORTED_MODULE_1__["CatalogController"]();
            break;
        case 'cabinet':
            controller = new _controllers_cabinetController__WEBPACK_IMPORTED_MODULE_0__["CabinetController"]();
            break;
    }
    if (controller !== null)
        controller.run();
}



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9jc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qcy9jbGFzc2VzL0NsYXNzaWZpZXJJdGVtRGF0YS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2pzL2NsYXNzZXMvQ2xhc3NpZmllclRyZWUudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qcy9jbGFzc2VzL0RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qcy9jbGFzc2VzL0ZpZWxkTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2pzL2NsaWNrZXJzL2NhdGFsb2dDbGlja2Vycy50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2pzL2NvbnRyb2xsZXJzL2NhYmluZXRDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvanMvY29udHJvbGxlcnMvY2F0YWxvZ0NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qcy9maWVsZF9oYW5kbGVycy9GaWxlLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvanMvZmllbGRfaGFuZGxlcnMvR2FsbGVyeS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2pzL2ZpZWxkX2hhbmRsZXJzL0h0bWwudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qcy9maWVsZF9oYW5kbGVycy9JbnRlcmZhY2VGaWVsZC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2pzL2ZpZWxkX2hhbmRsZXJzL051bWJlci50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2pzL2ZpZWxkX2hhbmRsZXJzL1RhYmxlLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvanMvZmllbGRfaGFuZGxlcnMvVGV4dC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2pzL2Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2pzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvanMvaW5pdC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2pzL3JlbmRlcnMvcmVuZGVycy50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2pzL3JlbmRlcnMvcmVuZGVyc0NhdGFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9qcy9yZW5kZXJzL3JlbmRlcnNGaWVsZC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL2pzL3JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEseUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFzQztBQUl0QztJQUFBO0lBOEJBLENBQUM7SUE1QkcsdUJBQXVCO0lBQ1QsK0JBQVksR0FBMUIsVUFBMkIsRUFBVTtRQUVq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R0FBRyxJQUFJLENBQUM7SUFDdEIsUUFBUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ25CLEtBQUssVUFBVTtZQUNYLFVBQVUsR0FBRyxJQUFJLGdGQUFpQixFQUFFLENBQUM7WUFDckMsTUFBTTtRQUVWLEtBQUssU0FBUztZQUNWLFVBQVUsR0FBRyxJQUFJLGdGQUFpQixFQUFFLENBQUM7WUFDckMsTUFBTTtLQUNiO0lBQ0QsSUFBSSxVQUFVLEtBQUssSUFBSTtRQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUM5QyxDQUFDO0FBRWUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvc3JjL2pzL2luZGV4LnRzXCIpO1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQge2xvY2tCb2R5fSBmcm9tIFwiLi4vZnVuY3Rpb25zXCI7XHJcbmRlY2xhcmUgdmFyICQ6IGFueTtcclxuZGVjbGFyZSB2YXIgc3lzdGVtOiBhbnk7XHJcblxyXG5jbGFzcyBDbGFzc2lmaWVySXRlbURhdGEge1xyXG5cclxuICAgIC8vINCX0LDQs9GA0YPQt9C40YLRjCDQv9C+0LvQtSDQv9C+IElEXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWREYXRhQnlJZChpZDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIGxvY2tCb2R5KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3lzdGVtLmNhbGxNZXRob2QoJ2xvYWRfZGF0YV9pdGVtJywge1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICdpZF9jbGFzc2lmaWVyJzogc3lzdGVtLmdldExvY2FsRGF0YSgnbm93X2NsYXNzaWZpZXInKVsnaWQnXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINCj0LTQsNC70LjRgtGMINC/0L7Qu9C1INC/0L4gSURcclxuICAgIHB1YmxpYyBzdGF0aWMgZGVsZXRlRmllbGRCeUlkKGlkOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgbG9ja0JvZHkoKTtcclxuXHJcbiAgICAgICAgc3lzdGVtLmNhbGxNZXRob2QoJ2RlbGV0ZV9maWVsZCcsIHtcclxuICAgICAgICAgICAgaWRfZmllbGQ6IGlkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0JfQsNC/0YDQvtGBINC90LAg0LjQt9C80LXQvdC10L3QuNC1INC/0L7Qu9GPINC/0L4gSURcclxuICAgIHB1YmxpYyBzdGF0aWMgZWRpdEZpZWxkQnlJZChpZDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHN5c3RlbS5jYWxsTWV0aG9kKCdlZGl0X2ZpZWxkJywge1xyXG4gICAgICAgICAgICBpZF9maWVsZDogaWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtDbGFzc2lmaWVySXRlbURhdGF9OyIsImltcG9ydCB7RGF0YX0gZnJvbSBcIi4vRGF0YVwiO1xyXG5kZWNsYXJlIHZhciAkOiBhbnk7XHJcbmRlY2xhcmUgdmFyIHN5c3RlbTogYW55O1xyXG5cclxuLy8g0KHQu9GD0LbQuNGCINC+0LHQtdGA0YLQutC+0Lkg0L3QsNC0INGD0LfQu9C+0LxcclxuY2xhc3MgQ2xhc3NpZmllckl0ZW0ge1xyXG5cclxuICAgIHB1YmxpYyB0ZXh0OnN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgaWQ6c3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih0ZXh0OnN0cmluZywgaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyDQntGC0LLQtdGH0LDQtdGCINC30LAg0L7Qv9C10YDQsNGG0LjQuCDQvdCw0LQg0LTQtdGA0LXQstC+0Lwg0YPQt9C70L7QslxyXG5jbGFzcyBDbGFzc2lmaWVyVHJlZSB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc19pbml0X2V2ZW50c19qc3RyZWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqINCf0YDQvtCy0LXRgNC40YLRjCDQtNC+0YHRgtGD0L/QvdC+0YHRgtGMINC+0L/QtdGA0LDRhtC40Lkg0L3QsNC0INC60LvQsNGB0YHQuNGE0LjQutCw0YLQvtGA0L7QvFxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIGNoZWNrV29ya0ZpZWxkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhKHR5cGVvZiBzeXN0ZW0uZ2V0TG9jYWxEYXRhKCdub3dfY2xhc3NpZmllcicpID09ICd1bmRlZmluZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCf0YDQvtCy0LXRgNC40YLRjCDQvtCx0YrQtdC60YIg0YPQt9C70LAg0LrQu9Cw0YHRgdC40YTQuNC60LDRgtC+0YDQsCDQvdCwINCy0LDQu9C40LTQvdC+0YHRgtGMXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGRhdGFcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2hlY2tPYmplY3ROb2RlKGRhdGE6IG9iamVjdCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgJ2lkJyBpbiBkYXRhICYmXHJcbiAgICAgICAgICAgICd0ZXh0JyBpbiBkYXRhICYmXHJcbiAgICAgICAgICAgIGRhdGEgaW5zdGFuY2VvZiBDbGFzc2lmaWVySXRlbSAmJlxyXG4gICAgICAgICAgICBkYXRhLnRleHQudHJpbSgpLmxlbmd0aCA+IDBcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQn9C+0LvRg9GH0LjRgtGMINC/0YPRgtGMINC00L4g0Y3Qu9C10LzQtdC90YLQsFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFBhdGhUb0VsZW1lbnRXaXRoSWQoaWQ6IHN0cmluZyk6IGFueSB7XHJcblxyXG4gICAgICAgIHZhciBzZWFyY2hfc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIHJlc3VsdDogYW55ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldEZpbml0ZVZhbHVlKG9iajogYW55KSB7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRQcm9wKG86IGFueSwgcGF0aF9vOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHByb3AgaW4gbykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc2VhcmNoX3N0YXR1cykge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09ICdpZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvW3Byb3BdID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoX3N0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcGF0aF9vO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXRoX25ldyA9IHBhdGhfbyArICcvLy9bXCInICsgcHJvcCArICdcIl0nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvW3Byb3BdID09PSAnb2JqZWN0JyAmJiAhc2VhcmNoX3N0YXR1cylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFByb3Aob1twcm9wXSwgcGF0aF9uZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZ2V0UHJvcChvYmosICdbXCJjbGFzc2lmaWVyX2NvbnRlbnRcIl1bXCJjb3JlXCJdW1wiZGF0YVwiXScpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrV29ya0ZpZWxkKCkpIHtcclxuICAgICAgICAgICAgbGV0IG9ial9jbGFzc2lmaWVyID0gc3lzdGVtLmdldExvY2FsRGF0YSgnbm93X2NsYXNzaWZpZXInKS5jbGFzc2lmaWVyX2NvbnRlbnQuY29yZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGdldEZpbml0ZVZhbHVlKG9ial9jbGFzc2lmaWVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JTQvtCx0LDQstC40YLRjCDRjdC70LXQvNC10L3RgiDQutC70LDRgdGB0LjRhNC40LrQsNGC0L7RgNCwXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFjdGlvblxyXG4gICAgICogQHBhcmFtIGl0ZW0ge0NsYXNzaWZpZXJJdGVtfSAtINC90L7QstGL0Lkg0Y3Qu9C10LzQtdC90YJcclxuICAgICAqIEBwYXJhbSBpZCAtIGlkINGN0LvQtdC80LXQvdGC0LAg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INC60L7RgtC+0YDQvtCz0L4g0YHQvtCy0LXRgNGI0LDQtdGC0YHRjyDQtNC10LnRgdGC0LLQuNC1XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYWN0aW9uRWxlbWVudChhY3Rpb246IHN0cmluZywgaXRlbTogQ2xhc3NpZmllckl0ZW0sIGlkOiBzdHJpbmcsIHBhcmFtczogYW55ID0ge30pIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vINCj0LTQsNC70LjRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVtb3ZlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vdzogYW55ID0gc3lzdGVtLmdldExvY2FsRGF0YSgnbm93X2NsYXNzaWZpZXInKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdy5jbGFzc2lmaWVyX2NvbnRlbnQuY29yZS5kYXRhID0gJCgnW2RhdGEtY29udGV4dD1cImRhdGFfdHJlZV9jYXRhbG9nXCJdJykuanN0cmVlKHRydWUpLmdldF9qc29uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeXN0ZW0uc2V0TG9jYWxEYXRhQnlLZXkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbm93X2NsYXNzaWZpZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVDbGFzc2lmaWVyKGFjdGlvbiwgaXRlbS5pZCwgcGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQ2xhc3NpZmllcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdC40LzQtdC90L7QstCw0YLRjFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlbmFtZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbW92ZSc6XHJcbiAgICAgICAgICAgICAgICAgLyogICAgICAgdmFyIGxhc3RfcG9zaXRpb24gPSBhcnJheV9wYXRoLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0X3Bvc2l0aW9uID0gcGFyc2VJbnQobGFzdF9wb3NpdGlvbi5yZXBsYWNlKCdbXCInLCAnJykucmVwbGFjZSgnXCJdJywgJycpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2YWwoYG5ld19kYXRhJHthcnJheV9wYXRoLmpvaW4oJycpfVske2xhc3RfcG9zaXRpb259XVsndGV4dCddID0gJyR7aXRlbS50ZXh0fSc7YCk7Ki9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC90L7QstGL0LUg0LTQsNC90L3Ri9C1XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm93OiBhbnkgPSBzeXN0ZW0uZ2V0TG9jYWxEYXRhKCdub3dfY2xhc3NpZmllcicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbm93LmNsYXNzaWZpZXJfY29udGVudC5jb3JlLmRhdGEgPSAkKCdbZGF0YS1jb250ZXh0PVwiZGF0YV90cmVlX2NhdGFsb2dcIl0nKS5qc3RyZWUodHJ1ZSkuZ2V0X2pzb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5c3RlbS5zZXRMb2NhbERhdGFCeUtleShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdub3dfY2xhc3NpZmllcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUNsYXNzaWZpZXIoYWN0aW9uLCBpdGVtLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQ2xhc3NpZmllcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vINCU0L7QsdCw0LLQuNGC0Ywg0L/QtdGA0LXQtCDRjdC70LXQvNC10L3RgtC+0LxcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdiZWZvcmUnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyDQlNC+0LHQsNCy0LjRgtGMINC/0L7RgdC70LUg0Y3Qu9C10LzQtdC90YLQsFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FmdGVyJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vdzogYW55ID0gc3lzdGVtLmdldExvY2FsRGF0YSgnbm93X2NsYXNzaWZpZXInKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdy5jbGFzc2lmaWVyX2NvbnRlbnQuY29yZS5kYXRhID0gJCgnW2RhdGEtY29udGV4dD1cImRhdGFfdHJlZV9jYXRhbG9nXCJdJykuanN0cmVlKHRydWUpLmdldF9qc29uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeXN0ZW0uc2V0TG9jYWxEYXRhQnlLZXkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbm93X2NsYXNzaWZpZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVDbGFzc2lmaWVyKGFjdGlvbiwgaXRlbS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZENsYXNzaWZpZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vINCU0L7QsdCw0LLQuNGC0Ywg0LLQvdGD0YLRgNC4INGN0LvQtdC80LXQvdGC0LBcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdpbic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3c6IGFueSA9IHN5c3RlbS5nZXRMb2NhbERhdGEoJ25vd19jbGFzc2lmaWVyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3cuY2xhc3NpZmllcl9jb250ZW50LmNvcmUuZGF0YSA9ICQoJ1tkYXRhLWNvbnRleHQ9XCJkYXRhX3RyZWVfY2F0YWxvZ1wiXScpLmpzdHJlZSh0cnVlKS5nZXRfanNvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3lzdGVtLnNldExvY2FsRGF0YUJ5S2V5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25vd19jbGFzc2lmaWVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQ2xhc3NpZmllcihhY3Rpb24sIGl0ZW0uaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRDbGFzc2lmaWVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyDQlNC+0LHQsNCy0LjRgtGMINCy0L3Rg9GC0YDQuCDRjdC70LXQvNC10L3RgtCwXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2F2ZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3c6IGFueSA9IHN5c3RlbS5nZXRMb2NhbERhdGEoJ25vd19jbGFzc2lmaWVyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3cuY2xhc3NpZmllcl9jb250ZW50LmNvcmUuZGF0YSA9ICQoJ1tkYXRhLWNvbnRleHQ9XCJkYXRhX3RyZWVfY2F0YWxvZ1wiXScpLmpzdHJlZSh0cnVlKS5nZXRfanNvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3lzdGVtLnNldExvY2FsRGF0YUJ5S2V5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25vd19jbGFzc2lmaWVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQ2xhc3NpZmllcihhY3Rpb24sIGl0ZW0uaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRDbGFzc2lmaWVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRDbGFzc2lmaWVyKCkge1xyXG5cclxuICAgICAgICB2YXIgY29udGVudDogYW55ID0gc3lzdGVtLmdldExvY2FsRGF0YSgnbm93X2NsYXNzaWZpZXInKS5jbGFzc2lmaWVyX2NvbnRlbnQ7XHJcbiAgICAgICAgY29udGVudC5wbHVnaW5zID0gW1wiZG5kXCIsIFwiY29udGV4dG1lbnVcIl07XHJcbiAgICAgICAgJCgnW2RhdGEtY29udGV4dD1cImVycm9yLm5vdF9sb2FkX2NsYXNzaWZpZXJcIl0nKS5yZW1vdmUoKTtcclxuXHJcblxyXG4gICAgICAgIC8vINCY0L3RhtC40LDQu9C40LfQsNGG0LjRjyDRgdC+0LHRi9GC0LjQuSBqc3RyZWUg0L/RgNC4INC90LDQttCw0YLQuNC4INC90LAg0LrQvtC90YLQtdC60YHRgtC90L7QtSDQvNC10L3RjlxyXG4gICAgICAgIGlmKCFDbGFzc2lmaWVyVHJlZS5pc19pbml0X2V2ZW50c19qc3RyZWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDbGFzc2lmaWVyVHJlZS5pc19pbml0X2V2ZW50c19qc3RyZWUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgJCgnW2RhdGEtY29udGV4dD1cImRhdGFfdHJlZV9jYXRhbG9nXCJdJykub24oXCJjcmVhdGVfbm9kZS5qc3RyZWVcIiwgZnVuY3Rpb24gKGU6IGFueSwgZGF0YTogYW55KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoJ3BhcmVudCcgaW4gZGF0YSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1jb250ZXh0PVwiZGF0YV90cmVlX2NhdGFsb2dcIl0nKS5qc3RyZWUoXCJvcGVuX25vZGVcIiwgZGF0YS5wYXJlbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBuZXdfaWQgPSBzeXN0ZW0udXVpZHY0KCk7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1jb250ZXh0PVwiZGF0YV90cmVlX2NhdGFsb2dcIl0nKS5qc3RyZWUodHJ1ZSkuc2V0X2lkKGRhdGEubm9kZSxuZXdfaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IENsYXNzaWZpZXJJdGVtKFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBuZXdfaWRcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INGN0LvQtdC80LXQvdGCXHJcbiAgICAgICAgICAgICAgICBDbGFzc2lmaWVyVHJlZS5hY3Rpb25FbGVtZW50KCdhZnRlcicsIGl0ZW0sIGRhdGEubm9kZS5pZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJCgnW2RhdGEtY29udGV4dD1cImRhdGFfdHJlZV9jYXRhbG9nXCJdJykub24oXCJkZWxldGVfbm9kZS5qc3RyZWVcIiwgZnVuY3Rpb24gKGU6IGFueSwgZGF0YTogYW55KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBJRCA9IGRhdGEubm9kZS5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBDbGFzc2lmaWVySXRlbShcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgSURcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0KPQtNCw0LvRj9C10Lwg0Y3Qu9C10LzQtdC90YJcclxuICAgICAgICAgICAgICAgIENsYXNzaWZpZXJUcmVlLmFjdGlvbkVsZW1lbnQoJ3JlbW92ZScsIGl0ZW0sIElELCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkc19jaGlsZHJlbic6IGRhdGEubm9kZS5jaGlsZHJlbl9kXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKCdbZGF0YS1jb250ZXh0PVwiZGF0YV90cmVlX2NhdGFsb2dcIl0nKS5vbihcInJlbmFtZV9ub2RlLmpzdHJlZVwiLCBmdW5jdGlvbiAoZTogYW55LCBkYXRhOiBhbnkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmluc3RhbmNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBJRCA9IGRhdGEubm9kZS5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBDbGFzc2lmaWVySXRlbShcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgSURcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INGN0LvQtdC80LXQvdGCXHJcbiAgICAgICAgICAgICAgICBDbGFzc2lmaWVyVHJlZS5hY3Rpb25FbGVtZW50KCdyZW5hbWUnLCBpdGVtLCBJRCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJCgnW2RhdGEtY29udGV4dD1cImRhdGFfdHJlZV9jYXRhbG9nXCJdJykub24oXCJtb3ZlX25vZGUuanN0cmVlXCIsIGZ1bmN0aW9uIChlOiBhbnksIGRhdGE6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgSUQgPSBkYXRhLm5vZGUuaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgQ2xhc3NpZmllckl0ZW0oXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIElEXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINCU0L7QsdCw0LLQu9GP0LXQvCDRjdC70LXQvNC10L3RglxyXG4gICAgICAgICAgICAgICAgQ2xhc3NpZmllclRyZWUuYWN0aW9uRWxlbWVudCgnbW92ZScsIGl0ZW0sIElEKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJCgnW2RhdGEtY29udGV4dD1cImRhdGFfdHJlZV9jYXRhbG9nXCJdJykub24oXCJkbmRfbW92ZS52YWthdGEuanN0cmVlXCIsIGZ1bmN0aW9uIChlOiBhbnksIGRhdGE6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtY29udGV4dD1cImRhdGFfdHJlZV9jYXRhbG9nXCJdJykuanN0cmVlKHRydWUpLmdldF9qc29uKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGpzb25fY2xhc3NpZmllcjogYW55ID0gc3lzdGVtLmdldExvY2FsRGF0YSgnbm93X2NsYXNzaWZpZXInKS5jbGFzc2lmaWVyX2NvbnRlbnQuY29yZS5kYXRhO1xyXG4gICAgICAgIGpzb25fY2xhc3NpZmllciA9IEpTT04uc3RyaW5naWZ5KGpzb25fY2xhc3NpZmllcikucmVwbGFjZSgvXCJpY29uXCI6ZmFsc2UvZywnXCJpY29uXCI6dHJ1ZScpO1xyXG4gICAgICAgICQoJ1tkYXRhLWNvbnRleHQ9XCJkYXRhX3RyZWVfY2F0YWxvZ1wiXScpLmpzdHJlZShjb250ZW50KTtcclxuICAgICAgICAkKCdbZGF0YS1jb250ZXh0PVwiZGF0YV90cmVlX2NhdGFsb2dcIl0nKS5qc3RyZWUodHJ1ZSkuc2V0dGluZ3MuY29yZS5kYXRhID0gSlNPTi5wYXJzZShqc29uX2NsYXNzaWZpZXIpO1xyXG4gICAgICAgICQoJ1tkYXRhLWNvbnRleHQ9XCJkYXRhX3RyZWVfY2F0YWxvZ1wiXScpLmpzdHJlZSh0cnVlKS5yZWZyZXNoKHRydWUpO1xyXG5cclxuICAgICAgICBEYXRhLmNhdGFsb2dfaXNfbG9hZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0KHQvtGF0YDQsNC90LjRgtGMINC60LvQsNGB0YHQuNGE0LjQutCw0YLQvtGAXHJcbiAgICBwcml2YXRlIHN0YXRpYyBzYXZlQ2xhc3NpZmllcihhY3Rpb246IGFueSA9IG51bGwsIGFjdGlvbl9pZDogYW55ID0gbnVsbCwgcGFyYW1zOmFueSA9IHt9KVxyXG4gICAge1xyXG4gICAgICAgIHZhciBkYXRhOmFueSA9IHN5c3RlbS5nZXRMb2NhbERhdGEoJ25vd19jbGFzc2lmaWVyJykuY2xhc3NpZmllcl9jb250ZW50LmNvcmUuZGF0YTtcclxuXHJcbiAgICAgICAgdmFyIHJlcXVlc3Rfb2JqOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgICAgICAgaWQ6IHN5c3RlbS5nZXRMb2NhbERhdGEoJ25vd19jbGFzc2lmaWVyJylbJ2lkJ10sXHJcbiAgICAgICAgICAgICdsYXN0X2FjdGlvbic6IGFjdGlvbixcclxuICAgICAgICAgICAgJ2FjdGlvbl9pZCc6IGFjdGlvbl9pZCxcclxuICAgICAgICAgICAgZGF0YV9qc29uOiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHN5c3RlbS5jYWxsTWV0aG9kKCdzYXZlX2NsYXNzaWZpZXInLCByZXF1ZXN0X29iaik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHNob3dFcnJvcih0eXBlOiBudW1iZXIpIHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgc3lzdGVtLmFsZXJ0LmFkZCgn0J7RiNC40LHQutCwOiDQmtC70LDRgdGB0LjRhNC40LrQsNGC0L7RgCDQvdC10LTQvtGB0YLRg9C/0LXQvSEnLCAnZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgc3lzdGVtLmFsZXJ0LmFkZCgn0J7RiNC40LHQutCwOiDQndC10LrQvtGA0YDQtdC60YLQvdGL0Lkg0L7QsdGK0LXQutGCINGN0LvQtdC80LXQvdGC0LAg0LrQu9Cw0YHRgdC40YTQuNC60LDRgtC+0YDQsCEnLCAnZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQn9C10YDQtdC80LXRgdGC0LjRgtGMINC/0L7Qu9C1INGD0LfQu9CwXHJcbiAgICAgKlxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgbW92ZUZpZWxkKGZpZWxkX2lkOiBudW1iZXIsIG1vdmVfdG86IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB2YXIgcGFyYW1zX3NlbmQgPSB7J2lkX2ZpZWxkJzogZmllbGRfaWQsICdtb3ZlX3RvJzogbW92ZV90b307XHJcbiAgICAgICAgc3lzdGVtLmNhbGxNZXRob2QoJ21vdmVfZmllbGQnLCBwYXJhbXNfc2VuZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7Q2xhc3NpZmllclRyZWUsIENsYXNzaWZpZXJJdGVtfTsiLCJjbGFzcyBEYXRhIHtcclxuXHJcbiAgICAvLyDQktC60LvRjtGH0LXQvSDQu9C4INGA0LXQttC40Lwg0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRj1xyXG4gICAgc3RhdGljIG1vZGVfZWRpdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vINCX0LDQs9GA0YPQttC10L3QviDQu9C4INC/0L7Qu9C1INC60LvQsNGB0YHQuNGE0LjQutCw0YLQvtGA0LBcclxuICAgIHN0YXRpYyBjYXRhbG9nX2ZpZWxkX2lzX2xvYWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyDQndC10YIg0LvQuCDQv9C+0LvQtdC5INGDINGD0LfQu9CwXHJcbiAgICBzdGF0aWMgY2F0YWxvZ19maWVsZF9pc19lbXB0eTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLy8g0JfQsNCz0YDRg9C20LXQvSDQutC70LDRgdGB0LjRhNC40LrQsNGC0L7RgFxyXG4gICAgc3RhdGljIGNhdGFsb2dfaXNfbG9hZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7RGF0YX07XHJcbiIsImltcG9ydCB7VGV4dH0gZnJvbSBcIi4uL2ZpZWxkX2hhbmRsZXJzL1RleHRcIjtcclxuaW1wb3J0IHtOdW1iZXJ9IGZyb20gXCIuLi9maWVsZF9oYW5kbGVycy9OdW1iZXJcIjtcclxuaW1wb3J0IHtHYWxsZXJ5fSBmcm9tIFwiLi4vZmllbGRfaGFuZGxlcnMvR2FsbGVyeVwiO1xyXG5pbXBvcnQge1RhYmxlfSBmcm9tIFwiLi4vZmllbGRfaGFuZGxlcnMvVGFibGVcIjtcclxuaW1wb3J0IHtIdG1sfSBmcm9tIFwiLi4vZmllbGRfaGFuZGxlcnMvSHRtbFwiO1xyXG5pbXBvcnQge0ZpbGV9IGZyb20gXCIuLi9maWVsZF9oYW5kbGVycy9GaWxlXCI7XHJcblxyXG5jbGFzcyBGaWVsZE1hbmFnZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRGaWVsZE9iamVjdCh0eXBlOiBzdHJpbmcpOiBhbnkge1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IFRleHQoKTtcclxuICAgICAgICAgICAgICAgIGlmKFRleHQuaXNfaW5pdCA9PSBmYWxzZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBUZXh0LmluaXRTY3JpcHRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgVGV4dC5pc19pbml0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdnYWxsZXJ5JzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBHYWxsZXJ5KCk7XHJcbiAgICAgICAgICAgICAgICBpZihHYWxsZXJ5LmlzX2luaXQgPT0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FsbGVyeS5pbml0U2NyaXB0cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIEdhbGxlcnkuaXNfaW5pdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZmlsZSc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBuZXcgRmlsZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYoRmlsZS5pc19pbml0ID09IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEZpbGUuaW5pdFNjcmlwdHMoKTtcclxuICAgICAgICAgICAgICAgICAgICBGaWxlLmlzX2luaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBuZXcgTnVtYmVyKCk7XHJcbiAgICAgICAgICAgICAgICBpZihOdW1iZXIuaXNfaW5pdCA9PSBmYWxzZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIuaW5pdFNjcmlwdHMoKTtcclxuICAgICAgICAgICAgICAgICAgICBOdW1iZXIuaXNfaW5pdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAndGFibGUnOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IFRhYmxlKCk7XHJcbiAgICAgICAgICAgICAgICBpZihUYWJsZS5pc19pbml0ID09IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFRhYmxlLmluaXRTY3JpcHRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgVGFibGUuaXNfaW5pdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnaHRtbCc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBuZXcgSHRtbCgpO1xyXG4gICAgICAgICAgICAgICAgSHRtbC5vbkFmdGVyT3BlbkZpZWxkTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgIGlmKEh0bWwuaXNfaW5pdCA9PSBmYWxzZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBIdG1sLmluaXRTY3JpcHRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgSHRtbC5pc19pbml0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtGaWVsZE1hbmFnZXJ9OyIsImltcG9ydCB7Q2xhc3NpZmllckl0ZW1EYXRhfSBmcm9tIFwiLi4vY2xhc3Nlcy9DbGFzc2lmaWVySXRlbURhdGFcIjtcclxuaW1wb3J0IHtDYXRhbG9nQ29udHJvbGxlcn0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2NhdGFsb2dDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7RGF0YX0gZnJvbSBcIi4uL2NsYXNzZXMvRGF0YVwiO1xyXG5pbXBvcnQge0NsYXNzaWZpZXJJdGVtLCBDbGFzc2lmaWVyVHJlZX0gZnJvbSBcIi4uL2NsYXNzZXMvQ2xhc3NpZmllclRyZWVcIjtcclxuZGVjbGFyZSB2YXIgJDogYW55O1xyXG5kZWNsYXJlIHZhciBzeXN0ZW06IGFueTtcclxuXHJcblxyXG5mdW5jdGlvbiBjbGlja2Vyc0luaXQoKSB7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWNsaWNrPVwic2VhcmNoX2NsYXNzaWZpZXJzXCJdJywgZnVuY3Rpb24gKGU6IGFueSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXHJcblxyXG4gICAgICAgICQoJ1tkYXRhLWNvbnRleHQ9XCJzZWFyY2hfcmVzdWx0XCJdJykuaHRtbCgnJyk7XHJcblxyXG4gICAgICAgIHZhciB2YWw6IHN0cmluZyA9ICQoJ1tkYXRhLWlucHV0PVwic2VhcmNoX2NsYXNzaWZpZXJzXCJdJykudmFsKCk7XHJcblxyXG4gICAgICAgIHZhciBzZWFyY2hfZnJvbV9uYW1lOiBib29sZWFuID0gJCgnI3NlYXJjaF9mcm9tX25hbWUnKS5pcygnOmNoZWNrZWQnKTtcclxuICAgICAgICB2YXIgc2VhcmNoX2Zyb21faXRlbTogYm9vbGVhbiA9ICQoJyNzZWFyY2hfZnJvbV9pdGVtJykuaXMoJzpjaGVja2VkJyk7XHJcbiAgICAgICAgdmFyIHNlYXJjaF9mcm9tX2NvbnRlbnQ6IGJvb2xlYW4gPSAkKCcjc2VhcmNoX2Zyb21fY29udGVudCcpLmlzKCc6Y2hlY2tlZCcpO1xyXG4gICAgICAgICBcclxuICAgICAgICBpZiAodmFsLmxlbmd0aCA+IDMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihzZWFyY2hfZnJvbV9uYW1lIHx8IHNlYXJjaF9mcm9tX2l0ZW0gfHwgc2VhcmNoX2Zyb21fY29udGVudClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3lzdGVtLmNhbGxNZXRob2QoJ3NlYXJjaF9jbGFzc2lmaWVycycsIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWw6IHZhbCxcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hfZnJvbV9uYW1lOiBzZWFyY2hfZnJvbV9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaF9mcm9tX2l0ZW06IHNlYXJjaF9mcm9tX2l0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoX2Zyb21fY29udGVudDogc2VhcmNoX2Zyb21fY29udGVudFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzeXN0ZW0uYWxlcnQuYWRkKCfQktGL0LHQtdGA0LjRgtC1INGF0L7RgtGPINCx0YsgPGJyPjEg0L/QsNGA0LDQvNC10YLRgCDQtNC70Y8g0L/QvtC40YHQutCwJywgJ2RhbmdlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN5c3RlbS5hbGVydC5hZGQoJ9CS0LLQtdC00LjRgtC1INGB0LvQvtCy0LAg0LTQu9GPINC/0L7QuNGB0LrQsCDQtNC70LjQvdC90LXQtSAzINGB0LjQvNCy0L7Qu9C+0LInLCAnZGFuZ2VyJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1jbGljay1icmVhZGNydW1ic10nLCBmdW5jdGlvbiAoZTogYW55KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB2YXIgaWQ6IG51bWJlciA9ICQodGhpcykuYXR0cignZGF0YS1jbGljay1icmVhZGNydW1icycpO1xyXG5cclxuICAgICAgICAkKGBbcm9sZT1cInRyZWVpdGVtXCJdIyR7aWR9ID4gYWApLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNtb2RhbF9pY29uX2NoYW5nZSBpJywgZnVuY3Rpb24gKGU6IGFueSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdmFyIGlkX2l0ZW06IHN0cmluZyA9IHN5c3RlbS5nZXRMb2NhbERhdGEoJ29iamVjdF9jaGFuZ2VfaWNvbl9qc3RyZWUnKS5pZDtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtY29udGV4dD1cImRhdGFfdHJlZV9jYXRhbG9nXCJdJykuanN0cmVlKHRydWUpLnNldF9pY29uKGlkX2l0ZW0sICQodGhpcykuYXR0cignY2xhc3MnKSk7XHJcblxyXG5cclxuICAgICAgICB2YXIgaXRlbSA9IG5ldyBDbGFzc2lmaWVySXRlbShcclxuICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICBpZF9pdGVtXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INGN0LvQtdC80LXQvdGCXHJcbiAgICAgICAgQ2xhc3NpZmllclRyZWUuYWN0aW9uRWxlbWVudCgnc2F2ZScsIGl0ZW0sIGlkX2l0ZW0pO1xyXG5cclxuICAgICAgICAkKCcjbW9kYWxfaWNvbl9jaGFuZ2UnKS5tb2RhbCgnaGlkZScpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1jbGljaz1cImdldF93b3JkX2ZpbGVcIl0nLCBmdW5jdGlvbiAoZTogYW55KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZih0eXBlb2Ygc3lzdGVtLmdldExvY2FsRGF0YSgnbm93X2xvYWRfZmllbGRfaWQnKSAhPSAndW5kZWZpbmVkJylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBsaW5rOmFueSA9IGAvZG9jLWdlbmVyYXRvci93b3JkP2NsYXNzaWZpZXJfaWQ9JHtzeXN0ZW0ubG9jYWxfZGF0YS5ub3dfY2xhc3NpZmllci5pZH0mdXVpZD0ke3N5c3RlbS5sb2NhbF9kYXRhLm5vd19sb2FkX2ZpZWxkX2lkfWA7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpbmspO1xyXG4gICAgICAgICAgICB3aW5kb3cub3BlbihsaW5rKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3lzdGVtLmFsZXJ0LmFkZCgn0JTQu9GPINC/0L7Qu9GD0YfQtdC90LjRjyBXT1JEINGE0LDQudC70LAg0LfQsNCz0YDRg9C30LjRgtC1INC60LDQutC+0Lkt0L3QuNCx0YPQtNGMINGD0LfQtdC7JywgJ2RhbmdlcicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtY2xpY2s9XCJpbXBvcnRfanNvbl9jbGFzc2lmaWVyXCJdJywgZnVuY3Rpb24gKGU6IGFueSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8g0YHQvtC30LTQsNC00LjQvCDQvtCx0YrQtdC60YIg0LTQsNC90L3Ri9GFINGE0L7RgNC80YtcclxuICAgICAgICB2YXIgZGF0YTogYW55ID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICAkKCdbZGF0YS1jb250ZXh0PVwiZmlsZV9qc29uX2NsYXNzaWZpZXJcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGZpbGVzX2F0dHI6IGFueSA9ICQodGhpcylbMF0uZmlsZXM7XHJcblxyXG4gICAgICAgICAgICBpZiAoZmlsZXNfYXR0ci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChgZmlsZV9sb2FkXyR7aX1gLCBmaWxlc19hdHRyWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkYXRhLmFwcGVuZChgaWRfY2xhc3NpZmllcmAsICQoJ1tuYW1lPVwiaWRfY2xhc3NpZmllcl9pbXBvcnRcIl0nKS52YWwoKSk7XHJcblxyXG4gICAgICAgIHN5c3RlbS5jYWxsTWV0aG9kV2l0aEZpbGUoJ2ltcG9ydF9jbGFzc2lmaWVyJywgZGF0YSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtY2xpY2s9XCJhZGRfcHJpdmlsZWdlX3VzZXJcIl0nLCBmdW5jdGlvbiAoZTogYW55KSB7XHJcbiAgICAgICAgdmFyIGVtYWlsID0gcHJvbXB0KCfQktCy0LXQtNC40YLQtSBlbWFpbCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8nKTtcclxuXHJcbiAgICAgICAgaWYoZW1haWwubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN5c3RlbS5jYWxsTWV0aG9kKCdtYW5hZ2VyX3ByaXZpbGVnZScsIHtcclxuICAgICAgICAgICAgICAgICdlbWFpbCc6IGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgJ2lkX2NsYXNzaWZpZXInOiBzeXN0ZW0uZ2V0TG9jYWxEYXRhKCdjbGFzc2lmaWVyX2lkX3ByaXZpbGVnZScpLFxyXG4gICAgICAgICAgICAgICAgJ2FjdGlvbl9wcml2aWxlZ2UnOiAnYWRkX2VtYWlsJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtY2xpY2s9XCJkZWxldGVfYWxsX3ByaXZpbGVnZVwiXScsIGZ1bmN0aW9uIChlOiBhbnkpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmKGNvbmZpcm0oJ9Cj0LTQsNC70LjRgtGMINCy0YHQtSDQv9GA0LjQstC40LvQtdCz0LjQuCDQtNCw0L3QvdC+0LPQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8/JykpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgc3lzdGVtLmNhbGxNZXRob2QoJ21hbmFnZXJfcHJpdmlsZWdlJywge1xyXG4gICAgICAgICAgICAgICAgJ2lkX3VzZXInOiAkKHRoaXMpLmNsb3Nlc3QoJ1tkYXRhLWlkXScpLmF0dHIoJ2RhdGEtaWQnKSxcclxuICAgICAgICAgICAgICAgICdpZF9jbGFzc2lmaWVyJzogc3lzdGVtLmdldExvY2FsRGF0YSgnY2xhc3NpZmllcl9pZF9wcml2aWxlZ2UnKSxcclxuICAgICAgICAgICAgICAgICdhY3Rpb25fcHJpdmlsZWdlJzogJ2RlbGV0ZV9hbGxfcHJpdmlsZWdlJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoYFtkYXRhLWNvbnRleHQ9XCJwcml2aWxlZ2VfbGlzdFwiXSBbZGF0YS13cmFwcGVyLWlkPVwiJHskKHRoaXMpLmNsb3Nlc3QoJ1tkYXRhLWlkXScpLmF0dHIoJ2RhdGEtaWQnKX1cIl1gKS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtY2xpY2s9XCJlZGl0X3ByaXZpbGVnZV9jbGFzc2lmaWVyXCJdJywgZnVuY3Rpb24gKGU6IGFueSkge1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1jb250ZXh0PVwicHJpdmlsZWdlX2xvYWRcIl0nKS5zaG93KCk7XHJcbiAgICAgICAgJCgnW2RhdGEtY29udGV4dD1cInByaXZpbGVnZV9saXN0XCJdJykuaGlkZSgpO1xyXG5cclxuICAgICAgICBzeXN0ZW0uc2V0TG9jYWxEYXRhQnlLZXkoJ2NsYXNzaWZpZXJfaWRfcHJpdmlsZWdlJywgJCh0aGlzKS5jbG9zZXN0KCdbZGF0YS1pZC1jYXRhbG9nXScpLmF0dHIoJ2RhdGEtaWQtY2F0YWxvZycpKTtcclxuICAgICAgICAkKCcjbW9kYWxfZWRpdF9wcmlpdmxlZ2UnKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICAgICQoJyNtb2RhbF9zZXR0aW5nX2NhdGFsb2cnKS5tb2RhbCgnaGlkZScpO1xyXG5cclxuICAgICAgICBzeXN0ZW0uY2FsbE1ldGhvZCgnbWFuYWdlcl9wcml2aWxlZ2UnLCB7XHJcbiAgICAgICAgICAgICdpZF9jbGFzc2lmaWVyJzogc3lzdGVtLmdldExvY2FsRGF0YSgnY2xhc3NpZmllcl9pZF9wcml2aWxlZ2UnKSxcclxuICAgICAgICAgICAgJ2FjdGlvbl9wcml2aWxlZ2UnOiAnZ2V0X3ByaXZpbGVnZV9saXN0J1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gINCt0LrRgdC/0L7RgNGC0LjRgNC+0LLQsNGC0Ywg0LTQsNC90L3Ri9C1INC60LvQsNGB0YHQuNGE0LjQutCw0YLQvtGA0LBcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1jb250ZXh0PVwidXNlcl9wcml2aWxlZ2VcIl0nLCBmdW5jdGlvbiAoZTogYW55KSB7XHJcbiAgICAgICAgJChgW2RhdGEtaWQtcHJpdmlsZWdlPVwiJHskKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKX1cIl1gKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gINCt0LrRgdC/0L7RgNGC0LjRgNC+0LLQsNGC0Ywg0LTQsNC90L3Ri9C1INC60LvQsNGB0YHQuNGE0LjQutCw0YLQvtGA0LBcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1jbGljaz1cImV4cG9ydF9jYXRhbG9nXCJdJywgZnVuY3Rpb24gKGU6IGFueSkge1xyXG4gICAgICAgIGlmIChjb25maXJtKCfQodC60LDRh9Cw0YLRjCDQtNCw0L3QvdGL0LUg0LrQu9Cw0YHRgdC40YTQuNC60LDRgtC+0YDQsCDQsiBKU09OINGE0L7RgNC80LDRgtC1PycpKSB7XHJcbiAgICAgICAgICAgIHZhciBpZF9jbGFzc2lmaWVyOiBhbnkgPSAkKHRoaXMpLmNsb3Nlc3QoJ1tkYXRhLWlkLWNhdGFsb2ddJykuYXR0cignZGF0YS1pZC1jYXRhbG9nJyk7XHJcblxyXG4gICAgICAgICAgICBzeXN0ZW0uY2FsbE1ldGhvZCgnZXhwb3J0X2NsYXNzaWZpZXInLCB7XHJcbiAgICAgICAgICAgICAgICAnaWRfY2xhc3NpZmllcic6IGlkX2NsYXNzaWZpZXJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gINCY0LzQv9C+0YDRgtC40YDQvtCy0LDRgtGMINC00LDQvdC90YvQtSDQsiDQutC70LDRgdGB0LjRhNC40LrQsNGC0L7RgFxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNtb2RhbF9pbXBvcnRfY2xhc3NpZmllciBbdHlwZT1cInN1Ym1pdFwiXScsIGZ1bmN0aW9uIChlOiBhbnkpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciBqc246IGFueSA9ICQoJ1tuYW1lPVwianNvbl9pbXBvcnRcIl0nKS52YWwoKTtcclxuICAgICAgICAgICAgdmFyIGlkX2NsYXNzaWZpZXI6IGFueSA9ICQoJ1tuYW1lPVwiaWRfY2xhc3NpZmllcl9pbXBvcnRcIl0nKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoanNuKSk7XHJcblxyXG4gICAgICAgICAgICBzeXN0ZW0uY2FsbE1ldGhvZCgnaW1wb3J0X2NsYXNzaWZpZXInLCB7XHJcbiAgICAgICAgICAgICAgICAnanNvbic6ICQoJ1tuYW1lPVwianNvbl9pbXBvcnRcIl0nKS52YWwoKSxcclxuICAgICAgICAgICAgICAgICdpZF9jbGFzc2lmaWVyJzogaWRfY2xhc3NpZmllclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHN5c3RlbS5hbGVydC5hZGQoJ0pTT04g0LTQu9GPINC40LzQv9C+0YDRgtCwINC90LUg0LLQsNC70LjQtNC10L0nLCAnZGFuZ2VyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gINCY0LzQv9C+0YDRgtC40YDQvtCy0LDRgtGMINC00LDQvdC90YvQtSDQsiDQutC70LDRgdGB0LjRhNC40LrQsNGC0L7RgFxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWNsaWNrPVwiaW1wb3J0X2NhdGFsb2dcIl0nLCBmdW5jdGlvbiAoZTogYW55KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJ1tuYW1lPVwiaWRfY2xhc3NpZmllcl9pbXBvcnRcIl0nKS52YWwoJCh0aGlzKS5jbG9zZXN0KCdbZGF0YS1pZC1jYXRhbG9nXScpLmF0dHIoJ2RhdGEtaWQtY2F0YWxvZycpKTtcclxuICAgICAgICAkKCcjbW9kYWxfaW1wb3J0X2NsYXNzaWZpZXInKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gINCh0LrRgNGL0YLRjCDRg9C30LvRiyDQutC70LDRgdGB0LjRhNC40LrQsNGC0L7RgNCwXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtY2xpY2s9XCJjb21wcmVzc190cmVlX2l0ZW1zXCJdJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5qc3RyZWUtb3BlbicpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJz4gLmpzdHJlZS1pY29uJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCg0LDRgdC60YDRi9GC0Ywg0YPQt9C70Ysg0LrQu9Cw0YHRgdC40YTQuNC60LDRgtC+0YDQsFxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWNsaWNrPVwiZXhwYW5kX3RyZWVfaXRlbXNcIl0nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaTogYW55ID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgJCgnLmpzdHJlZS1jbG9zZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnPiAuanN0cmVlLWljb24nKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtY2xpY2s9XCJoaWRlX3BhbmVsX3RyZWVcIl0nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnW2RhdGEtY29udGV4dD1cInRyZWVfY2F0YWxvZ1wiXScpLnJlbW92ZUNsYXNzKCdjb2wtbGctMycpLmFkZENsYXNzKCdjb2wtbGctMScpO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1jbGljaz1cImhpZGVfcGFuZWxfdHJlZVwiXScpLmhpZGUoKTtcclxuICAgICAgICAkKCdbZGF0YS1jbGljaz1cInNob3dfcGFuZWxfdHJlZVwiXScpLnNob3coKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1jbGljaz1cInNob3dfcGFuZWxfdHJlZVwiXScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCdbZGF0YS1jb250ZXh0PVwidHJlZV9jYXRhbG9nXCJdJykuYWRkQ2xhc3MoJ2NvbC1sZy0zJykucmVtb3ZlQ2xhc3MoJ2NvbC1sZy0xJyk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLWNsaWNrPVwiaGlkZV9wYW5lbF90cmVlXCJdJykuc2hvdygpO1xyXG4gICAgICAgICQoJ1tkYXRhLWNsaWNrPVwic2hvd19wYW5lbF90cmVlXCJdJykuaGlkZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWNsaWNrPVwic2hvd19wYW5lbF9jbGFzc2lmaWVyc1wiXScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCdbZGF0YS1jb250ZXh0PVwibGlzdF9jYXRhbG9nXCJdJykuYWRkQ2xhc3MoJ2NvbC1sZy0zJykucmVtb3ZlQ2xhc3MoJ2NvbC1sZy0xJyk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLWNsaWNrPVwic2hvd19wYW5lbF9jbGFzc2lmaWVyc1wiXScpLmhpZGUoKTtcclxuICAgICAgICAkKCdbZGF0YS1jbGljaz1cImhpZGVfcGFuZWxfY2xhc3NpZmllcnNcIl0nKS5zaG93KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtY2xpY2s9XCJoaWRlX3BhbmVsX2NsYXNzaWZpZXJzXCJdJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJ1tkYXRhLWNvbnRleHQ9XCJsaXN0X2NhdGFsb2dcIl0nKS5yZW1vdmVDbGFzcygnY29sLWxnLTMnKS5hZGRDbGFzcygnY29sLWxnLTEnKTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtY2xpY2s9XCJzaG93X3BhbmVsX2NsYXNzaWZpZXJzXCJdJykuc2hvdygpO1xyXG4gICAgICAgICQoJ1tkYXRhLWNsaWNrPVwiaGlkZV9wYW5lbF9jbGFzc2lmaWVyc1wiXScpLmhpZGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCY0LfQvNC10L3QtdC90LjQtSDQv9C+0LvRj1xyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWNsaWNrPVwiZWRpdF9maWVsZFwiXScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmNsb3Nlc3QoJ1tkYXRhLWlkXScpLmRhdGEoJ2lkJyk7XHJcblxyXG4gICAgICAgIENsYXNzaWZpZXJJdGVtRGF0YS5lZGl0RmllbGRCeUlkKGlkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCj0LTQsNC70LXQvdC40LUg0L/QvtC70Y9cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1jbGljaz1cImRlbGV0ZV9maWVsZFwiXScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmNsb3Nlc3QoJ1tkYXRhLWlkXScpLmRhdGEoJ2lkJyk7XHJcblxyXG4gICAgICAgIGlmIChjb25maXJtKCfQo9C00LDQu9C40YLRjCDQv9C+0LvQtT8nKSkgQ2xhc3NpZmllckl0ZW1EYXRhLmRlbGV0ZUZpZWxkQnlJZChpZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDQl9Cw0LPRgNGD0LfQutCwINGD0LfQu9CwXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmpzdHJlZS1hbmNob3InLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5jbG9zZXN0KCdsaScpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgQ2xhc3NpZmllckl0ZW1EYXRhLmxvYWREYXRhQnlJZChpZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDQo9C00LDQu9C10L3QuNC1INC60LDRgtCw0LvQvtCz0LBcclxuICAgICQoJ1tkYXRhLWNsaWNrPVwiZGVsZXRlX2NhdGFsb2dcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHN5c3RlbS5zZW5kX3JlcXVlc3Rfb2JqZWN0KHtcclxuICAgICAgICAgICAgJ2FjdGlvbic6ICdkZWxldGVfY2F0YWxvZycsXHJcbiAgICAgICAgICAgICdpZCc6IHN5c3RlbS5nZXRMb2NhbERhdGEoJ2NhdGFsb2dfc2V0dGluZ19tb2RhbCcsICdpZCcpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDQlNC+0LHQsNCy0LjRgtGMINC/0L7Qu9C1INCyINGD0LfQtdC7XHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtY2xpY2s9XCJhZGRfZmllbGRfaW5fZWRpdF9tb2RlXCJdJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJyNtb2RhbF9hZGRfZmllbGQgW25hbWU9XCJudW1fc29ydFwiXScpLnZhbCgkKHRoaXMpLmF0dHIoJ2RhdGEtbnVtJykpO1xyXG4gICAgICAgICQoJyNtb2RhbF9hZGRfZmllbGQgW25hbWU9XCJpZF9maWVsZFwiXScpLnZhbChzeXN0ZW0uZ2V0TG9jYWxEYXRhKCdub3dfbG9hZF9maWVsZF9pZCcpKTtcclxuICAgICAgICAkKCcjbW9kYWxfYWRkX2ZpZWxkIFtuYW1lPVwiaWRfbm93X2NsYXNzaWZpZXJcIl0nKS52YWwoc3lzdGVtLmdldExvY2FsRGF0YSgnbm93X2NsYXNzaWZpZXInKVsnaWQnXSk7XHJcbiAgICAgICAgJCgnI21vZGFsX2FkZF9maWVsZCcpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDQn9C+0LTQvdGP0YLRjCDQv9C+0LvQtSDQstGL0YjQtVxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWNsaWNrPVwibW92ZV90b3BfZmllbGRcIl0nLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHZhciAkd3JhcHBlcjogYW55ID0gJCh0aGlzKS5jbG9zZXN0KCdbZGF0YS1zb3J0XScpO1xyXG5cclxuICAgICAgICB2YXIgY2xvbmU6IGFueSA9ICR3cmFwcGVyLmNsb25lKCk7XHJcbiAgICAgICAgaWYgKCQoJ1tkYXRhLWNsaWNrPVwicGFuZWxfZWRpdF9tb2RlXCJdJykuaGFzQ2xhc3MoJ29uJykpIHtcclxuICAgICAgICAgICAgJCgnW2RhdGEtY2xpY2s9XCJwYW5lbF9lZGl0X21vZGVcIl0nKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCR3cmFwcGVyLnByZXYoKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICR3cmFwcGVyLnByZXYoKS5iZWZvcmUoY2xvbmUpO1xyXG4gICAgICAgICAgICAkd3JhcHBlci5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIENsYXNzaWZpZXJUcmVlLm1vdmVGaWVsZCgkd3JhcHBlci5hdHRyKCdkYXRhLWlkJyksICd1cCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnW2RhdGEtY2xpY2s9XCJwYW5lbF9lZGl0X21vZGVcIl0nKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIC8vIHJlbnVtXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDQntC/0YPRgdGC0LjRgtGMINC/0L7Qu9C1INC90LjQttC1XHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtY2xpY2s9XCJtb3ZlX2Rvd25fZmllbGRcIl0nLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHZhciAkd3JhcHBlcjogYW55ID0gJCh0aGlzKS5jbG9zZXN0KCdbZGF0YS1zb3J0XScpO1xyXG5cclxuICAgICAgICB2YXIgY2xvbmU6IGFueSA9ICR3cmFwcGVyLmNsb25lKCk7XHJcblxyXG4gICAgICAgIGlmICgkKCdbZGF0YS1jbGljaz1cInBhbmVsX2VkaXRfbW9kZVwiXScpLmhhc0NsYXNzKCdvbicpKSB7XHJcbiAgICAgICAgICAgICQoJ1tkYXRhLWNsaWNrPVwicGFuZWxfZWRpdF9tb2RlXCJdJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCR3cmFwcGVyLm5leHQoKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICR3cmFwcGVyLm5leHQoKS5hZnRlcihjbG9uZSk7XHJcbiAgICAgICAgICAgICR3cmFwcGVyLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgQ2xhc3NpZmllclRyZWUubW92ZUZpZWxkKCR3cmFwcGVyLmF0dHIoJ2RhdGEtaWQnKSwgJ2Rvd24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnW2RhdGEtY2xpY2s9XCJwYW5lbF9lZGl0X21vZGVcIl0nKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cclxuICAgICAgICAvLyByZW51bVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g0JLQutC70Y7Rh9C10L3QuNC1INGA0LXQttC40LzQsCDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPXHJcbiAgICAkKCdbZGF0YS1jbGljaz1cInBhbmVsX2VkaXRfbW9kZVwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb24nKTtcclxuICAgICAgICBDYXRhbG9nQ29udHJvbGxlci5yZW5kZXIoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCX0LDQs9GA0YPQt9C60LAg0LrQsNGC0LDQu9C+0LPQsFxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWNsaWNrPVwibG9hZF9jbGFzc2lmaWVyXCJdJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1jbGljaz1cImxvYWRfY2xhc3NpZmllclwiXScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgc3lzdGVtLnNldExvY2FsRGF0YSgkKHRoaXMpLmNsb3Nlc3QoJ1tkYXRhLWxvY2FsXScpWzBdKTtcclxuXHJcbiAgICAgICAgc3lzdGVtLnNlbmRfcmVxdWVzdF9vYmplY3Qoe1xyXG4gICAgICAgICAgICAnYWN0aW9uJzogJ2xvYWRfY2xhc3NpZmllcicsXHJcbiAgICAgICAgICAgICdpZCc6IHN5c3RlbS5nZXRMb2NhbERhdGEoJ2NhdGFsb2dfc2V0dGluZ19tb2RhbCcsICdpZCcpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7Y2xpY2tlcnNJbml0fTsiLCJkZWNsYXJlIGNvbnN0ICQ6IGFueTtcclxuZGVjbGFyZSBjb25zdCBzeXN0ZW06IGFueTtcclxuZGVjbGFyZSBjb25zdCByZW5kZXI6IGFueTtcclxuXHJcbmNsYXNzIENhYmluZXRDb250cm9sbGVyIHtcclxuICAgIHB1YmxpYyBydW4oKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge0NhYmluZXRDb250cm9sbGVyfTsiLCJpbXBvcnQge2NsaWNrZXJzSW5pdH0gZnJvbSBcIi4uL2NsaWNrZXJzL2NhdGFsb2dDbGlja2Vyc1wiO1xyXG5pbXBvcnQge0RhdGF9IGZyb20gXCIuLi9jbGFzc2VzL0RhdGFcIjtcclxuaW1wb3J0IHtDbGFzc2lmaWVySXRlbSwgQ2xhc3NpZmllclRyZWV9IGZyb20gXCIuLi9jbGFzc2VzL0NsYXNzaWZpZXJUcmVlXCI7XHJcblxyXG5kZWNsYXJlIGNvbnN0ICQ6IGFueTtcclxuZGVjbGFyZSBjb25zdCBzeXN0ZW06IGFueTtcclxuXHJcbmNsYXNzIENhdGFsb2dDb250cm9sbGVyIHtcclxuICAgIHB1YmxpYyBydW4oKSB7XHJcblxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJ1tkYXRhLXR5cGUtcHJpdmlsZWdlXScsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciB0eXBlOiBzdHJpbmcgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdHlwZS1wcml2aWxlZ2UnKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzdGF0dXM6IHN0cmluZyA9ICQodGhpcykuaXMoJzpjaGVja2VkJykgPyAnY2hlY2tlZCcgOiAnbm90IGNoZWNrZWQnO1xyXG5cclxuICAgICAgICAgICAgaWYoc3RhdHVzID09ICdjaGVja2VkJylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCdbZGF0YS13cmFwcGVyLWlkXScpLmZpbmQoYFtkYXRhLXByaXZpbGVnZS10eXBlPVwiJHt0eXBlfVwiXWApLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnW2RhdGEtd3JhcHBlci1pZF0nKS5maW5kKGBbZGF0YS1wcml2aWxlZ2UtdHlwZT1cIiR7dHlwZX1cIl1gKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZWRpdF9jbGFzc2lmaWVyJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2VkaXRfcHJpdmlsZWdlJzpcclxuICAgICAgICAgICAgICAgICAgICBzeXN0ZW0uY2FsbE1ldGhvZCgnbWFuYWdlcl9wcml2aWxlZ2UnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzogdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXR1cyc6IHN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2lkX3VzZXInOiAkKHRoaXMpLmNsb3Nlc3QoJ1tkYXRhLWlkLXByaXZpbGVnZV0nKS5hdHRyKCdkYXRhLWlkLXByaXZpbGVnZScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaWRfY2xhc3NpZmllcic6IHN5c3RlbS5nZXRMb2NhbERhdGEoJ2NsYXNzaWZpZXJfaWRfcHJpdmlsZWdlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhY3Rpb25fcHJpdmlsZWdlJzogJ2VkaXRfcHJpdmlsZWdlJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignaW5wdXQnLCAnW2RhdGEtaW5wdXQ9XCJzZWFyY2hfY2xhc3NpZmllcnNcIl0nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJ1tkYXRhLWNvbnRleHQ9XCJzZWFyY2hfcmVzdWx0XCJdJykuaHRtbCgnJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNsaWNrZXJzSW5pdCgpO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1mb3JtPVwiZm9ybV9hZGRfY2F0YWxvZ1wiXSAjbmFtZV9jYXRhbG9nJykub24oJ2tleXVwJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgdGhpc190ZXh0ID0gJCh0aGlzKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzX3RleHQubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLm1vZGFsLWNvbnRlbnQnKS5maW5kKCduYW1lLWNhdGFsb2cnKS5odG1sKCdcIicgKyB0aGlzX3RleHQudHJpbSgpICsgJ1wiJyk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLm1vZGFsLWNvbnRlbnQnKS5maW5kKCduYW1lLWNhdGFsb2cnKS5odG1sKCcnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtc3VibWl0XScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlOiBhbnkpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygkKHRoaXMpLmRhdGEoJ3N1Ym1pdCcpKTtcclxuXHJcbiAgICAgICAgICAgIHZhciAkZm9ybTogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZm9ybT1cIicgKyAkKHRoaXMpLmRhdGEoJ3N1Ym1pdCcpICsgJ1wiXScpO1xyXG5cclxuICAgICAgICAgICAgJGZvcm0uc3VibWl0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZW5kZXJCcmVhZGNydW1icygpIHtcclxuXHJcbiAgICAgICAgaWYgKERhdGEuY2F0YWxvZ19maWVsZF9pc19sb2FkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXJCcmVhZGNydW1icycpO1xyXG4gICAgICAgICAgICAkKCcuYnJlYWRjcnVtYnMnKS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgJG5vd19saTogYW55ID0gJCgnbGlbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0nKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBub3dfaWQ6IGFueSA9ICRub3dfbGkuYXR0cignaWQnKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBub3dfbmFtZTogYW55ID0gJG5vd19saS5maW5kKCc+IGEnKS5odG1sKCkuc3BsaXQoJzwvaT4nKVsxXTtcclxuXHJcbiAgICAgICAgICAgIHZhciBicmVhZF9kYXRhOiBhbnkgPSBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiBub3dfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiBub3dfaWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIHZhciBoYXNfcGFyZW50X2xpOiBib29sZWFuID0gJG5vd19saS5jbG9zZXN0KCd1bCcpLmNsb3Nlc3QoJ2xpJykubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlKGhhc19wYXJlbnRfbGkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICRub3dfbGkgPSAkbm93X2xpLmNsb3Nlc3QoJ3VsJykuY2xvc2VzdCgnbGlbcm9sZT1cInRyZWVpdGVtXCJdJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgbm93X2lkID0gJG5vd19saS5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIG5vd19uYW1lID0gJG5vd19saS5maW5kKCc+IGEnKS5odG1sKCkuc3BsaXQoJzwvaT4nKVsxXTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhZF9kYXRhW2JyZWFkX2RhdGEubGVuZ3RoXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6IG5vd19uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6IG5vd19pZFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBoYXNfcGFyZW50X2xpID0gJG5vd19saS5jbG9zZXN0KCd1bCcpLmNsb3Nlc3QoJ2xpW3JvbGU9XCJ0cmVlaXRlbVwiXScpLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJyZWFkX2RhdGEgPSBicmVhZF9kYXRhLnJldmVyc2UoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJyZWFkY3J1bWJzXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxyXG4gICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5UZXN0PC9hPiAmZ3Q7XHJcbiAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPlRlc3Q8L2E+ICZndDtcclxuICAgICAgICAgICAgIDxzcGFuPtCi0LXQutGD0YnQuNC5INGN0LvQtdC80LXQvdGCPC9zcGFuPlxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAqL1xyXG5cclxuICAgICAgICAgICAgdmFyIGJyZWFkX3ZpZXc6IHN0cmluZyA9IGBgO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpOiBudW1iZXIgPSAwOyBpIDwgYnJlYWRfZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBicmVhZF9kYXRhW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGkgPT0gYnJlYWRfZGF0YS5sZW5ndGggLSAxKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFkX3ZpZXcgKz0gYCA8c3Bhbj4ke2RhdGEubmFtZX08L3NwYW4+YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhZF92aWV3ICs9IGAgPGEgaHJlZj0nIycgZGF0YS1jbGljay1icmVhZGNydW1icz1cIiR7ZGF0YS5pZH1cIj4ke2RhdGEubmFtZX08L2E+ICZndGA7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICQoJy5icmVhZGNydW1icycpLmh0bWwoYnJlYWRfdmlldy50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICQoJy5icmVhZGNydW1icycpLmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vINCg0LXQvdC00LXRgCDQstGB0LXRhSDQvdC10L7QsdGF0L7QtNC40LzRi9GFINGN0LvQtdC80LXQvdGC0L7QsiDRgdGC0YDQsNC90LjRhtGLINGBINC60LvQsNGB0YHQuNGE0LjQutCw0YLQvtGA0LDQvNC4XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlbmRlcicpO1xyXG5cclxuICAgICAgICBEYXRhLm1vZGVfZWRpdCA9ICQoJ1tkYXRhLWNsaWNrPVwicGFuZWxfZWRpdF9tb2RlXCJdJykuaGFzQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgICAgIGlmIChEYXRhLmNhdGFsb2dfZmllbGRfaXNfbG9hZCkge1xyXG4gICAgICAgICAgICAvLyDQn9C+0LrQsNC30YvQstCw0LXQvCDQv9Cw0L3QtdC70Ywg0LfQsNCz0YDRg9C30LrQuFxyXG4gICAgICAgICAgICAkKCdbZGF0YS1jb250ZXh0PVwicGFuZWxfZWRpdFwiXScpLnNob3coKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgLy8g0J/QvtC60LDQt9GL0LLQsNC10Lwg0L/QsNC90LXQu9GMINC30LDQs9GA0YPQt9C60LhcclxuICAgICAgICAgICAgJCgnW2RhdGEtY29udGV4dD1cInBhbmVsX2VkaXRcIl0nKS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDQo9C00LDQu9GP0LXQvCDQutC90L7Qv9C60Lgg0LTQvtCx0LDQstC70LXQvdC40Y8g0LTQvtC/INC/0L7Qu9GPXHJcbiAgICAgICAgJCgnW2RhdGEtY29udGV4dD1cImFjdGl2ZV9lbGVtZW50X2RhdGFcIl0gW2RhdGEtaXRlbV1bZGF0YS1pbml0LWVkaXQ9XCJvblwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUF0dHIoJ2RhdGEtaW5pdC1lZGl0Jyk7XHJcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnW2RhdGEtY29udGV4dD1cImVkaXRfZmllbGRcIl0nKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCdbZGF0YS1jb250ZXh0PVwiYWN0aXZlX2VsZW1lbnRfZGF0YVwiXSBbZGF0YS1udW1dJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBpbnVtOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1jb250ZXh0PVwiYWN0aXZlX2VsZW1lbnRfZGF0YVwiXSBbZGF0YS1pdGVtXScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2RhdGEtc29ydCcsICsraW51bSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vINCV0YHQu9C4INCy0LrQu9GO0YfQtdC9INGA0LXQttC40Lwg0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRjywg0YLQviDQv9C+0LrQsNC30YvQsNC10Lwg0YDRj9C00L7QvCDRgdC+INCy0YHQtdC80Lgg0L/QvtC70Y/QvNC4INC60L3QvtC/0LrQuCDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPXHJcbiAgICAgICAgaWYgKERhdGEubW9kZV9lZGl0KSB7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG5cclxuICAgICAgICAgICAgJCgnW2RhdGEtY29udGV4dD1cImFjdGl2ZV9lbGVtZW50X2RhdGFcIl0gW2RhdGEtaXRlbV0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGkrKztcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgc29ydDogYW55ID0gaTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2RhdGEtaW5pdC1lZGl0JywgJ29uJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5iZWZvcmUoYDxkaXYgZGF0YS1udW09XCIke3NvcnR9XCIgZGF0YS1jbGljaz1cImFkZF9maWVsZF9pbl9lZGl0X21vZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+0JTQvtCx0LDQstC40YLRjCDQv9C+0LvQtTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzLXNxdWFyZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmApO1xyXG5cclxuICAgICAgICAgICAgICAgICQodGhpcykuYXBwZW5kKGBcclxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1jb250ZXh0PVwiZWRpdF9maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGRhdGEtY2xpY2s9XCJtb3ZlX3RvcF9maWVsZFwiIGRhdGEtdHlwZT1cIiR7JCh0aGlzKS5kYXRhKCdpdGVtJyl9XCIgdGl0bGU9XCLQn9C10YDQtdC80LXRgdGC0LjRgtGMINC/0L7Qu9C1INCy0YvRiNC1XCIgY2xhc3M9XCJmYSBmYS1hcnJvdy1jaXJjbGUtdXBcIj48L2k+ICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aSBkYXRhLWNsaWNrPVwibW92ZV9kb3duX2ZpZWxkXCIgZGF0YS10eXBlPVwiJHskKHRoaXMpLmRhdGEoJ2l0ZW0nKX1cIiB0aXRsZT1cItCf0LXRgNC10LzQtdGB0YLQuNGC0Ywg0L/QvtC70LUg0L3QuNC20LVcIiBjbGFzcz1cImZhIGZhLWFycm93LWNpcmNsZS1kb3duXCI+PC9pPiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGkgZGF0YS1jbGljaz1cImVkaXRfZmllbGRcIiBkYXRhLXR5cGU9XCIkeyQodGhpcykuZGF0YSgnaXRlbScpfVwiIHRpdGxlPVwi0JjQt9C80LXQvdC40YLRjCDQv9C+0LvQtVwiIGNsYXNzPVwiZmEgZmEtcGVuY2lsLXNxdWFyZVwiPjwvaT4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGRhdGEtY2xpY2s9XCJkZWxldGVfZmllbGRcIiB0aXRsZT1cItCj0LTQsNC70LjRgtGMINC/0L7Qu9C1XCIgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT4gICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYClcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaSA+IDAgfHwgRGF0YS5jYXRhbG9nX2ZpZWxkX2lzX2VtcHR5KVxyXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtY29udGV4dD1cImFjdGl2ZV9lbGVtZW50X2RhdGFcIl0nKS5hcHBlbmQoYDxkaXYgZGF0YS1udW09XCIkeysraX1cIiBkYXRhLWNsaWNrPVwiYWRkX2ZpZWxkX2luX2VkaXRfbW9kZVwiPlxyXG4gICAgICAgICAgICAgICAgPGg2PtCU0L7QsdCw0LLQuNGC0Ywg0L/QvtC70LU8L2g2PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzLXNxdWFyZVwiPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+YCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB0aGlzLnJlbmRlckJyZWFkY3J1bWJzKCk7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge0NhdGFsb2dDb250cm9sbGVyfTsiLCJpbXBvcnQge0ZpZWxkLCBJbnRlcmZhY2VGaWVsZH0gZnJvbSBcIi4vSW50ZXJmYWNlRmllbGRcIjtcclxuXHJcbmRlY2xhcmUgdmFyICQ6IGFueTtcclxuZGVjbGFyZSB2YXIgc3lzdGVtOiBhbnk7XHJcblxyXG5jbGFzcyBGaWxlIGV4dGVuZHMgRmllbGQgaW1wbGVtZW50cyBJbnRlcmZhY2VGaWVsZCB7XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNfaW5pdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdFNjcmlwdHMoKSB7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1jbGljaz1cImRlbGV0ZV9maWxlXCJdJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgJHdyYXBwZXI6IGFueSA9ICQodGhpcykuY2xvc2VzdCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHZhciBpZF9waG90bzogbnVtYmVyID0gJHdyYXBwZXIuYXR0cignZGF0YS1pZCcpO1xyXG5cclxuICAgICAgICAgICAgJHdyYXBwZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHZhciBub3dfb2JqZWN0OiBhbnkgPSBzeXN0ZW0uZ2V0TG9jYWxEYXRhKFwibm93X2ZpZWxkX2luc3RhbmNlXCIpO1xyXG5cclxuICAgICAgICAgICAgbm93X29iamVjdC5zYXZlKGlkX3Bob3RvLCB7XHJcbiAgICAgICAgICAgICAgICAnYWN0aW9uX2ZpZWxkJzogJ2RlbGV0ZV9waG90bycsXHJcbiAgICAgICAgICAgIH0sIGZhbHNlLCB0cnVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWNsaWNrPVwiYWRkX3Bob3RvX2dhbGxlcnlcIl0nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IHN5c3RlbS5nZW5lcmF0ZVJhbmRJZCgxMCk7XHJcbiAgICAgICAgICAgICQodGhpcykuYmVmb3JlKGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZF9fZ2FsbGVyeV9faW5wdXRfcGhvdG9cIiBkYXRhLWNsaWNrPVwicGhvdG9fd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGRhdGEtY29udGV4dD1cImZpbGVfZ2FsbGVyeV9maWVsZFwiIG5hbWU9XCJmaWxlXyR7aWR9XCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZXJJbml0KGU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblxyXG4gICAgICAgIC8vINGB0L7Qt9C00LDQtNC40Lwg0L7QsdGK0LXQutGCINC00LDQvdC90YvRhSDRhNC+0YDQvNGLXHJcbiAgICAgICAgdmFyIGRhdGE6IGFueSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgJCgnW2RhdGEtY29udGV4dD1cImZpbGVfZ2FsbGVyeV9maWVsZFwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgIHZhciBmaWxlc19hdHRyID0gJCh0aGlzKVswXS5maWxlcztcclxuXHJcbiAgICAgICAgICAgaWYoZmlsZXNfYXR0ci5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICBkYXRhLmFwcGVuZCggYGZpbGVfbG9hZF8ke2l9YCwgIGZpbGVzX2F0dHJbMF0pO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzdXBlci5zYXZlV2l0aEZpbGVzKGRhdGEpO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtGaWxlfTsiLCJpbXBvcnQge0ZpZWxkLCBJbnRlcmZhY2VGaWVsZH0gZnJvbSBcIi4vSW50ZXJmYWNlRmllbGRcIjtcclxuXHJcbmRlY2xhcmUgdmFyICQ6IGFueTtcclxuZGVjbGFyZSB2YXIgc3lzdGVtOiBhbnk7XHJcblxyXG5jbGFzcyBHYWxsZXJ5IGV4dGVuZHMgRmllbGQgaW1wbGVtZW50cyBJbnRlcmZhY2VGaWVsZCB7XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNfaW5pdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdFNjcmlwdHMoKSB7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1jbGljaz1cImRlbGV0ZV9waG90b19nYWxsZXJ5XCJdJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgJHdyYXBwZXI6IGFueSA9ICQodGhpcykuY2xvc2VzdCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHZhciBpZF9waG90bzogbnVtYmVyID0gJHdyYXBwZXIuYXR0cignZGF0YS1pZCcpO1xyXG5cclxuICAgICAgICAgICAgJHdyYXBwZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHZhciBub3dfb2JqZWN0OiBhbnkgPSBzeXN0ZW0uZ2V0TG9jYWxEYXRhKFwibm93X2ZpZWxkX2luc3RhbmNlXCIpO1xyXG5cclxuICAgICAgICAgICAgbm93X29iamVjdC5zYXZlKGlkX3Bob3RvLCB7XHJcbiAgICAgICAgICAgICAgICAnYWN0aW9uX2ZpZWxkJzogJ2RlbGV0ZV9waG90bycsXHJcbiAgICAgICAgICAgIH0sIGZhbHNlLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkX3Bob3RvKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWNsaWNrPVwiYWRkX3Bob3RvX2dhbGxlcnlcIl0nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IHN5c3RlbS5nZW5lcmF0ZVJhbmRJZCgxMCk7XHJcbiAgICAgICAgICAgICQodGhpcykuYmVmb3JlKGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZF9fZ2FsbGVyeV9faW5wdXRfcGhvdG9cIiBkYXRhLWNsaWNrPVwicGhvdG9fd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGRhdGEtY29udGV4dD1cImZpbGVfZ2FsbGVyeV9maWVsZFwiIG5hbWU9XCJmaWxlXyR7aWR9XCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZXJJbml0KGU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblxyXG4gICAgICAgIC8vINGB0L7Qt9C00LDQtNC40Lwg0L7QsdGK0LXQutGCINC00LDQvdC90YvRhSDRhNC+0YDQvNGLXHJcbiAgICAgICAgdmFyIGRhdGE6IGFueSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgJCgnW2RhdGEtY29udGV4dD1cImZpbGVfZ2FsbGVyeV9maWVsZFwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgIHZhciBmaWxlc19hdHRyID0gJCh0aGlzKVswXS5maWxlcztcclxuXHJcbiAgICAgICAgICAgaWYoZmlsZXNfYXR0ci5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICBkYXRhLmFwcGVuZCggYGZpbGVfbG9hZF8ke2l9YCwgIGZpbGVzX2F0dHJbMF0pO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzdXBlci5zYXZlV2l0aEZpbGVzKGRhdGEpO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtHYWxsZXJ5fTsiLCJpbXBvcnQge0ZpZWxkLCBJbnRlcmZhY2VGaWVsZH0gZnJvbSBcIi4vSW50ZXJmYWNlRmllbGRcIjtcclxuICAgICAgICBkZWNsYXJlIHZhciAkOiBhbnk7XHJcbiAgICAgICAgZGVjbGFyZSB2YXIgc3lzdGVtOiBhbnk7XHJcbiAgICAgICAgZGVjbGFyZSB2YXIgVXNlcjogYW55O1xyXG4gICAgICAgIGRlY2xhcmUgdmFyIHRpbnltY2U6IGFueTtcclxuICAgICAgICBjbGFzcyBIdG1sIGV4dGVuZHMgRmllbGQgaW1wbGVtZW50cyBJbnRlcmZhY2VGaWVsZCB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaXNfaW5pdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaW5pdFNjcmlwdHMoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcudG94IGlucHV0JywgZnVuY3Rpb24oKSB7ICQodGhpcykuZm9jdXMoKTt9KTsgICAgXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBvbkFmdGVyT3BlbkZpZWxkTW9kYWwoKSB7XHJcblxyXG4gICAgICAgIHRpbnltY2UucmVtb3ZlKCcjZmllbGRfaHRtbF9jb250ZW50Jyk7XHJcbiAgICAgICAgICAgICAgICB0aW55bWNlLmluaXQoe1xyXG4gICAgICAgICAgICAgICAgLy9zcGVsbGNoZWNrZXJfbGFuZ3VhZ2VzOiBcIlJ1c3NpYW49cnUsVWtyYWluaWFuPXVrLEVuZ2xpc2g9ZW5cIixcclxuICAgICAgICAgICAgICAgIC8vc3BlbGxjaGVja2VyX3JwY191cmw6IFwiL3NwZWxsZXJcIixcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAncnUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZV91cmxzIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZV9zY3JpcHRfaG9zdCA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJ0X3VybHMgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZmllbGRfaHRtbF9jb250ZW50JywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbnM6ICdhMTF5Y2hlY2tlciBhZHZjb2RlIGNhc2VjaGFuZ2UgZm9ybWF0cGFpbnRlciBsaW5rY2hlY2tlciBhdXRvbGluayBsaXN0cyBjaGVja2xpc3QgaW1hZ2UgcGVybWFuZW50cGVuIHBvd2VycGFzdGUgZnVsbHNjcmVlbiB0YWJsZSBhZHZ0YWJsZSB0aW55Y29tbWVudHMgbGluaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6ICdsaW5rIGFkZGNvbW1lbnQgc2hvd2NvbW1lbnRzIGNhc2VjaGFuZ2UgY2hlY2tsaXN0IGNvZGUgZm9ybWF0cGFpbnRlciBwZXJtYW5lbnRwZW4gdGFibGUgZnVsbHNjcmVlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xiYXJfbW9kZTogJ2Zsb2F0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdF9saW5rX3RhcmdldDogXCJfYmxhbmtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua19jb250ZXh0X3Rvb2xiYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtfdGl0bGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbnljb21tZW50c19tb2RlOiAnZW1iZWRkZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXNfdXBsb2FkX3VybDogJy9vdGhlci90aW55bWNlX2ZpbGVzL3VwbG9hZC5waHAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXNfdXBsb2FkX2hhbmRsZXI6IGZ1bmN0aW9uKGJsb2JJbmZvOiBhbnksIHN1Y2Nlc3M6IGFueSwgZmFpbHVyZTogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHhocjogYW55O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmb3JtRGF0YTogYW55O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub3BlbignUE9TVCcsICcvb3RoZXIvdGlueW1jZV9maWxlcy91cGxvYWQucGhwP2NsYXNzaWZpZXJfaWQ9JyArIHN5c3RlbS5sb2NhbF9kYXRhLm5vd19jbGFzc2lmaWVyLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBqc29uOiBhbnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzICE9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZSgnSFRUUCBFcnJvcjogJyArIHhoci5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpzb24gPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghanNvbiB8fCB0eXBlb2YganNvbi5sb2NhdGlvbiAhPSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlKCdJbnZhbGlkIEpTT046ICcgKyB4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoanNvbi5sb2NhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGJsb2JJbmZvLmJsb2IoKSwgYmxvYkluZm8uZmlsZW5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW55Y29tbWVudHNfYXV0aG9yOiBVc2VyLnN1cm5hbWUgKyAnICcgKyBVc2VyLm5hbWUsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhhbmRsZXJJbml0KGU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDQntCx0YDQsNCx0L7RgtGH0LjQuiBodG1sINC/0L7Qu9GPIChodG1sKWApO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGE6IGFueSA9IHRpbnltY2UuYWN0aXZlRWRpdG9yLmdldENvbnRlbnQoKTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAvLyDQodC+0YXRgNCw0L3Rj9C10Lwg0LTQsNC90L3Ri9C1LCDQv9C10YDQtdC00LDQsiDQv9Cw0YDQsNC80LXRgtGA0YtcclxuICAgICAgICBzdXBlci5zYXZlKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICBzeXN0ZW0uYWxlcnQuYWRkKCfQndC10LvRjNC30Y8g0YHQvtGF0YDQsNC90LjRgtGMINC/0YPRgdGC0L7QtSDQv9C+0LvQtScsICdzdWNjZXNzJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuZXhwb3J0IHtIdG1sfTsiLCJpbXBvcnQge2xvY2tCb2R5fSBmcm9tIFwiLi4vZnVuY3Rpb25zXCI7XHJcblxyXG5kZWNsYXJlIHZhciAkOiBhbnk7XHJcbmRlY2xhcmUgdmFyIHN5c3RlbTogYW55O1xyXG5cclxuaW50ZXJmYWNlIEludGVyZmFjZUZpZWxkIHtcclxuICAgIC8qKlxyXG4gICAgICog0J7QsdGA0LDQsdC+0YLRh9C40Log0L3QsNC20LDRgtC40Y8g0L3QsCDQutC90L7Qv9C60YMg0YHQvtGF0YDQsNC90LjRgtGMINC/0L7Qu9C1XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGVcclxuICAgICAqL1xyXG4gICAgaGFuZGxlckluaXQoZTphbnkpOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog0KHQvtCx0YvRgtC40LUg0LLRi9C30YvQstCw0LXQvNC+0LUg0L/QvtGB0LvQtSDQt9Cw0L/RgNC+0YHQsCDQvdCwINC+0LHQvdC+0LLQu9C10L3QuNC1XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHJlc3BvbnNlXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZXJSZWZyZXNoKHJlc3BvbnNlOmFueSk6IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQodC+0LHRi9GC0LjQtSDQstGL0LfRi9Cy0LDQtdC80L7QtSDQv9C+0YHQu9C1INGB0L7RhdGA0LDQvdC10L3QuNGPINC/0L7Qu9GPXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHJlc3BvbnNlXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZXJBZnRlclNhdmUocmVzcG9uc2U6YW55KTogdm9pZDtcclxufVxyXG5cclxuY2xhc3MgRmllbGQgaW1wbGVtZW50cyBJbnRlcmZhY2VGaWVsZCB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZWxlY3Rvcl9mb3JtOiBhbnk7XHJcbiAgICBwdWJsaWMgc3RhdGljICRmb3JtOiBhbnk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHR5cGVfZmllbGQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBzdGF0aWMgaWRfZmllbGQ6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcGFyYW1zIC0g0LTQvtC/INC00LDQvdC90YvQtSDQtNC70Y8g0YHQvtGF0YDQsNC90LXQvdC40Y9cclxuICAgICAqIEBwYXJhbSBkYXRhX2Zvcl9zYXZlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzYXZlKGRhdGFfZm9yX3NhdmU6IGFueSwgcGFyYW1zOiBhbnkgPSBudWxsLCBuZWVkX2Nsb3NlX21vZGFsOiBib29sZWFuID0gdHJ1ZSwgaGlkZV9hbGVydHM6IGJvb2xlYW4gPSBmYWxzZSlcclxuICAgIHtcclxuICAgICAgICBsZXQgcGFyYW1zX3NlbmQ6IGFueTtcclxuXHJcbiAgICAgICAgaWYocGFyYW1zID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXJhbXNfc2VuZCA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXJhbXNfc2VuZCA9IHBhcmFtcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhcmFtc19zZW5kW2B0eXBlX2ZpZWxkYF0gPSBGaWVsZC50eXBlX2ZpZWxkO1xyXG4gICAgICAgIHBhcmFtc19zZW5kW2BpZF9maWVsZGBdID0gRmllbGQuaWRfZmllbGQ7XHJcbiAgICAgICAgcGFyYW1zX3NlbmRbYGRhdGFfZm9yX3NhdmVgXSA9IGRhdGFfZm9yX3NhdmU7XHJcbiAgICAgICAgcGFyYW1zX3NlbmRbYG5lZWRfY2xvc2VfbW9kYWxgXSA9IG5lZWRfY2xvc2VfbW9kYWw7XHJcbiAgICAgICAgcGFyYW1zX3NlbmRbYG5lZWRfaGlkZV9hbGVydHNgXSA9IGhpZGVfYWxlcnRzO1xyXG5cclxuICAgICAgICBpZihoaWRlX2FsZXJ0cyA9PSBmYWxzZSlcclxuICAgICAgICAgICAgbG9ja0JvZHkoKTtcclxuXHJcbiAgICAgICAgc3lzdGVtLmNhbGxNZXRob2QoJ3NhdmVfZmllbGQnLCBwYXJhbXNfc2VuZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHBhcmFtcyAtINC00L7QvyDQtNCw0L3QvdGL0LUg0LTQu9GPINGB0L7RhdGA0LDQvdC10L3QuNGPXHJcbiAgICAgKiBAcGFyYW0gZm9ybV9kYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzYXZlV2l0aEZpbGVzKGZvcm1fZGF0YTogYW55LCBwYXJhbXM6IGFueSA9IG51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoZm9ybV9kYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgLy9UT0RPOiBBZGQgcGFyYW1zXHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICBmb3JtX2RhdGEuYXBwZW5kKGBkYXRhX2Zvcl9zYXZlYCwgcGFyYW1zKTtcclxuICAgICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgICAgIGlmKHBhcmFtcyAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIga2V5c19wYXJhbXM6IGFueSA9IE9iamVjdC5rZXlzKHBhcmFtcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzX3BhcmFtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1fZGF0YS5hcHBlbmQoa2V5c19wYXJhbXNbaV0sIHBhcmFtc1trZXlzX3BhcmFtc1tpXV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3JtX2RhdGEuYXBwZW5kKGB0eXBlX2ZpZWxkYCwgRmllbGQudHlwZV9maWVsZCk7XHJcbiAgICAgICAgICAgIGZvcm1fZGF0YS5hcHBlbmQoYGlkX2ZpZWxkYCwgRmllbGQuaWRfZmllbGQpO1xyXG4gICAgICAgICAgICBmb3JtX2RhdGEuYXBwZW5kKGBkYXRhX2Zvcl9zYXZlYCwgJ2lzX2ZpbGUnKTtcclxuXHJcbiAgICAgICAgICAgIGxvY2tCb2R5KCk7XHJcblxyXG4gICAgICAgICAgICBzeXN0ZW0uY2FsbE1ldGhvZFdpdGhGaWxlKCdzYXZlX2ZpZWxkJywgZm9ybV9kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4vKiAgICBjb25zdHJ1Y3Rvcih0eXBlX2ZpZWxkOiBzdHJpbmcsIGlkX2ZpZWxkOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50eXBlX2ZpZWxkID0gdHlwZV9maWVsZDtcclxuICAgICAgICB0aGlzLmlkX2ZpZWxkID0gaWRfZmllbGQ7XHJcbiAgICB9Ki9cclxuXHJcbiAgICBoYW5kbGVySW5pdChlOmFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINCe0YLQstC10YfQsNC10YIg0LfQsCDQv9C+0LvRg9GH0LXQvdC40LUg0LTQsNC90L3Ri9GFINC/0L7Qu9GPINC00LvRjyDQutCw0LrQuNGFLdC70LjQsdC+INC00LXQudGB0YLQstC40Lkg0L7QsdC90L7QstC70LXQvdC40Y8g0YHRg9GJ0LXRgdGC0LLRg9GO0YnQtdCz0L4g0YDQtdC90LTQtdGA0LBcclxuICAgIHB1YmxpYyByZWZyZXNoKGFjdGlvbjogc3RyaW5nLCBwYXJhbXM6IGFueSlcclxuICAgIHtcclxuICAgICAgICBsZXQgcGFyYW1zX3NlbmQ6IGFueTtcclxuXHJcbiAgICAgICAgaWYocGFyYW1zID09IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXJhbXNfc2VuZCA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXJhbXNfc2VuZCA9IHBhcmFtcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhcmFtc19zZW5kW2B0eXBlX2ZpZWxkYF0gPSBGaWVsZC50eXBlX2ZpZWxkO1xyXG4gICAgICAgIHBhcmFtc19zZW5kW2BpZF9maWVsZGBdID0gRmllbGQuaWRfZmllbGQ7XHJcbiAgICAgICAgcGFyYW1zX3NlbmRbYGFjdGlvbl9yZWZyZXNoYF0gPSBhY3Rpb247XHJcblxyXG4gICAgICAgIHN5c3RlbS5jYWxsTWV0aG9kKCdyZWZyZXNoX2ZpZWxkJywgcGFyYW1zX3NlbmQpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgaW5pdChpZF9lZGl0X2Zvcm06c3RyaW5nKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIEZpZWxkLiRmb3JtID0gJChgIyR7aWRfZWRpdF9mb3JtfWApO1xyXG4gICAgICAgIEZpZWxkLnNlbGVjdG9yX2Zvcm0gPSBgIyR7aWRfZWRpdF9mb3JtfWA7XHJcblxyXG4gICAgICAgIGlmKEZpZWxkLiRmb3JtLmxlbmd0aCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbignc3VibWl0JywgYCMke2lkX2VkaXRfZm9ybX1gLCB0aGlzLmhhbmRsZXJJbml0KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlclJlZnJlc2gocmVzcG9uc2U6YW55KTogdm9pZCB7fVxyXG5cclxuICAgIGhhbmRsZXJBZnRlclNhdmUocmVzcG9uc2U6IGFueSk6IHZvaWQge1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge0ludGVyZmFjZUZpZWxkLCBGaWVsZH07IiwiaW1wb3J0IHtGaWVsZCwgSW50ZXJmYWNlRmllbGR9IGZyb20gXCIuL0ludGVyZmFjZUZpZWxkXCI7XHJcblxyXG5kZWNsYXJlIHZhciAkOiBhbnk7XHJcbmRlY2xhcmUgdmFyIHN5c3RlbTogYW55O1xyXG5cclxuY2xhc3MgTnVtYmVyIGV4dGVuZHMgRmllbGQgaW1wbGVtZW50cyBJbnRlcmZhY2VGaWVsZCB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc19pbml0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbml0U2NyaXB0cygpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlckluaXQoZTphbnkpOiBib29sZWFuIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGDQntCx0YDQsNCx0L7RgtGH0LjQuiDRgtC10LrRgdGC0L7QstC+0LPQviDQv9C+0LvRjyAodGV4dClgKTtcclxuICAgICAgICB2YXIgZGF0YSA9ICQoRmllbGQuc2VsZWN0b3JfZm9ybSkuZmluZCgnaW5wdXRbdHlwZT1cIm51bWJlclwiXScpLnZhbCgpLnRyaW0oKTtcclxuXHJcbiAgICAgICAgaWYoZGF0YS5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8g0KHQvtGF0YDQsNC90Y/QtdC8INC00LDQvdC90YvQtSwg0L/QtdGA0LXQtNCw0LIg0L/QsNGA0LDQvNC10YLRgNGLXHJcbiAgICAgICAgICAgIHN1cGVyLnNhdmUoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN5c3RlbS5hbGVydC5hZGQoJ9Cd0LXQu9GM0LfRjyDRgdC+0YXRgNCw0L3QuNGC0Ywg0L/Rg9GB0YLQvtC1INC/0L7Qu9C1INGBINGH0LjRgdC70L7QvCcsICdzdWNjZXNzJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtOdW1iZXJ9OyIsImltcG9ydCB7RmllbGQsIEludGVyZmFjZUZpZWxkfSBmcm9tIFwiLi9JbnRlcmZhY2VGaWVsZFwiO1xyXG5pbXBvcnQge2xvY2tCb2R5LCB1bmxvY2tCb2R5LCBEb1dpdGhUcnVlfSBmcm9tIFwiLi4vZnVuY3Rpb25zXCI7XHJcblxyXG5kZWNsYXJlIHZhciAkOiBhbnk7XHJcbmRlY2xhcmUgdmFyIHN5c3RlbTogYW55O1xyXG5cclxuY2xhc3MgVGFibGUgZXh0ZW5kcyBGaWVsZCBpbXBsZW1lbnRzIEludGVyZmFjZUZpZWxkIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzX2luaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNhdmVfY29sdW1uc19maW5pc2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBzdGF0aWMgc2F2ZV9yb3dzX2ZpbmlzaDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWZyZXNoX2NvbHVtbnNfZmluaXNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlZnJlc2hfcm93c19maW5pc2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlbnVtQ29sdW1ucygpIHtcclxuICAgICAgICB2YXIgbnVtOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS10eXBlXScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5kYXRhKCd0eXBlJykgPT0gJ3NhdmVkJyB8fCAkKHRoaXMpLmRhdGEoJ3R5cGUnKSA9PSAncGFyZW50Jykge1xyXG4gICAgICAgICAgICAgICAgbnVtKys7XHJcblxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdbZGF0YS1jb250ZXh0PVwibnVtX2NvbHVtblwiXScpLmh0bWwobnVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdENvbnRleHRNZW51KCkge1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgJC5jb250ZXh0TWVudSgnZGVzdHJveScsICdbZGF0YS1jb250ZXh0PVwicm93X3RhYmxlXCJdJyk7XHJcblxyXG4gICAgICAgICAgICAkKCdbZGF0YS1jb250ZXh0PVwicm93X3RhYmxlXCJdJykucmVtb3ZlQ2xhc3MoJ2NvbnRleHQtbWVudS1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgICQuY29udGV4dE1lbnUoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjbW9kYWxfZWRpdF9maWVsZCBbZGF0YS1jb250ZXh0PVwicm93X3RhYmxlXCJdJyxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkX3VwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwi0JTQvtCx0LDQstC40YLRjCDRgdCy0LXRgNGF0YNcIiwgY2FsbGJhY2s6IGZ1bmN0aW9uIChrZXk6IGFueSwgb3B0OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub3dfb2JqZWN0OiBhbnkgPSBzeXN0ZW0uZ2V0TG9jYWxEYXRhKFwibm93X2ZpZWxkX2luc3RhbmNlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNsb25lOiBhbnkgPSAkKHRoaXMpLmNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9uZS5maW5kKCdpbnB1dCcpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmJlZm9yZShjbG9uZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFibGUuaW5pdENvbnRleHRNZW51KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUYWJsZS5yZW51bUNvbHVtbkRhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vd19vYmplY3Quc2F2ZVJvd3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFkZF9kb3duOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwi0JTQvtCx0LDQstC40YLRjCDRgdC90LjQt9GDXCIsIGNhbGxiYWNrOiBmdW5jdGlvbiAoa2V5OiBhbnksIG9wdDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm93X29iamVjdDogYW55ID0gc3lzdGVtLmdldExvY2FsRGF0YShcIm5vd19maWVsZF9pbnN0YW5jZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjbG9uZTogYW55ID0gJCh0aGlzKS5jbG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmUuZmluZCgnaW5wdXQnKS52YWwoJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZnRlcihjbG9uZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFibGUuaW5pdENvbnRleHRNZW51KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUYWJsZS5yZW51bUNvbHVtbkRhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vd19vYmplY3Quc2F2ZVJvd3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHVwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwi0J/QvtC00L3Rj9GC0Ywg0LLQstC10YDRhVwiLCBjYWxsYmFjazogZnVuY3Rpb24gKGtleTogYW55LCBvcHQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vd19vYmplY3Q6IGFueSA9IHN5c3RlbS5nZXRMb2NhbERhdGEoXCJub3dfZmllbGRfaW5zdGFuY2VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2xvbmUgPSAkKHRoaXMpLmNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJldiA9ICQodGhpcykucHJldigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZXYubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2LmJlZm9yZShjbG9uZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUYWJsZS5pbml0Q29udGV4dE1lbnUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUYWJsZS5yZW51bUNvbHVtbkRhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3dfb2JqZWN0LnNhdmVSb3dzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb3duOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwi0J7Qv9GD0YHRgtC40YLRjCDQstC90LjQt1wiLCBjYWxsYmFjazogZnVuY3Rpb24gKGtleTogYW55LCBvcHQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vd19vYmplY3Q6IGFueSA9IHN5c3RlbS5nZXRMb2NhbERhdGEoXCJub3dfZmllbGRfaW5zdGFuY2VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2xvbmUgPSAkKHRoaXMpLmNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dCA9ICQodGhpcykubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0LmFmdGVyKGNsb25lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhYmxlLmluaXRDb250ZXh0TWVudSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhYmxlLnJlbnVtQ29sdW1uRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vd19vYmplY3Quc2F2ZVJvd3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWxldGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCLQo9C00LDQu9C40YLRjFwiLCBjYWxsYmFjazogZnVuY3Rpb24gKGtleTogYW55LCBvcHQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vd19vYmplY3Q6IGFueSA9IHN5c3RlbS5nZXRMb2NhbERhdGEoXCJub3dfZmllbGRfaW5zdGFuY2VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFibGUuaW5pdENvbnRleHRNZW51KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUYWJsZS5yZW51bUNvbHVtbkRhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vd19vYmplY3Quc2F2ZVJvd3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZV9hbGw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCLQo9C00LDQu9C40YLRjCDQstGB0LUg0YHRgtGA0L7QutC4XCIsIGNhbGxiYWNrOiBmdW5jdGlvbiAoa2V5OiBhbnksIG9wdDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm93X29iamVjdDogYW55ID0gc3lzdGVtLmdldExvY2FsRGF0YShcIm5vd19maWVsZF9pbnN0YW5jZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyN0YWJsZURhdGEgW2RhdGEtY29udGV4dD1cInJvd190YWJsZVwiXTpub3QoOmxhc3QpJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUYWJsZS5pbml0Q29udGV4dE1lbnUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhYmxlLnJlbnVtQ29sdW1uRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93X29iamVjdC5zYXZlUm93cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMjAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGluaXRTY3JpcHRzKCkge1xyXG5cclxuICAgICAgICBUYWJsZS5pbml0Q29udGV4dE1lbnUoKTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWNsaWNrPVwiZXhwb3J0X3hsc190YWJsZVwiXScsIGZ1bmN0aW9uIChlOiBhbnkpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3lzdGVtLmdldExvY2FsRGF0YShcIm5vd19maWVsZF9pbnN0YW5jZVwiKSk7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBgL2RvYy1nZW5lcmF0b3IvZXhjZWw/dXVpZD0ke0ZpZWxkLmlkX2ZpZWxkfWA7XHJcblxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWNsaWNrPVwiaW1wb3J0X2NzdlwiXScsIGZ1bmN0aW9uIChlOiBhbnkpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG5vd19vYmplY3Q6IGFueSA9IHN5c3RlbS5nZXRMb2NhbERhdGEoXCJub3dfZmllbGRfaW5zdGFuY2VcIik7XHJcbiAgICAgICAgICAgIG5vd19vYmplY3QuaW1wb3J0Q3N2KCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtY2xpY2s9XCJjb2x1bW5fbW92ZV91cFwiXScsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjbG9uZTogYW55ID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpLmNsb25lKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcHJldjogYW55ID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpLnByZXYoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwcmV2LmF0dHIoJ2RhdGEtdHlwZScpICE9PSAncGFyZW50Jykge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnByZXYoKS5iZWZvcmUoY2xvbmUpO1xyXG5cclxuICAgICAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbm93X29iamVjdDogYW55ID0gc3lzdGVtLmdldExvY2FsRGF0YShcIm5vd19maWVsZF9pbnN0YW5jZVwiKTtcclxuICAgICAgICAgICAgICAgIG5vd19vYmplY3Quc2F2ZUNvbHVtbnMoKTtcclxuICAgICAgICAgICAgICAgIFRhYmxlLnJlbnVtQ29sdW1ucygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1jbGljaz1cImNvbHVtbl9tb3ZlX2Rvd25cIl0nLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2xvbmU6IGFueSA9ICQodGhpcykuY2xvc2VzdCgndHInKS5jbG9uZSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG5leHQ6IGFueSA9ICQodGhpcykuY2xvc2VzdCgndHInKS5uZXh0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAobmV4dC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykubmV4dCgpLmFmdGVyKGNsb25lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG5vd19vYmplY3Q6IGFueSA9IHN5c3RlbS5nZXRMb2NhbERhdGEoXCJub3dfZmllbGRfaW5zdGFuY2VcIik7XHJcbiAgICAgICAgICAgICAgICBub3dfb2JqZWN0LnNhdmVDb2x1bW5zKCk7XHJcbiAgICAgICAgICAgICAgICBUYWJsZS5yZW51bUNvbHVtbnMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignaW5wdXQnLCAnW2RhdGEtY29udGV4dD1cInJvd192YWx1ZVwiXScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG5vd19vYmplY3Q6IGFueSA9IHN5c3RlbS5nZXRMb2NhbERhdGEoXCJub3dfZmllbGRfaW5zdGFuY2VcIik7XHJcbiAgICAgICAgICAgIG5vd19vYmplY3Quc2F2ZVJvd3MoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWNsaWNrPVwiY29sdW1uX2RlbGV0ZVwiXScsIGZ1bmN0aW9uIChlOiBhbnkpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgVGFibGUucmVudW1Db2x1bW5zKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1jbGljaz1cInJlbW92ZV9hbGxfY29sdW1uX3RhYmxlXCJdJywgZnVuY3Rpb24gKGU6IGFueSkge1xyXG4gICAgICAgICAgICAkKCcjdGFibGVDb2x1bW5zIHRyOm5vdCg6bGFzdCknKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJCgnW2RhdGEtY2xpY2s9XCJzYXZlX2NvbHVtblwiXScpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgIFRhYmxlLnJlbnVtQ29sdW1ucygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignaW5wdXQnLCAnW2RhdGEtY29udGV4dD1cIm5hbWVfY29sdW1uXCJdJywgZnVuY3Rpb24gKGU6IGFueSkge1xyXG4gICAgICAgICAgICB2YXIgJHRyOiBhbnkgPSAkKHRoaXMpLmNsb3Nlc3QoJ3RyJyk7XHJcblxyXG4gICAgICAgICAgICAkdHIuZmluZCgnW2RhdGEtY2xpY2s9XCJzYXZlX2NvbHVtblwiXScpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgIFRhYmxlLnJlbnVtQ29sdW1ucygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtY2xpY2s9XCJzYXZlX2NvbHVtblwiXScsIGZ1bmN0aW9uIChlOiBhbnkpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBub3dfb2JqZWN0OiBhbnkgPSBzeXN0ZW0uZ2V0TG9jYWxEYXRhKFwibm93X2ZpZWxkX2luc3RhbmNlXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyICR0cjogYW55ID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG5vd19rZXk6IGFueSA9ICR0ci5maW5kKCdbZGF0YS1jb250ZXh0PVwia2V5X2NvbHVtblwiXScpLnZhbCgpLnRyaW0oKTtcclxuICAgICAgICAgICAgdmFyIG5vd19uYW1lOiBhbnkgPSAkdHIuZmluZCgnW2RhdGEtY29udGV4dD1cIm5hbWVfY29sdW1uXCJdJykudmFsKCkudHJpbSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGNvdW50OiBhbnkgPSAwO1xyXG4gICAgICAgICAgICAkKCdbZGF0YS1jb250ZXh0PVwia2V5X2NvbHVtblwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkudHJpbSgpID09IG5vd19rZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY291bnQgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBzeXN0ZW0uYWxlcnQuYWRkKCfQotCw0LrQvtC5INC60LvRjtGHINGD0LbQtSDRgdGD0YnQtdGB0YLQstGD0LXRgicsICdkYW5nZXInKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG5vd19rZXkubGVuZ3RoICE9IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobm93X25hbWUubGVuZ3RoICE9IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0ZCcpLmZpbmQoJ2J1dHRvbicpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHRyLmF0dHIoJ2RhdGEtdHlwZScsICdzYXZlZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBub3dfb2JqZWN0LnNhdmVDb2x1bW5zKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBEb1dpdGhUcnVlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm93X29iamVjdC5zYXZlUm93cygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRG9XaXRoVHJ1ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3dfb2JqZWN0LnJlZnJlc2hSb3duKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9XaXRoVHJ1ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFibGUucmVudW1Db2x1bW5zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRhYmxlLnNhdmVfcm93c19maW5pc2g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRhYmxlLnNhdmVfcm93c19maW5pc2g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gVGFibGUuc2F2ZV9jb2x1bW5zX2ZpbmlzaDtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAsIDUwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIC8qICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm93X29iamVjdC5zYXZlUm93cygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3dfb2JqZWN0LnJlZnJlc2hSb3duKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDQwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDQwMDApOyovXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICR0ci5maW5kKCdbZGF0YS1jb250ZXh0PVwia2V5X2NvbHVtblwiXScpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzeXN0ZW0uYWxlcnQuYWRkKCfQktCy0LXQtNC40YLQtSDQuNC80Y8g0LrQvtC70L7QvdC60LghJywgJ2RhbmdlcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3lzdGVtLmFsZXJ0LmFkZCgn0JLQstC10LTQuNGC0LUg0YPQvdC40LrQsNC70YzQvdGL0Lkg0LrQu9GO0Ycg0LrQvtC70L7QvdC60LghJywgJ2RhbmdlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1jbGljaz1cImFkZF9jb2x1bW5fdGFibGVcIl0nLCBmdW5jdGlvbiAoZTogYW55KSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICQoJyN0YWJsZUNvbHVtbnMgdGJvZHknKS5hcHBlbmQoYFxyXG4gICAgICAgICAgICAgICAgPHRyIGRhdGEtdHlwZT1cIm5vdF9zYXZlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBkYXRhLWNvbnRleHQ9XCJudW1fY29sdW1uXCI+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPjxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGRhdGEtY29udGV4dD1cImtleV9jb2x1bW5cIiB2YWx1ZT1cIiR7c3lzdGVtLnV1aWR2NCgpfVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLQmtC70Y7RhyDQutC+0LvQvtC90LrQuFwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGRhdGEtY29udGV4dD1cIm5hbWVfY29sdW1uXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCd0LDQt9Cy0LDQvdC40LUg0LrQvtC70L7QvdC60LhcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLWNsaWNrPVwic2F2ZV9jb2x1bW5cIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj48aSBjbGFzcz1cImZhIGZhLWZsb3BweS1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIiBkYXRhLWNsaWNrPVwiY29sdW1uX21vdmVfdXBcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWluZm9cIj48aSBjbGFzcz1cImZhIGZhLWFycm93LXVwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIiBkYXRhLWNsaWNrPVwiY29sdW1uX21vdmVfZG93blwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4taW5mb1wiPjxpIGNsYXNzPVwiZmEgZmEtYXJyb3ctZG93blwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCIgZGF0YS1jbGljaz1cImNvbHVtbl9kZWxldGVcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiPjxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIGApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJ1tuYW1lPVwic2hvd19vbmx5X3BhcmVudF9maWVsZHNfdGFibGVcIl0nLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBpZigkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50X2lkID0gJCgnbGlbcm9sZT1cInRyZWVpdGVtXCJdW2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJdJykuY2xvc2VzdCgndWwnKS5jbG9zZXN0KCdsaVtyb2xlPVwidHJlZWl0ZW1cIl0nKS5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBwYXJlbnRfaWQgIT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb3VudDogbnVtYmVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAkKCdbbmFtZT1cInJvb3RfdGFibGVcIl0nKS5maW5kKCdvcHRpb24nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoJCh0aGlzKS5hdHRyKCdkYXRhLWlkLWl0ZW0nKSAhPSBwYXJlbnRfaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNvdW50ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnByb3AoJ3NlbGVjdGVkJyx0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihjb3VudCA9PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtZXJyb3I9XCJub3RfZm91bmRfdGFibGVfcGFyZW50XCJdJykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCdbbmFtZT1cInJvb3RfdGFibGVcIl0nKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ1tuYW1lPVwicm9vdF90YWJsZVwiXScpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLWVycm9yPVwibm90X2ZvdW5kX3RhYmxlX3BhcmVudFwiXScpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IGNoZWNrZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCdbbmFtZT1cInJvb3RfdGFibGVcIl0nKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1lcnJvcj1cIm5vdF9mb3VuZF90YWJsZV9wYXJlbnRcIl0nKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnW25hbWU9XCJyb290X3RhYmxlXCJdJykuZmluZCgnb3B0aW9uJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJ1tkYXRhLXR5cGUtZmllbGQ9XCJ0YWJsZVwiXSBmb3JtJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCQoJ1tkYXRhLWNvbnRleHQ9XCJjaGFuZ2VfcGlkX3RhYmxlXCJdJykubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICQodGhpcykuc2VyaWFsaXplQXJyYXkoKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtOiBhbnksIGk6IG51bWJlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtWyduYW1lJ10gPT0gJ3R5cGVfdGFibGVfcGFyZW50Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVsndmFsdWUnXSA9PSAncm9vdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLWNvbnRleHQ9XCJzZWxlY3Rfcm9vdF90YWJsZVwiXScpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLWNvbnRleHQ9XCJzZWxlY3Rfcm9vdF90YWJsZVwiXScpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgJCgnW2RhdGEtY29udGV4dD1cInNlbGVjdF9yb290X3RhYmxlXCJdJykuYXR0cignZGF0YS1pbml0JykgPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtY29udGV4dD1cInNlbGVjdF9yb290X3RhYmxlXCJdJykuYXR0cignZGF0YS1pbml0JywgJ3RydWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlbnVtQ29sdW1uRGF0YSgpIHtcclxuICAgICAgICB2YXIgbnVtOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1jb250ZXh0PVwicm93X251bVwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBudW0rKztcclxuXHJcbiAgICAgICAgICAgICQodGhpcykuaHRtbChudW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgaGFuZGxlckFmdGVyU2F2ZShyZXNwb25zZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2hhbmRsZXJBZnRlclNhdmUnKTtcclxuICAgICAgICBUYWJsZS5zYXZlX3Jvd3NfZmluaXNoID0gdHJ1ZTtcclxuICAgICAgICBUYWJsZS5zYXZlX2NvbHVtbnNfZmluaXNoID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlQ29sdW1ucygpIHtcclxuICAgICAgICB2YXIgbm93X29iamVjdDogYW55ID0gc3lzdGVtLmdldExvY2FsRGF0YShcIm5vd19maWVsZF9pbnN0YW5jZVwiKTtcclxuXHJcbiAgICAgICAgdmFyIGRhdGE6IGFueSA9IHtcclxuICAgICAgICAgICAgJ3R5cGVfc2F2ZSc6ICdzYXZlX2NvbHVtbnMnLFxyXG4gICAgICAgICAgICAnbmFtZV90YWJsZSc6ICQoJ1tuYW1lPVwibmFtZV90YWJsZVwiXScpLnZhbCgpLnRyaW0oKSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgZGF0YV9jb2x1bW46IGFueSA9IHt9O1xyXG5cclxuICAgICAgICAkKCcjdGFibGVDb2x1bW5zIHRib2R5IHRyW2RhdGEtdHlwZT1cInNhdmVkXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGRhdGFfY29sdW1uWyQodGhpcykuZmluZCgnW2RhdGEtY29udGV4dD1cImtleV9jb2x1bW5cIl0nKS52YWwoKS50cmltKCldID0ge1xyXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAkKHRoaXMpLmZpbmQoJ1tkYXRhLWNvbnRleHQ9XCJuYW1lX2NvbHVtblwiXScpLnZhbCgpLnRyaW0oKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkYXRhWydjb2x1bW5zJ10gPSBkYXRhX2NvbHVtbjtcclxuICAgICAgICBkYXRhWydyb3dzJ10gPSBbXTtcclxuICAgICAgICBkYXRhWydub3RfY2xvc2VfbW9kYWxfZWRpdCddID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgVGFibGUuc2F2ZV9jb2x1bW5zX2ZpbmlzaCA9IGZhbHNlO1xyXG4gICAgICAgIG5vd19vYmplY3Quc2F2ZShKU09OLnN0cmluZ2lmeShkYXRhKSwgbnVsbCwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVSb3dzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYXZlUm93cycpO1xyXG5cclxuICAgICAgICB2YXIga2V5czogYW55ID0ge307XHJcblxyXG4gICAgICAgIHZhciBkYXRhOiBBcnJheTxhbnk+ID0gW107XHJcblxyXG4gICAgICAgIC8vINCj0LfQvdCw0LXQvCDRgdC/0LjRgdC+0Log0LrQu9GO0YfQtdC5XHJcbiAgICAgICAgJCgnI3RhYmxlRGF0YSB0aGVhZCB0aCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGtleTogYW55ID0gJCh0aGlzKS5odG1sKCkudHJpbSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGtleSAhPSAnIycpIHtcclxuICAgICAgICAgICAgICAgIGtleXNba2V5XSA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vINCj0LfQvdCw0LXQvCDRgdC/0LjRgdC+0Log0LrQu9GO0YfQtdC5XHJcbiAgICAgICAgJCgnI3RhYmxlRGF0YSBbZGF0YS1jb250ZXh0PVwicm93X3RhYmxlXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZGF0YV9yb3c6IGFueSA9IHt9O1xyXG5cclxuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdbZGF0YS1rZXldJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSAkKHRoaXMpLmZpbmQoJ2lucHV0JykudmFsKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gJCh0aGlzKS5hdHRyKCdkYXRhLWtleScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGFfcm93W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBkYXRhW2RhdGEubGVuZ3RoXSA9IGRhdGFfcm93O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgZGF0YV9zYXZlX3Jvd3M6IGFueSA9IHt9O1xyXG4gICAgICAgIGRhdGFfc2F2ZV9yb3dzWydkYXRhX2Zvcl9zYXZlJ10gPSBkYXRhO1xyXG4gICAgICAgIGRhdGFfc2F2ZV9yb3dzWyd0eXBlX3NhdmUnXSA9ICdzYXZlX3Jvd3MnO1xyXG4gICAgICAgIGRhdGFfc2F2ZV9yb3dzWyduYW1lX3RhYmxlJ10gPSAkKCcjbmFtZVRhYmxlJykudmFsKCk7XHJcblxyXG4gICAgICAgIFRhYmxlLnNhdmVfcm93c19maW5pc2ggPSBmYWxzZTtcclxuICAgICAgICBzdXBlci5zYXZlKEpTT04uc3RyaW5naWZ5KGRhdGFfc2F2ZV9yb3dzKSwgbnVsbCwgZmFsc2UsIHRydWUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpbXBvcnRDc3YoKSB7XHJcbiAgICAgICAgLy8g0YHQvtC30LTQsNC00LjQvCDQvtCx0YrQtdC60YIg0LTQsNC90L3Ri9GFINGE0L7RgNC80YtcclxuICAgICAgICB2YXIgZGF0YTogYW55ID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICAkKCdbZGF0YS1jb250ZXh0PVwiZmlsZV9jc3ZcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGZpbGVzX2F0dHIgPSAkKHRoaXMpWzBdLmZpbGVzO1xyXG5cclxuICAgICAgICAgICAgaWYoZmlsZXNfYXR0ci5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCggYGZpbGVfbG9hZF8ke2l9YCwgIGZpbGVzX2F0dHJbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICBkYXRhLmFwcGVuZCggYGhhc19ub3RfaGVhZGVyYCwgJCgnW25hbWU9XCJjc3ZfaGFzX25vdF9oZWFkZXJcIl0nKS5pcygnOmNoZWNrZWQnKSk7XHJcbiAgICAgICAgc3VwZXIuc2F2ZVdpdGhGaWxlcyhkYXRhLCB7XHJcbiAgICAgICAgICAgICd0eXBlX3NhdmUnOiAnaW1wb3J0X2NzdidcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoUm93bigpIHtcclxuICAgICAgICBUYWJsZS5yZWZyZXNoX3Jvd3NfZmluaXNoID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHZhciBkYXRhOiBhbnkgPSB7fTtcclxuXHJcbiAgICAgICAgc3VwZXIucmVmcmVzaCgncmVmcmVzaF9yb3dzJywgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaENvbHVtbnMoKSB7XHJcbiAgICAgICAgVGFibGUucmVmcmVzaF9jb2x1bW5zX2ZpbmlzaCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB2YXIgZGF0YTogYW55ID0ge307XHJcblxyXG4gICAgICAgIHN1cGVyLnJlZnJlc2goJ3JlZnJlc2hfY29sdW1ucycsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZXJJbml0KGU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdmFyIG5hbWVfdGFibGU6IGFueSA9ICQoJ1tuYW1lPVwibmFtZV90YWJsZVwiXScpLnZhbCgpO1xyXG4gICAgICAgIHZhciB0eXBlX3NhdmU6IGFueSA9ICQoJ1tuYW1lPVwidHlwZV9zYXZlXCJdJykudmFsKCk7XHJcblxyXG4gICAgICAgIHZhciBkYXRhOiBhbnkgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKG5hbWVfdGFibGUubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgICAgICAgLy8g0J/QtdGA0LLQuNGH0L3QvtC1INGB0L7RhdGA0LDQvdC10L3QuNC1XHJcbiAgICAgICAgICAgIGlmICh0eXBlX3NhdmUgPT0gJ2ZpcnN0X3NhdmUnKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhWyd0eXBlX3NhdmUnXSA9IHR5cGVfc2F2ZTtcclxuICAgICAgICAgICAgICAgIGRhdGFbJ25hbWVfdGFibGUnXSA9IG5hbWVfdGFibGU7XHJcbiAgICAgICAgICAgICAgICBkYXRhWyd0eXBlX3RhYmxlJ10gPSAkKCdbbmFtZT1cInR5cGVfdGFibGVfcGFyZW50XCJdOmNoZWNrZWQnKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVsndHlwZV90YWJsZSddID09ICdvdGhlcl90YWJsZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhWyd0eXBlX3RhYmxlJ10gPSAkKCdbbmFtZT1cInJvb3RfdGFibGVcIl0nKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzdXBlci5zYXZlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlX3NhdmUgPT0gJ3NlY29uZF9zYXZlJykge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBub3dfb2JqZWN0OiBhbnkgPSBzeXN0ZW0uZ2V0TG9jYWxEYXRhKFwibm93X2ZpZWxkX2luc3RhbmNlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINCf0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwINC60L3QvtC/0LrRgyDRgdC+0YXRgNCw0L3QuNGC0YxcclxuICAgICAgICAgICAgICAgIG5vd19vYmplY3Quc2F2ZUNvbHVtbnMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEb1dpdGhUcnVlKGNhbGxiYWNrX3RydWU6IGFueSwgY2FsbGJhY2tfZG86IGFueSwgZGVsYXk/OiBudW1iZXIsIG1heF9jb3VudD86IG51bWJlcilcclxuXHJcbiAgICAgICAgICAgICAgICBEb1dpdGhUcnVlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBub3dfb2JqZWN0LnNhdmVSb3dzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIERvV2l0aFRydWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3dfb2JqZWN0LnJlZnJlc2hDb2x1bW5zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gVGFibGUuc2F2ZV9yb3dzX2ZpbmlzaDtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAsIDUwKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRhYmxlLnNhdmVfY29sdW1uc19maW5pc2g7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAsIDUwKTtcclxuXHJcbiAgICAgICAgICAvKiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm93X29iamVjdC5yZWZyZXNoQ29sdW1ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDQwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0sIDQwMDApOyovXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgLy8gc3VwZXIuc2F2ZVdpdGhGaWxlcyhkYXRhKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZXJSZWZyZXNoKHJlc3BvbnNlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaGFuZGxlclJlZnJlc2ggVGFibGUnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAocmVzcG9uc2UucmVzcG9uc2UucmVmcmVzaF9kYXRhLmFjdGlvbl9yZWZyZXNoKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JlZnJlc2hfcm93cyc6XHJcbiAgICAgICAgICAgICAgICBUYWJsZS5yZWZyZXNoX3Jvd3NfZmluaXNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICQoJyN0YWJsZURhdGEnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmh0bWwoYDxicj4ke3Jlc3BvbnNlLnJlc3BvbnNlLnJlZnJlc2hfZGF0YS5odG1sfWApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBUYWJsZS5pbml0Q29udGV4dE1lbnUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdyZWZyZXNoX2NvbHVtbnMnOlxyXG4gICAgICAgICAgICAgICAgVGFibGUucmVmcmVzaF9yb3dzX2ZpbmlzaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAkKCcjdGFibGVDb2x1bW5zJykuaHRtbChgPGJyPiR7cmVzcG9uc2UucmVzcG9uc2UucmVmcmVzaF9kYXRhLmh0bWx9YCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7VGFibGV9OyIsImltcG9ydCB7RmllbGQsIEludGVyZmFjZUZpZWxkfSBmcm9tIFwiLi9JbnRlcmZhY2VGaWVsZFwiO1xyXG5cclxuZGVjbGFyZSB2YXIgJDogYW55O1xyXG5kZWNsYXJlIHZhciBzeXN0ZW06IGFueTtcclxuXHJcbmNsYXNzIFRleHQgZXh0ZW5kcyBGaWVsZCBpbXBsZW1lbnRzIEludGVyZmFjZUZpZWxkIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzX2luaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGluaXRTY3JpcHRzKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVySW5pdChlOmFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYNCe0LHRgNCw0LHQvtGC0YfQuNC6INGC0LXQutGB0YLQvtCy0L7Qs9C+INC/0L7Qu9GPICh0ZXh0KWApO1xyXG4gICAgICAgIHZhciBkYXRhID0gJChGaWVsZC5zZWxlY3Rvcl9mb3JtKS5maW5kKCd0ZXh0YXJlYScpLnZhbCgpLnRyaW0oKTtcclxuXHJcbiAgICAgICAgaWYoZGF0YS5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8g0KHQvtGF0YDQsNC90Y/QtdC8INC00LDQvdC90YvQtSwg0L/QtdGA0LXQtNCw0LIg0L/QsNGA0LDQvNC10YLRgNGLXHJcbiAgICAgICAgICAgIHN1cGVyLnNhdmUoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN5c3RlbS5hbGVydC5hZGQoJ9Cd0LXQu9GM0LfRjyDRgdC+0YXRgNCw0L3QuNGC0Ywg0L/Rg9GB0YLQvtC1INC/0L7Qu9C1JywgJ3N1Y2Nlc3MnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1RleHR9OyIsImRlY2xhcmUgdmFyICQ6IGFueTtcclxuZGVjbGFyZSB2YXIgc3lzdGVtOiBhbnk7XHJcblxyXG4vLyDQodC60YDRi9GC0Ywg0LrRgNGD0YLQuNC70LrRgyDQt9Cw0LPRgNGD0LfQutC4INGE0L7RgNC8XHJcbmZ1bmN0aW9uIGhpZGVMb2FkZXIoZm9ybV9pZDogc3RyaW5nLCBjYWxsYmFjazogYW55KSB7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50X2Zvcm0gPSAkKCdbZGF0YS1mb3JtLWlkPVwiJyArIGZvcm1faWQgKyAnXCJdJyk7XHJcbiAgICAgICAgZWxlbWVudF9mb3JtLmZpbmQoJy5mb3JtX19ib2R5JykuZmFkZVRvKFwib3BhY2l0eVwiLCAxKTtcclxuICAgICAgICBlbGVtZW50X2Zvcm0uZmluZCgnLmZvcm1fX2xvYWRlcicpLmhpZGUoKTtcclxuICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgfSwgMTAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvY2tCb2R5KCkge1xyXG4gICAgJCgnYm9keScpLmF0dHIoJ2RhdGEtbG9jaycsICdvbicpO1xyXG4gICAgJCgnLmxvYWRfbG9jaycpLnNob3coKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRG9XaXRoVHJ1ZSggY2FsbGJhY2tfZG86IGFueSwgY2FsbGJhY2tfdHJ1ZTogYW55LCBkZWxheT86IG51bWJlciwgbWF4X2NvdW50PzogbnVtYmVyKVxyXG57XHJcbiAgICBkZWxheSA9IGRlbGF5IHx8IDIwMDtcclxuICAgIG1heF9jb3VudCA9IG1heF9jb3VudCB8fCAxMDtcclxuXHJcbiAgICB2YXIgY291bnRfaXRlcmF0aW9uczogbnVtYmVyID0gMDtcclxuICAgIHZhciBpbnRlcnZhbF9hY3Rpb246IGFueSA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvdW50X2l0ZXJhdGlvbnMrKztcclxuXHJcbiAgICAgICAgaWYoY291bnRfaXRlcmF0aW9ucyA+IG1heF9jb3VudClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxfYWN0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGNhbGxiYWNrX3RydWUoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxfYWN0aW9uKTtcclxuICAgICAgICAgICAgY2FsbGJhY2tfZG8oKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBkZWxheSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVubG9ja0JvZHkoKSB7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCdib2R5JykucmVtb3ZlQXR0cignZGF0YS1sb2NrJyk7XHJcbiAgICAgICAgJCgnLmxvYWRfbG9jaycpLmhpZGUoKTtcclxuICAgIH0sIDUwMCk7XHJcbn1cclxuXHJcbi8vINCe0YfQuNGB0YLQuNGC0Ywg0YTQvtGA0LzRg1xyXG5mdW5jdGlvbiBlbXB0eUZvcm0oZm9ybV9pZDogc3RyaW5nKSB7XHJcbiAgICAkKCdbZGF0YS1mb3JtLWlkPVwiJyArIGZvcm1faWQgKyAnXCJdJylcclxuICAgICAgICAuZmluZCgnaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJlbWFpbFwiXSwgaW5wdXRbdHlwZT1cIm51bWJlclwiXScpLmVhY2goXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnZhbCgnJyk7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbi8vINCS0LXRgNC90YPRgtGMIGRvbSDQutGA0YPRgtC40LvQutC4XHJcbmZ1bmN0aW9uIGdldExvYWRlckRvbSgpIHtcclxuICAgIHJldHVybiBgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWJvcmRlciBtLWF1dG9cIiByb2xlPVwic3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxuZXhwb3J0IHtoaWRlTG9hZGVyLCBlbXB0eUZvcm0sIGdldExvYWRlckRvbSwgbG9ja0JvZHksIHVubG9ja0JvZHksIERvV2l0aFRydWV9OyIsImltcG9ydCAnLi8uLi9jc3MvYXBwLnNjc3MnOyAvLyDQmNC80L/QvtGA0YLQuNGA0YPQtdC8INGB0YLQuNC70LhcclxuaW1wb3J0IHtyb3V0ZXJ9IGZyb20gXCIuL3JvdXRlclwiO1xyXG5pbXBvcnQge3JlbmRlcnNSZXF1aXJlfSBmcm9tIFwiLi9yZW5kZXJzL3JlbmRlcnNcIjtcclxuaW1wb3J0IHtpbml0fSBmcm9tIFwiLi9pbml0XCI7XHJcbmltcG9ydCB7cmVuZGVyc0ZpZWxkfSBmcm9tIFwiLi9yZW5kZXJzL3JlbmRlcnNGaWVsZFwiO1xyXG5pbXBvcnQge3JlbmRlcnNDYXRhbG9nfSBmcm9tIFwiLi9yZW5kZXJzL3JlbmRlcnNDYXRhbG9nXCI7XHJcblxyXG5pbml0KCk7XHJcblxyXG4vLyDQmNC90LjRhtC40LjRgNGD0LXQvCDRgNC10L3QtNC10YDRi1xyXG5yZW5kZXJzUmVxdWlyZSgpO1xyXG5cclxuLy8g0KDQtdC90LTQtdGA0Ysg0YHQstGP0LfQsNC90L3Ri9C1INGBINC/0L7Qu9GP0LzQuFxyXG5yZW5kZXJzRmllbGQoKTtcclxuXHJcbi8vINCg0LXQvdC00LXRgNGLINGB0LLRj9C30LDQvdC90YvQtSDRgSDQutCw0YLQsNC70L7Qs9C+0LxcclxucmVuZGVyc0NhdGFsb2coKTtcclxuXHJcbi8vINCX0LDQv9GD0YHQutCw0LXQvCDRgNC+0YPRgtC10YBcclxucm91dGVyKCk7XHJcblxyXG5cclxuIiwiaW1wb3J0IHtnZXRMb2FkZXJEb20sIHVubG9ja0JvZHl9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xyXG5kZWNsYXJlIHZhciAkOiBhbnk7XHJcbmRlY2xhcmUgdmFyIHN5c3RlbTogYW55O1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuXHJcbiAgICAvLyDQkNC90LjQvNCw0YbQuNGPINC60YDRg9GC0LjQu9C60Lgg0L/RgNC4IHN1Ym1pdCDRhNC+0YDQvFxyXG4gICAgJCgnLmZvcm0nKS5zdWJtaXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuZmluZCgnLmZvcm1fX2JvZHknKS5mYWRlVG8oXCJvcGFjaXR5XCIsIDApO1xyXG4gICAgICAgICQodGhpcykuZmluZCgnLmZvcm1fX2xvYWRlcicpLnNob3coKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCf0L7QuNGB0Log0LrQvtC80L/QvtC90LXQvdGC0L7QsiDQuCDQstGB0YLQsNCy0LrQsCDQutGA0YPRgtC40LvQvtC6XHJcbiAgICAkKCdzZWN0aW9uW2RhdGEtY29tcG9uZW50XScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuaHRtbChnZXRMb2FkZXJEb20oKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmxvYWRfbG9jaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgIHVubG9ja0JvZHkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCh0LvRg9GI0LDRgtC10LvRjCDQvtGC0LrRgNGL0YLQuNGPINC80L7QtNCw0LvRjNC90YvRhSDQvtC60L7QvVxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLW1vZGFsXScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBtb2RhbF9pZCA9ICQodGhpcykuZGF0YSgnbW9kYWwnKTtcclxuICAgICAgICAkKG1vZGFsX2lkKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICAgIHN3aXRjaCAobW9kYWxfaWQpIHtcclxuICAgICAgICAgICAgY2FzZSAnI21vZGFsX3NldHRpbmdfY2F0YWxvZyc6XHJcbiAgICAgICAgICAgICAgICBzeXN0ZW0uc2V0TG9jYWxEYXRhKCQodGhpcykuY2xvc2VzdCgnW2RhdGEtbG9jYWxdJylbMF0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS50YWJsZShzeXN0ZW0ubG9jYWxfZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsX3NldHRpbmdfY2F0YWxvZycpLmZpbmQoJ25hbWUtY2F0YWxvZycpLnRleHQoc3lzdGVtLmdldExvY2FsRGF0YSgnY2F0YWxvZ19zZXR0aW5nX21vZGFsJywgJ25hbWUnKSk7XHJcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1mb3JtPVwiZm9ybV9lZGl0X2NhdGFsb2dcIl0nKS5hdHRyKHsnZGF0YS1pZC1jYXRhbG9nJzogc3lzdGVtLmdldExvY2FsRGF0YSgnY2F0YWxvZ19zZXR0aW5nX21vZGFsJywgJ2lkJyl9KTtcclxuICAgICAgICAgICAgICAgICQoJ1tkYXRhLWZvcm09XCJmb3JtX2VkaXRfY2F0YWxvZ1wiXSBbbmFtZT1cIm5hbWVfY2F0YWxvZ1wiXScpLnZhbChzeXN0ZW0uZ2V0TG9jYWxEYXRhKCdjYXRhbG9nX3NldHRpbmdfbW9kYWwnLCAnbmFtZScpKTtcclxuICAgICAgICAgICAgICAgICQoJ1tkYXRhLWZvcm09XCJmb3JtX2VkaXRfY2F0YWxvZ1wiXSBbbmFtZT1cImlkXCJdJykudmFsKHN5c3RlbS5nZXRMb2NhbERhdGEoJ2NhdGFsb2dfc2V0dGluZ19tb2RhbCcsICdpZCcpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdC60LvRjtGH0LDQtdC8INGA0LDQtNC40L4taW5wdXQn0YtcclxuICAgICAgICAgICAgICAgIGlmIChzeXN0ZW0uZ2V0TG9jYWxEYXRhKCdjYXRhbG9nX3NldHRpbmdfbW9kYWwnLCAndHlwZScpID09PSAncHVibGljJylcclxuICAgICAgICAgICAgICAgICAgICAkKCcjcmFkaW9TZXR0aW5nUHVibGljQ2F0YWxvZycpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3JhZGlvU2V0dGluZ1ByaXZhdGVDYXRhbG9nJykudHJpZ2dlcignY2xpY2snKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHtpbml0fTsiLCJpbXBvcnQge2VtcHR5Rm9ybSwgZ2V0TG9hZGVyRG9tLCBoaWRlTG9hZGVyfSBmcm9tIFwiLi4vZnVuY3Rpb25zXCI7XHJcblxyXG5kZWNsYXJlIHZhciAkOiBhbnk7XHJcbmRlY2xhcmUgdmFyIHN5c3RlbTogYW55O1xyXG5kZWNsYXJlIHZhciByZW5kZXI6IGFueTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlcnNSZXF1aXJlKCkge1xyXG5cclxuICAgIC8vINCf0YDQvtCy0LXRgNC60LAg0YHQvNC10L3RiyDQtNCw0L3QvdGL0YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXHJcbiAgICByZW5kZXIucmVuZGVyX2ZvcmdvdF9wYXNzd29yZCA9IChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5yZXNwb25zZS5yZXN1bHQgPT0gdHJ1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN5c3RlbS5hbGVydC5hZGQoJ9Cd0L7QstGL0Lkg0L/QsNGA0L7Qu9GMINC+0YLQv9GA0LDQstC70LXQvSDQvdCwIGVtYWlsJywgJ3N1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgaGlkZUxvYWRlcihkYXRhLnJlc3BvbnNlLmZvcm1faWQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzeXN0ZW0uYWxlcnQuYWRkKGRhdGEucmVzcG9uc2UuZXJyb3IsICdkYW5nZXInKTtcclxuICAgICAgICAgICAgaGlkZUxvYWRlcihkYXRhLnJlc3BvbnNlLmZvcm1faWQsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8g0J/RgNC+0LLQtdGA0LrQsCDRgdC80LXQvdGLINC00LDQvdC90YvRhSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuICAgIHJlbmRlci5yZW5kZXJfY2hlY2tfY2hhbmdlX2RhdGEgPSAoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UucmVzdWx0ID09IHRydWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzeXN0ZW0uYWxlcnQuYWRkKCfQlNCw0L3QvdGL0LUg0YPRgdC/0LXRiNC90L4g0LjQt9C80LXQvdC10L3RiyEnLCAnc3VjY2VzcycpO1xyXG4gICAgICAgICAgICBoaWRlTG9hZGVyKGRhdGEucmVzcG9uc2UuZm9ybV9pZCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN5c3RlbS5hbGVydC5hZGQoZGF0YS5yZXNwb25zZS5lcnJvciwgJ2RhbmdlcicpO1xyXG4gICAgICAgICAgICBoaWRlTG9hZGVyKGRhdGEucmVzcG9uc2UuZm9ybV9pZCwgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyDQn9GA0L7QstC10YDQutCwINCy0YXQvtC00LBcclxuICAgIHJlbmRlci5yZW5kZXJfY2hlY2tfbG9naW5fZm9ybSA9IChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5yZXNwb25zZS5yZXN1bHQgPT0gdHJ1ZSlcclxuICAgICAgICAgICAgc3lzdGVtLnJlZGlyZWN0KCcvY2FiaW5ldCcpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzeXN0ZW0uYWxlcnQuYWRkKCfQntGI0LjQsdC60LAg0LDQstGC0L7RgNC40LfQsNGG0LjQuCEnLCAnZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgIGhpZGVMb2FkZXIoZGF0YS5yZXNwb25zZS5mb3JtX2lkLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzeXN0ZW0uc2V0X2Vycm9yc19mb3JtKGRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vINCf0YDQvtCy0LXRgNC60LAg0YDQtdCz0LjRgdGC0YDQsNGG0LjQuFxyXG4gICAgcmVuZGVyLnJlbmRlcl9jaGVja19zaWduX3VwX2Zvcm0gPSAoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UucmVzdWx0ID09IHRydWUpXHJcbiAgICAgICAgICAgIHN5c3RlbS5yZWRpcmVjdCgnL2NhYmluZXQnKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3lzdGVtLmFsZXJ0LmFkZCgn0J7RiNC40LHQutCwINGA0LXQs9C40YHRgtGA0LDRhtC40LghJywgJ2RhbmdlcicpO1xyXG4gICAgICAgICAgICBoaWRlTG9hZGVyKGRhdGEucmVzcG9uc2UuZm9ybV9pZCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc3lzdGVtLnNldF9lcnJvcnNfZm9ybShkYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IHtyZW5kZXJzUmVxdWlyZX07IiwiaW1wb3J0IHtlbXB0eUZvcm0sIGdldExvYWRlckRvbSwgaGlkZUxvYWRlciwgdW5sb2NrQm9keX0gZnJvbSBcIi4uL2Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQge0NsYXNzaWZpZXJUcmVlfSBmcm9tIFwiLi4vY2xhc3Nlcy9DbGFzc2lmaWVyVHJlZVwiO1xyXG5pbXBvcnQge0RhdGF9IGZyb20gXCIuLi9jbGFzc2VzL0RhdGFcIjtcclxuaW1wb3J0IHtDYXRhbG9nQ29udHJvbGxlcn0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL2NhdGFsb2dDb250cm9sbGVyXCI7XHJcbmRlY2xhcmUgdmFyICQ6IGFueTtcclxuZGVjbGFyZSB2YXIgc3lzdGVtOiBhbnk7XHJcbmRlY2xhcmUgdmFyIHJlbmRlcjogYW55O1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyc0NhdGFsb2coKSB7XHJcblxyXG4gICAgLy8g0J/QvtGB0LvQtSDQvtC/0LXRgNCw0YbQuNC4INC/0L7QuNGB0LrQsFxyXG4gICAgcmVuZGVyLnJlbmRlcl9zZWFyY2hfY2xhc3NpZmllcnMgPSAoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgJCgnW2RhdGEtY29udGV4dD1cInNlYXJjaF9yZXN1bHRcIl0nKS5odG1sKGRhdGEucmVzcG9uc2Uudmlldyk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vINCf0L7RgdC70LUg0L3QsNC20LDRgtC40Y8g0L3QsCDQutC90L7Qv9C60YMg0L/RgNCw0LLQsCDQtNC+0YHRgtGD0L/QsFxyXG4gICAgcmVuZGVyLnJlbmRlcl9tYW5hZ2VyX3ByaXZpbGVnZSA9IChkYXRhOiBhbnkpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UucmVzdWx0ID09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoZGF0YS5yZXNwb25zZS5hY3Rpb25fcHJpdmlsZWdlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnYWRkX2VtYWlsJzpcclxuICAgICAgICAgICAgICAgICAgICBzeXN0ZW0uYWxlcnQuYWRkKCfQn9GA0LDQstCwINC00L7RgdGC0YPQv9CwINGD0YHQv9C10YjQvdC+INC00L7QsdCw0LLQu9C10L3RiyEnLCAnc3VjY2VzcycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzeXN0ZW0uY2FsbE1ldGhvZCgnbWFuYWdlcl9wcml2aWxlZ2UnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdpZF9jbGFzc2lmaWVyJzogc3lzdGVtLmdldExvY2FsRGF0YSgnY2xhc3NpZmllcl9pZF9wcml2aWxlZ2UnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2FjdGlvbl9wcml2aWxlZ2UnOiAnZ2V0X3ByaXZpbGVnZV9saXN0J1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICdnZXRfcHJpdmlsZWdlX2xpc3QnOlxyXG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLWNvbnRleHQ9XCJwcml2aWxlZ2VfbG9hZFwiXScpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1jb250ZXh0PVwicHJpdmlsZWdlX2xpc3RcIl0nKS5odG1sKGRhdGEucmVzcG9uc2Uudmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtY29udGV4dD1cInByaXZpbGVnZV9saXN0XCJdJykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8g0J/QvtGB0LvQtSDRjdC60YHQv9C+0YDRgtCwINC60LvQsNGB0YHQuNGE0LjQutCw0YLQvtGA0LBcclxuICAgIHJlbmRlci5yZW5kZXJfaW1wb3J0X2NsYXNzaWZpZXIgPSAoZGF0YTogYW55KSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChkYXRhLnJlc3BvbnNlLnJlc3VsdCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbF9pbXBvcnRfY2xhc3NpZmllcicpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIHN5c3RlbS5hbGVydC5hZGQoJ9CY0LzQv9C+0YDRgiDRg9GB0L/QtdGI0L3QviDQt9Cw0LrQvtC90YfQtdC9IScsICdzdWNjZXNzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8g0J/QvtGB0LvQtSDRjdC60YHQv9C+0YDRgtCwINC60LvQsNGB0YHQuNGE0LjQutCw0YLQvtGA0LBcclxuICAgIHJlbmRlci5yZW5kZXJfZXhwb3J0X2NsYXNzaWZpZXIgPSAoZGF0YTogYW55KSA9PiB7XHJcblxyXG4gICAgICAgIHZhciBsaW5rOiBhbnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLGRhdGEucmVzcG9uc2UuZXhwb3J0X2ZpbGUpO1xyXG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsJ2V4cG9ydCcpO1xyXG4gICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgICBsaW5rLnJlbW92ZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyDQl9Cw0LPRgNGD0LfQutCwINGD0LfQu9CwXHJcbiAgICByZW5kZXIucmVuZGVyX2xvYWRfZGF0YV9pdGVtID0gKGRhdGE6IGFueSkgPT4ge1xyXG5cclxuICAgICAgICB1bmxvY2tCb2R5KCk7XHJcblxyXG4gICAgICAgIGlmKCQoJ1tkYXRhLWNsaWNrPVwicGFuZWxfZWRpdF9tb2RlXCJdJykuaGFzQ2xhc3MoJ29uJykpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAkKCdbZGF0YS1jbGljaz1cInBhbmVsX2VkaXRfbW9kZVwiXScpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKCEkKCdbZGF0YS1jbGljaz1cInBhbmVsX2VkaXRfbW9kZVwiXScpLmhhc0NsYXNzKCdvbicpKVxyXG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLWNsaWNrPVwicGFuZWxfZWRpdF9tb2RlXCJdJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRhLnJlc3BvbnNlLnJlc3VsdCA9PT0gdHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgJCgnW2RhdGEtY2xpY2s9XCJwYW5lbF9lZGl0X21vZGVcIl0nKS5yZW1vdmVDbGFzcygnb24nKTtcclxuXHJcbiAgICAgICAgICAgIERhdGEuY2F0YWxvZ19maWVsZF9pc19sb2FkID0gdHJ1ZTtcclxuICAgICAgICAgICAgRGF0YS5jYXRhbG9nX2ZpZWxkX2lzX2VtcHR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIERhdGEuY2F0YWxvZ19pc19sb2FkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIENhdGFsb2dDb250cm9sbGVyLnJlbmRlcigpO1xyXG5cclxuICAgICAgICAgICAgJCgnW2RhdGEtY29udGV4dD1cImFjdGl2ZV9lbGVtZW50X2RhdGFcIl0nKS5lbXB0eSgpLmh0bWwoZGF0YS5yZXNwb25zZS52aWV3KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtaXRlbS13cmFwcGVyPVwiZ2FsbGVyeVwiXSA+IGRpdicpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHN5c3RlbS5zZXRMb2NhbERhdGFCeUtleSgnbm93X2xvYWRfZmllbGRfaWQnLCBkYXRhLnJlc3BvbnNlLmlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIERhdGEuY2F0YWxvZ19maWVsZF9pc19sb2FkID0gdHJ1ZTtcclxuICAgICAgICAgICAgRGF0YS5jYXRhbG9nX2ZpZWxkX2lzX2VtcHR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgRGF0YS5jYXRhbG9nX2lzX2xvYWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBDYXRhbG9nQ29udHJvbGxlci5yZW5kZXIoKTtcclxuICAgICAgICAgICAgJCgnW2RhdGEtY29udGV4dD1cImFjdGl2ZV9lbGVtZW50X2RhdGFcIl0nKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICBzeXN0ZW0uc2V0TG9jYWxEYXRhQnlLZXkoJ25vd19sb2FkX2ZpZWxkX2lkJywgZGF0YS5yZXNwb25zZS5pZCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBpZighZGF0YS5yZXNwb25zZS5jYW5fZWRpdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICQoJ1tkYXRhLWNsaWNrPVwicGFuZWxfZWRpdF9tb2RlXCJdJykuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAkKCdbZGF0YS1jbGljaz1cInBhbmVsX2VkaXRfbW9kZVwiXScpLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vINCh0L7RhdGA0LDQvdC10L3QuNC1INC60LDRgtCw0LvQvtCz0LBcclxuICAgIHJlbmRlci5yZW5kZXJfc2F2ZV9jbGFzc2lmaWVyID0gKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgIHN5c3RlbS5hbGVydC5hZGQoJ9Ca0LvQsNGB0YHQuNGE0LjQutCw0YLQvtGAINGD0YHQv9C10YjQvdC+INGB0L7RhdGA0LDQvdC10L0hJywgJ3N1Y2Nlc3MnKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8g0KHQvtC30LTQsNC90LjQtSDQutCw0YLQsNC70L7Qs9CwXHJcbiAgICByZW5kZXIucmVuZGVyX2FkZF9jYXRhbG9nID0gKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLnJlc3BvbnNlLnJlc3VsdCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbF9hZGRfY2F0YWxvZycpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIHN5c3RlbS5hbGVydC5hZGQoJ9Ca0LvQsNGB0YHQuNGE0LjQutCw0YLQvtGAINGD0YHQv9C10YjQvdC+INGB0L7Qt9C00LDQvSEnLCAnc3VjY2VzcycpO1xyXG4gICAgICAgICAgICAvLyDQntCx0L3QvtCy0LvRj9C10Lwg0LrQvtC80L/QvtC90LXQvdGCXHJcbiAgICAgICAgICAgIHN5c3RlbS5sb2FkX2NvbXBvbmVudCgnY2F0YWxvZ19saXN0JywgZ2V0TG9hZGVyRG9tKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHN5c3RlbS5hbGVydC5hZGQoJ9Ce0YjQuNCx0LrQsCDRgdC+0LfQtNCw0L3QuNGPINGB0L/RgNCw0LLQvtGH0L3QuNC60LAhIScsICdkYW5nZXInKTtcclxuICAgICAgICBoaWRlTG9hZGVyKGRhdGEucmVzcG9uc2UuZm9ybV9pZCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5yZXNwb25zZS5yZXN1bHQgPT0gdHJ1ZSlcclxuICAgICAgICAgICAgICAgIGVtcHR5Rm9ybShkYXRhLnJlc3BvbnNlLmZvcm1faWQpO1xyXG4gICAgICAgICAgICBzeXN0ZW0uc2V0X2Vycm9yc19mb3JtKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyDQmNC30LzQtdC90LXQvdC40LUg0LrQsNGC0LDQu9C+0LPQsFxyXG4gICAgcmVuZGVyLnJlbmRlcl9lZGl0X2NhdGFsb2cgPSAoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UucmVzdWx0ID09IHRydWUpIHtcclxuICAgICAgICAgICAgc3lzdGVtLmFsZXJ0LmFkZCgn0JrQu9Cw0YHRgdC40YTQuNC60LDRgtC+0YAg0YPRgdC/0LXRiNC90L4g0LjQt9C80LXQvdC10L0hJywgJ3N1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgLy8g0J7QsdC90L7QstC70Y/QtdC8INC60L7QvNC/0L7QvdC10L3RglxyXG4gICAgICAgICAgICBzeXN0ZW0ubG9hZF9jb21wb25lbnQoJ2NhdGFsb2dfbGlzdCcsIGdldExvYWRlckRvbSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBzeXN0ZW0uYWxlcnQuYWRkKCfQntGI0LjQsdC60LAg0LjQt9C80LXQvdC10L3QuNGPINC60LvQsNGB0YHQuNGE0LjQutCw0YLQvtGA0LAhIScsICdkYW5nZXInKTtcclxuICAgICAgICBoaWRlTG9hZGVyKGRhdGEucmVzcG9uc2UuZm9ybV9pZCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5yZXNwb25zZS5yZXN1bHQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgZW1wdHlGb3JtKGRhdGEucmVzcG9uc2UuZm9ybV9pZCk7XHJcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWxfc2V0dGluZ19jYXRhbG9nJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzeXN0ZW0uc2V0X2Vycm9yc19mb3JtKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyDQl9Cw0LPRgNGD0LfQuNGC0Ywg0LrQu9Cw0YHRgdC40YTQuNC60LDRgtC+0YBcclxuICAgIHJlbmRlci5yZW5kZXJfbG9hZF9jbGFzc2lmaWVyID0gKGRhdGE6IGFueSkgPT4ge1xyXG5cclxuICAgICAgICAvLyAkKCdbZGF0YS1jb250ZXh0PVwiZGF0YV90cmVlX2NhdGFsb2dcIl0nKS5lbXB0eSgpLmh0bWwoJ9CY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC60LvQsNGB0YHQuNGE0LjQutCw0YLQvtGA0LAuLicpO1xyXG5cclxuICAgICAgICBpZiAoZGF0YS5yZXNwb25zZS5yZXN1bHQgPT0gdHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgZGF0YS5yZXNwb25zZS5jbGFzc2lmaWVyX2NvbnRlbnQgPSB7XHJcbiAgICAgICAgICAgICAgICBjb3JlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2NoZWNrX2NhbGxiYWNrJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBcInRoZW1lc1wiIDogeyBcInN0cmlwZXNcIiA6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IGRhdGEucmVzcG9uc2UuY2xhc3NpZmllcl9jb250ZW50XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgc3lzdGVtLnNldExvY2FsRGF0YUJ5S2V5KCdub3dfY2xhc3NpZmllcicsIGRhdGEucmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINCX0LDQs9GA0YPQttCw0LXQvCDQutC70LDRgdGB0LjRhNC40LrQsNGC0L7RgFxyXG4gICAgICAgICAgICAgICAgQ2xhc3NpZmllclRyZWUubG9hZENsYXNzaWZpZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQn9C+0LzQtdGH0LDQtdC8INGH0YLQviDQutCw0YLQsNC70L7QsyDQt9Cw0LPRgNGD0LbQtdC9XHJcbiAgICAgICAgICAgICAgICBEYXRhLmNhdGFsb2dfaXNfbG9hZCA9IHRydWU7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICQoJ1tkYXRhLWNsaWNrPVwicGFuZWxfZWRpdF9tb2RlXCJdJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgICAgICAgICBDYXRhbG9nQ29udHJvbGxlci5yZW5kZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHN5c3RlbS5hbGVydC5hZGQoJ9Ca0LvQsNGB0YHQuNGE0LjQutCw0YLQvtGAINGD0YHQv9C10YjQvdC+INC30LDQs9GA0YPQttC10L0hJywgJ3N1Y2Nlc3MnKTtcclxuXHJcbiAgIC8qICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnW2FyaWEtbGV2ZWw9XCIxXCJdLmpzdHJlZS1jbG9zZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJz4gLmpzdHJlZS1pY29uJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCAzMDApOyovXHJcblxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8g0JjQt9C80LXQvdC10L3QuNC1INC60LDRgtCw0LvQvtCz0LBcclxuICAgIHJlbmRlci5yZW5kZXJfZGVsZXRlX2NhdGFsb2cgPSAoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UucmVzdWx0ID09IHRydWUpIHtcclxuICAgICAgICAgICAgc3lzdGVtLmFsZXJ0LmFkZCgn0JrQu9Cw0YHRgdC40YTQuNC60LDRgtC+0YAg0YPRgdC/0LXRiNC90L4g0YPQtNCw0LvQtdC9IScsICdzdWNjZXNzJyk7XHJcbiAgICAgICAgICAgIC8vINCe0LHQvdC+0LLQu9GP0LXQvCDQutC+0LzQv9C+0L3QtdC90YJcclxuICAgICAgICAgICAgc3lzdGVtLmxvYWRfY29tcG9uZW50KCdjYXRhbG9nX2xpc3QnLCBnZXRMb2FkZXJEb20oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc3lzdGVtLmFsZXJ0LmFkZCgn0J7RiNC40LHQutCwINGD0LTQsNC70LXQvdC40Y8g0LrQu9Cw0YHRgdC40YTQuNC60LDRgtC+0YDQsCEhJywgJ2RhbmdlcicpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnQge3JlbmRlcnNDYXRhbG9nfTsiLCJpbXBvcnQge2VtcHR5Rm9ybSwgZ2V0TG9hZGVyRG9tLCBoaWRlTG9hZGVyLCB1bmxvY2tCb2R5fSBmcm9tIFwiLi4vZnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7Q2xhc3NpZmllclRyZWV9IGZyb20gXCIuLi9jbGFzc2VzL0NsYXNzaWZpZXJUcmVlXCI7XHJcbmltcG9ydCB7RGF0YX0gZnJvbSBcIi4uL2NsYXNzZXMvRGF0YVwiO1xyXG5pbXBvcnQge0NhdGFsb2dDb250cm9sbGVyfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvY2F0YWxvZ0NvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHtGaWVsZH0gZnJvbSBcIi4uL2ZpZWxkX2hhbmRsZXJzL0ludGVyZmFjZUZpZWxkXCI7XHJcbmltcG9ydCB7RmllbGRNYW5hZ2VyfSBmcm9tIFwiLi4vY2xhc3Nlcy9GaWVsZE1hbmFnZXJcIjtcclxuXHJcbmRlY2xhcmUgdmFyICQ6IGFueTtcclxuZGVjbGFyZSB2YXIgc3lzdGVtOiBhbnk7XHJcbmRlY2xhcmUgdmFyIHJlbmRlcjogYW55O1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyc0ZpZWxkKCkge1xyXG5cclxuICAgIC8vINCf0YDQvtCy0LXRgNC60LAg0L/QvtGB0LvQtSDQt9Cw0L/RgNC+0YHQsCDQvdCwINC+0LHQvdC+0LLQu9C10L3QuNC1INC60LDQutC40YUt0LvQuNCx0L4g0LTQsNC90L3Ri9GFINC/0L7Qu9GPXHJcbiAgICByZW5kZXIucmVuZGVyX3JlZnJlc2hfZmllbGQgPSAoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgdmFyIG5vd19vYmplY3Q6IGFueSA9IHN5c3RlbS5nZXRMb2NhbERhdGEoXCJub3dfZmllbGRfaW5zdGFuY2VcIik7XHJcbiAgICAgICAgbm93X29iamVjdC5oYW5kbGVyUmVmcmVzaChkYXRhKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8g0J/RgNC+0LLQtdGA0LrQsCDQv9C+0YHQu9C1INGB0L7RhdGA0LDQvdC10L3QuNGPINC/0L7Qu9GPXHJcbiAgICByZW5kZXIucmVuZGVyX3NhdmVfZmllbGQgPSAoZGF0YTogYW55KSA9PiB7XHJcblxyXG4gICAgICAgIHZhciBub3dfb2JqZWN0X2ZpZWxkOiBhbnkgPSBzeXN0ZW0uZ2V0TG9jYWxEYXRhKFwibm93X2ZpZWxkX2luc3RhbmNlXCIpO1xyXG4gICAgICAgIG5vd19vYmplY3RfZmllbGQuaGFuZGxlckFmdGVyU2F2ZShkYXRhKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UucmVzdWx0ID09IHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UubmVlZF9oaWRlX2FsZXJ0cyAhPSAndHJ1ZScpXHJcbiAgICAgICAgICAgICAgICBzeXN0ZW0uYWxlcnQuYWRkKCfQn9C+0LvQtSDRg9GB0L/QtdGI0L3QviDRgdC+0YXRgNCw0L3QtdC90L4hJywgJ3N1Y2Nlc3MnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN5c3RlbS5hbGVydC5hZGQoJ9Cf0L7Qu9C1INC90LUg0YPQtNCw0LvQvtGB0Ywg0YHQvtGF0YDQsNC90LjRgtGMJywgJ2RhbmdlcicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UubmVlZF9oaWRlX2FsZXJ0cyAhPSAndHJ1ZScpXHJcbiAgICAgICAgICAgIHVubG9ja0JvZHkoKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UubmVlZF9jbG9zZV9tb2RhbCAhPSAnZmFsc2UnICkge1xyXG4gICAgICAgICAgICAkKCcjbW9kYWxfZWRpdF9maWVsZCcpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGF0YS5yZXNwb25zZS5uZWVkX2hpZGVfYWxlcnRzICE9ICd0cnVlJylcclxuICAgICAgICAgICAgJCgnYS5qc3RyZWUtY2xpY2tlZCcpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblxyXG4gICAgICAgIGlmIChkYXRhLnJlc3BvbnNlLm5lZWRfaGlkZV9hbGVydHMgIT0gJ3RydWUnKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCz0YDRg9C20LDQtdC8INGA0LXQttC40Lwg0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRj1xyXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtY2xpY2s9XCJwYW5lbF9lZGl0X21vZGVcIl0nKS5yZW1vdmVDbGFzcygnb24nKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8g0J/RgNC+0LLQtdGA0LrQsCDQv9C+0YHQu9C1INGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0L/QvtC70Y9cclxuICAgIHJlbmRlci5yZW5kZXJfZWRpdF9maWVsZCA9IChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5yZXNwb25zZS5yZXN1bHQgPT0gdHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaWRfZm9ybV9lZGl0X2ZpZWxkID0gc3lzdGVtLmdlbmVyYXRlUmFuZElkKCk7XHJcblxyXG4gICAgICAgICAgICAkKCcjbW9kYWxfZWRpdF9maWVsZCAubW9kYWwtYm9keScpLmVtcHR5KCkuYXBwZW5kKGBcclxuICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCIke2lkX2Zvcm1fZWRpdF9maWVsZH1cIiBjbGFzcz1cImZvcm1cIiBkYXRhLWZvcm09XCJmb3JtX2NoYW5nZV9maWVsZFwiIGRhdGEtYWN0aW9uPVwiYWRkX2ZpZWxkXCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cclxuICAgICAgICAgICAgYCk7XHJcblxyXG5cclxuICAgICAgICAgICAgJCgnI21vZGFsX2VkaXRfZmllbGQnKS5tb2RhbCgnc2hvdycpLmF0dHIoJ2RhdGEtdHlwZS1maWVsZCcsIGRhdGEucmVzcG9uc2UudHlwZV9maWVsZCk7XHJcblxyXG4gICAgICAgICAgICAkKCcjbW9kYWxfZWRpdF9maWVsZCBmb3JtJykuaHRtbChcclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0X2JvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwidHlwZVwiIHZhbHVlPVwiJHtkYXRhLnJlc3BvbnNlLnR5cGVfZmllbGR9XCIgdHlwZT1cImhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgJHtkYXRhLnJlc3BvbnNlLmVkaXRfaHRtbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICApO1xyXG5cclxuXHJcbiAgICAgICAgICAgICQoJyNtb2RhbF9lZGl0X2ZpZWxkIGZvcm0nKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImVkaXRfZm9vdGVyXCI+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIj7QodC+0YXRgNCw0L3QuNGC0Yw8L2J1dHRvbj48L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZmllbGQ6IGFueSA9IEZpZWxkTWFuYWdlci5nZXRGaWVsZE9iamVjdChkYXRhLnJlc3BvbnNlLnR5cGVfZmllbGQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZpZWxkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIC8vINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INCyINC+0LHRitC10LrRgi3QvtCx0YDQsNCx0L7RgtGH0LjQuiDQv9C+0LvRjyDQtdCz0L4g0YLQuNC/INC4IGlkINC/0L7Qu9GPXHJcbiAgICAgICAgICAgICAgICBGaWVsZC50eXBlX2ZpZWxkID0gZGF0YS5yZXNwb25zZS50eXBlX2ZpZWxkO1xyXG4gICAgICAgICAgICAgICAgRmllbGQuaWRfZmllbGQgPSBkYXRhLnJlc3BvbnNlLmlkX2ZpZWxkO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINCY0L3QuNGG0LjQsNC70LjQt9C40YDRg9C10Lwg0L/QvtC70LVcclxuICAgICAgICAgICAgICAgIHZhciByZXNfaW5pdCA9IGZpZWxkLmluaXQoaWRfZm9ybV9lZGl0X2ZpZWxkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQntCx0YrQtdC60YIg0YTQvtGA0LzRi1xyXG4gICAgICAgICAgICAgICAgc3lzdGVtLnNldExvY2FsRGF0YUJ5S2V5KCdub3dfZmllbGRfaW5zdGFuY2UnLCBmaWVsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN5c3RlbS5hbGVydC5hZGQoJ9Cf0L7Qu9C1INC90LUg0YPQtNCw0LvQvtGB0Ywg0YDQtdC00LDQutGC0LjRgNC+0LLQsNGC0YwnLCAnZGFuZ2VyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyDQn9GA0L7QstC10YDQutCwINGD0LTQsNC70LXQvdC40Y8g0L/QvtC70Y8g0LrQsNGC0LDQu9C+0LPQsFxyXG4gICAgcmVuZGVyLnJlbmRlcl9kZWxldGVfZmllbGQgPSAoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEucmVzcG9uc2UucmVzdWx0ID09IHRydWUpIHtcclxuICAgICAgICAgICAgc3lzdGVtLmFsZXJ0LmFkZCgn0J/QvtC70LUg0YPRgdC/0LXRiNC90L4g0YPQtNCw0LvQtdC90L4hJywgJ3N1Y2Nlc3MnKTtcclxuXHJcbiAgICAgICAgICAgIC8vINCh0L3QvtCy0LAg0LfQsNCz0YDRg9C20LDQtdC8INC/0L7Qu9C1XHJcbiAgICAgICAgICAgICQoYCMke2RhdGEucmVzcG9uc2UuaWRfZmllbGR9X2FuY2hvcmApLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblxyXG4gICAgICAgICAgICAvLyDQn9C10YDQtdC30LDQs9GA0YPQttCw0LXQvCDQutCw0YLQsNC70L7Qs1xyXG4gICAgICAgICAgICAkKCcuanN0cmVlLWNsaWNrZWQnKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdCz0YDRg9C20LDQtdC8INGA0LXQttC40Lwg0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRj1xyXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtY2xpY2s9XCJwYW5lbF9lZGl0X21vZGVcIl0nKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgICAgICQoJ1tkYXRhLWNsaWNrPVwicGFuZWxfZWRpdF9tb2RlXCJdJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN5c3RlbS5hbGVydC5hZGQoJ9Cf0L7Qu9C1INC90LUg0YPQtNCw0LvQtdC90L4nLCAnZGFuZ2VyJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1bmxvY2tCb2R5KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vINCf0YDQvtCy0LXRgNC60LAg0YHQvtC30LTQsNC90LjRjyDQv9C+0LvRjyDQutCw0YLQsNC70L7Qs9CwXHJcbiAgICByZW5kZXIucmVuZGVyX2FkZF9maWVsZCA9IChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5yZXNwb25zZS5yZXN1bHQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAvLyBzeXN0ZW0uYWxlcnQuYWRkKCfQn9C+0LvQtSDRg9GB0L/QtdGI0L3QviDQtNC+0LHQsNCy0LvQtdC90L4hJywgJ3N1Y2Nlc3MnKTtcclxuXHJcbiAgICAgICAgICAgIC8vINCh0L3QvtCy0LAg0LfQsNCz0YDRg9C20LDQtdC8INC/0L7Qu9C1XHJcbiAgICAgICAgICAgIC8vICQoYCMke2RhdGEucmVzcG9uc2UuaWRfZmllbGR9X2FuY2hvcmApLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgICQoJy5qc3RyZWUtY2xpY2tlZCcpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LPRgNGD0LbQsNC10Lwg0YDQtdC20LjQvCDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPXHJcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1jbGljaz1cInBhbmVsX2VkaXRfbW9kZVwiXScpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtY2xpY2s9XCJwYW5lbF9lZGl0X21vZGVcIl0nKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN5c3RlbS5hbGVydC5hZGQoJ9Cf0L7Qu9C1INC90LUg0YHQvtC30LTQsNC90L4nLCAnZGFuZ2VyJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoaWRlTG9hZGVyKGRhdGEucmVzcG9uc2UuZm9ybV9pZCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcjbW9kYWxfYWRkX2ZpZWxkJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdW5sb2NrQm9keSgpO1xyXG4gICAgfTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7cmVuZGVyc0ZpZWxkfTsiLCJpbXBvcnQge0NhYmluZXRDb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVycy9jYWJpbmV0Q29udHJvbGxlclwiO1xyXG5pbXBvcnQge0NhdGFsb2dDb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVycy9jYXRhbG9nQ29udHJvbGxlclwiO1xyXG5cclxuZGVjbGFyZSBjb25zdCAkOiBhbnk7XHJcbmRlY2xhcmUgY29uc3Qgc3lzdGVtOiBhbnk7XHJcbmRlY2xhcmUgY29uc3QgcmVuZGVyOiBhbnk7XHJcblxyXG5mdW5jdGlvbiByb3V0ZXIoKVxyXG57XHJcbiAgICBsZXQgY29udHJvbGxlciA9IG51bGw7XHJcbiAgICBzd2l0Y2ggKHN5c3RlbS51cmxbMF0pIHtcclxuICAgICAgICBjYXNlICdjYXRhbG9ncyc6XHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIgPSBuZXcgQ2F0YWxvZ0NvbnRyb2xsZXIoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2NhYmluZXQnOlxyXG4gICAgICAgICAgICBjb250cm9sbGVyID0gbmV3IENhYmluZXRDb250cm9sbGVyKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbnRyb2xsZXIgIT09IG51bGwpIGNvbnRyb2xsZXIucnVuKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7cm91dGVyfTsiXSwic291cmNlUm9vdCI6IiJ9