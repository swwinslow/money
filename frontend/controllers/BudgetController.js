app.controller('BudgetController', function (CONFIG, $scope, $location, BudgetFactory) {

   $scope.showNewPay = false;
   $scope.showError = false;
   $scope.show2020Comp = true;
   $scope.show2021Comp = true;
   $scope.show2022Comp = true;


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

   var groPerBudget22 = 0;
   var miscPerBudget22 = 0;
   var carPerBudget22 = 0;
   var housingPerBudget22 = 0;
   var edcPerBudget22 = 0;
   var medPerBudget22 = 0;
   var clothesPerBudget22 = 0;
   var donationPerBudget22 = 0;
   var businesPerBudget22 = 0;
   var savingsPerBudget22 = 0;
   
   var nwBank = 0;
   var nwRetirement   = 0;
   var nwInvestment = 0;
   var nwSavings = 0;
   var nwEducation = 0;
   var nwCar = 0;
   var nwHouse = 0;
   var nwBusiness = 0;

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
   BudgetFactory.fullYearReview2022().then(function (response) {
      $scope.year2022 = response.data.data;
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

   BudgetFactory.yearCategoryReview2022().then(function (response) {
      $scope.yearCategory2022 = response.data.data;
      console.log("!!!!");
      console.log(response.data.data);
      console.log("!!!!");


      for (var i = 0; i < response.data.data.length; i++) {
         if (response.data.data[i].category == "GROCERIES") {
            groPerSpent22 = response.data.data[i].spent_percentage;
            groPerBudget22 = response.data.data[i].budget_percentage;
         }
         if (response.data.data[i].category == "MISC") {
            miscPerSpent22 = response.data.data[i].spent_percentage;
            miscPerBudget22 = response.data.data[i].budget_percentage;
         }
         if (response.data.data[i].category == "CAR") {
            carPerSpent22 = response.data.data[i].spent_percentage;
            carPerBudget22 = response.data.data[i].budget_percentage;
         }
         if (response.data.data[i].category == "HOUSING") {
            housingPerSpent22 = response.data.data[i].spent_percentage;
            housingPerBudget22 = response.data.data[i].budget_percentage;

         }
         if (response.data.data[i].category == "EDUCATION") {
            edcPerSpent21 = response.data.data[i].spent_percentage;
            edcPerBudget21 = response.data.data[i].budget_percentage;

         }
         if (response.data.data[i].category == "MEDICAL") {
            medPerSpent22 = response.data.data[i].spent_percentage;
            medPerBudget22 = response.data.data[i].budget_percentage;

         }
         if (response.data.data[i].category == "CLOTHES") {
            clothesPerSpent22 = response.data.data[i].spent_percentage;
            clothesPerBudget22 = response.data.data[i].budget_percentage;
         }
         if (response.data.data[i].category == "DONATION") {
            donationPerSpent22 = response.data.data[i].spent_percentage;
            donationPerBudget22 = response.data.data[i].budget_percentage;
         }
         if (response.data.data[i].category == "BUSINESS") {
            businesPerSpent22 = response.data.data[i].spent_percentage;
            businesPerBudget22 = response.data.data[i].budget_percentage;
         }
         if (response.data.data[i].category == "SAVINGS") {
            savingsPerSpent22 = response.data.data[i].spent_percentage;
            savingsPerBudget22 = response.data.data[i].budget_percentage;
         }

      }
      
      var chart22 = new CanvasJS.Chart("chartContainerBudget22", {
         animationEnabled: true,
         title: {
            text: "Spent % on Caregories "
         },
         data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
               { y: groPerSpent22, label: "GROCERIES" },
               { y: miscPerBudget22, label: "MISC" },
               { y: carPerBudget22, label: "CAR" },
               { y: housingPerBudget22, label: "HOUSING" },
               { y: edcPerBudget22, label: "EDUCATION" },
               { y: medPerBudget22, label: "MEDICAL" },
               { y: clothesPerBudget22, label: "CLOTHES" },
               { y: donationPerBudget22, label: "DONATION" },
               { y: businesPerBudget22, label: "BUSINESS" },
               { y: savingsPerBudget22, label: "SAVINGS" },
            ]
         }]
      });
      chart22.render();
   })

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
      
      
      chart22.render();
   });



   BudgetFactory.yearReview2020().then(function (response) {
      $scope.yearReview2020 = response.data.data;
   })
   BudgetFactory.yearReview2021().then(function (response) {
      $scope.yearReview2021 = response.data.data;
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

   ////// SALARY REVIEW //// 
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
   BudgetFactory.salaryReview2022().then(function (response) {
      $scope.year2022Difference = response.data.data[0]['money'];
      $scope.year2022Trans = response.data.data[0]['trans'];
      $scope.year2022Salary = response.data.data[0]['salary'];
      $scope.year2022budget = response.data.data[0]['budget'];
      $scope.year2022Uncounted = response.data.data[0]['uncounted_money'];
   });

   ////////// STANDARD METRICS ////////////
   ////////// STANDARD METRICS ////////////
   ////////// STANDARD METRICS ////////////
   ////////// STANDARD METRICS ////////////
   ////////// STANDARD METRICS ////////////
   ////////// STANDARD METRICS ////////////
   ////////// STANDARD METRICS ////////////
   ////////// STANDARD METRICS ////////////
   ////////// STANDARD METRICS ////////////
   ////////// STANDARD METRICS ////////////
   ////////// STANDARD METRICS ////////////
   BudgetFactory.nextPayDay().then(function (response) {
      $scope.nextPayDay = response.data.data;
   })
   BudgetFactory.insightData().then(function (response) {
      $scope.homestuff = response.data.data.homestuff;
      $scope.Grocercies = response.data.data.Grocercies;
      $scope.CarGas = response.data.data.CarGas;
      $scope.SFCar = response.data.data.SFCar;
      $scope.PayYear = response.data.data.PayYear;
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

   BudgetFactory.BMVYear().then(function (response) {
      $scope.BMVYear = response.data.data;
   });

   BudgetFactory.lifeEvents().then(function (response) {
      $scope.lifeEvents = response.data.data;
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

   BudgetFactory.EmilyPay().then(function (response) {
      $scope.EmilyPay = response.data.data;
   });

   BudgetFactory.SethPay().then(function (response) {
      $scope.SethPay = response.data.data;
   });
   BudgetFactory.totalCreditCards().then(function (response) {
      $scope.totalCreditCards = response.data.data;
   });

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

   BudgetFactory.UtilsOnYear().then(function (response) {
      var data18 = [];
      var data19 = [];
      var data20 = [];
      var data21 = [];
      var data22 = [];
      var data23 = [];

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
});