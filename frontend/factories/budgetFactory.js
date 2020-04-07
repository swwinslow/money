app.factory('BudgetFactory', function($http, $rootScope) {

    var data = {};
    var baseUrl = location.origin +'/money/backend/public/api/budget';


     
    data.getSavings = function(){
        return $http.get(baseUrl + "/saving");
    }

    data.fullYearReview2019 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/fullYearReview',
            data: {
                "year": '2019'
            }
        });    
    }

    data.fullYearReview2020 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/fullYearReview',
            data: {
                "year": '2020'
            }
        });    
    }


    data.fullYearReviewLeft2020 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/fullYearReviewLeft',
            data: {
                "year": '2020'
            }
        });    
    }


    data.fullYearReview2021 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/fullYearReview',
            data: {
                "year": '2021'
            }
        });    
    }

    data.salaryReview2018 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/salaryReview',
            data: {
                "year": '2018'
            }
        });    
    }

    data.predictValuesItems = function(){
        return $http({  
            method: "POST",
            url: baseUrl + '/predictValuesItems',
            data: {
                "year": '2020'
            }
        });    
    }

    data.resturantsData = function(){
        return $http({  
            method: "POST",
            url: baseUrl + '/resturantsData',
            data: {
                "year": '2020'
            }
        });    
    }

    //


    data.insightData = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/insightData',
            data: {
                "year": '2018'
            }
        });    
    }


    ///


   

    data.salaryReview2019 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/salaryReview',
            data: {
                "year": '2019'
            }
        });    
    }

    data.salaryReview2020 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/salaryReview',
            data: {
                "year": '2020'
            }
        });    
    }

    data.salaryReview2021 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/salaryReview',
            data: {
                "year": '2021'
            }
        });    
    }

    data.yearCategoryReview2018 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/yearCategoryReview',
            data: {
                "year": '2018'
            }
        });    
    }


    data.yearCategoryReview2019 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/yearCategoryReview',
            data: {
                "year": '2019'
            }
        });    
    }

    data.yearCategoryReview2020 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/yearCategoryReview',
            data: {
                "year": '2020'
            }
        });    
    }

    data.predictValues2020 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/predictValues',
            data: {
                "year": '2020'
            }
        });    
    }

    //

    data.yearCategoryReview2021 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/yearCategoryReview',
            data: {
                "year": '2021'
            }
        });    
    }

    data.payVSpent2019 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/payVSpent',
            data: {
                "year": '2019'
            }
        });    
    }

    data.payVSpent2020 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/payVSpent',
            data: {
                "year": '2020'
            }
        });    
    }

    data.payVSpent2021 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/payVSpent',
            data: {
                "year": '2021'
            }
        });    
    }

    data.HouseUtils = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/HouseUtils',
            data: {}
        });    
    }

    data.CarPaymentLeft = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/CarPaymentLeft',
            data: {}
        });    
    }


    data.networthYearCalculation = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/networthYearCalculation',
            data: { }
        });    
    }

    data.lillyPay = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/lillyPay',
            data: { }
        });    
    }


    data.elementsPay = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/elementsPay',
            data: { }
        });    
    }


    data.chaseCreditCardPay = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/chaseCreditCardPay',
            data: { }
        });    
    }

    data.houseExtraPrin = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/houseExtraPrin',
            data: { }
        });    
    }
    
    data.specialEvents = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/specialEvents',
            data: { }
        });    
    }

    //

    data.miscItems2019 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/miscItems',
            data: {
                "year": '2019'
            }
        });    
    }

    data.miscItems2020 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/miscItems',
            data: {
                "year": '2020'
            }
        });    
    }

    data.gerneralData = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/gerneralData',
            data: {
                "year": '2020'
            }
        });    
    }

    //

    data.miscItems2021 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/miscItems',
            data: {
                "year": '2021'
            }
        });    
    }


    data.yearReview2018 = function(){
        return $http.get(baseUrl + "/yearReview/2018");
    }
    data.yearReview2019 = function(){
        return $http.get(baseUrl + "/yearReview/2019");
    }
    data.yearReview2020 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/yearReview',
            data: {
                "year": '2020'
            }
        });
    }

    data.yearReview2021 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/yearReview',
            data: {
                "year": '2021'
            }
        });
    }

    return data;
});
