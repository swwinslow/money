app.controller('BudgetController', function (CONFIG, $scope, $location, BudgetFactory) {

   $scope.showNewPay = false;
   $scope.showError = false;

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

   var groPerSpent22 = 0;
   var miscPerSpent22 = 0;
   var carPerSpent22 = 0;
   var housingPerSpent22 = 0;
   var edcPerSpent22 = 0;
   var medPerSpent22 = 0;
   var clothesPerSpent22 = 0;
   var donationPerSpent22 = 0;
   var businesPerSpent22 = 0;
   
   // BudgetFactory.fullYearReviewYear().then(function (response) {
   //    $scope.aaa = response.data.data;
   // });

   
   BudgetFactory.fullYearReview2022().then(function (response) {
      $scope.year2022 = response.data.data;
   });


   BudgetFactory.yearCategoryReview2022().then(function (response) {
      $scope.yearCategory2022 = response.data.data;

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
            edcPerSpent22 = response.data.data[i].spent_percentage;
            edcPerBudget22 = response.data.data[i].budget_percentage;
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
         if (response.data.data[i].category == "RETIREMENT") {
            retirementPerSpent22 = response.data.data[i].spent_percentage;
            retirementPerBudget22 = response.data.data[i].budget_percentage;
         }
      }
      
      var chart22 = new CanvasJS.Chart("chartContainerBudget22", {
         animationEnabled: true,
         title: {
            text: "Spent % on Caregories "
         },
         data: [{
            type: "pie",
            startAngle: 0,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
               { y: groPerSpent22, label: "GROCERIES" },
               { y: miscPerSpent22, label: "MISC" },
               { y: carPerSpent22, label: "CAR" },
               { y: housingPerSpent22, label: "HOUSING" },
               { y: edcPerSpent22, label: "EDUCATION" },
               { y: medPerSpent22, label: "MEDICAL" },
               { y: clothesPerSpent22, label: "CLOTHES" },
               { y: donationPerSpent22, label: "DONATION" },
               { y: businesPerSpent22, label: "BUSINESS" },
               { y: retirementPerSpent22, label: "RETIREMENT" },
               
            ]
         }]
      });
      chart22.render();

      var chartBudgetAcutal = new CanvasJS.Chart("chartBudgetAcutal", {
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
               { x: new Date(2021, 0), y: 20000 },
               { x: new Date(2021, 1), y: 20000 },
               { x: new Date(2021, 2), y: 20000 },
               { x: new Date(2021, 3), y: 20000 },
               { x: new Date(2021, 4), y: 20000 },
               { x: new Date(2021, 5), y: 20000 },
               { x: new Date(2021, 6), y: 20000 },
               { x: new Date(2021, 7), y: 20000 },
               { x: new Date(2021, 8), y: 20000 },
               { x: new Date(2021, 9), y: 20000 },
               { x: new Date(2021, 10), y: 20000 },
               { x: new Date(2021, 11), y: 20000 },
            ]
         },
         {
            type: "line",
            name: "Spent",
            showInLegend: true,
            yValueFormatString: "#,##0.# Units",
            dataPoints: [
               { x: new Date(2021, 0), y: 11000 },
               { x: new Date(2021, 1), y: 11000 },
               { x: new Date(2021, 2), y: 11000 },
               { x: new Date(2021, 3), y: 11000 },
               { x: new Date(2021, 4), y: 11000 },
               { x: new Date(2021, 5), y: 11000 },
               { x: new Date(2021, 6), y: 11000 },
               { x: new Date(2021, 7), y: 11000 },
               { x: new Date(2021, 8), y: 11000 },
               { x: new Date(2021, 9), y: 11000 },
               { x: new Date(2021, 10), y: 11000 },
               { x: new Date(2021, 11), y: 11000 },
            ]
         }]
      });

      chartBudgetAcutal.render();
   })

   BudgetFactory.yearReview2021().then(function (response) {
      $scope.yearReview2021 = response.data.data;
   })

   ////// SALARY REVIEW //// 

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

   BudgetFactory.BMVYear().then(function (response) {
      $scope.BMVYear = response.data.data;
   });

   BudgetFactory.lifeEvents().then(function (response) {
      $scope.lifeEvents = response.data.data;
   });
   BudgetFactory.specialEvents().then(function (response) {
      $scope.specialEvents = response.data.data;
   });

   BudgetFactory.paymentTypesTrans().then(function (response) {
      $scope.paymentTypesTrans = response.data.data;
   });

   BudgetFactory.IRAPerYear().then(function (response) {
      $scope.IRAPerYear = response.data.data;
   });

   BudgetFactory.houseExtraPrin().then(function (response) {
      $scope.houseExtraPrin = response.data.data;
   });

   BudgetFactory.housePayments().then(function (response) {
      $scope.housePayments = response.data.data;
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

   BudgetFactory.RingSpent().then(function (response) {
      $scope.RingSpent = response.data.data;
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