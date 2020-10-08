<?

namespace Module\Core\v10;

class Core
{
    static function genLocalData(array $data, string $name_local_data, array $unset_keys = null)
    {
        if ($unset_keys !== null)
            foreach ($unset_keys as $item)
                unset($data[$item]);
        $data['name_local_data'] = $name_local_data;
        return base64_encode(json_encode($data));
    }
}




