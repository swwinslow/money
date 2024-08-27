app.controller('InvestmentController', function(CONFIG, $scope, $location, BudgetFactory){
    BudgetFactory.IRAPerYear().then(function (response) {
        $scope.IRAPerYear = response.data.data;
     });
});
