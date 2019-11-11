<?php
error_reporting(E_ALL);
ini_set("display_errors", true);
use backend\src\Model\Budget;
require_once "../utilities/response.php";

$app->group('/api', function () use ($app){
    $app->group('/budget', function() use ($app) {

        /* ========================================================== *
         * GET
         * ========================================================== */

        $app->get('/past', function($request, $response, $args) use ($app){
            $allBudget = Budget::getPast();
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        
        $app->get('/allpast', function($request, $response, $args) use ($app){
            $allBudget = Budget::getAllPast();
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        $app->get('/overview', function($request, $response, $args) use ($app){
            $allBudget = Budget::getOverview();
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        $app->POST('/fullYearReview', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::bigbudgetOnYear($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        
        $app->POST('/yearReview', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::yearReviewOnYear($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        $app->POST('/salaryReview', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::highLevelSalary($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        $app->POST('/yearCategoryReview', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::yearCategoryReview($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });
        
        /* ========================================================== *
         * POST
         * ========================================================== */

        $app->post('/createInvestment', function ($request, $response, $args) use ($app){
//            $body = $request->getParsedBody();
//            $investment = Investments::createInvestment($body);
//            $output = new Response($investment);
//            $response->getBody()->write(json_encode($output));

        });

        /* ========================================================== *
         * PUT
         * ========================================================== */

        $app->put('/updateInvestment', function ($request, $response, $args) use ($app){
//            $body = $request->getParsedBody();
//            $updateInvestment = Investments::updateInvestment($body);
//            $output = new Response($updateInvestment);
//            $response->getBody()->write(json_encode($output));
        });

        /* ========================================================== *
         * DELETE
         * ========================================================== */

        $app->put('/deleteInvestment', function ($request, $response, $args) use ($app){
//            $body = $request->getParsedBody();
//            $investment = Investments::deleteInvestment($body);
//            $output = new Response($investment);
//            $response->getBody()->write(json_encode($output));
        });

    });
});

?>
