app.factory('BudgetFactory', function($http, $rootScope) {

    var data = {};
    var baseUrl = location.origin +'/money/backend/public/api/budget';

    data.getAll = function() {
        return $http.get(baseUrl);
    }

    data.getPastMonths = function(){
        return $http.get(baseUrl + "/past");
    }

    data.getAllPastMonths = function(){
        return $http.get(baseUrl + "/allpast");
    }

    data.getOverview = function(){
        return $http.get(baseUrl + "/overview");
    }


    return data;
});
