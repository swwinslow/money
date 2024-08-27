app.controller('GroceryController', function ($http, CONFIG, $scope, $location, BudgetFactory) {

    BudgetFactory.insightData().then(function (response) {
        $scope.Grocercies = response.data.data.Grocercies;
     });

    BudgetFactory.KrogerSpent().then(function (response) {
        $scope.KrogerSpent = response.data.data;
     })
  
     BudgetFactory.CostcoSpent().then(function (response) {
        $scope.CostcoSpent = response.data.data;
     })
});

