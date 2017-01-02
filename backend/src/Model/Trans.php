<?php


namespace backend\src\Model;

error_reporting(E_ALL);

ini_set('display_errors', true);
require_once '../utilities/response.php';
require_once '../utilities/database.php';
use PDO;

class Donor implements \JsonSerializable
{

    public $id;

    public function __construct($data)
    {
        if (is_array($data)) {
            $this->id = intval($data['id']);
         
        }
    }

    public function jsonSerialize()
    {
        return [
            'id' => $this->id,
        ];
    }

    /* ========================================================== *
     * GET
     * ========================================================== */

    public static function getAll()
    {
        global $database;
        $statement = $database->prepare('SELECT * FROM trans');
        $statement->execute();

        if ($statement->rowCount() <= 0) {
            return;
        };

        $areas = [];

        while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
            $areas[] = new self(($row));
        }

        return $areas;
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
