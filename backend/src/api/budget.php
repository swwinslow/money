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
            $allBudget = Budget::fullYearReview($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        $app->POST('/fullYearReviewLeft', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::fullYearReviewLeft($body);
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

        $app->POST('/CarPaymentLeft', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::CarPaymentLeft($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        //

        $app->POST('/yearCategoryReview', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::yearCategoryReview($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        $app->POST('/miscItems', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::miscItems($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        $app->POST('/gerneralData', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::gerneralData($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        $app->POST('/HouseUtils', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::HouseUtils($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        $app->POST('/elementsPay', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::elementsPay($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        $app->POST('/lillyPay', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::lillyPay($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        $app->POST('/chaseCreditCardPay', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::chaseCreditCardPay($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });


        $app->POST('/specialEvents', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::specialEvents($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        $app->POST('/houseExtraPrin', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::houseExtraPrin($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });
        

        $app->POST('/payVSpent', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::payVSpent($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        $app->POST('/networthYearCalculation', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::networthYearCalculation($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });
        //insightData

        $app->POST('/insightData', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::insightData($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });
        
        //
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
