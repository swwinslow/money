<?php

//namespace orchid_site\src\Model;
//namespace donation_backend\src\Model;
namespace donation_backend\src\Model;

error_reporting(E_ALL);

ini_set('display_errors', true);
require_once '../utilities/response.php';
require_once '../utilities/database.php';
use PDO;

class Donor implements \JsonSerializable
{

    public $Donor_ID;

    public $Name;

    public $Address;

    public $City;

    public $State;

    public $Zip;

    public $Phone;

    public $Donation_ID;


    public function __construct($data)
    {
        if (is_array($data)) {
            $this->Donor_ID = intval($data['Donor_ID']);
            $this->Name = $data['Name'];
            $this->Address = $data['Address'];
            $this->City = $data['City'];
            $this->State = $data['State'];
            $this->Zip = $data['Zip'];
            $this->Phone = $data['Phone'];
            $this->Donation_ID = intval($data['Donation_ID']);

        }
    }

    public function jsonSerialize()
    {
        return [
            'Donor_ID' => $this->Donor_ID,
            'Name' => $this->Name,
            'Address' => $this->Address,
            'City' => $this->City,
            'State' => $this->State,
            'Zip' => $this->Zip,
            'Phone' => $this->Phone,
            'Donation_ID' => $this->Donation_ID,

        ];
    }

    /* ========================================================== *
     * GET
     * ========================================================== */

    public static function getAll()
    {
        global $database;
        $statement = $database->prepare('SELECT * FROM DONOR');
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

    public static function getFiftyMoney()
    {
        global $database;
        $statement = $database->prepare('Select Do.Name, Do.Address, Do.City, Do.State, Do.Zip  From DONOR Do, DONATION_ITEM It, DONATION Dn Where Do.Donation_ID = It.Donation_ID AND Dn.Monetary_Value_Given >= 50.00');
        $statement->execute();

        if ($statement->rowCount() <= 0) {
            return;
        };

        var_dump($statement->fetch(PDO::FETCH_ASSOC));
        die();
//        $areas = [];
//
//        while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
//            $areas[] = new self(($row));
//        }
//
//        return $areas;
    }

    public static function ascCity()
    {
        global $database;
        $statement = $database->prepare('Select Name, Address, City From DONOR ORDER BY City ASC');
        $statement->execute();

        if ($statement->rowCount() <= 0) {
            return;
        };

        var_dump($statement->fetch(PDO::FETCH_ASSOC));
        die();
//        $areas = [];
//
//        while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
//            $areas[] = new self(($row));
//        }
//
//        return $areas;
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

    //THERE IS NOT A DELETE. SINCE THE PLANT WILL BE STORED THE DATA ABOUT IT SELF WILL NOT BE DELETED.
}
