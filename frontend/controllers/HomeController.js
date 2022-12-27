app.controller('HomeController', function ($http, CONFIG, $scope, $location, BudgetFactory) {
    console.log('hello--home controller');
    BudgetFactory.HouseUtils().then(function (response) {
        // console.log('hello222');
      $scope.HouseUtils = response.data.data;
    //   console.log(response.data.data);
   });
   BudgetFactory.insightData().then(function (response) {
    $scope.homestuff = response.data.data.homestuff;

 });

   BudgetFactory.IPLSpent().then(function (response) {
    $scope.IPLSpent = response.data.data;
 })

 BudgetFactory.RingSpent().then(function (response) {
    $scope.RingSpent = response.data.data;
 })

 BudgetFactory.housePayments().then(function (response) {
    $scope.housePayments = response.data.data;
 });

 BudgetFactory.houseExtraPrin().then(function (response) {
    $scope.houseExtraPrin = response.data.data;
 });

 BudgetFactory.CitizenEnergySpent().then(function (response) {
    $scope.CitizenEnergySpent = response.data.data;
 })

 BudgetFactory.ATTSpent().then(function (response) {
    $scope.ATTSpent = response.data.data;
 })

 BudgetFactory.UtilsOnYear().then(function (response) {
    var data20 = [];
    var data21 = [];
    var data22 = [];
    var data23 = [];
    var data24 = [];

    $scope.UtilsOnYear = response.data.data;
    for (var i = 0; i < response.data.data.length; i++) {
       var singleData = new Object();
       var year = parseFloat(response.data.data[i].year);
       //2020 -- left because it shows on the same year period
       singleData.x = new Date(2020, response.data.data[i].month, 00);
       singleData.y = parseFloat(response.data.data[i].money);

       if(year == 2020){
          data20.push(singleData);
       }
       if(year == 2021){
          data21.push(singleData);
       }
       if(year == 2022){
          data22.push(singleData);
       }
       if(year == 2023){
          data23.push(singleData);
       }
       if(year == 2024){
          data24.push(singleData);
       }
    }

    var chart = new CanvasJS.Chart("utilCharController", {
       title: {
          text: "Utils in House"
       },
       axisX: {
          valueFormatString: "MMM"
       },
       axisY2: {
          title: "Price",
          prefix: "$",
          suffix: ""
       },
       toolTip: {
          shared: true
       },
       legend: {
          cursor: "pointer",
          verticalAlign: "top",
          horizontalAlign: "center",
          dockInsidePlotArea: true
       },
       data: [
       {
          type: "line",
          axisYType: "secondary",
          name: "2020",
          showInLegend: true,
          markerSize: 0,
          yValueFormatString:  "$###",
          dataPoints: data20
       },
       {
          type: "line",
          axisYType: "secondary",
          name: "2021",
          showInLegend: true,
          markerSize: 0,
          yValueFormatString:  "$###",
          dataPoints: data21
       },
       {
          type: "line",
          axisYType: "2022",
          name: "2022",
          showInLegend: true,
          markerSize: 0,
          yValueFormatString:  "$###",
          dataPoints: data22
       },
       {
          type: "line",
          axisYType: "secondary",
          name: "2023",
          showInLegend: true,
          markerSize: 0,
          yValueFormatString:  "$###",
          dataPoints: data23
       },
       {
          type: "line",
          axisYType: "secondary",
          name: "2024",
          showInLegend: true,
          markerSize: 0,
          yValueFormatString:  "$###",
          dataPoints: data24
       }
    ]
    });
    chart.render();
 });


});

