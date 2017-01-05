<?php
error_reporting(E_ALL);
ini_set("display_errors", true);
use backend\src\Model\Investments;
require_once "../utilities/response.php";

$app->group('/api', function () use ($app){
    $app->group('/investments', function() use ($app) {

        /* ========================================================== *
         * GET
         * ========================================================== */

        $app->get('', function($request, $response, $args) use ($app){
            $allInvestments = Investments::getAll();
            $output = new Response($allInvestments);
            $response->getBody()->write(json_encode($output));
        });


        /* ========================================================== *
         * POST
         * ========================================================== */

        $app->post('/createInvestment', function ($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $investment = Investments::createInvestment($body);
            $output = new Response($investment);
            $response->getBody()->write(json_encode($output));

        });

        /* ========================================================== *
         * PUT
         * ========================================================== */

        $app->put('/updateInvestment', function ($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $updateInvestment = Investments::updateInvestment($body);
            $output = new Response($updateInvestment);
            $response->getBody()->write(json_encode($output));
        });

        /* ========================================================== *
         * DELETE
         * ========================================================== */
        
        $app->put('/deleteInvestment', function ($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $investment = Investments::deleteInvestment($body);
            $output = new Response($investment);
            $response->getBody()->write(json_encode($output));
        });
        
    });
});

?>
