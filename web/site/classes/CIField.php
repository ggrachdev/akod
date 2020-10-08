<?php
/**
 * Created by PhpStorm.
 * User: RookDeveloper
 * Date: 02.01.2020
 * Time: 18:54
 */

namespace Classes;

class CIField implements CatalogItemField
{
    public $is_success = false;

    private $objectFieldType = null;

    private $id = null;

    private $id_item = null;

    private $type = null;

    private $data = null;

    private $sort = null;

    public function __construct($data)
    {
        $this->objectFieldType = CFieldManager::getFieldObject($data);

        $this->id = $data['id'];
        $this->type = $data['type_field'];
        $this->data = $data['data'];
        $this->sort = $data['sort'];
        $this->meta = $data['meta'];
        $this->id_item = $data['id_item'];
        $this->id_classifier = $data['id_classifier'];

        $this->is_success = true;
    }

    public function getHtml()
    {
        return ($this->is_success) ? $this->objectFieldType->getHtml($this) : false;
    }

    public function getType()
    {
        return ($this->is_success) ? $this->type : false;
    }

    public function getIdItem()
    {
        return ($this->is_success) ? $this->id_item : false;
    }

    public function getData()
    {
        return ($this->is_success) ? $this->data : false;
    }

    public function save($params)
    {
        return ($this->is_success) ? $this->objectFieldType->save($this, $params) : false;
    }

    public function getId()
    {
        return ($this->is_success) ? $this->id : false;
    }

    public function getClassifierId()
    {
        return ($this->id_classifier) ? $this->id_classifier : false;
    }

    public function getSort()
    {
        return $this->sort;
    }

    public function getMeta()
    {
        return $this->meta;
    }

    public function getEditHtml()
    {
        return ($this->is_success) ? $this->objectFieldType->getEditHtml($this) : false;
    }

    public function serializeData()
    {
        return ($this->is_success) ? $this->objectFieldType->serializeData($this) : false;
    }

    public function refresh($params)
    {
        return ($this->is_success) ? $this->objectFieldType->refresh($this, $params) : false;
    }

    public function delete()
    {
        return ($this->is_success) ? $this->objectFieldType->delete($this) : false;
    }
}