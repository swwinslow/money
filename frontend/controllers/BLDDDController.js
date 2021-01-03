app.controller('BLDDDController', function ($http, CONFIG, $scope, $location, BudgetFactory) {

    console.log('you here on BLDDD');

    BudgetFactory.predictValuesItems2020().then(function (response) {
        $scope.predictValuesBLDDD2020 = response.data.data.BLDDD;
    });
    BudgetFactory.predictValuesItems2021().then(function (response) {
        $scope.predictValuesBLDDD2021 = response.data.data.BLDDD;
    });
    BudgetFactory.resturantsData().then(function (response) {
        $scope.resturantsData = response.data.data;
    });
    BudgetFactory.BLDDDPerYear2020().then(function (response) {
        $scope.BLDDDPerYear2020 = response.data.data;
    });
    BudgetFactory.BLDDDPerYear2019().then(function (response) {
        $scope.BLDDDPerYear2019 = response.data.data;
     });
     BudgetFactory.BLDDDPerYear2018().then(function (response) {
        $scope.BLDDDPerYear2018 = response.data.data;
     });

     BudgetFactory.insightData().then(function (response) {
        $scope.BLDDD = response.data.data.BLDDD;
    });
});