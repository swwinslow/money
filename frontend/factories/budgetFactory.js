app.factory('BudgetFactory', function($http, $rootScope) {

    var data = {};
    var baseUrl = location.origin +'/money/backend/public/api/budget';


     
    data.getSavings = function(){
        return $http.get(baseUrl + "/saving");
    }

    data.getOverviewSeth = function(){
        return $http.get(baseUrl + "/overviewSeth");
    }

    data.yearReview = function(){
        return $http.get(baseUrl + "/yearReview");
    }

    data.yearReview2019 = function(){
        return $http.get(baseUrl + "/yearReview2019");
    }

    return data;
});
