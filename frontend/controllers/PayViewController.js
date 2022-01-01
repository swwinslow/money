app.controller('PayViewController', function(CONFIG, $scope, $location, PayFactory, BudgetFactory){


    BudgetFactory.payVSpent2020().then(function (response) {
        $scope.payvspent2020 = response.data.data;
     });
  
     BudgetFactory.payVSpent2021().then(function (response) {
        $scope.payvspent2021 = response.data.data;
     });
     BudgetFactory.nextPayDay().then(function (response) {
        $scope.nextPayDay = response.data.data;
     })
     BudgetFactory.elementsPay().then(function (response) {
        $scope.elementsPay = response.data.data;
     });
  
     BudgetFactory.lillyPay().then(function (response) {
        $scope.lillyPay = response.data.data;
     });
     BudgetFactory.EmilyPay().then(function (response) {
         console.log(response.data.data);
        $scope.EmilyPay = response.data.data;
     });
  
     BudgetFactory.SethPay().then(function (response) {
        $scope.SethPay = response.data.data;
     });
     BudgetFactory.insightData().then(function (response) {
        $scope.PayYear = response.data.data.PayYear;
     });

    BudgetFactory.chaseCreditCardPay().then(function (response) {
        $scope.chaseCreditCardPay = response.data.data;
    });
  

});