app.controller('PeloController', function ($http, CONFIG, $scope, $location, PeloFactory) {

    PeloFactory.minuteworkout().then(function (response) {
        $scope.minuteworkout = response.data.data;
    });
    PeloFactory.getTotalMilage().then(function (response) {
        $scope.getTotalMilage = response.data.data;
    });
    PeloFactory.getLargestLength().then(function (response) {
        $scope.getLargestLength = response.data.data;
    });
    PeloFactory.getBestRide().then(function (response) {
        $scope.getBestRide = response.data.data;
    });
    PeloFactory.latestTimeStamp().then(function (response) {
        $scope.latestTimeStamp = response.data.data;
    });
    PeloFactory.TotalMinutesForever().then(function (response) {
        $scope.TotalMinutesForever = response.data.data;
    });
    PeloFactory.TotalMinutesPerMonth().then(function (response) {
        $scope.TotalMinutesPerMonth = response.data.data;
        console.log($scope.TotalMinutesPerMonth);

    });
    PeloFactory.TotalMilesPerMonth().then(function (response) {
        $scope.TotalMilesPerMonth = response.data.data;
    });


});