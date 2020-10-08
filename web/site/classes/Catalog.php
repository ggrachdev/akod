<?
// TODO Распределить сущности и удалить файл!

namespace Classes;

use Module\Database\v11\DB;
use SplQueue;


/** Сущность - каталог
 * Обязанность - управление каталогом
 * (создание, редактирование, удаление)
 *
 * Как работает?
 * Чтобы получить сущность каталога нужно, либо создать, либо загрузить разными способами (getById)
 * Потом мы меняем параметры объекта, и чтобы сохранить каталог - вызываем save()
 */


/** Сущность - поле узла
 *  Обязанность - управление узлами каталога
 */
interface CatalogItemField
{

}

/**
 * Сущность - привилегии для каталога
 * Обязанность - создание, проверка, удаление привелегий
 */
interface CatalogPrivileges
{

}

// Обязанность - валидация сущностей каталога
interface CatalogValidator
{
    /**
     * Проверить тип каталога на допустимость
     * @param string $type - тип каталога
     * @return bool
     */
    static function isTypeCItem(string $type): bool;

    /**
     * Получить привелегии пользователя для каталога по его id
     *
     * @param int $id_catalog
     * @return array - ассоциативный массив с правами
     */
    static function getUserPrivilegesForCatalogById(int $id_catalog): array;

    /**
     * Проверить допустимость осуществления действия пользователя над каталогом
     *
     * @param string $action - действие
     * @param int $id_catalog - id каталога
     * @param int $id_user - id пользователя
     * @return bool - возможность осуществить действие
     */
    static function checkActionForCatalog(string $action, int $id_catalog, int $id_user): bool;
}


class CPrivileges implements CatalogPrivileges
{

}

class CValidator implements CatalogValidator
{

    /**
     * Проверить тип каталога на допустимость
     * @param string $type - тип каталога
     * @return bool
     */
    static function isTypeCItem(string $type): bool
    {
        if (
            $type === 'public' ||
            $type === 'private'
        )
            return true;
        else
            return false;
    }

    /**
     * Получить привелегии пользователя для каталога по его id
     *
     * @param int $id_catalog
     * @return array - ассоциативный массив с правами
     */
    static function getUserPrivilegesForCatalogById(int $id_catalog): array
    {
        // TODO: Implement getUserPrivilegesForCatalogById() method.
    }

    /**
     * Проверить допустимость осуществления действия пользователя над каталогом
     *
     * @param string $action - действие
     * @param int $id_catalog - id каталога
     * @param int $id_user - id пользователя
     * @return bool - возможность осуществить действие
     */
    static function checkActionForCatalog(string $action, int $id_catalog, int $id_user): bool
    {
        // TODO: Implement checkActionForCatalog() method.
    }
}