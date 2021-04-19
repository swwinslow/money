app.factory('PeloFactory', function($http, $rootScope) {

    var data = {};
    var baseUrl = location.origin +'/money/backend/public/api/pelo';


    data.minuteworkout = function() {
        return $http.get(baseUrl + "/20minuteworkout");
    }
    data.getTotalMilage = function() {
        return $http.get(baseUrl + "/getTotalMilage");
    }
    data.getLargestLength = function() {
        return $http.get(baseUrl + "/getLargestLength");
    }





    return data;
});
