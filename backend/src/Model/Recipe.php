<?php


namespace backend\src\Model;

error_reporting(E_ALL);

ini_set('display_errors', true);
require_once '../utilities/response.php';
require_once '../utilities/database.php';
use PDO;

class Recipe implements \JsonSerializable
{

    public $id;

    public $url;

    public function __construct($data)
    {
        if (is_array($data)) {
            $this->id = intval($data['id']);
            $this->url = $data['URL'];
        }
    }

    public function jsonSerialize()
    {
        return [
            'id' => $this->id,
            'url' => $this->url
        ];
    }

    /* ========================================================== *
     * GET
     * ========================================================== */

    public static function getAll()
    {
        global $database;
        $statement = $database->prepare('SELECT * FROM recipies');
        $statement->execute();

        if ($statement->rowCount() <= 0) {
            return;
        };

        $recipe = [];
        $allinformation = [];


        while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
            $recipe[] = new Recipe($row);
        }
        $counter = 0;

        for($i = 0; $i < count($recipe); $i++){
            $statement1 = $database->prepare('SELECT recipies_cateogries.tag_name FROM recipies INNER JOIN recipies_connection ON recipies.id = recipies_connection.recipie_id inner join recipies_cateogries ON recipies_connection.recipie_cat = recipies_cateogries.id');
            $statement1->execute();
            $allinformation[$counter]['information'] = $recipe[$i];
            $items = [];
            while ($row = $statement1->fetch(PDO::FETCH_ASSOC)) {
                $items[] = $row;
            }

            $allinformation[$counter]['category'] = $items;
            $counter++;
        }

        return $allinformation;
    }




    public static function getSpecificID($id)
    {
        global $database;
        $statement = $database->prepare('SELECT * FROM pay WHERE id = ?');
        $statement->execute(array($id));

        if ($statement->rowCount() <= 0) {
            return;
        };

        $areas = [];

        while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
            $areas[] = new Pay(($row));
        }

        return $areas;
    }

    /* ========================================================== *
     * POST
     * ========================================================== */


    public static function createRecipie($body)
    {
        if ($body['URL'] == "" || $body['URL'] == null  ) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "URL is not defiend",
                "message" => $message
            );

            die(json_encode( (object) $response ));
        }

        global $database;

        $statement = $database->prepare('INSERT INTO recipies (`id`, `URL`) VALUES (NULL, ?)');
        $statement->execute(array($body['URL']));

        $id = $database->lastInsertId();

        $statement->closeCursor();

        return self::getSpecificID($id);
    }

    /* ========================================================== *
     * PUT
     * ========================================================== */

    public static function updatePay($body){

        if ($body['company'] == "" || $body['company'] == null  ) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "Company is not defined",
                "message" => $message
            );

            die(json_encode( (object) $response ));
        }

        if ($body['amount'] == 0 || $body['amount'] == null  ) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "Amount is not defined",
                "message" => $message
            );

            die(json_encode( (object) $response ));
        }

        if ($body['date'] == "" || $body['date'] == null  ) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "Items is not definded",
                "message" => $message
            );

            die(json_encode( (object) $response ));
        }
//        var_dump($body);
//        die();

        global $database;

        $statement = $database->prepare('UPDATE pay SET company = ?, amount = ?, date = ? WHERE id = ?');
        $statement->execute(array($body['company'], $body['amount'], $body['date'], $body['id']));

        return self::getSpecificID($body['id']);
    }


    /* ========================================================== *
     * DELETE
     * ========================================================== */

    public static function deletePay($body){

        if ($body['id'] == null) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "ID is not definded",
                "message" => $message
            );

            die(json_encode( (object) $response ));
        }

        global $database;

        $statement = $database->prepare('DELETE FROM pay WHERE id = ?');
        $statement->execute(array($body['id']));

        return true;
    }
}
