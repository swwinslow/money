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

    public $ending_date;

    public function __construct($data)
    {
        if (is_array($data)) {
            $this->id = intval($data['id']);
            $this->category = $data['category'];
            $this->amount = $data['amount'];
            $this->ending_date = $data['ending_date'];
        }
    }

    public function jsonSerialize()
    {
        return [
            'id' => $this->id,
            'category' => $this->category,
            'amount' => $this->amount,
            'ending_date' => $this->ending_date,

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

    public static function getOverview()
    {
        global $database;
        $totalPay = Pay::totalPay();
        $totalTrans = Trans::totalTrans();

        $data = ['Pay' => $totalPay, 'Trans' => $totalTrans];

        return $data;
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

    public static function getSaving($budget){

        $HousingSaving = 0;
        $CarSaving = 0;
        $GrocerciesSaving = 0;
        $SpendingMoney = 0;

        for($i = 0; $i < count($budget); $i++){
            $year = $budget[$i]->months;
            $yearName = $budget[$i]->year;
            
            for($j = 0; $j < count($year); $j++){
                $year1 = $year[$j];
                $monthNumber = $year1->month;

                $gointo = false;

                // var_dump($yearName);
                // die();

                if(($yearName == "2018" && $monthNumber < 6)||(intval($yearName) > date('Y') )){
                    //nothing to report here 
                } else {
                    if(2018 == date('Y') - 1 || 2019 == date('Y')){ //if this is 2018
                        if($monthNumber > date('m')){ //if month is less than current
                            $gointo = false;
                        } else {
                            $gointo = true;
                        }
                    }
                    if($yearName == "2018"){
                        if($monthNumber >= 6){
                            $gointo = true;
                        } else {
                            $gointo = false;
                        }
                    }

                    if($gointo == true){
                        $cats = $year1->money;
                        for($t = 0; $t < count($cats); $t++){
                            $catName = $cats[$t]['category'];

                            if($catName == 'Housing'){
                                $HousingSaving += $cats[$t]['difference'];
                            } else if ($catName == 'Car'){
                                $CarSaving += $cats[$t]['difference'];
                            } else if ($catName == 'Groceries'){
                                $GrocerciesSaving += $cats[$t]['difference'];
                            } else if ($catName == 'SpendingMoney'){
                                $SpendingMoney += $cats[$t]['difference'];
                            }
                        }
                    }
                }
            }
        }
        $amount = ['Housing' => $HousingSaving, 'Car' => $CarSaving, 'Grocercies' => $GrocerciesSaving, 'Spending' => $SpendingMoney];
        return $amount;
    }
    public static function getAllPastSeth(){
        global $database;
        $statement = $database->prepare("SELECT budget_months.month, budget_months.year, budget_months.category, budget_months.c_money, trans_sql.MONEY, (budget_months.c_money - trans_sql.MONEY) as money_difference, CASE WHEN (budget_months.c_money - trans_sql.MONEY) < 0 THEN 'TRUE' ELSE 'FALSE' END AS NEGATIVE from (SELECT SUM(money) AS 'MONEY', YEAR(date) AS 'YEAR', category AS 'CAT', MONTH(date) AS 'MONTH' from trans where YEAR(date) = '2019' group by category, MONTH(date)) as trans_sql inner join budget_months on trans_sql.MONTH = budget_months.month_id and trans_sql.CAT = budget_months.category where budget_months.year = '2019' order by year,month_id, category");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }


        $data = $statement->fetchAll(\PDO::FETCH_ASSOC);
        return $data;
    }

    public static function yearReview()
    {
        global $database;
        $statement = $database->prepare("SELECT (t1.money - t2.money) as 'difference', t2.category, CASE WHEN (t1.money - t2.money) < 0 THEN 'TRUE' ELSE 'FALSE' END AS NEGATIVE FROM (SELECT category, SUM(c_money) AS money from budget_months where budget_months.year = '2019' group by category) as t1, (SELECT SUM(money) AS 'money', YEAR(date) AS 'YEAR', category AS 'category', MONTH(date) AS 'MONTH' from trans where YEAR(date) = '2019' group by category ) as t2 WHERE t1.category = t2.category");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }

        $data = $statement->fetchAll(\PDO::FETCH_ASSOC);
        return $data;
    }

    public static function yearReview2019()
    {
        global $database;
        $statement = $database->prepare("SELECT (t1.money -  t2.money) AS money, t1.money AS salary, t2.money AS trans  FROM (SELECT SUM(amount) AS money FROM pay where year(date) = '2019') as t1, (select sum(money) AS money from trans where YEAR(date) = '2019') as t2 ");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }

        $data = $statement->fetchAll(\PDO::FETCH_ASSOC);
        return $data;
    }

    public static function getPast()
    {
        global $database;
        $statement = $database->prepare("SELECT EXTRACT(YEAR FROM date) AS year, EXTRACT(MONTH FROM date) AS month, EXTRACT(DAY FROM date) AS day FROM trans WHERE 1=1 ORDER BY date DESC LIMIT 1");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }

        $dateArray = $statement->fetch(PDO::FETCH_ASSOC);
        $newestYear = $dateArray['year'];

        $oldestYear = date("Y");

        $years = [];
        $i = $oldestYear;
        for ($i; $i < $newestYear + 1; $i++) {
            array_push($years, $i);
        }

        $total = [];
        $monthlyTotal = [];

        for ($year = 2018; $year < $newestYear + 1; $year++) {

            // var_dump($year);
            // var_dump($oldestYear);
            // var_dump($newestYear);

            $totalYear = 0;
            $monthlyTotal = [];

            for ($month = 1; $month < 13; $month++) {

                $days = date('t', mktime(0, 0, 0, $month, 1, $year)); 

                $statement3 = $database->prepare("select SUM(money) AS amount, trans.category AS category from trans where 1=1 AND date between '" . $year . "/" . $month . "/01' and '" . $year . "/" . $month . "/" . $days . "' GROUP BY trans.category ORDER BY amount DESC");
                $statement3->execute();

                $statement4 = $database->prepare("select SUM(money) AS amount from trans where 1=1 AND date between '" . $year . "/" . $month . "/01' and '" . $year . "/" . $month . "/" . $days . "'");
                $statement4->execute();

                $together = [];

                while ($row = $statement3->fetch(PDO::FETCH_ASSOC)) {
                    $amount = floatval($row['amount']);
                    $category = $row['category'];

                    $category = ['amount' => $amount, 'category' => $category];

                    array_push($together, $category);
                }

                $amountTotal = $statement4->fetch(PDO::FETCH_ASSOC);

                if ($together != []) {

                    $monthName = date("F", mktime(0, 0, 0, $month, 10));
                    
                    //SHOWING THE BUDGET AND THE AMOUNTS!!!
                    if (($month > 5 && $year >= 2018) || ($year >= 2019)) {
                        $amount = floatval($amountTotal['amount']);

                        $statement5 = $database->prepare("SELECT * FROM budget WHERE display = 1");
                        $statement5->execute();

                        $payMoney = $database->prepare("select SUM(amount) AS amount from pay where 1=1 AND date between '" . $year . "/" . $month . "/01' and '" . $year . "/" . $month . "/" . $days . "'");
                        $payMoney->execute();

                        $statement6 = $database->prepare("SELECT SUM(amount) AS amount FROM budget WHERE display = 0");
                        $statement6->execute();

                        $bugetTopics = [];

                        while ($row = $payMoney->fetch(PDO::FETCH_ASSOC)) {
                            $payAmount = $row['amount'];
                        }

                        while ($row = $statement5->fetch(PDO::FETCH_ASSOC)) {
                            $amountB = floatval($row['amount']);
                            $category = $row['category'];
                            $difference = $amountB;
                            $spent = 0;

                            $budgetTogether = ['amount2' => $amountB, 'category' => $category, 'difference' => $difference, 'amount' => $spent];

                            array_push($bugetTopics, $budgetTogether);
                        }

                        while ($row = $statement6->fetch(PDO::FETCH_ASSOC)) {
                            $amountA = floatval($row['amount']);

                            $budgetTogether = ['amount' => $amountA, 'category' => "Saving", 'difference' => 0];

                            array_push($bugetTopics, $budgetTogether);
                        }

                        $totalAmount = 0;
                        $leftOver = 0;

                        for ($i = 0; $i < count($bugetTopics); $i++) {
                            //SPLIT TRANS CATS TO BUDGET CATS
                            $leftOver += $bugetTopics[$i]['difference'];
                        }

                        for ($j = 0; $j < count($bugetTopics); $j++) {
                            $budgetName = $bugetTopics[$j]['category'];

                            for ($i = 0; $i < count($together); $i++) {
                                //SPLIT TRANS CATS TO BUDGET CATS
                                $name = $together[$i]['category'];
                                $spentAmount = $together[$i]['amount'];

                                if ($budgetName == "Housing" && $name == "Housing") {
                                    $bugetTopics[$j]['difference'] -= $spentAmount;
                                    $bugetTopics[$j]['amount'] += $spentAmount;
                                    $totalAmount += $spentAmount;
                                    $leftOver -= $spentAmount;
                                }

                                if ($budgetName == "Groceries" && $name == "Groceries") {
                                    $bugetTopics[$j]['amount'] += $spentAmount;
                                    $bugetTopics[$j]['difference'] -= $spentAmount;
                                    $totalAmount += $spentAmount;
                                    $leftOver -= $spentAmount;

                                }

                                if ($budgetName == "Car" && ($name == "Car" || $name == "Gas")) {
                                    $bugetTopics[$j]['amount'] += $spentAmount;
                                    $bugetTopics[$j]['difference'] -= $spentAmount;
                                    $totalAmount += $spentAmount;
                                    $leftOver -= $spentAmount;

                                }

                                if ($budgetName == "Insurance" && ($name == "Insurance")) {
                                    $bugetTopics[$j]['amount'] += $spentAmount;
                                    $bugetTopics[$j]['difference'] -= $spentAmount;
                                    $totalAmount += $spentAmount;
                                    $leftOver -= $spentAmount;

                                }

                                if ($budgetName == "SpendingMoney" && ($name == "Dessert" || $name == "Meal" || $name == "Misc" || $name == "Need")) {
                                    $bugetTopics[$j]['difference'] -= $spentAmount;
                                    $bugetTopics[$j]['amount'] += $spentAmount;
                                    $totalAmount += $spentAmount;
                                    $leftOver -= $spentAmount;

                                }


                            }
                        }

                        $intPay = intval($payAmount);
                        $intTotal = intval($totalAmount);
                        $totalSaved = $intPay - $intTotal;


                        $singleMonthObject = (object)['month' => $month, 'name' => $monthName, 'money' => $bugetTopics, 'Total' => $totalAmount, "LeftOver" => $leftOver, 'Pay' => $payAmount, "Saved" => $totalSaved];
                        array_push($monthlyTotal, $singleMonthObject);
                    } else {
                        $amount = floatval($amountTotal['amount']);

                        $singleMonthObject = (object)['month' => $month, 'name' => $monthName, 'money' => $together, 'Total' => $amount];
                        array_push($monthlyTotal, $singleMonthObject);
                    }


                }

            }

            $statement4 = $database->prepare("SELECT SUM(money) AS totalAmount FROM trans WHERE date BETWEEN '" . $year . "-01-01' AND '" . $year . "-12-31'");
            $statement4->execute();

            $monthAmount = $statement4->fetch(PDO::FETCH_ASSOC);

            $singleYear = (object)['year' => $year, 'months' => $monthlyTotal, 'YearTotal' => $monthAmount['totalAmount']];

            array_push($total, $singleYear);
        }

        return $total;
    }

    
    

     public static function getAllPast()
    {
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
        $oldestYear = $dateArray['year'];

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

                $statement3 = $database->prepare("select SUM(money) AS amount, trans.category AS category from trans where 1=1 AND date between '" . $year . "/" . $month . "/01' and '" . $year . "/" . $month . "/" . $days . "' GROUP BY trans.category ORDER BY amount DESC");
                $statement3->execute();

                $statement4 = $database->prepare("select SUM(money) AS amount from trans where 1=1 AND date between '" . $year . "/" . $month . "/01' and '" . $year . "/" . $month . "/" . $days . "'");
                $statement4->execute();

                $together = [];

                while ($row = $statement3->fetch(PDO::FETCH_ASSOC)) {
                    $amount = floatval($row['amount']);
                    $category = $row['category'];

                    $category = ['amount' => $amount, 'category' => $category];

                    array_push($together, $category);
                }

                $amountTotal = $statement4->fetch(PDO::FETCH_ASSOC);

                if ($together != []) {
                    if ($month == 1) {
                        $monthName = 'January';
                    }
                    if ($month == 2) {
                        $monthName = 'February';
                    }
                    if ($month == 3) {
                        $monthName = 'March';
                    }
                    if ($month == 4) {
                        $monthName = 'April';
                    }
                    if ($month == 5) {
                        $monthName = 'May';
                    }
                    if ($month == 6) {
                        $monthName = 'June';
                    }
                    if ($month == 7) {
                        $monthName = 'July';
                    }
                    if ($month == 8) {
                        $monthName = 'August';
                    }
                    if ($month == 9) {
                        $monthName = 'September';
                    }
                    if ($month == 10) {
                        $monthName = 'October';
                    }
                    if ($month == 11) {
                        $monthName = 'November';
                    }
                    if ($month == 12) {
                        $monthName = 'December';
                    }

                    //SHOWING THE BUDGET AND THE AMOUNTS!!!


                    if (($month > 5 && $year >= 2018) || ($year >= 2019)) {
                        $amount = floatval($amountTotal['amount']);

                        $statement5 = $database->prepare("SELECT * FROM budget WHERE display = 1");
                        $statement5->execute();

                        $payMoney = $database->prepare("select SUM(amount) AS amount from pay where 1=1 AND date between '" . $year . "/" . $month . "/01' and '" . $year . "/" . $month . "/" . $days . "'");
                        $payMoney->execute();

                        $statement6 = $database->prepare("SELECT SUM(amount) AS amount FROM budget WHERE display = 0");
                        $statement6->execute();

                        $bugetTopics = [];

                        while ($row = $payMoney->fetch(PDO::FETCH_ASSOC)) {
                            $payAmount = $row['amount'];
                        }

                        while ($row = $statement5->fetch(PDO::FETCH_ASSOC)) {
                            $amountB = floatval($row['amount']);
                            $category = $row['category'];
                            $difference = $amountB;
                            $spent = 0;

                            $budgetTogether = ['amount2' => $amountB, 'category' => $category, 'difference' => $difference, 'amount' => $spent];

                            array_push($bugetTopics, $budgetTogether);
                        }

                        while ($row = $statement6->fetch(PDO::FETCH_ASSOC)) {
                            $amountA = floatval($row['amount']);

                            $budgetTogether = ['amount' => $amountA, 'category' => "Saving", 'difference' => 0, 'amount' => $spent];

                            array_push($bugetTopics, $budgetTogether);
                        }

                        $totalAmount = 0;
                        $leftOver = 0;

                        for ($i = 0; $i < count($bugetTopics); $i++) {
                            //SPLIT TRANS CATS TO BUDGET CATS
                            $leftOver += $bugetTopics[$i]['difference'];
                        }

                        for ($j = 0; $j < count($bugetTopics); $j++) {
                            $budgetName = $bugetTopics[$j]['category'];

                            for ($i = 0; $i < count($together); $i++) {
                                //SPLIT TRANS CATS TO BUDGET CATS
                                $name = $together[$i]['category'];
                                $spentAmount = $together[$i]['amount'];

                                if ($budgetName == "Housing" && $name == "Housing") {
                                    $bugetTopics[$j]['difference'] -= $spentAmount;
                                    $bugetTopics[$j]['amount'] += $spentAmount;
                                    $totalAmount += $spentAmount;
                                    $leftOver -= $spentAmount;
                                }

                                if ($budgetName == "Groceries" && $name == "Groceries") {
                                    $bugetTopics[$j]['amount'] += $spentAmount;
                                    $bugetTopics[$j]['difference'] -= $spentAmount;
                                    $totalAmount += $spentAmount;
                                    $leftOver -= $spentAmount;

                                }

                                if ($budgetName == "Car" && ($name == "Car" || $name == "Gas")) {
                                    $bugetTopics[$j]['amount'] += $spentAmount;
                                    $bugetTopics[$j]['difference'] -= $spentAmount;
                                    $totalAmount += $spentAmount;
                                    $leftOver -= $spentAmount;

                                }

                                if ($budgetName == "Insurance" && ($name == "Insurance")) {
                                    $bugetTopics[$j]['amount'] += $spentAmount;
                                    $bugetTopics[$j]['difference'] -= $spentAmount;
                                    $totalAmount += $spentAmount;
                                    $leftOver -= $spentAmount;

                                }

                                if ($budgetName == "SpendingMoney" && ($name == "Dessert" || $name == "Meal" || $name == "Misc" || $name == "Need")) {
                                    $bugetTopics[$j]['difference'] -= $spentAmount;
                                    $bugetTopics[$j]['amount'] += $spentAmount;
                                    $totalAmount += $spentAmount;
                                    $leftOver -= $spentAmount;

                                }


                            }
                        }

                        $intPay = intval($payAmount);
                        $intTotal = intval($totalAmount);
                        $totalSaved = $intPay - $intTotal;


                        $singleMonthObject = (object)['month' => $month, 'name' => $monthName, 'money' => $bugetTopics, 'Total' => $totalAmount, "LeftOver" => $leftOver, 'Pay' => $payAmount, "Saved" => $totalSaved];
                        array_push($monthlyTotal, $singleMonthObject);
                    } else {
                        $amount = floatval($amountTotal['amount']);

                        $singleMonthObject = (object)['month' => $month, 'name' => $monthName, 'money' => $together, 'Total' => $amount];
                        array_push($monthlyTotal, $singleMonthObject);
                    }


                }

            }

            $statement4 = $database->prepare("SELECT SUM(money) AS totalAmount FROM trans WHERE date BETWEEN '" . $year . "-01-01' AND '" . $year . "-12-31'");
            $statement4->execute();

            $monthAmount = $statement4->fetch(PDO::FETCH_ASSOC);

            $singleYear = (object)['year' => $year, 'months' => $monthlyTotal, 'YearTotal' => $monthAmount['totalAmount']];

            array_push($total, $singleYear);
        }

        return $total;
    }
    /* ========================================================== *
     * POST
     * ========================================================== */


    public static function createPay($body)
    {
        if ($body['category'] == "" || $body['category'] == null) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "Category is not defiend",
                "message" => "error"
            );

            die(json_encode((object)$response));
        }

        if ($body['amount'] == 0 || $body['amount'] == null) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "Amount is not defined",
                "message" => "error"
            );

            die(json_encode((object)$response));
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

    public static function updatePay($body)
    {

        if ($body['company'] == "" || $body['company'] == null) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "Company is not defined",
                "message" => "error"
            );

            die(json_encode((object)$response));
        }

        if ($body['amount'] == 0 || $body['amount'] == null) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "Amount is not defined",
                "message" => "error"
            );

            die(json_encode((object)$response));
        }

        if ($body['date'] == "" || $body['date'] == null) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "Items is not definded",
                "message" => "error"
            );

            die(json_encode((object)$response));
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

    public static function deletePay($body)
    {

        if ($body['id'] == null) {
            $code = 400;
            header('Content-Type: application/javascript');
            http_response_code($code);

            $response = array(
                "status" => "ID is not definded",
                "message" => "error"
            );

            die(json_encode((object)$response));
        }

        global $database;

        $statement = $database->prepare('DELETE FROM pay WHERE id = ?');
        $statement->execute(array($body['id']));

        return true;
    }
}
