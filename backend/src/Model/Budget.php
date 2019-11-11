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
    
    public static function bigbudgetOnYear($body){
        if ($body['year'] == "" || $body['year'] == null  ) {
            $year = '2019';
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

    public static function yearCategoryReview($body)
    {
        if ($body['year'] == "" || $body['year'] == null  ) {
            $year = '2019';
        } else {
            $year = $body['year'];
        }        
        global $database;
        $statement = $database->prepare("SELECT (t1.money - t2.money) as 'difference', t2.category, CASE WHEN (t1.money - t2.money) < 0 THEN 'TRUE' ELSE 'FALSE' END AS NEGATIVE FROM (SELECT category, SUM(c_money) AS money from budget_months where budget_months.year = $year group by category) as t1, (SELECT SUM(money) AS 'money', YEAR(date) AS 'YEAR', category AS 'category', MONTH(date) AS 'MONTH' from trans where YEAR(date) = $year group by category ) as t2 WHERE t1.category = t2.category");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }

        $data = $statement->fetchAll(\PDO::FETCH_ASSOC);
        return $data;
    }

    public static function highLevelSalary($body)
    {
        if ($body['year'] == "" || $body['year'] == null  ) {
            $year = '2019';
        } else {
            $year = $body['year'];
        }        
        global $database;
        $statement = $database->prepare("SELECT ROUND((t1.money -  t2.money),2) AS money, t1.money AS salary, t2.money AS trans  FROM (SELECT SUM(amount) AS money FROM pay where year(date) = $year) as t1, (select sum(money) AS money from trans where YEAR(date) = $year) as t2 ");
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
