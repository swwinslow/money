app.controller('NetWorthController', function ($http, CONFIG, $scope, $location, BudgetFactory, NetworthFactory) {

   $scope.MoveNetWorthCategories = function(){
      //TODO -- fix so that it is dymnaic or pull from the UI
         var last_date_quarter = '2024-03-31';
         var next_year_quarter = '2024';
         var next_date_quarter = '2024-06-40';

         console.log(`INSERT INTO net_worth (Category, category_type, category_value, category_liabilities, investment, date, end_of_year, person, update_timestamp, notes) SELECT Category, category_type, category_value, category_liabilities, investment, '${next_date_quarter}', '${next_year_quarter}', person, update_timestamp, notes FROM net_worth WHERE date = '${last_date_quarter}'`);
         
    };
    console.log('here is the networth controller');   

    NetworthFactory.networthYearCalculation().then(function (response) {
    $scope.networthYearCalculation = response.data;
    });

    NetworthFactory.networthYearCalculationCategory().then(function (response) {
        $scope.networthYearCalculationCategory = response.data;
    });

    NetworthFactory.networthYearPercentage().then(function (response) {
        $scope.networthYearPercentage = response.data;
  
        for (var i = 0; i < response.data.length; i++) {
           if (response.data[i].category_type == "Bank") {
              nwBank = response.data[i].percentage;
           }
           if (response.data[i].category_type == "Retirement") {
              nwRetirement = response.data[i].percentage;
           }
           if (response.data[i].category_type == "Car") {
              nwCar = response.data[i].percentage;
           }
           if (response.data[i].category_type == "House") {
              nwHouse = response.data[i].percentage;
           }
           if (response.data[i].category_type == "Education") {
              nwEducation = response.data[i].percentage;
           }
           if (response.data[i].category_type == "Savings") {
              nwSavings = response.data[i].percentage;
           }
           if (response.data[i].category_type == "Investment") {
              nwInvestment = response.data[i].percentage;
           }
           if (response.data[i].category_type == "Business") {
              nwBusiness = response.data[i].percentage;
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

    NetworthFactory.NetworthPerQuarter().then(function (response) {

      $scope.NetWorthMonths = response.data;
      var arrayDates = [];
      for (var i = 0; i < response.data.length; i++) {
         var singleMonth = new Object();
         singleMonth.x = new Date(response.data[i].year, response.data[i].month, 00);
         singleMonth.y = parseFloat(response.data[i].money_value);
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