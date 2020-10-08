<?php

namespace Classes\Fields;

use Classes\CIField;
use Classes\ClassifierField;
use Classes\FieldDB;
use Module\Crop\v10\Crop;
use Module\FileLoader\v10\FL;

// Тип поля - галерея
class FieldFile extends FieldDB implements ClassifierField
{

    public function getHtml(CIField $obj)
    {
        $data = $obj->getData();
        $html = '';

        if (!empty($data)) {
            $ids_photos = explode(',', $data);
            $data_files = FL::getFilesById($ids_photos, true);

            if (!empty($data_files['data'])) {
                $html .= '<div>';


                foreach ($data_files['data'] as $file) {
                    $full_path = str_replace(['\\', $_SERVER['DOCUMENT_ROOT']], ['/'], $file['path']);

                    $arName = explode('_', $file['name']);
                    unset($arName[0]);

                    $name = implode('_', $arName);

                    $html .= '
                <div class="alert alert-success mb-1" role="alert">
                  <a href="'.$full_path.'">'.$name.'</a>
                </div>
                    ';
                   /* $html .= '

                    <div class="">
                    
                        <a data-fancybox="gallery" href="' . $full_path . '">
                            <img src="' . str_replace(['\\', $_SERVER['DOCUMENT_ROOT']], ['/'], $img) . '" alt="" width="100" height="100">
                        </a>
                        
                    </div>
                    

                    ';*/
                }
                $html .= '</div>';
            }
        }

        if (empty($html)) {
            return 'Поле с файлами является пустым (Загрузите файл)';
        } else {
            return $html;
        }
    }

    public function refresh(CIField $obj, $params)
    {
        // TODO: Implement refresh() method.
    }

    public function getEditHtml(CIField $obj)
    {
        $id_session = uniqid();
        ob_start();
        ?>

        <?
        $data = $obj->getData();

        if (!empty($data)):
            $ids_photos = explode(',', $data);
            $data_files = FL::getFilesById($ids_photos, true);

            if (!empty($data_files['data'])):
                foreach ($data_files['data'] as $file):

                    $arName = explode('_', $file['name']);
                    unset($arName[0]);

                    $name = implode('_', $arName);

                    ?>

                    <div class="alert alert-success" role="alert" data-id="<?= $file['id']?>">
                        <a href="'.$full_path.'"><?=$name?></a>
                        <i class="fa fa-times-circle" data-click="delete_file" title="Удалить файл"></i>
                    </div>

                   <!-- <div class="field__gallery__photo" >
                        <img src="<?/*= str_replace(['\\', $_SERVER['DOCUMENT_ROOT']], ['/'], $img) */?>" alt=""
                             width="100"
                             height="100">
                    </div>-->
                    <?
                endforeach;
            endif;
        endif;
        ?>

        <div data-click="add_photo_gallery" class="field__gallery__new_photo_add mb-1">
            <i class="fa fa-plus-circle" aria-hidden="true"></i>
        </div>

        <?
        $content = ob_get_contents();
        ob_end_clean();

        return $content;
    }

    public function save(CIField $obj, $params)
    {

        if (!empty($params['action_field'])) {
            switch ($params['action_field']) {
                case 'delete_photo':
                    $id_delete = $params['data_for_save'];

                    $data_field = $obj->getData();

                    $ar_ids_field_files = explode(',', $data_field);

                    if(in_array($id_delete, $ar_ids_field_files))
                    {
                        foreach($ar_ids_field_files as $key => $item){
                            if ($id_delete == $item){
                                unset($ar_ids_field_files[$key]);
                            }
                        }

                        if(!empty($id_delete))
                            FL::removeFileById($id_delete);

                        return parent::saveDB($obj, implode(',', $ar_ids_field_files));
                    }

                    break;
            }
        } else {
            $res = FL::loadFiles();

            $data_save = $obj->getData();

            if (!empty($res['load_ids'])) {
                // TODO ...
                $add_ids = implode(',', $res['load_ids']);
                $data_save .= ',' . $add_ids;
                $data_save = trim($data_save, ',');
            }

            return parent::saveDB($obj, $data_save);
        }
        return false;
    }

    /**
     * Вызывается при удалении поля в узле классификатора
     * @param CIField $obj
     * @return mixed
     */
    public function delete(CIField $obj)
    {
        $data_field = $obj->getData();
        $ar_ids_field_files = explode(',', $data_field);

        if(!empty($ar_ids_field_files))
        {
            foreach ($ar_ids_field_files as $id)
            {
                if(!empty($id))
                    FL::removeFileById($id);
            }
        }
    }

    public static function adapterImportData($data)
    {
        global $config;

        $arIdsFiles = [];

        if(!empty($data))
        {
            foreach ($data as $link)
            {
                $name = uniqid().'_'.array_pop(explode('/', $link));

                $path = $config['path']['files'].'/download/'.$name;

                $res = FL::loadFileInDB([
                    'name' => $name,
                    'folder' => 'download',
                    'path' => $path,
                    'path_root' => str_replace($config['path']['cwd'], '', $path),
                    'size_mb' => 0,
                    'mime_type' => 'none',
                    'meta' => 'download'
                ]);

                file_put_contents($config['path']['files'].'/download/'.$name, fopen($link, 'r'));
                $arIdsFiles[] = $res['data']['last_id'];
            }
        }

        return implode(',',$arIdsFiles);
    }

    public function serializeData(CIField $obj)
    {
        global $config;
        $arRes = [];

        $data = $obj->getData();

        if (!empty($data)) {
            $ids_files = explode(',', $data);
            $data_files = FL::getFilesById($ids_files, true);

            foreach ($data_files['data'] as $file) {
                $arRes[] = $config['path']['site'] .''.$file['path_root'];
            }

        }

        return $arRes;
    }
}