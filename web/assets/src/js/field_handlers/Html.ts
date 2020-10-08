import {Field, InterfaceField} from "./InterfaceField";
        declare var $: any;
        declare var system: any;
        declare var User: any;
        declare var tinymce: any;
        class Html extends Field implements InterfaceField {

        public static is_init: boolean = false;
        public static initScripts() {
                    
            $(document).on('click', '.tox input', function() { $(this).focus();});    

        }

        public static onAfterOpenFieldModal() {

        tinymce.remove('#field_html_content');
                tinymce.init({
                //spellchecker_languages: "Russian=ru,Ukrainian=uk,English=en",
                //spellchecker_rpc_url: "/speller",
                language: 'ru',
                        relative_urls : false,
                        remove_script_host : false,
                        convert_urls : false,
                        selector: '#field_html_content', 
                        plugins: 'a11ychecker advcode casechange formatpainter linkchecker autolink lists checklist image permanentpen powerpaste fullscreen table advtable tinycomments link',
                        toolbar: 'link addcomment showcomments casechange checklist code formatpainter permanentpen table fullscreen',
                        toolbar_mode: 'floating',
                        default_link_target: "_blank",
                        link_context_toolbar: true,
                        link_title: true,
                        tinycomments_mode: 'embedded',
                        images_upload_url: '/other/tinymce_files/upload.php',
                        images_upload_handler: function(blobInfo: any, success: any, failure: any) {
                                var xhr: any;
                                var formData: any;
                                xhr = new XMLHttpRequest();
                                xhr.withCredentials = false;
                                xhr.open('POST', '/other/tinymce_files/upload.php?classifier_id=' + system.local_data.now_classifier.id);
                                xhr.onload = function() {
                                    var json: any;
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
        }

        handlerInit(e: any): boolean {
        e.preventDefault();
                console.log(`Обработчик html поля (html)`);
                var data: any = tinymce.activeEditor.getContent();
                if (data.length > 0) {
        // Сохраняем данные, передав параметры
        super.save(data);
        }
        else {
        system.alert.add('Нельзя сохранить пустое поле', 'success');
        }

        return true;
        }
        }

export {Html};