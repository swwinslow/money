<?php
error_reporting(E_ALL);
ini_set("display_errors", true);
use backend\src\Model\Pay;
require_once "../utilities/response.php";

$app->group('/api', function () use ($app){
    $app->group('/pay', function() use ($app) {

        /* ========================================================== *
         * GET
         * ========================================================== */

        $app->get('', function($request, $response, $args) use ($app){
            $allTransactions = Pay::getAll();
            $output = new Response($allTransactions);
            $response->getBody()->write(json_encode($output));
        });


        /* ========================================================== *
         * POST
         * ========================================================== */

        $app->post('/createPay', function ($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $pay = Pay::createPay($body);
            $output = new Response($pay);
            $response->getBody()->write(json_encode($output));

        });

        /* ========================================================== *
         * PUT
         * ========================================================== */

        $app->put('/updatePay', function ($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $plant = Pay::updatePay($body);
            $output = new Response($plant);
            $response->getBody()->write(json_encode($output));
        });

        /* ========================================================== *
         * DELETE
         * ========================================================== */
        
        $app->put('/deletePay', function ($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $plant = Pay::deletePay($body);
            $output = new Response($plant);
            $response->getBody()->write(json_encode($output));
        });
        
    });
});

?>
