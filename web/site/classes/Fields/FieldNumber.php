<?php

namespace Classes\Fields;
use Classes\CIField;
use Classes\ClassifierField;
use Classes\FieldDB;

// Тип поля - номер
class FieldNumber extends FieldDB implements ClassifierField
{

    public function getHtml(CIField $obj)
    {
        $data = $obj->getData();
        // Контент поля
        return $data != false ? $data : 'Поле с числом является пустым';
    }

    public function getEditHtml(CIField $obj)
    {
        ob_start();
        ?>
        <input type="number" value="<?=trim($obj->getData())?>">
        <?
        $content = ob_get_contents();
        ob_end_clean();

        return $content;
    }

    public function refresh(CIField $obj, $params)
    {
        // TODO: Implement refresh() method.
    }

    public function save(CIField $obj, $params)
    {

        if(strlen(trim($params['data_for_save'])) > 0)
        {
            $params['data_for_save'] = strip_tags($params['data_for_save']);

            return parent::saveDB($obj, $params['data_for_save']);
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
        // TODO: Implement delete() method.
    }

    public static function adapterImportData($data)
    {
        // TODO: Implement adapterImportData() method.
    }

    public function serializeData(CIField $obj)
    {
        // TODO: Implement serializeData() method.
    }
}