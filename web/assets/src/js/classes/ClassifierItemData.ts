import {lockBody} from "../functions";
declare var $: any;
declare var system: any;

class ClassifierItemData {

    // Загрузить поле по ID
    public static loadDataById(id: string)
    {
        lockBody();
        
        system.callMethod('load_data_item', {
            id: id,
            'id_classifier': system.getLocalData('now_classifier')['id']
        });
    }

    // Удалить поле по ID
    public static deleteFieldById(id: string)
    {
        lockBody();

        system.callMethod('delete_field', {
            id_field: id
        });
    }

    // Запрос на изменение поля по ID
    public static editFieldById(id: string)
    {
        system.callMethod('edit_field', {
            id_field: id
        });
    }
}

export {ClassifierItemData};