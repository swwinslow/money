<?php


namespace backend\src\Model;

error_reporting(E_ALL);

ini_set('display_errors', true);
require_once '../utilities/response.php';
require_once '../utilities/database.php';
use PDO;

class Trans implements \JsonSerializable
{

    public $id;
    
    public $business;
    
    public $mondey;
    
    public $itmes;
    
    public $parents;
    
    public $date;
    
    public $category;

    public function __construct($data)
    {
        if (is_array($data)) {
            $this->id = intval($data['id']);
            $this->business = $data['business'];
            $this->money = $data['money'];
            $this->items = $data['items'];
            $this->parents = $data['parents'];
            $this->date = $data['date'];
            $this->category = $data['category'];
        }
    }

    public function jsonSerialize()
    {
        return [
            'id' => $this->id,
            'business' => $this->business,
            'money' => $this->money,
            'items' => $this->items,
            'parents' => $this->parents,
            'date' => $this->date,
            'category' => $this->category,
        ];
    }

    /* ========================================================== *
     * GET
     * ========================================================== */

    public static function getAll()
    {
        global $database;
        $statement = $database->prepare('SELECT * FROM trans ORDER BY id DESC LIMIT 20');
        $statement->execute();

        if ($statement->rowCount() <= 0) {
            return;
        };

        $areas = [];
    
        while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
            $areas[] = new Trans(($row));
        }
        
        return $areas;
    }
    
    public static function getSpecificID($id)
    {
        global $database;
        $statement = $database->prepare('SELECT * FROM trans WHERE id = ?');
        $statement->execute(array($id));

        if ($statement->rowCount() <= 0) {
            return;
        };

        $areas = [];
    
        while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
            $areas[] = new Trans(($row));
        }
        
        return $areas;
    }
    
    public static function getSpecificBusiness($body)
    {
        if ($body['business'] == "" || $body['business'] == null) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "Business is not definend",
                "message" => $message
            );

            die(json_encode( (object) $response ));
        }
        
        global $database;
        $statement = $database->prepare('SELECT * FROM trans WHERE business = ?');
        $statement->execute(array($body['business']));

        if ($statement->rowCount() <= 0) {
            return;
        };

        $areas = [];
    

        while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
            $areas[] = new Trans(($row));
        }
        
        return $areas;
    }

    /* ========================================================== *
     * POST
     * ========================================================== */
    

    public static function createTrans($body)
    {
        if ($body['business'] == "" || $body['business'] == null  ) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "fail",
                "message" => $message
            );

            die(json_encode( (object) $response ));
        }
        
        if ($body['money'] == 0 || $body['business'] == null  ) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "Money is not defined",
                "message" => $message
            );

            die(json_encode( (object) $response ));
        }
        
        if ($body['items'] == "" || $body['items'] == null  ) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "Items is not definded",
                "message" => $message
            );

            die(json_encode( (object) $response ));
        }
        
        if ($body['category'] == "" || $body['category'] == null  ) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "Category is not definded",
                "message" => $message
            );

            die(json_encode( (object) $response ));
        }

        global $database;
       
        $statement = $database->prepare('INSERT INTO trans (`id`, `business`, `money`, `items`, `parents`, `date`, `category`) VALUES (NULL, ?, ?, ?, ?, ?, ?)');
        $statement->execute(array($body['business'], $body['money'], $body['items'], $body['parents'], $body['date'], $body['category']));

        $id = $database->lastInsertId();

        $statement->closeCursor();
    
        return true;
    }
    
    /* ========================================================== *
     * PUT
     * ========================================================== */
    
    public static function updateTrans($body){
  
        if ($body['business'] == "" || $body['business'] == null  ) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "fail",
                "message" => $message
            );

            die(json_encode( (object) $response ));
        }
        
        if ($body['money'] == 0 || $body['business'] == null  ) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "Money is not defined",
                "message" => $message
            );

            die(json_encode( (object) $response ));
        }
        
        if ($body['items'] == "" || $body['items'] == null  ) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "Items is not definded",
                "message" => $message
            );

            die(json_encode( (object) $response ));
        }
        
        if ($body['category'] == "" || $body['category'] == null  ) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "Category is not definded",
                "message" => $message
            );

            die(json_encode( (object) $response ));
        }

        global $database;
       
        $statement = $database->prepare('UPDATE trans SET business = ?, money = ?, items = ?, parents = ?, date = ?, category = ? WHERE id = ?');
        $statement->execute(array($body['business'], $body['money'], $body['items'], $body['parents'], $body['date'], $body['category'], $body['id']));

        $id = self::getSpecificID($body['id']);
    
        return true;
    }


    /* ========================================================== *
     * DELETE
     * ========================================================== */
    
    public static function deleteTrans($body){
        global $database;
       
        $statement = $database->prepare('DELETE FROM trans WHERE id = ?');
        $statement->execute(array($body['id']));
    
        return true;
    }
}
