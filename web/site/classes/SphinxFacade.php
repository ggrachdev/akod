<?

namespace Classes;

use Module\Database\v11\DB;
use mysqli;
use Classes\Classifier;

class SphinxFacade {

    const Index = 'ind_tsv';
    const Host = '127.0.0.1';
    const Login = 'root';
    const Password = 'qweqwe22';
    const Port = 9306;
    const Folder = 'index';
    const File = 'other/index.tsv';

    private static $connect = null;

    public static function query($request = " ") {
        $canQuery = false;

        if (self::$connect == null) {
            $resConnect = self::connect();

            if ($resConnect) {
                $canQuery = true;
            }
        }

        if ($result = self::$connect->query("SELECT * FROM " . self::Index . ' ' . $request)) {
            return $result->fetch_all();
        }

        return false;
    }

    /*
     * Генерация файлов TSV из классификаторов
     */

    public static function generateFilesTsv() {

        global $config;

        $resDb = DB::select('catalogs');

        $content = "";

        if (!empty($resDb)) {
            $num = 0;

            $arIdsClassifiers = [];

            foreach ($resDb['data'] as $arrayDataClassifier) {
                $num++;

                $classifier = new Classifier();
                $classifier->loadFromArray($arrayDataClassifier);

                $jsonData = $classifier->getJsonData();

                $matches = [];
                preg_match_all('~"text":\s*"[а-яА-ЯA-Za-z0-9\s]+"~u', $jsonData, $matches);

                $arIdsClassifiers[] = $classifier->id;

                if (!empty($matches[0])) {
                    foreach ($matches[0] as &$match) {
                        $match = trim(str_replace(['"', "\t", "\n", "\r"], ['', '', '', ''], ltrim(trim(ltrim($match, '"text"')), ':')));
                    }
                    $content .= $num . "\t" . implode(' ', $matches[0]) . "\t" . $classifier->id . "\t1\n";
                    $num++;
                }

                $content .= $num . "\t" . $classifier->name . "\t" . $classifier->id . "\t0\n";
            }


            $resDbFields = DB::select('fields', 'id_classifier IN (' . implode(',', $arIdsClassifiers) . ')', []);

            if (!empty($resDbFields['data'])) {
                foreach ($resDbFields['data'] as $arField) {

                    switch ($arField['type_field']) {
                        case 'text':
                            $data = trim(str_replace(['.', ',', "\t", "\n", "\r"], ['', '', '', '', ''], strip_tags(trim($arField['data']))));

                            if (empty($data))
                                continue;
                            $num++;

                            $content .= $num . "\t" . $data . "\t" . $arField['id_classifier'] . "\t2\n";
                            break;

                        case 'table':

                            $jsonTable = json_decode($arField['data'], true);

                            $data = '';

                            if (!empty($jsonTable['columns'])) {
                                foreach ($jsonTable['columns'] as $value) {
                                    $data .= $value['name'] . ' ';
                                }
                            }


                            if (!empty($jsonTable['rows'])) {
                                foreach ($jsonTable['rows'] as $k => $v) {
                                    $data .= implode(' ', array_values($v)) . ' ';
                                }
                            }



                            $data = trim(str_replace(['.', ',', "\t", "\n", "\r"], ['', '', '', '', ''], strip_tags(trim($data))));

                            if (!empty($data)) {
                                $num++;
                                $content .= $num . "\t" . $data . "\t" . $arField['id_classifier'] . "\t2\n";
                            }

                            break;

                        case 'html':
                            $data = trim(str_replace(['.', ',', "\t", "\n", "\r"], ['', '', '', '', ''], strip_tags(trim($arField['data']))));

                            if (empty($data))
                                continue;
                            $num++;

                            $content .= $num . "\t" . $data . "\t" . $arField['id_classifier'] . "\t2\n";
                            break;

                        default:
                            break;
                    }
                }
            }

            $fileTsvPath = $config['path']['files'] . self::File;

            file_put_contents($fileTsvPath, $content);
        }
    }

    private static function connect() {
        $mysqli = new mysqli(self::Host, self::Login, self::Password, "", self::Port);

        if (!$mysqli->connect_errno) {
            self::$connect = $mysqli;
            return true;
        }

        return false;
    }

}
