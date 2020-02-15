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

    data.salaryReview2018 = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/salaryReview',
            data: {
                "year": '2018'
            }
        });    
    }


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

    return data;
});
