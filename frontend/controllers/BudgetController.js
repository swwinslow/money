app.controller('BudgetController', function (CONFIG, $scope, $location, BudgetFactory) {

   $scope.showNewPay = false;
   $scope.showError = false;

   $scope.currentYearDisplay = new Date().getFullYear();

   const month = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
   $scope.monthName = month[new Date().getMonth()];

   var groPerBudget = 0;
   var miscPerBudget = 0;
   var carPerBudget = 0;
   var housingPerBudget = 0;
   var edcPerBudget = 0;
   var medPerBudget = 0;
   var clothesPerBudget = 0;
   var donationPerBudget = 0;
   var businesPerBudget = 0;
   var savingsPerBudget = 0;
   var groPerSpent = 0;
   var miscPerSpent = 0;
   var carPerSpent = 0;
   var housingPerSpent = 0;
   var edcPerSpent = 0;
   var medPerSpent = 0;
   var clothesPerSpent = 0;
   var donationPerSpent = 0;
   var businesPerSpent = 0;
   
   BudgetFactory.fullYearReview().then(function (response) {
      $scope.currentYear = response.data;
   });

   BudgetFactory.yearCategoryReview().then(function (response) {
      $scope.yearCategoryCurrentYear = response.data;
      console.log("HEEEEEEEEEEEEEEE");

      for (var i = 0; i < response.data.length; i++) {
         if (response.data[i].category == "GROCERIES") {
            groPerSpent = response.data[i].spent_percentage;
            groPerBudget = response.data[i].budget_percentage;
         }
         if (response.data[i].category == "MISC") {
            miscPerSpent = response.data[i].spent_percentage;
            miscPerBudget = response.data[i].budget_percentage;
         }
         if (response.data[i].category == "CAR") {
            carPerSpent = response.data[i].spent_percentage;
            carPerBudget = response.data[i].budget_percentage;
         }
         if (response.data[i].category == "HOUSING") {
            housingPerSpent = response.data[i].spent_percentage;
            housingPerBudget = response.data[i].budget_percentage;
         }
         if (response.data[i].category == "EDUCATION") {
            edcPerSpent = response.data[i].spent_percentage;
            edcPerBudget = response.data[i].budget_percentage;
         }
         if (response.data[i].category == "MEDICAL") {
            medPerSpent = response.data[i].spent_percentage;
            medPerBudget = response.data[i].budget_percentage;
         }
         if (response.data[i].category == "CLOTHES") {
            clothesPerSpent = response.data[i].spent_percentage;
            clothesPerBudget = response.data[i].budget_percentage;
         }
         if (response.data[i].category == "DONATION") {
            donationPerSpent = response.data[i].spent_percentage;
            donationPerBudget = response.data[i].budget_percentage;
         }
         if (response.data[i].category == "BUSINESS") {
            businesPerSpent = response.data[i].spent_percentage;
            businesPerBudget = response.data[i].budget_percentage;
         }
         if (response.data[i].category == "RETIREMENT") {
            retirementPerSpent = response.data[i].spent_percentage;
            retirementPerBudget = response.data[i].budget_percentage;
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
               { y: groPerSpent, label: "GROCERIES" },
               { y: miscPerSpent, label: "MISC" },
               { y: carPerSpent, label: "CAR" },
               { y: housingPerSpent, label: "HOUSING" },
               { y: edcPerSpent, label: "EDUCATION" },
               { y: medPerSpent, label: "MEDICAL" },
               { y: clothesPerSpent, label: "CLOTHES" },
               { y: donationPerSpent, label: "DONATION" },
               { y: businesPerSpent, label: "BUSINESS" },
               { y: retirementPerSpent, label: "RETIREMENT" },
               
            ]
         }]
      });
      chart22.render();
   })

   BudgetFactory.yearReview2021().then(function (response) {
      $scope.yearReview2021 = response.data.data;
   })

   ////// TOP LINE //// 
   BudgetFactory.salaryReview().then(function (response) {
      $scope.top_line_Difference = response.data[0]['money'];
      $scope.top_line_Trans = response.data[0]['trans'];
      $scope.top_line_Salary = response.data[0]['salary'];
      $scope.top_line_budget = response.data[0]['budget'];
      $scope.top_line_Uncounted = response.data[0]['uncounted_money'];
   });

   /// SUBSCRIPTION ////
   BudgetFactory.subscription().then(function (response) {
      $scope.subscription = response.data.data;
   })

   /// SUBSCRIPTION ////

   ////////// STANDARD METRICS ////////////
   ////////// STANDARD METRICS ////////////
   ////////// STANDARD METRICS ////////////

   BudgetFactory.insightData().then(function (response) {
      console.log(response.data);
      $scope.homestuff = response.data.homestuff;
      $scope.Grocercies = response.data.Grocercies;
      $scope.CarGas = response.data.CarGas;
      $scope.SFCar = response.data.SFCar;
      $scope.PayYear = response.data.PayYear;
   });

   BudgetFactory.gerneralData().then(function (response) {
      $scope.gerneralData = response.data;
      $scope.Data_Grocercies = response.data.Grocercies[0];
      $scope.Data_Car = response.data.Car[0];
      $scope.Data_Apartment = response.data.Apartment[0];
      $scope.Data_GeneralHousing = response.data.GeneralHousing[0];
      $scope.Data_TotalMortage = response.data.TotalMortage[0];
      $scope.Data_ExtraPrincibal = response.data.ExtraPrincibal[0];
   });

   BudgetFactory.HouseUtils().then(function (response) {
      $scope.HouseUtils = response.data;
   });

   BudgetFactory.BMVYear().then(function (response) {
      $scope.BMVYear = response.data;
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

   BudgetFactory.amazonSpent().then(function (response) {
      $scope.amazonSpent = response.data.data;
   })

   BudgetFactory.KrogerSpent().then(function (response) {
      $scope.KrogerSpent = response.data.data;
   })

   BudgetFactory.CostcoSpent().then(function (response) {
      $scope.CostcoSpent = response.data.data;
   })

   BudgetFactory.medicalSpent().then(function (response) {
      $scope.medicalSpent = response.data.data;
   })



});