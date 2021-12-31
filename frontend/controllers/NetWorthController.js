app.controller('NetWorthController', function ($http, CONFIG, $scope, $location, BudgetFactory) {

       //networthYearCalculation
   BudgetFactory.networthYearCalculation().then(function (response) {
    $scope.networthYearCalculation = response.data.data;
    });

    BudgetFactory.networthYearCalculationCategory().then(function (response) {
        $scope.networthYearCalculationCategory = response.data.data;
    });

    BudgetFactory.networthYearPercentage().then(function (response) {
        $scope.networthYearPercentage = response.data.data;
  
        for (var i = 0; i < response.data.data.length; i++) {
           if (response.data.data[i].category_type == "Bank") {
              nwBank = response.data.data[i].percentage;
           }
           if (response.data.data[i].category_type == "Retirement") {
              nwRetirement = response.data.data[i].percentage;
           }
           if (response.data.data[i].category_type == "Car") {
              nwCar = response.data.data[i].percentage;
           }
           if (response.data.data[i].category_type == "House") {
              nwHouse = response.data.data[i].percentage;
           }
           if (response.data.data[i].category_type == "Education") {
              nwEducation = response.data.data[i].percentage;
           }
           if (response.data.data[i].category_type == "Savings") {
              nwSavings = response.data.data[i].percentage;
           }
           if (response.data.data[i].category_type == "Investment") {
              nwInvestment = response.data.data[i].percentage;
           }
           if (response.data.data[i].category_type == "Business") {
              nwBusiness = response.data.data[i].percentage;
           }
        }
        
        var chart22 = new CanvasJS.Chart("chartContainerBudget22", {
           animationEnabled: true,
           title: {
              text: "Networth % on Categories "
           },
           data: [{
              type: "pie",
              startAngle: 240,
              yValueFormatString: "##0.00\"%\"",
              indexLabel: "{label} {y}",
              dataPoints: [
                 { y: nwBank, label: "Bank" },
                 { y: nwRetirement, label: "Retirment" },
                 { y: nwCar, label: "Car" },
                 { y: nwHouse, label: "House" },
                 { y: nwEducation, label: "Education" },
                 { y: nwBusiness, label: "Business" },
                 { y: nwSavings, label: "Savings" },
                 { y: nwInvestment, label: "Investment" },

              ]
           }]
        });
        chart22.render();
    });

    BudgetFactory.NetworthPerQuarter().then(function (response) {

      $scope.NetWorthMonths = response.data.data;
      var arrayDates = [];
      for (var i = 0; i < response.data.data.length; i++) {
         var singleMonth = new Object();
         singleMonth.x = new Date(response.data.data[i].year, response.data.data[i].month, 00);
         singleMonth.y = parseFloat(response.data.data[i].money_value);
         arrayDates.push(singleMonth);
      }

      var lineChart = new CanvasJS.Chart("lineChartContainer",
         {
            title: {
               text: "NetWorth Costs",
               fontSize: 25
            },
            axisX: {
               labelFormatter: function (e) {
                  return CanvasJS.formatDate(e.value, "MMM - YY");
               },
               interval: 1,
               intervalType: "month"
            },
            axisY: {
               title: "Net Worth"
            },

            data: [
               {
                  type: "area",
                  dataPoints: arrayDates
               }
            ]
         });

      lineChart.render();
   });

});