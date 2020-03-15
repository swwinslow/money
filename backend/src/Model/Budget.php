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
    public static function fullYearReview($body){
        if ($body['year'] == "" || $body['year'] == null  ) {
            $year = '2020';
        } else {
            $year = $body['year'];
        }  
        global $database;
        $statement = $database->prepare("SELECT budget_months.month, budget_months.year, budget_months.category, ROUND(budget_months.c_money, 2) as c_money, ROUND(trans_sql.MONEY,2) AS MONEY, ROUND((budget_months.c_money - trans_sql.MONEY),2) as money_difference, CASE WHEN (budget_months.c_money - trans_sql.MONEY) < 0 THEN 'TRUE' ELSE 'FALSE' END AS NEGATIVE from (SELECT SUM(money) AS 'MONEY', YEAR(date) AS 'YEAR', category AS 'CAT', MONTH(date) AS 'MONTH' from trans where YEAR(date) = $year group by category, MONTH(date)) as trans_sql inner join budget_months on trans_sql.MONTH = budget_months.month_id and trans_sql.CAT = budget_months.category where budget_months.year = $year order by year,month_id, category");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }

        $data = $statement->fetchAll(\PDO::FETCH_ASSOC);
        return $data;
    }

    public static function fullYearReviewLeft($body){
        if ($body['year'] == "" || $body['year'] == null  ) {
            $year = '2020';
        } else {
            $year = $body['year'];
        }  

        global $database;
        $statement = $database->prepare("SELECT CATEGORY, SUM(money_difference) AS MONEY_DIFFERENCE FROM (SELECT budget_months.month AS MONTH, budget_months.month_id AS MONTH_ID, budget_months.year AS YEAR, budget_months.category AS CATEGORY, ROUND(budget_months.c_money, 2) as c_money, ROUND(trans_sql.MONEY,2) AS MONEY, ROUND((budget_months.c_money - trans_sql.MONEY),2) as money_difference, CASE WHEN (budget_months.c_money - trans_sql.MONEY) < 0 THEN 'TRUE' ELSE 'FALSE' END AS NEGATIVE from (SELECT SUM(money) AS 'MONEY', YEAR(date) AS 'YEAR', category AS 'CAT', MONTH(date) AS 'MONTH' from trans where YEAR(date) = '2020' group by category, MONTH(date)) as trans_sql inner join budget_months on trans_sql.MONTH = budget_months.month_id and trans_sql.CAT = budget_months.category where budget_months.year = '2020' order by year,month_id, category) as select_month WHERE MONTH_ID < MONTH(NOW()) group by CATEGORY");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }

        $data = $statement->fetchAll(\PDO::FETCH_ASSOC);
        return $data;
    }

    public static function networthYearCalculation(){
        global $database;
        $statement = $database->prepare("select end_of_year, ROUND(SUM(`category_value` - `category_ liabilities`),2) AS money_value from net_worth group by end_of_year order by end_of_year DESC");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }

        $data = $statement->fetchAll(\PDO::FETCH_ASSOC);
        return $data;
    }

    //

    public static function elementsPay(){
        global $database;
        $statement = $database->prepare("SELECT YEAR(DATE) AS year, ROUND(SUM(AMOUNT),2) as money FROM `pay` WHERE `company` = 'Elements' GROUP BY YEAR(DATE) ORDER BY YEAR(DATE) DESC;");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }

        $data = $statement->fetchAll(\PDO::FETCH_ASSOC);
        return $data;
    }

    public static function lillyPay(){
        global $database;
        $statement = $database->prepare("SELECT YEAR(DATE) AS year, ROUND(SUM(AMOUNT),2) as money FROM `pay` WHERE `company` = 'Lilly' GROUP BY YEAR(DATE) ORDER BY YEAR(DATE) DESC;");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }

        $data = $statement->fetchAll(\PDO::FETCH_ASSOC);
        return $data;
    }

    public static function chaseCreditCardPay(){
        global $database;
        $statement = $database->prepare("SELECT YEAR(DATE) AS year, ROUND(SUM(AMOUNT),2) as money FROM `pay` WHERE `company` = 'Chase Credit Card' GROUP BY YEAR(DATE) ORDER BY YEAR(DATE) DESC;");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }

        $data = $statement->fetchAll(\PDO::FETCH_ASSOC);
        return $data;
    }


    public static function houseExtraPrin(){
        global $database;
        $statement = $database->prepare("SELECT YEAR(DATE) AS year, ROUND(SUM(money),2) as money FROM `trans` WHERE `items` LIKE '%Extra Principal%' GROUP BY YEAR(DATE) order by YEAR(DATE) DESC");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }

        $data = $statement->fetchAll(\PDO::FETCH_ASSOC);
        return $data;
    }

    public static function specialEvents(){
        global $database;
        $statement = $database->prepare("SELECT DATEDIFF(`event_date`, NOW()) as difference_date, event_name from special_events order by difference_date");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }

        $data = $statement->fetchAll(\PDO::FETCH_ASSOC);
        return $data;
    }




    //Chase Credit Card

    public static function miscItems($body){
        if ($body['year'] == "" || $body['year'] == null  ) {
            $year = '2020';
        } else {
            $year = $body['year'];
        }  

        global $database;
        $statement = $database->prepare("SELECT SUM(money) FROM `trans` WHERE `items` LIKE 'BLDDD - Lilly Lunch' and YEAR(date) = '2019'");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }

        $data = $statement->fetchAll(\PDO::FETCH_ASSOC);
        return $data;
    }

    public static function yearCategoryReview($body)
    {
        if ($body['year'] == "" || $body['year'] == null  ) {
            $year = '2020';
        } else {
            $year = $body['year'];
        }        
        global $database;
        $statement = $database->prepare("SELECT ROUND((ROUND(t1.money, 2) / pay_money * 100),2) AS budget_percentage,ROUND((ROUND(t2.money, 2) / pay_money * 100),2) AS  spent_percentage, ROUND(t1.money, 2) AS budget_money, ROUND(t2.money,2) AS spent_money, ROUND((t1.money - t2.money),2) as 'difference', t2.category, CASE WHEN (t1.money - t2.money) < 0 THEN 'TRUE' ELSE 'FALSE' END AS NEGATIVE FROM (SELECT category, SUM(c_money) AS money from budget_months where budget_months.year = $year group by category) as t1, (SELECT SUM(money) AS 'money', YEAR(date) AS 'YEAR', category AS 'category', MONTH(date) AS 'MONTH' from trans where YEAR(date) = $year group by category ) as t2, (SELECT SUM(amount) AS pay_money, YEAR(DATE) as year_date from pay where YEAR(date) = $year and type_payment != 'Initial Money') as t3 WHERE t1.category = t2.category and t2.YEAR = t3.year_date");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }
        $data = $statement->fetchAll(\PDO::FETCH_ASSOC);
        return $data;
    }

    public static function payVSpent($body)
    {
        if ($body['year'] == "" || $body['year'] == null  ) {
            $year = '2020';
        } else {
            $year = $body['year'];
        }        
        global $database;
        $statement = $database->prepare("SELECT ROUND(t1.spent_amount, 2) as spent_amount, ROUND(t2.pay_amount,2) as pay_amount, (ROUND(t2.pay_amount,2) - ROUND(t3.budget_amount, 2)) as uncounted_money, CASE WHEN (t2.pay_amount - t1.spent_amount) < 0 THEN 'TRUE' ELSE 'FALSE' END AS NEGATIVE,  ROUND((t2.pay_amount - t1.spent_amount),2) as 'money_difference', t1.year, t1.month, t3.budget_amount as budget_amount FROM (SELECT SUM(MONEY) as spent_amount, MONTH(DATE) as month, YEAR(DATE) as year from trans where YEAR(DATE) = $year group by MONTH(DATE), YEAR(DATE)) as t1, (SELECT SUM(amount) AS pay_amount, YEAR(DATE), MONTH(DATE) as month from pay where YEAR(date) = $year and type_payment != 'Initial Money' group by MONTH(DATE) ) as t2, (SELECT SUM(c_money) AS budget_amount, year,month_id as month from budget_months where year = $year group by month ) t3 WHERE t1.month = t2.month and t1.month = t3.month order by t1.month ");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }

        $data = $statement->fetchAll(\PDO::FETCH_ASSOC);
        return $data;
    }

    public static function CarPaymentLeft($body)
    {
          
        global $database;
        $statement = $database->prepare("select t1.money, t2.COUNT FROM (SELECT ROUND(SUM(money),2) as money FROM trans where items LIKE 'Car Payment%' and date > DATE(NOW())) as t1, (select COUNT(*) as COUNT from trans where category = 'Car' and items LIKE 'Car Payment%' and date > DATE(NOW())) as t2; ");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }

        $data = $statement->fetchAll(\PDO::FETCH_ASSOC);
        return $data;
    }


    public static function gerneralData($body){
        global $database;

        //grocercies
        $statement = $database->prepare("SELECT ROUND(SUM(money),2) as money, 'Grocercies' as Type FROM `trans` WHERE `category` = 'GROCERIES';");
        $statement->execute();
        $grocercies = $statement->fetchAll(\PDO::FETCH_ASSOC);

        //Car
        $statement = $database->prepare("SELECT ROUND(SUM(money),2) as money, 'Car' as Type FROM `trans` WHERE `category` = 'CAR';");
        $statement->execute();
        $car = $statement->fetchAll(\PDO::FETCH_ASSOC);
        
        //Apartment
        $statement = $database->prepare("SELECT ROUND(SUM(money),2) as money, 'Apartment' as Type FROM `trans` WHERE `category` = 'HOUSING - APT'");
        $statement->execute();
        $apartment = $statement->fetchAll(\PDO::FETCH_ASSOC);

        // //General Housing
        $statement = $database->prepare("SELECT ROUND(SUM(money),2) as money, 'General Housing Cost - (utils, items)' as Type FROM `trans` WHERE `category` = 'HOUSING' and business != 'Mortgage';");
        $statement->execute();
        $generalHousing = $statement->fetchAll(\PDO::FETCH_ASSOC);

        //Total Mortage Costs
        $statement = $database->prepare("SELECT ROUND(SUM(money),2)  as money, 'Total Mortage Payments' as Type FROM `trans` WHERE `category` = 'HOUSING' and  business = 'Mortgage' and `items` NOT LIKE '%Extra Principal%';");
        $statement->execute();
        $totalmMortage = $statement->fetchAll(\PDO::FETCH_ASSOC);

        // //Extra Princibal
        $statement = $database->prepare("SELECT ROUND(SUM(money),2) as money, 'Extra Princibal' as Type FROM `trans` WHERE `category` = 'HOUSING' and business = 'Mortgage' and `items` LIKE '%Extra Principal%'");
        $statement->execute();
        $extraPrin = $statement->fetchAll(\PDO::FETCH_ASSOC);

         $data = array('Grocercies' => $grocercies, 'Car' => $car,'Apartment' => $apartment,'GeneralHousing' => $generalHousing,'TotalMortage' => $totalmMortage,'ExtraPrincibal' => $extraPrin);

       return $data;
    }

    public static function HouseUtils($body)
    {
          
        global $database;
        $statement = $database->prepare("SELECT *, MONTH(NOW()) as month_current FROM (select * from (SELECT YEAR(date) as year, MONTH(date) as month, ROUND(SUM(money),2) as money FROM trans where business = 'Citizen Energy' OR business = 'IPL' and category = 'HOUSING' group by YEAR(Date), MONTH(date) ORDER BY YEAR(date)) as query1 where query1.year <= YEAR(NOW())) as query2 where (query2.year = YEAR(NOW()) - 1 OR query2.year = YEAR(NOW()));        ");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }

        $data = $statement->fetchAll(\PDO::FETCH_ASSOC);
        return $data;
    }

    public static function insightData($body){
        global $database;
        //BLDDD
        $statement = $database->prepare("SELECT ROUND(SUM(money),2) as money, YEAR(DATE) as year FROM `trans` WHERE `items` LIKE '%BLDDD%' GROUP BY YEAR(DATE) ORDER BY `trans`.`date` ASC");
        $statement->execute();

        $blddd = $statement->fetchAll(\PDO::FETCH_ASSOC);

        //BLDDD - Lilly Lunch
        $statement = $database->prepare("SELECT ROUND(SUM(money),2) as money, YEAR(DATE) as year FROM `trans` WHERE `items` LIKE '%BLDDD - Lilly Lunch%' GROUP BY YEAR(DATE) ORDER BY `trans`.`date` ASC");
        $statement->execute();
     
        $bldddlilly = $statement->fetchAll(\PDO::FETCH_ASSOC);

        //Menards money
        $statement = $database->prepare("SELECT ROUND(SUM(money),2) as money, YEAR(DATE) as year FROM `trans` WHERE `business` LIKE '%Menards%' GROUP BY YEAR(DATE) ORDER BY `trans`.`date` ASC");
        $statement->execute();
        $menards = $statement->fetchAll(\PDO::FETCH_ASSOC);  
        
         //GROCERCIES
         $statement = $database->prepare("SELECT ROUND(SUM(money),2) as money, YEAR(DATE) as year FROM `trans` WHERE `items` LIKE '%Groceries%' GROUP BY YEAR(DATE) ORDER BY `trans`.`date` ASC");
         $statement->execute();
         $grocercies = $statement->fetchAll(\PDO::FETCH_ASSOC);  
         
         //Extra Princibal
         $statement = $database->prepare("SELECT ROUND(SUM(money),2) as money, YEAR(DATE) as year FROM `trans` WHERE `items` LIKE '%Gas%' and category = 'CAR' GROUP BY YEAR(DATE) ORDER BY `trans`.`date` ASC");
         $statement->execute();
         $gas = $statement->fetchAll(\PDO::FETCH_ASSOC); 

         //State farm car
         $statement = $database->prepare("SELECT ROUND(SUM(money),2) as money, YEAR(date) as year FROM `trans` WHERE `business` LIKE '%state farm%' AND `category` = 'CAR' group by year         ");
         $statement->execute();
         $statefarmcar = $statement->fetchAll(\PDO::FETCH_ASSOC); 

        //Pay by year
         $statement = $database->prepare("SELECT ROUND(SUM(amount),2) as money, YEAR(DATE) as year FROM `pay` WHERE type_payment != 'Initial Money' GROUP BY YEAR(DATE) ORDER BY `pay`.`date` ASC");
         $statement->execute();
         $payYear = $statement->fetchAll(\PDO::FETCH_ASSOC);   
        
         $data = array('BLDDD' => $blddd,  'BLDDDLL' => $bldddlilly, 'Menards' => $menards, 'Grocercies' => $grocercies, 'CarGas' => $gas, 'SFCar' => $statefarmcar, 'PayYear' => $payYear);

       return $data;
    }

    public static function highLevelSalary($body)
    {
        if ($body['year'] == "" || $body['year'] == null  ) {
            $year = '2020';
        } else {
            $year = $body['year'];
        }        
        global $database;
        $statement = $database->prepare("SELECT ROUND((t1.money - t2.money),2) AS money, ROUND(t1.money,2) AS salary, ROUND(t2.money,2) AS trans, (ROUND(t3.budget_money,2) - ROUND(t1.money,2)) as left_over, ROUND(t3.budget_money,2) as budget, ROUND((t1.money -t3.budget_money ),2) as 'uncounted_money' FROM (SELECT SUM(amount) AS money FROM pay where year(date) = $year) as t1, (select sum(money) AS money from trans where YEAR(date) = $year) as t2, (SELECT SUM(c_money) as budget_money FROM `budget_months` WHERE `year` = $year) as t3");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }

        $data = $statement->fetchAll(\PDO::FETCH_ASSOC);
        return $data;
    }

    public static function yearReviewOnYear($body)
    {
        $yearInParamter = $body['year'];
        global $database;
        $statement = $database->prepare("SELECT ROUND((t1.money -  t2.money),2) AS money, t1.money AS salary, t2.money AS trans  FROM (SELECT SUM(amount) AS money FROM pay where year(date) = $yearInParamter) as t1, (select sum(money) AS money from trans where YEAR(date) = $yearInParamter) as t2 ");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }

        $data = $statement->fetchAll(\PDO::FETCH_ASSOC);
        return $data;
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
