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

        $app->POST('/predictValues', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::predictValues($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        $app->POST('/predictValuesItems', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::predictValuesItems($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });
        $app->POST('/predictValuesItemsCurrentYear', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::predictValuesItemsCurrentYear($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        $app->POST('/yearReview', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::yearReviewOnYear($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        $app->POST('/resturantsData', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::resturantsData($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        //
        $app->POST('/KrogerSpent', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::KrogerSpent($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        $app->POST('/ATTSpent', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::ATTSpent($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        $app->POST('/medicalSpent', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::medicalSpent($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        $app->POST('/totalCreditCards', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::totalCreditCards($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });
        

        $app->POST('/nextPayDay', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::nextPayDay($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        //
        
        $app->POST('/CitizenEnergySpent', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::CitizenEnergySpent($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });


        $app->POST('/IPLSpent', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::IPLSpent($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });


        //
        $app->POST('/amazonSpent', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::amazonSpent($body);
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

        //
        $app->POST('/EmilyPay', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::EmilyPay($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        $app->POST('/SethPay', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::SethPay($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        //
        $app->POST('/UtilsOnYear', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::UtilsOnYear($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        $app->POST('/HouseUtils', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::HouseUtils($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });
        //
        $app->POST('/networthYearCalculationCategory', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::networthYearCalculationCategory($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        //NetworthPerQuarter
        $app->POST('/NetworthPerQuarter', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::NetworthPerQuarter($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        //networthYearPercentage
        $app->POST('/networthYearPercentage', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::networthYearPercentage($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });
        
        //YearBLDDDTotal
        $app->POST('/YearBLDDDTotal', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::YearBLDDDTotal($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        //computeBLDDDTotal
        $app->POST('/computeBLDDDTotal', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::computeBLDDDTotal($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });
    
        $app->POST('/BMVYear', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::BMVYear($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        
        $app->POST('/BLDDDMonths', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::BLDDDMonths($body);
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
        //
        $app->POST('/paymentTypesTrans', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::paymentTypesTrans($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        $app->POST('/specialEvents', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::specialEvents($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        $app->POST('/lifeEvents', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::lifeEvents($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        //
        $app->POST('/HouseUtilsByYear', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::HouseUtilsByYear($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        //
        $app->POST('/BLDDDPerYear', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::BLDDDPerYear($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        $app->POST('/YearBLDDDSeth', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::YearBLDDDSeth($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        $app->POST('/YearBLDDDBoth', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::YearBLDDDBoth($body);
            $output = new Response($allBudget);
            $response->getBody()->write(json_encode($output));
        });

        $app->POST('/YearBLDDDEmily', function($request, $response, $args) use ($app){
            $body = $request->getParsedBody();
            $allBudget = Budget::YearBLDDDEmily($body);
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
