<?

namespace Controllers;

use Models\GetMenuModel;

class SpellerController {

    public function getDataAction() {

        $headers = array("Content-Type: application/json");
        $ch = curl_init();
        
        curl_setopt($ch, CURLOPT_URL, "https://speller.yandex.net/services/spellservice.json/checkText?text=тист");
    
        curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        $data = curl_exec($ch);
        curl_close($ch);
        die;
    }

}
