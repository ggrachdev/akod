<?php

namespace Module\Crop\v10;

use Imagine\Image\ImageInterface;
use Imagine\Gd\Imagine;
use Imagine\Image\Box;
use Module\Database\v11\DB;
use Module\FileLoader\v10\FL;

interface CropManager
{

    /**
     * Удалить весь кроп
     * @param string $folder - папка кропа
     */
    static function clearAllCrop($folder = 'images/crop'):void;

    /**
     * Обрезать фото
     *
     * @param $id_photo - id фото
     * @param $path_to_photo - путь до фото
     * @param $name_photo - название фото
     * @param $height - высота
     * @param $width - ширина
     * @param $inscribe_strong - вписать строго в размеры
     * @return mixed - bool (false) || array crop
     */
    static function crop($id_photo, $path_to_photo, $name_photo, $height, $width, $inscribe_strong);

    /**
     * Получить кроп фотографии
     *
     * @param int $file_id - id фотографии
     * @param $height - высота
     * @param $width - ширина
     * @param $inscribe_strong - вписать строго в размеры
     * @param $quality - качество
     * @return mixed - array || false
     */
    static function getById(int $file_id, $height, $width, $inscribe_strong, int $quality = 100);

    /**
     * Получить кроп фотографий
     *
     * @param array $files_ids - массив с id фоток
     * @param $height - высота
     * @param $width - ширина
     * @param $inscribe_strong - режим
     * @param $quality - качество
     * @return mixed - array || false
     */
    static function getByIds(array $files_ids, $height, $width, $inscribe_strong, int $quality = 100);

    /**
     * Проверить подключен ли адаптер
     */
    static function checkRequiredAdapter(): bool;
}

class Crop implements CropManager
{

    static $adapter_is_required = false;
    static $adapter = null;


    static function getById(int $file_id, $height, $width, $inscribe_strong = true, int $quality = 100)
    {
        // TODO: Quality
        $file_data = FL::getFileById($file_id);

        if (isset($file_data['data']['0']['path'])) {
            global $config;

            $file_first_name = $file_data['data']['0']['name'];
            $file_first_path = $file_data['data']['0']['path'];


            $file_crop_name = self::generateCropFileName($file_first_name, $height, $width, $inscribe_strong);
            $file_crop_path = $config['path']['crop'].$file_crop_name;

            if(is_file($file_crop_path))
            {

            }
            else
            {
                $res_crop = self::crop($file_id, $file_first_path, $file_first_name,$height, $width, $inscribe_strong);

                if($res_crop['result'] != 1)
                {
                    throw new Exception('Error crop file: '.$file_first_path.' on height '.$height.' and width '.$width);
                }
            }

            return $file_crop_path;

        }


    }

    static function generateCropFileName($file_name, $height, $width, $inscribe_strong)
    {
        $prefix = $height . '_x_' . $width;

        if ($inscribe_strong) {
            $prefix .= '_1_';
        } else {
            $prefix .= '_0_';
        }

        return $prefix.$file_name;
    }

    static function getByIds(array $files_ids, $height, $width, $inscribe_strong, int $quality = 100)
    {
        // TODO: Implement getByIds() method.
        $files_data = FL::getFilesById($files_ids);
    }

    static function crop($file_id, $path_to_photo, $name_photo, $height, $width, $inscribe_strong)
    {
        global $config;

        if (self::checkRequiredAdapter()) {

        // Генерируем название кропнутой картинки
        $name_file_crop = self::generateCropFileName($name_photo, $height, $width, $inscribe_strong);

        $size = new Box($width, $height);
        $path_save = $config['path']['crop'] . $name_file_crop;

        if ($inscribe_strong) {
            self::$adapter->open($path_to_photo)
                ->resize($size)->save($path_save);

        } else {
            self::$adapter->open($path_to_photo)
                ->thumbnail($size)->save($path_save);
        }



        $size_file = FL::getMbSize('b', filesize($path_save), 2);
        $mime = mime_content_type($path_save);

        return FL::loadFileInDB([
            'name' => $name_file_crop,
            'folder' => 'images/crop',
            'path' => $path_save,
            'path_root' => str_replace($config['path']['cwd'], '', $path_save),
            'size' => $size_file,
            'type' => $mime,
            'meta' => 'crop_'.$file_id
        ]);
        }
    }

    static function checkRequiredAdapter(): bool
    {
        if (!self::$adapter_is_required) {
            self::$adapter = new Imagine();
            self::$adapter_is_required = true;
        }

        return true;
    }

    static function clearAllCrop($folder = 'images/crop'): void
    {
        global $config;

        $files = glob($config['path']['crop'].'*');

        foreach($files as $file){ // iterate files
            if(is_file($file))
                unlink($file); // delete file
        }

        DB::delete('files', 'folder = ?', [$folder]);
    }
}