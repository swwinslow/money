<?php
error_reporting(E_ALL);
ini_set("display_errors", true);
use backend\src\Model\Trans;
require_once "../utilities/response.php";

$app->group('/api', function () use ($app){
    $app->group('/trans', function() use ($app) {

        /* ========================================================== *
         * GET
         * ========================================================== */

        $app->get('', function($request, $response, $args) use ($app){
            $allTransactions = Trans::getAll();
            $output = new Response($allTransactions);
            $response->getBody()->write(json_encode($output));
        });


        /* ========================================================== *
         * POST
         * ========================================================== */

        $app->post('/createTransaction', function ($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $transaction = Trans::createTrans($body);
            $output = new Response($transaction);
            $response->getBody()->write(json_encode($output));

        });

        /* ========================================================== *
         * PUT
         * ========================================================== */

        $app->put('/updateTransaction', function ($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $plant = Trans::updateTrans($body);
            $output = new Response($plant);
            $response->getBody()->write(json_encode($output));
        });

        /* ========================================================== *
         * DELETE
         * ========================================================== */
        
        $app->put('/deleteTransaction', function ($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $plant = Trans::deleteTrans($body);
            $output = new Response($plant);
            $response->getBody()->write(json_encode($output));
        });
        
    });
});

?>
