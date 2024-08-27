<?php
error_reporting(E_ALL);
ini_set("display_errors", true);
use backend\src\Model\Years;
require_once "../utilities/response.php";

$app->group('/api', function () use ($app){
    $app->group('/years', function() use ($app) {

        /* =============================================================== *
         * GET                                                             *
         * =============================================================== */
        $app->get('/past', function($request, $response, $args) use ($app){
            $allBudget = Years::getPast();
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });
    });
});

?>
