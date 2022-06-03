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
     BudgetFactory.veevaPay().then(function (response) {
      $scope.veevaPay = response.data.data;
     });
     BudgetFactory.EmilyPay().then(function (response) {
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

    BudgetFactory.totalPay().then(function (response) {
      $scope.totalPay = response.data.data;

      $scope.lillyTotal = $scope.totalPay.Lilly[0].money;
      $scope.UKGTotal = $scope.totalPay.UKG[0].money;
      $scope.veevaTotal = $scope.totalPay.Veeva[0].money;
      $scope.ccTotal = $scope.totalPay.CC[0].money;
      $scope.bankTotal = $scope.totalPay.Bank[0].money;
      $scope.total = $scope.totalPay.Total[0].money;

     });
  

});