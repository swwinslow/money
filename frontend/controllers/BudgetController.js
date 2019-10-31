app.controller('BudgetController', function(CONFIG, $scope, $location, BudgetFactory){

    $scope.showNewPay = false;
    $scope.showError = false;

    BudgetFactory.getOverviewSeth().then(function(response){
        $scope.SethData = response.data.data; 
     });

     BudgetFactory.yearReview().then(function(response){
        $scope.yearReview = response.data.data; 
        console.log($scope.yearReview);
     })

   
    BudgetFactory.yearReview2019().then(function(response){
        $scope.year2019Difference = response.data.data[0]['money'];
        $scope.year2019Trans = response.data.data[0]['trans'];
        $scope.year2019Salary = response.data.data[0]['salary'];
     });
});