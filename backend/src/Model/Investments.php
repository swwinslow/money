<?php


namespace backend\src\Model;

error_reporting(E_ALL);

ini_set('display_errors', true);
require_once '../utilities/response.php';
require_once '../utilities/database.php';
use PDO;

class Investments implements \JsonSerializable
{

    public $id;
    
    public $investment;
    
    public $amount;
    
    public $date;
    


    public function __construct($data)
    {
        if (is_array($data)) {
            $this->id = intval($data['id']);
            $this->investment = $data['investment'];
            $this->amount = $data['amount'];
            $this->date = $data['date'];
        }
    }

    public function jsonSerialize()
    {
        return [
            'id' => $this->id,
            'investment' => $this->investment,
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
        $statement = $database->prepare('SELECT * FROM investments ORDER BY id DESC');
        $statement->execute();

        if ($statement->rowCount() <= 0) {
            return;
        };

        $areas = [];
    
        while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
            $areas[] = new Investments(($row));
        }
        
        return $areas;
    }
    
    public static function getSpecificID($id)
    {
        global $database;
        $statement = $database->prepare('SELECT * FROM investments WHERE id = ?');
        $statement->execute(array($id));

        if ($statement->rowCount() <= 0) {
            return;
        };

        $areas = [];
    
        while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
            $areas[] = new Investments(($row));
        }
        
        return $areas;
    }
    
    public static function getSpecificInvestments($body)
    {
        if ($body['investment'] == "" || $body['investment'] == null) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "investment is not definend",
                "message" => $message
            );

            die(json_encode( (object) $response ));
        }
        
        global $database;
        $statement = $database->prepare('SELECT * FROM investments WHERE investment = ?');
        $statement->execute(array($body['business']));

        if ($statement->rowCount() <= 0) {
            return;
        };

        $areas = [];
    

        while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
            $areas[] = new Investments(($row));
        }
        
        return $areas;
    }

    /* ========================================================== *
     * POST
     * ========================================================== */
    

    public static function createInvestment($body)
    {
        if ($body['investment'] == "" || $body['investment'] == null  ) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "investment is not definded",
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
                "status" => "date is not definded",
                "message" => $message
            );

            die(json_encode( (object) $response ));
        }

        global $database;
       
        $statement = $database->prepare('INSERT INTO investments (`id`, `investment`, `amount`, `date`) VALUES (NULL, ?, ?, ?)');
        $statement->execute(array($body['investment'], $body['amount'], $body['date']));

        $id = $database->lastInsertId();

        $statement->closeCursor();
    
        return self::getSpecificID($id);
    }
    
    /* ========================================================== *
     * PUT
     * ========================================================== */
    
    public static function updateInvestment($body){
  
        if ($body['investment'] == "" || $body['investment'] == null  ) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "Investment is not definied",
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
       
        $statement = $database->prepare('UPDATE investments SET investment = ?, amount = ?, date = ? WHERE id = ?');
        $statement->execute(array($body['investment'], $body['amount'], $body['date'], $body['id']));

        $id = self::getSpecificID($body['id']);
    
        return self::getSpecificID($body['id']);
    }


    /* ========================================================== *
     * DELETE
     * ========================================================== */
    
    public static function deleteInvestment($body){
        
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
       
        $statement = $database->prepare('DELETE FROM investments WHERE id = ?');
        $statement->execute(array($body['id']));
    
        return true;
    }
}
