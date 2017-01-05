app.controller('HomePageController', function(CONFIG, $scope, $location, CompleteFactory){
    
    $scope.totalIRA = 0;
    $scope.totalTrans = 0;
    $scope.totalPay = 0;
    
    CompleteFactory.getIRATotal().then(function (response){
        $scope.totalIRA = response.data.data.amount;
    });



});
