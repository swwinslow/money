app.controller('BudgetController', function (CONFIG, $scope, $location, BudgetFactory) {

   $scope.showNewPay = false;
   $scope.showError = false;
   $scope.show2020Comp = true;
   $scope.show2021Comp = true;


   var groPer = 0;
   var miscPer = 0;
   var carPer = 0;
   var housingPer = 0;
   var edcPer = 0;
   var medPer = 0;
   var clothesPer = 0;
   var donationPer = 0;
   var businesPer = 0;
   var savingsPer = 0;

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

   

   $scope.show2020 = function(){
      if($scope.show2020Comp == true){
         $scope.show2020Comp = false;
         console.log('false');
      } else {
         $scope.show2020Comp = true;
         console.log('true');
      }
   }
   $scope.show2021 = function(){
      if($scope.show2021Comp = true){
         $scope.show2021Comp = false;
         console.log('false');

      }else {
         $scope.show2021Comp = true;
         console.log('true');

      }   
   }
   

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


   var data18 = [];
   var data19 = [];
   var data20 = [];
   var data21 = [];
   var data22 = [];
   var data23 = [];

   BudgetFactory.UtilsOnYear().then(function (response) {

      $scope.UtilsOnYear = response.data.data;

      console.log(response.data.data);

      for (var i = 0; i < response.data.data.length; i++) {
         var singleData = new Object();
         var year = parseFloat(response.data.data[i].year);
         singleData.x = new Date(2020, response.data.data[i].month, 00);
         singleData.y = parseFloat(response.data.data[i].money);


         if(year == 2019){
            data19.push(singleData);
         }
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
         data: [{
            type:"line",
            axisYType: "secondary",
            name: "2019",
            showInLegend: true,
            markerSize: 0,
            yValueFormatString: "$###",
            dataPoints: data19
         }
         ,
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
            name: "2021",
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
         }
      ]
      });
      chart.render();

      
   });


   BudgetFactory.fullYearReview2019().then(function (response) {
      $scope.year2019 = response.data.data;
   });

   BudgetFactory.fullYearReview2020().then(function (response) {
      $scope.year2020 = response.data.data;
   });

   //fullYearReviewLeft2020
   BudgetFactory.fullYearReviewLeft2020().then(function (response) {
      $scope.fullYearReviewLeft2020 = response.data.data;
   });

   BudgetFactory.fullYearReview2021().then(function (response) {
      $scope.year2021 = response.data.data;
   });

   BudgetFactory.predictValues2020().then(function (response) {
      $scope.predictValues2020 = response.data.data;
   })

   BudgetFactory.yearCategoryReview2019().then(function (response) {
      $scope.yearCategory2019 = response.data.data;
   })

   BudgetFactory.yearCategoryReview2018().then(function (response) {
      $scope.yearCategory2018 = response.data.data;
   })

   BudgetFactory.yearCategoryReview2020().then(function (response) {
      $scope.yearCategory2020 = response.data.data;
   });

   BudgetFactory.yearCategoryReview2021().then(function (response) {
      $scope.yearCategory2021 = response.data.data;

      console.log(response.data.data);
      $scope.yearCategory2020 = response.data.data;
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
               { y: groPerBudget21, label: "GROCERIES" },
               { y: miscPerBudget21, label: "MISC" },
               { y: carPerBudget21, label: "CAR" },
               { y: housingPerBudget21, label: "HOUSING" },
               { y: edcPerBudget21, label: "EDUCATION" },
               { y: medPerBudget21, label: "MEDICAL" },
               { y: clothesPerBudget21, label: "CLOTHES" },
               { y: donationPerBudget21, label: "DONATION" },
               { y: businesPerBudget21, label: "BUSINESS" },
               { y: savingsPerBudget21, label: "SAVINGS" },
            ]
         }]
      });
      chart21.render();
   })

   BudgetFactory.yearReview2020().then(function (response) {
      $scope.yearReview2020 = response.data.data;
   })
   BudgetFactory.yearReview2021().then(function (response) {
      $scope.yearReview2021 = response.data.data;
   })

   BudgetFactory.miscItems2019().then(function (response) {
      $scope.miscItems2019 = response.data.data;
   })

   BudgetFactory.miscItems2020().then(function (response) {
      $scope.miscItems2020 = response.data.data;
   })
   BudgetFactory.miscItems2021().then(function (response) {
      $scope.miscItems2021 = response.data.data;
   })

   BudgetFactory.amazonSpent().then(function (response) {
      $scope.amazonSpent = response.data.data;
   })

   BudgetFactory.KrogerSpent().then(function (response) {
      $scope.KrogerSpent = response.data.data;
   })

   BudgetFactory.IPLSpent().then(function (response) {
      $scope.IPLSpent = response.data.data;
   })

   BudgetFactory.CitizenEnergySpent().then(function (response) {
      $scope.CitizenEnergySpent = response.data.data;
   })

   BudgetFactory.ATTSpent().then(function (response) {
      $scope.ATTSpent = response.data.data;
   })

   BudgetFactory.medicalSpent().then(function (response) {
      $scope.medicalSpent = response.data.data;
   })

   BudgetFactory.nextPayDay().then(function (response) {
      $scope.nextPayDay = response.data.data;
   })

   BudgetFactory.salaryReview2019().then(function (response) {
      $scope.year2019Difference = response.data.data[0]['money'];
      $scope.year2019Trans = response.data.data[0]['trans'];
      $scope.year2019Salary = response.data.data[0]['salary'];
      $scope.year2019Budget = response.data.data[0]['budget'];
      $scope.year2019Uncounted = response.data.data[0]['uncounted_money'];
   });

   BudgetFactory.salaryReview2018().then(function (response) {
      $scope.year2018Difference = response.data.data[0]['money'];
      $scope.year2018Trans = response.data.data[0]['trans'];
      $scope.year2018Salary = response.data.data[0]['salary'];
   });

   BudgetFactory.insightData().then(function (response) {
      $scope.homestuff = response.data.data.homestuff;
      $scope.Grocercies = response.data.data.Grocercies;
      $scope.CarGas = response.data.data.CarGas;
      $scope.SFCar = response.data.data.SFCar;
      $scope.PayYear = response.data.data.PayYear;
   });

   BudgetFactory.predictValuesItems().then(function (response) {
      $scope.predictValuesGas2020 = response.data.data.Gas;
   });

   BudgetFactory.resturantsData().then(function (response) {
      $scope.resturantsData = response.data.data;
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

   BudgetFactory.payVSpent2019().then(function (response) {
      $scope.payvspent2019 = response.data.data;

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

      // console.log(`['JAN',  ` + JAN_BUDGET + `, ` + JAN_SPENT + `, ` + JAN_PAY + `],
      //    ['FEB',  ` + FEB_BUDGET + `, ` + FEB_SPENT + `, ` + FEB_PAY + `],
      //    ['MAR',  ` + MAR_BUDGET + `, ` + MAR_SPENT + `, ` + MAR_PAY + `],
      //    ['APR',  ` + APR_BUDGET + `, ` + APR_SPENT + `, ` + APR_PAY + `],
      //    ['MAY',  ` + MAY_BUDGET + `, ` + MAY_SPENT + `, ` + MAY_PAY + `],
      //    ['JUN',  ` + JUN_BUDGET + `, ` + JUN_SPENT + `, ` + JUN_PAY + `],
      //    ['JUL',  ` + JUL_BUDGET + `, ` + JUL_SPENT + `, ` + JUL_PAY + `],
      //    ['AGU',  ` + AUG_BUDGET + `, ` + AUG_SPENT + `, ` + AUG_PAY + `],
      //    ['SEPT',  ` + SEPT_BUDGET + `, ` + SEPT_SPENT + `, ` + SEPT_PAY + `],
      //    ['OCT',  ` + OCT_BUDGET + `, ` + OCT_SPENT + `, ` + OCT_PAY + `],
      //    ['NOV',  ` + NOV_BUDGET + `, ` + NOV_SPENT + `, ` + NOV_PAY + `],
      //    ['DEC',  ` + DEC_BUDGET + `, ` + DEC_SPENT + `, ` + DEC_PAY + `]`);
      // console.log(``);

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
               interval: 1,
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

   BudgetFactory.gerneralData().then(function (response) {
      $scope.gerneralData = response.data.data;
      $scope.Data_Grocercies = response.data.data.Grocercies[0];
      $scope.Data_Car = response.data.data.Car[0];
      $scope.Data_Apartment = response.data.data.Apartment[0];
      $scope.Data_GeneralHousing = response.data.data.GeneralHousing[0];
      $scope.Data_TotalMortage = response.data.data.TotalMortage[0];
      $scope.Data_ExtraPrincibal = response.data.data.ExtraPrincibal[0];
   });

   BudgetFactory.HouseUtils().then(function (response) {
      $scope.HouseUtils = response.data.data;
   });

   BudgetFactory.payVSpent2020().then(function (response) {
      $scope.payvspent2020 = response.data.data;
   });

   BudgetFactory.payVSpent2021().then(function (response) {
      $scope.payvspent2021 = response.data.data;
   });

   //networthYearCalculation

   BudgetFactory.networthYearCalculation().then(function (response) {
      $scope.networthYearCalculation = response.data.data;
   });

   BudgetFactory.CarPaymentLeft().then(function (response) {
      $scope.CarPaymentLeft = response.data.data;
   });

   BudgetFactory.elementsPay().then(function (response) {
      $scope.elementsPay = response.data.data;
   });

   BudgetFactory.lillyPay().then(function (response) {
      $scope.lillyPay = response.data.data;
   });

   BudgetFactory.specialEvents().then(function (response) {
      $scope.specialEvents = response.data.data;
   });

   BudgetFactory.chaseCreditCardPay().then(function (response) {
      $scope.chaseCreditCardPay = response.data.data;
   });

   BudgetFactory.paymentTypesTrans().then(function (response) {
      $scope.paymentTypesTrans = response.data.data;
   });

   BudgetFactory.houseExtraPrin().then(function (response) {
      $scope.houseExtraPrin = response.data.data;
   });


   BudgetFactory.networthYearCalculationCategory().then(function (response) {
      $scope.networthYearCalculationCategory = response.data.data;
   });

   BudgetFactory.BLDDDMonths().then(function (response) {
      $scope.BLDDDMonths = response.data.data;
   });

   BudgetFactory.EmilyPay().then(function (response) {
      $scope.EmilyPay = response.data.data;
   });

   BudgetFactory.SethPay().then(function (response) {
      $scope.SethPay = response.data.data;
   });



   BudgetFactory.lifeEvents().then(function (response) {
      $scope.lifeEvents = response.data.data;
   });

   BudgetFactory.totalCreditCards().then(function (response) {
      $scope.totalCreditCards = response.data.data;
   });

   BudgetFactory.BLDDDPerYear2020().then(function (response) {
      $scope.BLDDDPerYear2020 = response.data.data;
   });
});