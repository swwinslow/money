<?php


namespace backend\src\Model;

error_reporting(E_ALL);

ini_set('display_errors', true);
require_once '../utilities/response.php';
require_once '../utilities/database.php';
use PDO;

class Pay implements \JsonSerializable
{

    public $id;
    
    public $company;
    
    public $amount;
    
    public $date;

    public function __construct($data)
    {
        if (is_array($data)) {
            $this->id = intval($data['id']);
            $this->company = $data['company'];
            $this->amount = $data['amount'];
            $this->date = $data['date'];
        }
    }

    public function jsonSerialize()
    {
        return [
            'id' => $this->id,
            'company' => $this->company,
            'amount' => $this->amount,
            'date' => $this->date,
        ];
    }

    /* ========================================================== *
     * GET
     * ========================================================== */

    public static function getAll()
    {
        global $database;
        $statement = $database->prepare('SELECT * FROM pay');
        $statement->execute();

        if ($statement->rowCount() <= 0) {
            return;
        };

        $areas = [];
    
        while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
            $areas[] = new Pay(($row));
        }
        
        return $areas;
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
    
    public static function getSpecificCompany($body)
    {
        if ($body['company'] == "" || $body['company'] == null) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "Company is not definend",
                "message" => $message
            );

            die(json_encode( (object) $response ));
        }
        
        global $database;
        $statement = $database->prepare('SELECT * FROM pay WHERE company = ?');
        $statement->execute(array($body['company']));

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
    

    public static function createPay($body)
    {
        if ($body['company'] == "" || $body['company'] == null  ) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "Company is not defiend",
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
                "status" => "Date is not definded",
                "message" => $message
            );

            die(json_encode( (object) $response ));
        }

        global $database;
       
        $statement = $database->prepare('INSERT INTO pay (`id`, `company`, `amount`, `date`) VALUES (NULL, ?, ?, ?)');
        $statement->execute(array($body['company'], $body['amount'], $body['date']));

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
