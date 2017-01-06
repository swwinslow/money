app.controller('HomePageController', function(CONFIG, $scope, $location, CompleteFactory){
    
    $scope.totalIRA = 0;
    $scope.totalInvestment = 0;

    $scope.totalTrans = 0;
    $scope.totalPay = 0;
    $scope.totalDifference = 0;
    
   
    
    CompleteFactory.getPayTotal().then(function (response){
        $scope.totalPay = response.data.data[0].CompleteTotalForPay;
    });
    
    CompleteFactory.getTotalInvestment().then(function (response){
        $scope.totalInvestment =response.data.data.total;
        $scope.totalIRA =response.data.data.totalIRA;
        $scope.totalDifference =response.data.data.Difference;
    });
    
    

    
    


});
