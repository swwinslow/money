app.controller('BLDDDController', function ($http, CONFIG, $scope, $location, BudgetFactory) {

    BudgetFactory.predictValuesItems2020().then(function (response) {
        $scope.predictValuesBLDDD2020 = response.data.data.BLDDD;
    });

    BudgetFactory.predictValuesItemsCurrentYear().then(function (response) {
        $scope.predictValuesItemsCurrentYear = response.data.data.BLDDD;
    });
    BudgetFactory.resturantsData().then(function (response) {
        $scope.resturantsData = response.data.data;
    });


    //YearBLDDDTotal
    BudgetFactory.YearBLDDDTotal().then(function (response) {
        $scope.YearBLDDDTotal = response.data.data;
    });

    BudgetFactory.BLDDDPerYear2022().then(function (response) {
        $scope.BLDDDPerYear2022 = response.data.data;
    });
    BudgetFactory.BLDDDPerYear2021().then(function (response) {
        $scope.BLDDDPerYear2021 = response.data.data;
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

    BudgetFactory.YearBLDDDSeth().then(function (response) {
        $scope.YearBLDDDSeth = response.data.data;
    });

    BudgetFactory.YearBLDDDEmily().then(function (response) {
        $scope.YearBLDDDEmily = response.data.data;
    });

    BudgetFactory.YearBLDDDBoth().then(function (response) {
        $scope.YearBLDDDBoth = response.data.data;
    });

    BudgetFactory.YearBLDDDBoth().then(function (response) {
        $scope.YearBLDDDBoth = response.data.data;
    });

    BudgetFactory.YearBLDDDBoth().then(function (response) {
        $scope.YearBLDDDBoth = response.data.data;
    });

    BudgetFactory.computeBLDDDTotal().then(function (response) {
        $scope.completeBLDDD = [];
        console.log(response.data.data);
        $scope.totalData = response.data.data.Total;
        $scope.bothData = response.data.data.Both;
        $scope.emilyData = response.data.data.Emily;
        $scope.sethData = response.data.data.Seth;

        $scope.bothBLDDD = 0;
        $scope.emilyBLDDD = 0;
        $scope.sethBLDDD = 0;


        for(var i = 0; i < $scope.totalData.length; i++){
            var month = $scope.totalData[i].month;
            $scope.totalData[i].Both = '0.00'
            $scope.totalData[i].Emily = '0.00'
            $scope.totalData[i].Seth = '0.00'

            for(var j = 0; j < $scope.bothData.length; j++){
                if($scope.bothData[j].month == month){
                    $scope.totalData[i].Both = $scope.bothData[j].both_money;
                    $scope.bothBLDDD += parseFloat($scope.bothData[j].both_money);
                }
            }
            for(var j = 0; j < $scope.emilyData.length; j++){
                if($scope.emilyData[j].month == month){
                    $scope.totalData[i].Emily = $scope.emilyData[j].emily_money;
                    $scope.emilyBLDDD += parseFloat($scope.emilyData[j].emily_money);
                }
            }
            for(var j = 0; j < $scope.sethData.length; j++){
                if($scope.sethData[j].month == month){
                    $scope.totalData[i].Seth = $scope.sethData[j].seth_money;
                    $scope.sethBLDDD += parseFloat($scope.sethData[j].seth_money);
                }
            }
        }
    });
});