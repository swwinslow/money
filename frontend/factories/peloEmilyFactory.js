app.factory('PeloEmilyFactory', function($http, $rootScope) {

    var data = {};
    var baseUrl = location.origin +'/money/backend/public/api/pelo-emily';


    data.minuteworkout = function() {
        return $http.get(baseUrl + "/20minuteworkout");
    }
    data.getTotalMilage = function() {
        return $http.get(baseUrl + "/getTotalMilage");
    }
    data.getLargestLength = function() {
        return $http.get(baseUrl + "/getLargestLength");
    }

    data.getBestRide = function() {
        return $http.get(baseUrl + "/getBestRide");
    }
    //
    data.latestTimeStamp = function() {
        return $http.get(baseUrl + "/latestTimeStamp");
    }

    return data;
});
