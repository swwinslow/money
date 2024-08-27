app.controller('BLDDDController', function ($http, CONFIG, $scope, $location, BudgetFactory) {

    $scope.currentYearDisplay = new Date().getFullYear();

    BudgetFactory.predictValuesItems2020().then(function (response) {
        $scope.predictValuesBLDDD2020 = response.data.data.BLDDD;
    });

    BudgetFactory.predictValuesItemsCurrentYear().then(function (response) {
        $scope.predictValuesItemsCurrentYear = response.data.data.BLDDD;
    });
    BudgetFactory.resturantsData().then(function (response) {
        $scope.resturantsData = response.data.data;
    });

    BudgetFactory.YearBLDDDTotal().then(function (response) {
        $scope.YearBLDDDTotal = response.data.data;
    });
    BudgetFactory.BLDDDPerYear2023().then(function (response) {
        $scope.BLDDDPerYear2023 = response.data.data;
    });
    BudgetFactory.BLDDDPerYear2024().then(function (response) {
        $scope.BLDDDPerYear2024 = response.data.data;
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
        
        var janMonth = 0;
        var febMonth = 0;
        var marMonth = 0;
        var aprMonth = 0;
        var mayMonth = 0;
        var junMonth = 0;
        var julMonth = 0;
        var augMonth = 0;
        var sepMonth = 0;
        var octMonth = 0;
        var novMonth = 0;
        var decMonth = 0;

        for (var i = 0; i < $scope.totalData.length; i++){
            if($scope.totalData[i].month == '1'){
                janMonth = parseFloat($scope.totalData[i].total_money);
            } else if ($scope.totalData[i].month == '2'){
                febMonth = parseFloat($scope.totalData[i].total_money);
            } else if ($scope.totalData[i].month == '3'){
                marMonth = parseFloat($scope.totalData[i].total_money);
            } else if ($scope.totalData[i].month == '4'){
                aprMonth = parseFloat($scope.totalData[i].total_money);
            } else if ($scope.totalData[i].month == '5'){
                mayMonth = parseFloat($scope.totalData[i].total_money);
            } else if ($scope.totalData[i].month == '6'){
                junMonth = parseFloat($scope.totalData[i].total_money);
            } else if ($scope.totalData[i].month == '7'){
                julMonth = parseFloat($scope.totalData[i].total_money);
            } else if ($scope.totalData[i].month == '8'){
                augMonth = parseFloat($scope.totalData[i].total_money);
            } else if ($scope.totalData[i].month == '9'){
                sepMonth = parseFloat($scope.totalData[i].total_money);
            } else if ($scope.totalData[i].month == '10'){
                octMonth = parseFloat($scope.totalData[i].total_money);
            } else if ($scope.totalData[i].month == '11'){
                novMonth = parseFloat($scope.totalData[i].total_money);
            } else if ($scope.totalData[i].month == '12'){
                decMonth = parseFloat($scope.totalData[i].total_money);
            }
        }

        var chartBLDDD = new CanvasJS.Chart("chartBLDDD", {
            animationEnabled: true,
            theme: "light2",
            title: {
               text: "Budget vs Acutal Graph"
            },
            axisX: {
               titel: "MMM"
            },
            axisY: {
               prefix: "$",
            },
            toolTip: {
               shared: true
            },
            legend: {
               cursor: "pointer",
            },
            data: [{
               type: "column",
               name: "Acutal Sales",
               showInLegend: true,
               xValueFormatString: "MMMM YYYY",
                 yValueFormatString: "$#,##0",
               indexLabel: "",
               dataPoints: [
                  { x: new Date(2022, 0), y: 425 },
                  { x: new Date(2022, 1), y: 425 },
                  { x: new Date(2022, 2), y: 425 },
                  { x: new Date(2022, 3), y: 425 },
                  { x: new Date(2022, 4), y: 425 },
                  { x: new Date(2022, 5), y: 425 },
                  { x: new Date(2022, 6), y: 425 },
                  { x: new Date(2022, 7), y: 425 },
                  { x: new Date(2022, 8), y: 425 },
                  { x: new Date(2022, 9), y: 425 },
                  { x: new Date(2022, 10), y: 425 },
                  { x: new Date(2022, 11), y: 425 },
               ]
            },
            {
               type: "line",
               name: "Spent",
               showInLegend: true,
               yValueFormatString: "#,##0.# Units",
               dataPoints: [
                  { x: new Date(2022, 0), y: janMonth },
                  { x: new Date(2022, 1), y: febMonth },
                  { x: new Date(2022, 2), y: marMonth },
                  { x: new Date(2022, 3), y: aprMonth },
                  { x: new Date(2022, 4), y: mayMonth },
                  { x: new Date(2022, 5), y: junMonth },
                  { x: new Date(2022, 6), y: julMonth },
                  { x: new Date(2022, 7), y: augMonth },
                  { x: new Date(2022, 8), y: sepMonth },
                  { x: new Date(2022, 9), y: octMonth },
                  { x: new Date(2022, 10), y: novMonth },
                  { x: new Date(2022, 11), y: decMonth },
               ]
            }]
         });
   
         chartBLDDD.render();

    });
});

