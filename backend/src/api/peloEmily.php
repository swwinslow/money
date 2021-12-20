<?php
error_reporting(E_ALL);
ini_set("display_errors", true);
use backend\src\Model\PeloEmily;
require_once "../utilities/response.php";

$app->group('/api', function () use ($app){
    $app->group('/pelo-emily', function() use ($app) {

        /* ========================================================== *
         * GET
         * ========================================================== */    

        $app->get('/20minuteworkout', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $workout = PeloEmily::get20MinWorkout($body);
            $output = new Response($workout);
            $response->getBody()->write(json_encode($output));
        });

        $app->get('/getTotalMilage', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $workout = PeloEmily::getTotalMilage($body);
            $output = new Response($workout);
            $response->getBody()->write(json_encode($output));
        });

        $app->get('/getLargestLength', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $workout = PeloEmily::getLargestLength($body);
            $output = new Response($workout);
            $response->getBody()->write(json_encode($output));
        });

        $app->get('/getBestRide', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $workout = PeloEmily::getBestRide($body);
            $output = new Response($workout);
            $response->getBody()->write(json_encode($output));
        });
        $app->get('/latestTimeStamp', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $workout = PeloEmily::latestTimeStamp($body);
            $output = new Response($workout);
            $response->getBody()->write(json_encode($output));
        });
        //
        
        
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
