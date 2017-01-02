<?php

error_reporting(E_ALL);
ini_set("display_errors", true);
use donation_backend\src\Model\Donor;
require_once "../utilities/response.php";

$app->group('/api', function () use ($app){
    $app->group('/donor', function() use ($app) {

        /* ========================================================== *
         * GET
         * ========================================================== */

        $app->get('', function($request, $response, $args) use ($app){
            $allDonors = Donor::getAll();
            $output = new Response($allDonors);
            $response->getBody()->write(json_encode($output));
        });

        $app->get('/getMoney', function($request, $response, $args) use ($app){
            $allDonors = Donor::getFiftyMoney();
            $output = new Response($allDonors);
            $response->getBody()->write(json_encode($output));
        });


        $app->get('/acsCity', function($request, $response, $args) use ($app){
            $allDonors = Donor::ascCity();
            $output = new Response($allDonors);
            $response->getBody()->write(json_encode($output));
        });


        /* ========================================================== *
         * POST
         * ========================================================== */

        $app->post('/create', function ($request, $response, $args) use ($app){

        });

        /* ========================================================== *
         * PUT
         * ========================================================== */

        $app->put('/update', function ($request, $response, $args) use ($app){

        });

        /* ========================================================== *
         * DELETE
         * ========================================================== */
    });
});

?>
