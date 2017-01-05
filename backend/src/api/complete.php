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

        $app->get('', function($request, $response, $args) use ($app){
            $totalIRA = Complete::getTotalIRA();
            $output = new Response($totalIRA);
            $response->getBody()->write(json_encode($output));
        });


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