import {Text} from "../field_handlers/Text";
import {Number} from "../field_handlers/Number";
import {Gallery} from "../field_handlers/Gallery";
import {Table} from "../field_handlers/Table";
import {Html} from "../field_handlers/Html";
import {File} from "../field_handlers/File";

class FieldManager {
    public static getFieldObject(type: string): any {

        let result = null;

        switch (type) {
            case 'text':
                result = new Text();
                if(Text.is_init == false)
                {
                    Text.initScripts();
                    Text.is_init = true;
                }
                break;
            case 'gallery':
                result = new Gallery();
                if(Gallery.is_init == false)
                {
                    Gallery.initScripts();
                    Gallery.is_init = true;
                }
                break;
            case 'file':
                result = new File();
                if(File.is_init == false)
                {
                    File.initScripts();
                    File.is_init = true;
                }
                break;
            case 'number':
                result = new Number();
                if(Number.is_init == false)
                {
                    Number.initScripts();
                    Number.is_init = true;
                }
                break;
            case 'table':
                result = new Table();
                if(Table.is_init == false)
                {
                    Table.initScripts();
                    Table.is_init = true;
                }
                break;
            case 'html':
                result = new Html();
                Html.onAfterOpenFieldModal();
                if(Html.is_init == false)
                {
                    Html.initScripts();
                    Html.is_init = true;
                }
                break;
        }

        return result;
    }
}

export {FieldManager};