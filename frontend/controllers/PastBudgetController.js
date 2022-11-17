app.controller('PastBudgetController', function (CONFIG, $scope, $location, BudgetFactory) {

    var groPerSpent21 = 0;
    var miscPerSpent21 = 0;
    var carPerSpent21 = 0;
    var housingPerSpent21 = 0;
    var edcPerSpent21 = 0;
    var medPerSpent21 = 0;
    var clothesPerSpent21 = 0;
    var donationPerSpent21 = 0;
    var businesPerSpent21 = 0;
    var savingsPerSpent21 = 0;
    var retirementPerSpent21 = 0;

    var groPerBudget21 = 0;
    var miscPerBudget21 = 0;
    var carPerBudget21 = 0;
    var housingPerBudget21 = 0;
    var edcPerBudget21 = 0;
    var medPerBudget21 = 0;
    var clothesPerBudget21 = 0;
    var donationPerBudget21 = 0;
    var businesPerBudget21 = 0;
    var savingsPerBudget21 = 0;
    var retirementPerBudget21 = 0;


    BudgetFactory.yearCategoryReview2020().then(function (response) {
        console.log(response.data.data);
        $scope.yearCategory2020 = response.data.data;
        for (var i = 0; i < response.data.data.length; i++) {
           if (response.data.data[i].category == "GROCERIES") {
              groPer = response.data.data[i].spent_percentage;
           }
           if (response.data.data[i].category == "MISC") {
              miscPer = response.data.data[i].spent_percentage;
           }
           if (response.data.data[i].category == "CAR") {
              carPer = response.data.data[i].spent_percentage;
           }
           if (response.data.data[i].category == "HOUSING") {
              housingPer = response.data.data[i].spent_percentage;
           }
           if (response.data.data[i].category == "EDUCATION") {
              edcPer = response.data.data[i].spent_percentage;
           }
           if (response.data.data[i].category == "MEDICAL") {
              medPer = response.data.data[i].spent_percentage;
           }
           if (response.data.data[i].category == "CLOTHES") {
              clothesPer = response.data.data[i].spent_percentage;
           }
           if (response.data.data[i].category == "DONATION") {
              donationPer = response.data.data[i].spent_percentage;
           }
           if (response.data.data[i].category == "BUSINESS") {
              businesPer = response.data.data[i].spent_percentage;
           }
           if (response.data.data[i].category == "SAVINGS") {
              savingsPer = response.data.data[i].spent_percentage;
           }
        }
        
        var chart = new CanvasJS.Chart("chartContainer", {
           animationEnabled: true,
           title: {
              text: "Spect % on Caregories "
           },
           data: [{
              type: "pie",
              startAngle: 240,
              yValueFormatString: "##0.00\"%\"",
              indexLabel: "{label} {y}",
              dataPoints: [
                 { y: groPer, label: "GROCERIES" },
                 { y: miscPer, label: "MISC" },
                 { y: carPer, label: "CAR" },
                 { y: housingPer, label: "HOUSING" },
                 { y: edcPer, label: "EDUCATION" },
                 { y: medPer, label: "MEDICAL" },
                 { y: clothesPer, label: "CLOTHES" },
                 { y: donationPer, label: "DONATION" },
                 { y: businesPer, label: "BUSINESS" },
                 { y: savingsPer, label: "SAVINGS" },
              ]
           }]
        });
        chart.render();
     });
  
     BudgetFactory.fullYearReview2019().then(function (response) {
        $scope.year2019 = response.data.data;
     });
     BudgetFactory.fullYearReview2020().then(function (response) {
        $scope.year2020 = response.data.data;
     });
     BudgetFactory.fullYearReview2021().then(function (response) {
        $scope.year2021 = response.data.data;
     });


   BudgetFactory.predictValues2020().then(function (response) {
    $scope.predictValues2020 = response.data.data;
   })

   BudgetFactory.yearCategoryReview2018().then(function (response) {
      $scope.yearCategory2018 = response.data.data;
   })
   BudgetFactory.yearCategoryReview2019().then(function (response) {
      $scope.yearCategory2019 = response.data.data;
   })

   BudgetFactory.yearCategoryReview2020().then(function (response) {
      $scope.yearCategory2020 = response.data.data;
   });
 
   BudgetFactory.yearCategoryReview2021().then(function (response) {
      $scope.yearCategory2021 = response.data.data;

      for (var i = 0; i < response.data.data.length; i++) {
         if (response.data.data[i].category == "GROCERIES") {
            groPerSpent21 = response.data.data[i].spent_percentage;
            groPerBudget21 = response.data.data[i].budget_percentage;
         }
         if (response.data.data[i].category == "MISC") {
            miscPerSpent21 = response.data.data[i].spent_percentage;
            miscPerBudget21 = response.data.data[i].budget_percentage;
         }
         if (response.data.data[i].category == "CAR") {
            carPerSpent21 = response.data.data[i].spent_percentage;
            carPerBudget21 = response.data.data[i].budget_percentage;
         }
         if (response.data.data[i].category == "HOUSING") {
            housingPerSpent21 = response.data.data[i].spent_percentage;
            housingPerBudget21 = response.data.data[i].budget_percentage;

         }
         if (response.data.data[i].category == "EDUCATION") {
            edcPerSpent21 = response.data.data[i].spent_percentage;
            edcPerBudget21 = response.data.data[i].budget_percentage;

         }
         if (response.data.data[i].category == "MEDICAL") {
            medPerSpent21 = response.data.data[i].spent_percentage;
            medPerBudget21 = response.data.data[i].budget_percentage;

         }
         if (response.data.data[i].category == "CLOTHES") {
            clothesPerSpent21 = response.data.data[i].spent_percentage;
            clothesPerBudget21 = response.data.data[i].budget_percentage;
         }
         if (response.data.data[i].category == "DONATION") {
            donationPerSpent21 = response.data.data[i].spent_percentage;
            donationPerBudget21 = response.data.data[i].budget_percentage;
         }
         if (response.data.data[i].category == "BUSINESS") {
            businesPerSpent21 = response.data.data[i].spent_percentage;
            businesPerBudget21 = response.data.data[i].budget_percentage;

         }
         if (response.data.data[i].category == "SAVINGS") {
            savingsPerSpent21 = response.data.data[i].spent_percentage;
            savingsPerBudget21 = response.data.data[i].budget_percentage;
         }
         if (response.data.data[i].category == "RETIREMENT") {
         retirementPerSpent21 = response.data.data[i].spent_percentage;
         retirementPerBudget21 = response.data.data[i].budget_percentage;
      }
    }
    
    var chart21 = new CanvasJS.Chart("chartContainerBudget21", {
       animationEnabled: true,
       title: {
          text: "Spect % on Caregories "
       },
       data: [{
          type: "pie",
          startAngle: 240,
          yValueFormatString: "##0.00\"%\"",
          indexLabel: "{label} {y}",
          dataPoints: [
             { y: groPerSpent21, label: "GROCERIES" },
             { y: miscPerSpent21, label: "MISC" },
             { y: carPerSpent21, label: "CAR" },
             { y: housingPerSpent21, label: "HOUSING" },
             { y: edcPerSpent21, label: "EDUCATION" },
             { y: medPerSpent21, label: "MEDICAL" },
             { y: clothesPerSpent21, label: "CLOTHES" },
             { y: donationPerSpent21, label: "DONATION" },
             { y: businesPerSpent21, label: "BUSINESS" },
             { y: savingsPerSpent21, label: "SAVINGS" },
             { y: retirementPerSpent21, label: "RETIREMENT" },
          ]
       }]
    });
    chart21.render();
 })

 BudgetFactory.yearReview2020().then(function (response) {
    $scope.yearReview2020 = response.data.data;
 })
    ////// MISC PER YEAR /////
    BudgetFactory.miscItems2019().then(function (response) {
        $scope.miscItems2019 = response.data.data;
     })
     BudgetFactory.miscItems2020().then(function (response) {
        $scope.miscItems2020 = response.data.data;
     })
     BudgetFactory.miscItems2021().then(function (response) {
        $scope.miscItems2021 = response.data.data;
     })

     BudgetFactory.predictValuesItems().then(function (response) {
        $scope.predictValuesGas2020 = response.data.data.Gas;
     });
  
     BudgetFactory.resturantsData().then(function (response) {
        $scope.resturantsData = response.data.data;
     });

   BudgetFactory.BLDDDMonths().then(function (response) {

    $scope.BLDDDMonths = response.data.data;
    var arrayDates = [];
    for (var i = 0; i < response.data.data.length; i++) {
       var singleMonth = new Object();
       singleMonth.x = new Date(response.data.data[i].year, response.data.data[i].month, 00);
       singleMonth.y = parseFloat(response.data.data[i].money);
       arrayDates.push(singleMonth);
    }

    var lineChart = new CanvasJS.Chart("lineChartContainer",
       {
          title: {
             text: "BLDDD costs",
             fontSize: 25
          },
          axisX: {
             labelFormatter: function (e) {
                return CanvasJS.formatDate(e.value, "MMM - YY");
             },
             interval: 4,
             intervalType: "month"
          },
          axisY: {
             title: "Costs"
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
 BudgetFactory.payVSpent2020().then(function (response) {
    $scope.payvspent2020 = response.data.data;
 });

 BudgetFactory.payVSpent2021().then(function (response) {
    $scope.payvspent2021 = response.data.data;
 });
 BudgetFactory.networthYearCalculationCategory().then(function (response) {
    $scope.networthYearCalculationCategory = response.data.data;
 });

 BudgetFactory.BLDDDMonths().then(function (response) {
    $scope.BLDDDMonths = response.data.data;
 });

 BudgetFactory.BLDDDPerYear2020().then(function (response) {
    $scope.BLDDDPerYear2020 = response.data.data;
 });
 BudgetFactory.salaryReview2020().then(function (response) {
    $scope.year2020Difference = response.data.data[0]['money'];
    $scope.year2020Trans = response.data.data[0]['trans'];
    $scope.year2020Salary = response.data.data[0]['salary'];
    $scope.year2020budget = response.data.data[0]['budget'];
    $scope.year2020Uncounted = response.data.data[0]['uncounted_money'];
 });
 BudgetFactory.salaryReview2021().then(function (response) {
    $scope.year2021Difference = response.data.data[0]['money'];
    $scope.year2021Trans = response.data.data[0]['trans'];
    $scope.year2021Salary = response.data.data[0]['salary'];
    $scope.year2021budget = response.data.data[0]['budget'];
    $scope.year2021Uncounted = response.data.data[0]['uncounted_money'];
 });
  
});