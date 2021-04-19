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
});