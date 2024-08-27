app.factory('NetworthFactory', function($http, $rootScope) {
    var data = {};
    var baseUrl = location.origin +'/money-backend/api/budget/?/networth';

    data.fullYearReview = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/monthCategory',
            // data: {
            //     "year": currentYear
            // }
        });    
    }

    data.yearCategoryReview = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/budgetOverview',
            data: {
                "year": currentYear
            }
        });    
    }

    data.salaryReview = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/budgetSalaryOverview',
            data: {
                "year": currentYear
            }
        });    
    }

    data.networthYearCalculation = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/networthYearCalculation',
            data: { }
        });    
    }
    data.networthYearCalculationCategory = function(){
        return $http({
            method: "POST",
            url: baseUrl + '/networthYearCalculationCategory',
            data: { }
        });    
    }
    data.networthYearPercentage = function(){
        return $http({  
            method: "POST",
            url: baseUrl + '/networthYearPercentage',
        });   
    }
    data.NetworthPerQuarter = function(){
        return $http({  
            method: "POST",
            url: baseUrl + '/NetworthPerQuarter',
        });   
    }

    return data;

});