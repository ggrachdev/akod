import {lockBody} from "../functions";

declare var $: any;
declare var system: any;

interface InterfaceField {
    /**
     * Обработчик нажатия на кнопку сохранить поле
     *
     * @param e
     */
    handlerInit(e:any): boolean;

    /**
     * Событие вызываемое после запроса на обновление
     *
     * @param response
     */
    handlerRefresh(response:any): void;

    /**
     * Событие вызываемое после сохранения поля
     *
     * @param response
     */
    handlerAfterSave(response:any): void;
}

class Field implements InterfaceField {

    public static selector_form: any;
    public static $form: any;
    public static type_field: string;
    public static id_field: string;

    /**
     *
     * @param params - доп данные для сохранения
     * @param data_for_save
     */
    public save(data_for_save: any, params: any = null, need_close_modal: boolean = true, hide_alerts: boolean = false)
    {
        let params_send: any;

        if(params == null)
        {
            params_send = {};
        }
        else
        {
            params_send = params;
        }

        params_send[`type_field`] = Field.type_field;
        params_send[`id_field`] = Field.id_field;
        params_send[`data_for_save`] = data_for_save;
        params_send[`need_close_modal`] = need_close_modal;
        params_send[`need_hide_alerts`] = hide_alerts;

        if(hide_alerts == false)
            lockBody();

        system.callMethod('save_field', params_send);
    }

    /**
     *
     * @param params - доп данные для сохранения
     * @param form_data
     */
    public saveWithFiles(form_data: any, params: any = null)
    {
        if(form_data instanceof FormData)
        {

            //TODO: Add params
            /*
             form_data.append(`data_for_save`, params);
            */

            if(params != null)
            {
                var keys_params: any = Object.keys(params);

                for (var i = 0; i < keys_params.length; i++) {
                    form_data.append(keys_params[i], params[keys_params[i]]);
                }
            }

            form_data.append(`type_field`, Field.type_field);
            form_data.append(`id_field`, Field.id_field);
            form_data.append(`data_for_save`, 'is_file');

            lockBody();

            system.callMethodWithFile('save_field', form_data);
        }
    }

/*    constructor(type_field: string, id_field: string)
    {
        this.type_field = type_field;
        this.id_field = id_field;
    }*/

    handlerInit(e:any): boolean {
        return true;
    }

    // Отвечает за получение данных поля для каких-либо действий обновления существующего рендера
    public refresh(action: string, params: any)
    {
        let params_send: any;

        if(params == null)
        {
            params_send = {};
        }
        else
        {
            params_send = params;
        }

        params_send[`type_field`] = Field.type_field;
        params_send[`id_field`] = Field.id_field;
        params_send[`action_refresh`] = action;

        system.callMethod('refresh_field', params_send);
    }



    init(id_edit_form:string): boolean {

        Field.$form = $(`#${id_edit_form}`);
        Field.selector_form = `#${id_edit_form}`;

        if(Field.$form.length > 0)
        {
            $(document).on('submit', `#${id_edit_form}`, this.handlerInit);
            return true;
        }

        return false;
    }

    handlerRefresh(response:any): void {}

    handlerAfterSave(response: any): void {
    }
}

export {InterfaceField, Field};