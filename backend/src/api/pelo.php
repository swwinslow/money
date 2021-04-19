<?php
error_reporting(E_ALL);
ini_set("display_errors", true);
use backend\src\Model\Pelo;
require_once "../utilities/response.php";

$app->group('/api', function () use ($app){
    $app->group('/pelo', function() use ($app) {

        /* ========================================================== *
         * GET
         * ========================================================== */    

        $app->get('/20minuteworkout', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $workout = Pelo::get20MinWorkout($body);
            $output = new Response($workout);
            $response->getBody()->write(json_encode($output));
        });

        $app->get('/getTotalMilage', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $workout = Pelo::getTotalMilage($body);
            $output = new Response($workout);
            $response->getBody()->write(json_encode($output));
        });

        $app->get('/getLargestLength', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $workout = Pelo::getLargestLength($body);
            $output = new Response($workout);
            $response->getBody()->write(json_encode($output));
        });
        
        
        //
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
