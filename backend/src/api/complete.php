<?php
error_reporting(E_ALL);
ini_set("display_errors", true);
use backend\src\Model\Complete;
require_once "../utilities/response.php";

$app->group('/api', function () use ($app){
    $app->group('/complete', function() use ($app) {

        /* ========================================================== *
         * GET
         * ========================================================== */
        $app->get('/InvestmentTotal', function($request, $response, $args) use ($app){
            $totalIRA = Complete::getTotalInvestments();
            $output = new Response($totalIRA);
            $response->getBody()->write(json_encode($output));
        });

        $app->get('/TransTotal', function($request, $response, $args) use ($app){
            $totalIRA = Complete::getTotalTransWithMonths();
            $output = new Response($totalIRA);
            $response->getBody()->write(json_encode($output));
        });

        $app->get('/PayTotal', function($request, $response, $args) use ($app){
            $totalIRA = Complete::getTotalPayWithMonths();
            $output = new Response($totalIRA);
            $response->getBody()->write(json_encode($output));
        });

        //hello


        /* ========================================================== *
         * POST
         * ========================================================== */

        /* ========================================================== *
         * PUT
         * ========================================================== */


        /* ========================================================== *
         * DELETE
         * ========================================================== */


    });
});

?>
