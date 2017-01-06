app.factory('CompleteFactory', function($http, $rootScope) {

    var data = {};
    var baseUrl = location.origin +'/money/backend/public/api/complete';

    
    data.getIRATotal = function() {
        return $http.get(baseUrl + "/IRATotal");
    }
    
    data.getTotalInvestment = function(){
        return $http.get(baseUrl + "/InvestmentTotal");
    }
    
    data.getTransTotal = function() {
        return $http.get(baseUrl + "/TransTotal");
    }
    
    data.getPayTotal = function() {
        return $http.get(baseUrl + "/PayTotal");
    }

    return data;
});
