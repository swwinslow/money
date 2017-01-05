<?php


namespace backend\src\Model;

error_reporting(E_ALL);

ini_set('display_errors', true);
require_once '../utilities/response.php';
require_once '../utilities/database.php';
use PDO;

class Complete implements \JsonSerializable
{   
    
    public function __construct($data)
    {

    }

    public function jsonSerialize()
    {

    }

    /* ========================================================== *
     * GET
     * ========================================================== */

    public static function getTotalIRA()
    {
        global $database;
        $statement = $database->prepare('SELECT SUM(amount) AS amount FROM investments WHERE investment="IRA"');
        $statement->execute();

        if ($statement->rowCount() <= 0) {
            return;
        }
        
        return $statement->fetch(PDO::FETCH_ASSOC);
    }
       
    public static function getTotalTransWithMonths(){
                
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
        for ($i; $i < $newestYear + 1; $i++){
            array_push($years, $i);
        }
        
        $total = [];
        $monthlyTotal = [];
    
        for($year = $oldestYear; $year < $newestYear +1; $year++){

         for($month = 1; $month < 13; $month++){
                $days = 0;
                if($month == 2){
                    if(checkdate($month, 29, $year)){
                        $days = 29;
                    } else {
                        $days = 28;
                    }
                } else {
                    if($month == 1 ||$month == 3 ||$month == 5 ||$month == 7 ||$month == 8 ||$month == 10 ||$month == 12){
                        $days = 31;
                    } else {
                        $days = 30;
                    }
                }
             
                $statment3 = "";
                $statement3 = $database->prepare("select SUM(money) AS amount from trans where 1=1 AND date between '". $year ."/". $month ."/01' and '".$year."/".$month."/". $days ."'");
                $statement3->execute();
            
                $monthAmount = $statement3->fetch(PDO::FETCH_ASSOC);
            
        
                $amount = floatval($monthAmount['amount']);
                $singleMonthObject = (object) ['month' => $month, 'amount' => $amount];
                array_push($monthlyTotal, $singleMonthObject);
            }
            $singleMonthObject = (object) ['year' => $year, 'months' => $monthlyTotal];
            
            array_push($total, $singleMonthObject);
        }
        
        return $total;    
    }
    
    public static function getTotalPayWithMonths(){
        $total = [];

        
        global $database;
        $statement = $database->prepare("SELECT EXTRACT(YEAR FROM date) AS year, EXTRACT(MONTH FROM date) AS month, EXTRACT(DAY FROM date) AS day FROM pay WHERE 1=1 ORDER BY date DESC LIMIT 1");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }

        $dateArray = $statement->fetch(PDO::FETCH_ASSOC);
        $newestYear = $dateArray['year'];
        
        //Getting the OLDEST YEAR
        
        $statement2 = $database->prepare("SELECT EXTRACT(YEAR FROM date) AS year, EXTRACT(MONTH FROM date) AS month, EXTRACT(DAY FROM date) AS day FROM pay WHERE 1=1 ORDER BY date ASC LIMIT 1");
        $statement2->execute();
        if ($statement2->rowCount() <= 0) {
            return;
        }

        $dateArrayOLD = $statement2->fetch(PDO::FETCH_ASSOC);
        $oldestYear = $dateArrayOLD['year'];
                
        $years = [];
        $i = $oldestYear;
        for ($i; $i < $newestYear + 1; $i++){
            array_push($years, $i);
        }
        
        $statement4 = $database->prepare("SELECT SUM(amount) AS totalAmount FROM pay");
        $statement4->execute();
        if ($statement2->rowCount() <= 0) {
            return;
        }
        
         $totalAmountString = $statement4->fetch(PDO::FETCH_ASSOC);
        $totalAmountDouble = $totalAmountString['totalAmount'];
     
        $totalAmount = (object) ['total' => $totalAmountDouble];
        array_push($total, $totalAmount);

        
        
        $monthlyTotal = [];
    
        for($year = $oldestYear; $year < $newestYear +1; $year++){

         for($month = 1; $month < 13; $month++){
                $days = 0;
                if($month == 2){
                    if(checkdate($month, 29, $year)){
                        $days = 29;
                    } else {
                        $days = 28;
                    }
                } else {
                    if($month == 1 ||$month == 3 ||$month == 5 ||$month == 7 ||$month == 8 ||$month == 10 ||$month == 12){
                        $days = 31;
                    } else {
                        $days = 30;
                    }
                }
             
                $statment3 = "";
                $statement3 = $database->prepare("select SUM(amount) AS amount from pay where 1=1 AND date between '". $year ."/". $month ."/01' and '".$year."/".$month."/". $days ."'");
                $statement3->execute();
            
                $monthAmount = $statement3->fetch(PDO::FETCH_ASSOC);
            
        
                $amount = floatval($monthAmount['amount']);
                $singleMonthObject = (object) ['month' => $month, 'amount' => $amount];
                array_push($monthlyTotal, $singleMonthObject);
            }
            $singleMonthObject = (object) ['year' => $year, 'months' => $monthlyTotal];
            
            array_push($total, $singleMonthObject);
        }
        
        return $total;    
    }
    
    /* ========================================================== *
     * POST
     * ========================================================== */

    /* ========================================================== *
     * PUT
     * ========================================================== */
    
    /* ========================================================== *
     * DELETE
     * ========================================================== */
    
   
}
