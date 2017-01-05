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

    public static function getTotalIRAA()
    {
        global $database;
        $statement = $database->prepare('SELECT SUM(amount) AS amount FROM investments WHERE investment="IRA"');
        $statement->execute();

        if ($statement->rowCount() <= 0) {
            return;
        }
        
        return $statement->fetch(PDO::FETCH_ASSOC);
    }
    
    public static function getIRA()
    {    
        global $database;
        $statement = $database->prepare("select SUM(money) AS money from trans where date between '2016/01/01' and '2016/12/31' AND FIELD(`category`, 'Parents');");
        $statement->execute();

        if ($statement->rowCount() <= 0) {
            return;
        }    
        $stringNumber = $statement->fetch(PDO::FETCH_ASSOC);
         $parentsMoney = floatval($stringNumber['money']);
      
        global $database;
        $statement2 = $database->prepare("select SUM(money) AS money from trans where date between '2016/01/01' and '2016/12/31';");
        $statement2->execute();

        if ($statement2->rowCount() <= 0) {
            return;
        } 
        $stringNumber = $statement2->fetch(PDO::FETCH_ASSOC);
         $totalAmount = floatval($stringNumber['money']);
        
        $newValue = $totalAmount - $parentsMoney;
            
        return $newValue;
    }
    
    public static function getTotalMinusParents2017()
    {    
        global $database;
        $statement = $database->prepare("select SUM(money) AS money from trans where date between '2017/01/01' and '2017/12/31' AND FIELD(`category`, 'Parents');");
        $statement->execute();

        if ($statement->rowCount() <= 0) {
            return;
        }    
        $stringNumber = $statement->fetch(PDO::FETCH_ASSOC);
         $parentsMoney = floatval($stringNumber['money']);
      
        $statement2 = $database->prepare("select SUM(money) AS money from trans where date between '2017/01/01' and '2017/12/31';");
        $statement2->execute();

        if ($statement2->rowCount() <= 0) {
            return;
        } 
        $stringNumber = $statement2->fetch(PDO::FETCH_ASSOC);
         $totalAmount = floatval($stringNumber['money']);
        
        $newValue = $totalAmount - $parentsMoney;
        
        return $newValue;
    }
    
    public static function getCompletePayMoney(){
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
        
        //Now that we have the oldest and the newest years... we now need to calculate the money for each year

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
