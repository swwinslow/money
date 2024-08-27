<?php

namespace backend\src\Model;

error_reporting(E_ALL);

ini_set('display_errors', true);
require_once '../utilities/response.php';
require_once '../utilities/database.php';
use PDO;

class Years implements \JsonSerializable
{

    public $id;
    
    public $business;
    
    public $mondey;
    
    public $itmes;
    
    public $date;
    
    public $category;

    public function __construct($data)
    {
        if (is_array($data)) {
            $this->id = intval($data['id']);
            $this->business = $data['business'];
            $this->money = $data['money'];
            $this->items = $data['items'];
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
            'date' => $this->date,
            'category' => $this->category,
        ];
    }

    /* ========================================================== *
     * GET
     * ========================================================== */

    public static function getPast()
    {
        global $database;
        $areas = [];

        $statement = $database->prepare('SELECT * FROM trans ORDER BY id DESC LIMIT 20');
        $statement->execute();

        if ($statement->rowCount() <= 0) {
            return;
        };
            
        while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
            $areas[] = new Trans(($row));
        }
        
        return $areas;
    }

    
}
