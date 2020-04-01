app.controller('BudgetController', function(CONFIG, $scope, $location, BudgetFactory){

    $scope.showNewPay = false;
    $scope.showError = false;

    BudgetFactory.fullYearReview2019().then(function(response){
        $scope.year2019 = response.data.data; 
     });

     BudgetFactory.fullYearReview2020().then(function(response){
      $scope.year2020 = response.data.data; 
    });
    
    //fullYearReviewLeft2020
    BudgetFactory.fullYearReviewLeft2020().then(function(response){
      $scope.fullYearReviewLeft2020 = response.data.data; 
    });

    BudgetFactory.fullYearReview2021().then(function(response){
      $scope.year2021 = response.data.data; 
    });

    //

    BudgetFactory.predictValues2020().then(function(response){
      $scope.predictValues2020 = response.data.data; 
   })


     BudgetFactory.yearCategoryReview2019().then(function(response){
        $scope.yearCategory2019 = response.data.data; 
     })

     BudgetFactory.yearCategoryReview2018().then(function(response){
      $scope.yearCategory2018 = response.data.data; 
   })

     BudgetFactory.yearCategoryReview2020().then(function(response){
      $scope.yearCategory2020 = response.data.data; 
   })

   BudgetFactory.yearCategoryReview2021().then(function(response){
      $scope.yearCategory2021 = response.data.data; 
   })

     BudgetFactory.yearReview2020().then(function(response){
      $scope.yearReview2020 = response.data.data;
   })
   BudgetFactory.yearReview2021().then(function(response){
      $scope.yearReview2021 = response.data.data;
   })

   BudgetFactory.miscItems2019().then(function(response){
      $scope.miscItems2019 = response.data.data;
   })

   BudgetFactory.miscItems2020().then(function(response){
      $scope.miscItems2020 = response.data.data;
   })
   BudgetFactory.miscItems2021().then(function(response){
      $scope.miscItems2021 = response.data.data;
   })

    BudgetFactory.salaryReview2019().then(function(response){
       console.log(response);
        $scope.year2019Difference = response.data.data[0]['money'];
        $scope.year2019Trans = response.data.data[0]['trans'];
        $scope.year2019Salary = response.data.data[0]['salary'];
        $scope.year2019Budget = response.data.data[0]['budget'];
        $scope.year2019Uncounted = response.data.data[0]['uncounted_money'];
     });

     BudgetFactory.salaryReview2018().then(function(response){
      console.log(response);
       $scope.year2018Difference = response.data.data[0]['money'];
       $scope.year2018Trans = response.data.data[0]['trans'];
       $scope.year2018Salary = response.data.data[0]['salary'];
    });

    BudgetFactory.insightData().then(function(response){
       $scope.BLDDD = response.data.data.BLDDD;
       $scope.BLDDDLL = response.data.data.BLDDDLL;
       $scope.Menards = response.data.data.Menards;
       $scope.Grocercies = response.data.data.Grocercies;
       $scope.CarGas = response.data.data.CarGas;
       $scope.SFCar = response.data.data.SFCar;
       $scope.PayYear = response.data.data.PayYear;
    });


    //

     BudgetFactory.salaryReview2020().then(function(response){
      console.log(response);
       $scope.year2020Difference = response.data.data[0]['money'];
       $scope.year2020Trans = response.data.data[0]['trans'];
       $scope.year2020Salary = response.data.data[0]['salary'];
       $scope.year2020budget = response.data.data[0]['budget'];
       $scope.year2020Uncounted = response.data.data[0]['uncounted_money'];
    });

    BudgetFactory.salaryReview2021().then(function(response){
      console.log(response);
       $scope.year2021Difference = response.data.data[0]['money'];
       $scope.year2021Trans = response.data.data[0]['trans'];
       $scope.year2021Salary = response.data.data[0]['salary'];
       $scope.year2021budget = response.data.data[0]['budget'];
       $scope.year2021Uncounted = response.data.data[0]['uncounted_money'];

    });

     BudgetFactory.payVSpent2019().then(function(response){
      $scope.payvspent2019 = response.data.data;

      console.log($scope.payvspent2019);
      // for(var i = 0; i < 12; i++){
         // console.log($scope.payvspent2019[i]);
         var JAN_BUDGET = $scope.payvspent2019[0].budget_amount;
         var JAN_SPENT = $scope.payvspent2019[0].spent_amount;
         var JAN_PAY = $scope.payvspent2019[0].pay_amount;
         var FEB_BUDGET = $scope.payvspent2019[1].budget_amount;
         var FEB_SPENT = $scope.payvspent2019[1].spent_amount;
         var FEB_PAY = $scope.payvspent2019[1].pay_amount;
         var MAR_BUDGET = $scope.payvspent2019[2].budget_amount;
         var MAR_SPENT = $scope.payvspent2019[2].spent_amount;
         var MAR_PAY = $scope.payvspent2019[2].pay_amount;
         var APR_BUDGET = $scope.payvspent2019[3].budget_amount;
         var APR_SPENT = $scope.payvspent2019[3].spent_amount;
         var APR_PAY = $scope.payvspent2019[3].pay_amount;
         var MAY_BUDGET = $scope.payvspent2019[4].budget_amount;
         var MAY_SPENT = $scope.payvspent2019[4].spent_amount;
         var MAY_PAY = $scope.payvspent2019[4].pay_amount;
         var JUN_BUDGET = $scope.payvspent2019[5].budget_amount;
         var JUN_SPENT = $scope.payvspent2019[5].spent_amount;
         var JUN_PAY = $scope.payvspent2019[5].pay_amount;

         var JUL_BUDGET = $scope.payvspent2019[6].budget_amount;
         var JUL_SPENT = $scope.payvspent2019[6].spent_amount;
         var JUL_PAY = $scope.payvspent2019[6].pay_amount;

         var AUG_BUDGET = $scope.payvspent2019[7].budget_amount;
         var AUG_SPENT = $scope.payvspent2019[7].spent_amount;
         var AUG_PAY = $scope.payvspent2019[7].pay_amount;

         var SEPT_BUDGET = $scope.payvspent2019[8].budget_amount;
         var SEPT_SPENT = $scope.payvspent2019[8].spent_amount;
         var SEPT_PAY = $scope.payvspent2019[8].pay_amount;

         var OCT_BUDGET = $scope.payvspent2019[9].budget_amount;
         var OCT_SPENT = $scope.payvspent2019[9].spent_amount;
         var OCT_PAY = $scope.payvspent2019[9].pay_amount;

         var NOV_BUDGET = $scope.payvspent2019[10].budget_amount;
         var NOV_SPENT = $scope.payvspent2019[10].spent_amount;
         var NOV_PAY = $scope.payvspent2019[10].pay_amount;

         var DEC_BUDGET = $scope.payvspent2019[11].budget_amount;
         var DEC_SPENT = $scope.payvspent2019[11].spent_amount;
         var DEC_PAY = $scope.payvspent2019[11].pay_amount;

         console.log(`['JAN',  ` + JAN_BUDGET + `, `+ JAN_SPENT +`, `+ JAN_PAY +`],
         ['FEB',  ` + FEB_BUDGET + `, `+ FEB_SPENT +`, `+ FEB_PAY +`],
         ['MAR',  ` + MAR_BUDGET + `, `+ MAR_SPENT +`, `+ MAR_PAY +`],
         ['APR',  ` + APR_BUDGET + `, `+ APR_SPENT +`, `+ APR_PAY +`],
         ['MAY',  ` + MAY_BUDGET + `, `+ MAY_SPENT +`, `+ MAY_PAY +`],
         ['JUN',  ` + JUN_BUDGET + `, `+ JUN_SPENT +`, `+ JUN_PAY +`],
         ['JUL',  ` + JUL_BUDGET + `, `+ JUL_SPENT +`, `+ JUL_PAY +`],
         ['AGU',  ` + AUG_BUDGET + `, `+ AUG_SPENT +`, `+ AUG_PAY +`],
         ['SEPT',  ` + SEPT_BUDGET + `, `+ SEPT_SPENT +`, `+ SEPT_PAY +`],
         ['OCT',  ` + OCT_BUDGET + `, `+ OCT_SPENT +`, `+ OCT_PAY +`],
         ['NOV',  ` + NOV_BUDGET + `, `+ NOV_SPENT +`, `+ NOV_PAY +`],
         ['DEC',  ` + DEC_BUDGET + `, `+ DEC_SPENT +`, `+ DEC_PAY +`]` );
         console.log(``);

    });

    BudgetFactory.gerneralData().then(function(response){
      $scope.gerneralData = response.data.data;
      console.log(response.data.data);

      $scope.Data_Grocercies = response.data.data.Grocercies[0];
      $scope.Data_Car = response.data.data.Car[0];
      $scope.Data_Apartment = response.data.data.Apartment[0];
      $scope.Data_GeneralHousing = response.data.data.GeneralHousing[0];
      $scope.Data_TotalMortage = response.data.data.TotalMortage[0];
      $scope.Data_ExtraPrincibal = response.data.data.ExtraPrincibal[0];
   });

    BudgetFactory.HouseUtils().then(function(response){
      $scope.HouseUtils = response.data.data;
   });
    
    BudgetFactory.payVSpent2020().then(function(response){
      $scope.payvspent2020 = response.data.data;
   });

   BudgetFactory.payVSpent2021().then(function(response){
      $scope.payvspent2021 = response.data.data;
   });

   //networthYearCalculation

   BudgetFactory.networthYearCalculation().then(function(response){
      $scope.networthYearCalculation = response.data.data;
      console.log($scope.networthYearCalculation);
   });

   BudgetFactory.CarPaymentLeft().then(function(response){
      $scope.CarPaymentLeft = response.data.data;
   });

   BudgetFactory.elementsPay().then(function(response){
      $scope.elementsPay = response.data.data;
   });

   BudgetFactory.lillyPay().then(function(response){
      $scope.lillyPay = response.data.data;
   });

   BudgetFactory.specialEvents().then(function(response){
      $scope.specialEvents = response.data.data;
   });

   BudgetFactory.chaseCreditCardPay().then(function(response){
      $scope.chaseCreditCardPay = response.data.data;
   });

   BudgetFactory.houseExtraPrin().then(function(response){
      $scope.houseExtraPrin = response.data.data;
   });
   
   // Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Work', 8],
  ['Eat', 2],
  ['TV', 4],
  ['Gym', 2],
  ['Sleep', 8]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'My Average Day', 'width':550, 'height':400};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

});


 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
         ['MONTH', 'BUDGET', 'REAL', 'PAY'], 
         ['JAN',  2105, 1966.94, 4168.32],
         ['FEB',  2905, 2531.05, 4096.58],
         ['MAR',  2905, 4061.34, 8060.69],
         ['APR',  2935, 7815.74, 4236.55],
         ['MAY',  3596, 3672.70, 4431.00],
         ['JUN',  3152, 3180.59, 4416.44],
         ['JUL',  3168, 4057.52, 4421.65],
         ['AGU',  3168, 4441.68, 4299.43],
         ['SEPT',  3226, 5557.59, 4387.52],
         ['OCT',  3208, 3141.26, 4206.61],
         ['NOV',  3543, 3593.60, 4191.60],
         ['DEC',  3543, 3803.98, 4186.68]
        ]);

        var options = {
          title: 'HOUSING',
          curveType: 'none',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }