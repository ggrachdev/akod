import {Field, InterfaceField} from "./InterfaceField";

declare var $: any;
declare var system: any;

class Number extends Field implements InterfaceField {

    public static is_init: boolean = false;

    public static initScripts() {

    }

    handlerInit(e:any): boolean {
        e.preventDefault();

        console.log(`Обработчик текстового поля (text)`);
        var data = $(Field.selector_form).find('input[type="number"]').val().trim();

        if(data.length > 0)
        {
            // Сохраняем данные, передав параметры
            super.save(data);
        }
        else
        {
            system.alert.add('Нельзя сохранить пустое поле с числом', 'success');
        }

        return true;
    }
}

export {Number};