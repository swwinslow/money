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

    data.getBestRide = function() {
        return $http.get(baseUrl + "/getBestRide");
    }

    data.latestTimeStamp = function() {
        return $http.get(baseUrl + "/latestTimeStamp");
    }
    data.TotalMinutesForever = function() {
        return $http.get(baseUrl + "/TotalMinutesForever");
    }
    data.TotalMinutesPerMonth = function() {
        return $http.get(baseUrl + "/TotalMinutesPerMonth");
    }
    data.TotalMilesPerMonth = function() {
        return $http.get(baseUrl + "/TotalMilesPerMonth");
    }




    return data;
});
