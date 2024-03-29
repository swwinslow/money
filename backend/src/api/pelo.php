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

        $app->get('/getBestRide', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $workout = Pelo::getBestRide($body);
            $output = new Response($workout);
            $response->getBody()->write(json_encode($output));
        });
        $app->get('/latestTimeStamp', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $workout = Pelo::latestTimeStamp($body);
            $output = new Response($workout);
            $response->getBody()->write(json_encode($output));
        });
        $app->get('/TotalMinutesForever', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $workout = Pelo::TotalMinutesForever($body);
            $output = new Response($workout);
            $response->getBody()->write(json_encode($output));
        });
        $app->get('/TotalMinutesPerMonth', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $workout = Pelo::TotalMinutesPerMonth($body);
            $output = new Response($workout);
            $response->getBody()->write(json_encode($output));
        });
        $app->get('/TotalMilesPerMonth', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $workout = Pelo::TotalMilesPerMonth($body);
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
