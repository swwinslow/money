app.controller('PeloEmilyController', function ($http, CONFIG, $scope, $location, PeloEmilyFactory) {

    PeloEmilyFactory.minuteworkout().then(function (response) {
        $scope.minuteworkout = response.data.data;
    });
    PeloEmilyFactory.getTotalMilage().then(function (response) {
        $scope.getTotalMilage = response.data.data;
    });
    PeloEmilyFactory.getLargestLength().then(function (response) {
        $scope.getLargestLength = response.data.data;
    });
    PeloEmilyFactory.getBestRide().then(function (response) {
        $scope.getBestRide = response.data.data;
    });
    PeloEmilyFactory.latestTimeStamp().then(function (response) {
        $scope.latestTimeStamp = response.data.data;
    });

});