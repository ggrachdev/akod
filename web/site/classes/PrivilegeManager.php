<?php

namespace Classes;

use Module\Database\v11\DB;

class PrivilegeManager
{
    public static function add($creator, $id_catalog, $id_user, $type, $value)
    {
        $res = DB::insert('catalog_privileges', [
            'id_catalog' => $id_catalog,
            'id_user' => $id_user,
            'type' => $type,
            'value' => $value,
            'creator' => $creator
        ]);
    }

    public static function remove($id)
    {
        DB::delete('catalog_privileges', 'id = ?', [$id]);
    }

    public static function hasPrivilege($privilege_type, $id_classifier) {
        global $system;

        $result = false;

        if($system['user']->auth == 1)
        {
            $res = DB::select('catalog_privileges',
                'type = ? AND id_user = ? AND id_catalog = ? AND value = ?',
                [$privilege_type, $system['user']->data['id'], $id_classifier, 'true']);

            if(!empty($res['data']))
            {
                $result = true;
            }

            if($privilege_type == 'show' && $result == false)
            {
                $res = DB::select('catalogs',
                    'id = ? AND type = ?',
                    [$id_classifier, 'public']);

                if(!empty($res['data'])) {
                    $result = true;
                }
            }
        }


        return $result;
    }

    public static function has($type, $id_user, $id_catalog, $value = null)
    {

        if($value == null)
        {
            $res = DB::select('catalog_privileges',
                'type = ? AND id_user = ? AND id_catalog = ? ',
                [$type, $id_user, $id_catalog]);
        }
        else
        {
            $res = DB::select('catalog_privileges',
                'type = ? AND id_user = ? AND value = ? AND id_catalog = ?',
                [$type, $id_user, $value, $id_catalog]);
        }

        return !empty($res['data']);
    }
}