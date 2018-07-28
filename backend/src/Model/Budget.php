<?php
namespace backend\src\Model;

error_reporting(E_ALL);

ini_set('display_errors', true);
require_once '../utilities/response.php';
require_once '../utilities/database.php';
use PDO;

class Budget implements \JsonSerializable
{

    public $id;

    public $category;

    public $amount;


    public function __construct($data)
    {
        if (is_array($data)) {
            $this->id = intval($data['id']);
            $this->category = $data['category'];
            $this->amount = $data['amount'];
        }
    }

    public function jsonSerialize()
    {
        return [
            'id' => $this->id,
            'category' => $this->category,
            'amount' => $this->amount,
        ];
    }

    /* ========================================================== *
     * GET
     * ========================================================== */

    public static function getAll()
    {
        global $database;
        $statement = $database->prepare('SELECT * FROM budget');
        $statement->execute();

        if ($statement->rowCount() <= 0) {
            return;
        };

        $areas = [];

        while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
            $areas[] = new Budget(($row));
        }

        return $areas;
    }

    public static function getSpecificID($id)
    {
        global $database;
        $statement = $database->prepare('SELECT * FROM budget WHERE id = ?');
        $statement->execute(array($id));

        if ($statement->rowCount() <= 0) {
            return;
        };

        $areas = [];



        return $areas;
    }

    public static function getPast(){
        global $database;
        $statement = $database->prepare("SELECT EXTRACT(YEAR FROM date) AS year, EXTRACT(MONTH FROM date) AS month, EXTRACT(DAY FROM date) AS day FROM trans WHERE 1=1 ORDER BY date DESC LIMIT 1");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }

        $dateArray = $statement->fetch(PDO::FETCH_ASSOC);
        $newestYear = $dateArray['year'];

        //Getting the OLDEST YEAR

        $statement2 = $database->prepare("SELECT EXTRACT(YEAR FROM date) AS year, EXTRACT(MONTH FROM date) AS month, EXTRACT(DAY FROM date) AS day FROM trans WHERE 1=1 ORDER BY date ASC LIMIT 1");
        $statement2->execute();
        if ($statement2->rowCount() <= 0) {
            return;
        }

        $dateArrayOLD = $statement2->fetch(PDO::FETCH_ASSOC);
        $oldestYear = $dateArrayOLD['year'];

        $years = [];
        $i = $oldestYear;
        for ($i; $i < $newestYear + 1; $i++) {
            array_push($years, $i);
        }

        $total = [];
        $monthlyTotal = [];

        for ($year = $oldestYear; $year < $newestYear + 1; $year++) {
            $totalYear = 0;
            $monthlyTotal = [];

            for ($month = 1; $month < 13; $month++) {
                $days = 0;
                if ($month == 2) {
                    if (checkdate($month, 29, $year)) {
                        $days = 29;
                    } else {
                        $days = 28;
                    }
                } else {
                    if ($month == 1 || $month == 3 || $month == 5 || $month == 7 || $month == 8 || $month == 10 || $month == 12) {
                        $days = 31;
                    } else {
                        $days = 30;
                    }
                }


                $statement3 = $database->prepare("select SUM(money) AS amount, trans.category AS category from trans where 1=1 AND date between '" . $year . "/" . $month . "/01' and '" . $year . "/" . $month . "/" . $days . "' GROUP BY trans.category");
                $statement3->execute();

                $together = [];

                while ($row = $statement3->fetch(PDO::FETCH_ASSOC)) {
                    $amount = floatval($row['amount']);
                    $category = $row['category'];

                    $category = ['amount' => $amount, 'category' => $category];

                    array_push($together, $category);
                }

                if($together != []){
                    $singleMonthObject = (object)['month' => $month, 'year' => $year, 'money' => $together];
                    array_push($monthlyTotal, $singleMonthObject);
                }

            }

            $statement4 = $database->prepare("SELECT SUM(money) AS totalAmount FROM trans WHERE date BETWEEN '" . $year . "-01-01' AND '" . $year . "-12-31'");
            $statement4->execute();

            $monthAmount = $statement4->fetch(PDO::FETCH_ASSOC);

            $singleYear = (object)['year' => $year, 'months' => $monthlyTotal, 'Year Total' => $monthAmount['totalAmount']];

            array_push($total, $singleYear);
        }

        return $total;
    }

    /* ========================================================== *
     * POST
     * ========================================================== */


    public static function createPay($body)
    {
        if ($body['category'] == "" || $body['category'] == null  ) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "Category is not defiend",
                "message" => "error"
            );

            die(json_encode( (object) $response ));
        }

        if ($body['amount'] == 0 || $body['amount'] == null  ) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "Amount is not defined",
                "message" => "error"
            );

            die(json_encode( (object) $response ));
        }

        global $database;

        $statement = $database->prepare('INSERT INTO budget (`id`, `category`, `amount`) VALUES (NULL, ?, ?)');
        $statement->execute(array($body['category'], $body['amount']));

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
                "message" => "error"
            );

            die(json_encode( (object) $response ));
        }

        if ($body['amount'] == 0 || $body['amount'] == null  ) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "Amount is not defined",
                "message" => "error"
            );

            die(json_encode( (object) $response ));
        }

        if ($body['date'] == "" || $body['date'] == null  ) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "Items is not definded",
                "message" => "error"
            );

            die(json_encode( (object) $response ));
        }
//        var_dump($body);
//        die();

        global $database;

        $statement = $database->prepare('UPDATE budget SET category = ?, amount = ? WHERE id = ?');
        $statement->execute(array($body['category'], $body['amount'], $body['id']));

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
                "message" => "error"
            );

            die(json_encode( (object) $response ));
        }

        global $database;

        $statement = $database->prepare('DELETE FROM pay WHERE id = ?');
        $statement->execute(array($body['id']));

        return true;
    }
}
