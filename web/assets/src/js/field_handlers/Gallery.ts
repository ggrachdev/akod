import {Field, InterfaceField} from "./InterfaceField";

declare var $: any;
declare var system: any;

class Gallery extends Field implements InterfaceField {


    public static is_init: boolean = false;

    public static initScripts() {

        $(document).on('click', '[data-click="delete_photo_gallery"]', function () {
            var $wrapper: any = $(this).closest('div');
            var id_photo: number = $wrapper.attr('data-id');

            $wrapper.remove();
            var now_object: any = system.getLocalData("now_field_instance");

            now_object.save(id_photo, {
                'action_field': 'delete_photo',
            }, false, true);

            console.log(id_photo);
        });

        $(document).on('click', '[data-click="add_photo_gallery"]', function () {
            let id = system.generateRandId(10);
            $(this).before(`
                <div class="field__gallery__input_photo" data-click="photo_wrapper">
                    <input type="file" data-context="file_gallery_field" name="file_${id}">
                </div>
            `);
        });

    }

    handlerInit(e: any): boolean {
        e.preventDefault();


        // создадим объект данных формы
        var data: any = new FormData();

        var i = 0;
        $('[data-context="file_gallery_field"]').each(function () {
           var files_attr = $(this)[0].files;

           if(files_attr.length > 0)
           {
               i++;
               data.append( `file_load_${i}`,  files_attr[0]);
           }
        });
        super.saveWithFiles(data);

        return true;
    }
}

export {Gallery};