import {Data} from "./Data";
declare var $: any;
declare var system: any;

// Служит оберткой над узлом
class ClassifierItem {

    public text:string;

    public id:string;

    public constructor(text:string, id: string) {
        this.text = text;
        this.id = id;
    }
}

// Отвечает за операции над деревом узлов
class ClassifierTree {

    public static is_init_events_jstree: boolean = false;

    /**
     * Проверить доступность операций над классификатором
     * @returns {boolean}
     */
    private static checkWorkField(): boolean {
        return !(typeof system.getLocalData('now_classifier') == 'undefined');
    }

    /**
     * Проверить объект узла классификатора на валидность
     *
     * @param data
     */
    private static checkObjectNode(data: object): boolean {
        if (
            'id' in data &&
            'text' in data &&
            data instanceof ClassifierItem &&
            data.text.trim().length > 0
        ) {
            return true;
        }

        return false;
    }

    /**
     * Получить путь до элемента
     *
     * @param id
     */
    public static getPathToElementWithId(id: string): any {

        var search_status = false;
        var result: any = false;

        function getFiniteValue(obj: any) {

            function getProp(o: any, path_o: any) {
                for (let prop in o) {
                    if (!search_status) {


                        if (prop == 'id') {
                            if (o[prop] == id) {
                                search_status = true;
                                result = path_o;
                                break;
                            }
                        }
                        let path_new = path_o + '///["' + prop + '"]';

                        if (typeof o[prop] === 'object' && !search_status)
                            getProp(o[prop], path_new);
                    }
                }
            }

            getProp(obj, '["classifier_content"]["core"]["data"]');

            return result;
        }

        if (this.checkWorkField()) {
            let obj_classifier = system.getLocalData('now_classifier').classifier_content.core.data;

            return getFiniteValue(obj_classifier);
        }
        else {
            this.showError(0);
        }

        return false;
    }

    /**
     * Добавить элемент классификатора
     *
     * @param action
     * @param item {ClassifierItem} - новый элемент
     * @param id - id элемента относительно которого совершается действие
     */
    public static actionElement(action: string, item: ClassifierItem, id: string, params: any = {}) {

                switch (action) {
                    // Удалить
                    case 'remove':
                        var now: any = system.getLocalData('now_classifier');

                        now.classifier_content.core.data = $('[data-context="data_tree_catalog"]').jstree(true).get_json();

                        system.setLocalDataByKey(
                            'now_classifier',
                            now
                        );

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

                        var now: any = system.getLocalData('now_classifier');

                        now.classifier_content.core.data = $('[data-context="data_tree_catalog"]').jstree(true).get_json();

                        system.setLocalDataByKey(
                            'now_classifier',
                            now
                        );

                        this.saveClassifier(action, item.id);
                        this.loadClassifier();

                        break;

                    // Добавить перед элементом
                    case 'before':

                    // Добавить после элемента
                    case 'after':
                        var now: any = system.getLocalData('now_classifier');

                        now.classifier_content.core.data = $('[data-context="data_tree_catalog"]').jstree(true).get_json();

                        system.setLocalDataByKey(
                            'now_classifier',
                            now
                        );

                        this.saveClassifier(action, item.id);
                        this.loadClassifier();
                        break;

                    // Добавить внутри элемента
                    case 'in':
                        var now: any = system.getLocalData('now_classifier');

                        now.classifier_content.core.data = $('[data-context="data_tree_catalog"]').jstree(true).get_json();

                        system.setLocalDataByKey(
                            'now_classifier',
                            now
                        );

                        this.saveClassifier(action, item.id);
                        this.loadClassifier();
                        break;

                    // Добавить внутри элемента
                    case 'save':
                        var now: any = system.getLocalData('now_classifier');

                        now.classifier_content.core.data = $('[data-context="data_tree_catalog"]').jstree(true).get_json();

                        system.setLocalDataByKey(
                            'now_classifier',
                            now
                        );

                        this.saveClassifier(action, item.id);
                        this.loadClassifier();
                        break;
                }

    }

    public static loadClassifier() {

        var content: any = system.getLocalData('now_classifier').classifier_content;
        content.plugins = ["dnd", "contextmenu"];
        $('[data-context="error.not_load_classifier"]').remove();


        // Инциализация событий jstree при нажатии на контекстное меню
        if(!ClassifierTree.is_init_events_jstree)
        {
            ClassifierTree.is_init_events_jstree = true;

            $('[data-context="data_tree_catalog"]').on("create_node.jstree", function (e: any, data: any) {

                if('parent' in data)
                {
                    $('[data-context="data_tree_catalog"]').jstree("open_node", data.parent);
                }

                var new_id = system.uuidv4();
                 
                $('[data-context="data_tree_catalog"]').jstree(true).set_id(data.node,new_id);

                var item = new ClassifierItem(
                    data.text,
                    new_id
                );

                // Добавляем элемент
                ClassifierTree.actionElement('after', item, data.node.id);
            });

            $('[data-context="data_tree_catalog"]').on("delete_node.jstree", function (e: any, data: any) {
                const ID = data.node.id;

                var item = new ClassifierItem(
                    data.text,
                    ID
                );

                // Удаляем элемент
                ClassifierTree.actionElement('remove', item, ID, {
                    'ids_children': data.node.children_d
                });
            });

            $('[data-context="data_tree_catalog"]').on("rename_node.jstree", function (e: any, data: any) {

                console.log(data.instance);

                const ID = data.node.id;

                var item = new ClassifierItem(
                    data.text,
                    ID
                );

                // Добавляем элемент
                ClassifierTree.actionElement('rename', item, ID);
            });

            $('[data-context="data_tree_catalog"]').on("move_node.jstree", function (e: any, data: any) {
                const ID = data.node.id;

                var item = new ClassifierItem(
                    data.text,
                    ID
                );

                // Добавляем элемент
                ClassifierTree.actionElement('move', item, ID);

            });

            $('[data-context="data_tree_catalog"]').on("dnd_move.vakata.jstree", function (e: any, data: any) {
                $('[data-context="data_tree_catalog"]').jstree(true).get_json();
            });
        }

        var json_classifier: any = system.getLocalData('now_classifier').classifier_content.core.data;
        json_classifier = JSON.stringify(json_classifier).replace(/"icon":false/g,'"icon":true');
        $('[data-context="data_tree_catalog"]').jstree(content);
        $('[data-context="data_tree_catalog"]').jstree(true).settings.core.data = JSON.parse(json_classifier);
        $('[data-context="data_tree_catalog"]').jstree(true).refresh(true);

        Data.catalog_is_load = true;
    }

    // Сохранить классификатор
    private static saveClassifier(action: any = null, action_id: any = null, params:any = {})
    {
        var data:any = system.getLocalData('now_classifier').classifier_content.core.data;

        var request_obj: any = {
            ...params,
            id: system.getLocalData('now_classifier')['id'],
            'last_action': action,
            'action_id': action_id,
            data_json: JSON.stringify(data)
        };

        system.callMethod('save_classifier', request_obj);

    }

    private static showError(type: number) {
        switch (type) {
            case 0:
                system.alert.add('Ошибка: Классификатор недоступен!', 'danger');
                break;
            case 1:
                system.alert.add('Ошибка: Некорректный объект элемента классификатора!', 'danger');
                break;
        }
    }

    /**
     * Переместить поле узла
     *
     * @constructor
     */
    public static moveField(field_id: number, move_to: string)
    {
        var params_send = {'id_field': field_id, 'move_to': move_to};
        system.callMethod('move_field', params_send);
    }
}

export {ClassifierTree, ClassifierItem};