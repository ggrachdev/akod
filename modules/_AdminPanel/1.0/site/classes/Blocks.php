<?

/**
 * Классы отвечают за редактирование, сохранение, валидацию блоков
 */

namespace AdminPanel\v10\Classes;

use Module\Database\v11\DB;

class BlockItem
{
    // ID
    private $id = '';

    // Таблица
    private $table = '';

    // Имя блока
    private $name = '';

    // Был ли сохранен блок
    public $is_save = true;

    public function __construct($data)
    {
        if(
            !empty($data['id']) &&
            !empty($data['name']) &&
            !empty($data['table']) &&
            !empty($data['data'])
        )
        {
            $this->id = $data['id'];
            $this->name = $data['name'];
            $this->table = $data['table'];
            $this->data = json_decode($data['data'], true);
        }
        else
        {
            throw new \Exception('Object must have id, name, table, data');
        }
    }

    public function getTable()
    {
        return $this->table;
    }

    public function getName()
    {
        return $this->name;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getData()
    {
        return $this->data;
    }

    public function setName()
    {
        $this->is_save = false;
    }

    public function setData(array $arr_data)
    {
        $this->is_save = false;
        $this->data = $arr_data;
    }
}

class BlockBuilder
{

    static function createBlock($block_name, $table_name)
    {

        if(self::loadBlock($table_name) == false)
        {

            $res = DB::insert('blocks', [
                'name' => $block_name,
                'table' => $table_name,
                'data' => '{}'
            ]);

            if (DB::isSuccess($res)) {
                return self::loadBlock($table_name);
            } else
                throw new \Exception('Error insert block');
        } else
            throw new \Exception('This table already used');

    }

    static function loadBlock($data)
    {

        if (is_int($data)) {
            $res = DB::select('blocks', '"id" = ?', [$data]);
        } elseif (is_string($data)) {
            $res = DB::select('blocks', '"table" = ?', [$data]);
        }

        if(DB::isSuccess($res, true))
        {
            return new BlockItem($res['data'][0]);
        }
        else
        {
            return false;
        }

    }

    static function saveBlock(BlockItem $block_item): bool
    {
        $block_item->is_save = true;

        DB::update('blocks', [
            'table' => $block_item->getTable(),
            'name' => $block_item->getName(),
            'data' => json_encode($block_item->getData()),
        ], 'id = ?', [$block_item->getId()]);
        return true;
    }

    static function getListAllBlocks($offset = null, $count = null): array
    {
        if ($offset === null && $count === null) {
            return DB::select('blocks');
        }
    }
}