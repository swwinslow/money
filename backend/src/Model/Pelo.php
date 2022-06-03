<?php

namespace backend\src\Model;

error_reporting(E_ALL);

ini_set('display_errors', true);
require_once '../utilities/response.php';
require_once '../utilities/database.php';

use PDO;

class Pelo implements \JsonSerializable
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

    public static function get20MinWorkout($body)
    {
        if ($body['minute'] == "" || $body['minute'] == null  ) {
            return null;
        } else {
            $minute = $body['minute'];
        } 

        global $database;
        $statement = $database->prepare("select * from aa_pelo where Fitness_Discipline = 'Cycling' and Length_minutes = '20'  ");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }

        $data = $statement->fetchAll(\PDO::FETCH_ASSOC);
        return $data;
    }

    public static function getTotalMilage($body)
    {
        global $database;
        $statement = $database->prepare("Select ROUND(SUM(Distance_mi),2) as Distance from aa_pelo");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }

        $data = $statement->fetchAll(\PDO::FETCH_ASSOC);
        return $data;
    }

    public static function getLargestLength($body)
    {
        global $database;
        $statement = $database->prepare("select * FROM (SELECT COUNT(*) as total_count, Length_minutes from aa_pelo where Fitness_Discipline = 'Cycling' group by Length_minutes order by total_count desc) as t1 where total_count >= 4");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }

        $data = $statement->fetchAll(\PDO::FETCH_ASSOC);
        return $data;
    }
    public static function getBestRide($body)
    {
        global $database;
        $statement = $database->prepare("(select *, ROUND((Length_minutes /  Distance_mi),3) as mile_average from aa_pelo where Fitness_Discipline = 'Cycling' and Length_minutes = '5'order by Total_Output desc LIMIT 1)   UNION  (select *, ROUND((Length_minutes /  Distance_mi),3) as mile_average from aa_pelo where Fitness_Discipline = 'Cycling' and Length_minutes = '10'order by Total_Output desc LIMIT 1 )  UNION (select *, ROUND((Length_minutes /  Distance_mi),3) as mile_average from aa_pelo where Fitness_Discipline = 'Cycling' and Length_minutes = '15'order by Total_Output desc LIMIT 1 )  UNION  (select *, ROUND((Length_minutes /  Distance_mi),3) as mile_average from aa_pelo where Fitness_Discipline = 'Cycling' and Length_minutes = '20'order by Total_Output desc LIMIT 1 )  UNION (select *, ROUND((Length_minutes /  Distance_mi),3) as mile_average from aa_pelo where Fitness_Discipline = 'Cycling' and Length_minutes = '30'order by Total_Output desc LIMIT 1 )  UNION (select *, ROUND((Length_minutes /  Distance_mi),3) as mile_average from aa_pelo where Fitness_Discipline = 'Cycling' and Length_minutes = '45'order by Total_Output desc LIMIT 1 )  UNION (select *, ROUND((Length_minutes /  Distance_mi),3) as mile_average from aa_pelo where Fitness_Discipline = 'Cycling' and Length_minutes = '60'order by Total_Output desc LIMIT 1 )  UNION (select *, ROUND((Length_minutes /  Distance_mi),3) as mile_average from aa_pelo where Fitness_Discipline = 'Cycling' and Length_minutes = '60'order by Total_Output desc LIMIT 1 )  UNION (select *, ROUND((Length_minutes /  Distance_mi),3) as mile_average from aa_pelo where Fitness_Discipline = 'Cycling' and Length_minutes = '75'order by Total_Output desc LIMIT 1 )  UNION (select *, ROUND((Length_minutes /  Distance_mi),3) as mile_average from aa_pelo where Fitness_Discipline = 'Cycling' and Length_minutes = '90'order by Total_Output desc LIMIT 1 )");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }

        $data = $statement->fetchAll(\PDO::FETCH_ASSOC);
        return $data;
    }
    public static function latestTimeStamp($body)
    {
        global $database;
        $statement = $database->prepare("select Workout_Timestamp from aa_pelo order by Workout_Timestamp desc LIMIT 1");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }

        $data = $statement->fetchAll(\PDO::FETCH_ASSOC);
        return $data;
    }
    public static function TotalMinutesForever($body)
    {
        global $database;
        $statement = $database->prepare("SELECT SUM(Length_minutes) as Total_Minutes from aa_pelo where Fitness_Discipline = 'Cycling'");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }

        $data = $statement->fetchAll(\PDO::FETCH_ASSOC);
        return $data;
    }
    public static function TotalMinutesPerMonth($body)
    {
        global $database;
        $statement = $database->prepare("SELECT SUM(Length_minutes) as Total_Minutes, SUBSTRING(Workout_Timestamp, 1, 7) as year_and_month, SUBSTRING(Workout_Timestamp, 1, 4) as year, SUBSTRING(Workout_Timestamp, 6,2) as month from aa_pelo GROUP BY SUBSTRING(Workout_Timestamp, 1, 7)");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }

        $data = $statement->fetchAll(\PDO::FETCH_ASSOC);
        return $data;
    }
    public static function TotalMilesPerMonth($body)
    {
        global $database;
        $statement = $database->prepare("SELECT ROUND(SUM(Distance_mi),2) as Total_Miles, SUBSTRING(Workout_Timestamp, 1, 7) as year_and_month, SUBSTRING(Workout_Timestamp, 1, 4) as year, SUBSTRING(Workout_Timestamp, 6,2) as month from aa_pelo where Fitness_Discipline = 'Cycling' GROUP BY SUBSTRING(Workout_Timestamp, 1, 7)");
        $statement->execute();
        if ($statement->rowCount() <= 0) {
            return;
        }

        $data = $statement->fetchAll(\PDO::FETCH_ASSOC);
        return $data;
    }








    

}
