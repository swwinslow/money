app.controller('HomePageController', function(CONFIG, $scope, $location, CompleteFactory){

    $scope.totalIRA = 0;
    $scope.totalInvestment = 0;

    $scope.totalTrans = 0;
    $scope.totalPay = 0;
    $scope.totalDifferent = 0;

    $scope.showError = false;
    
    CompleteFactory.getPayTotal().then(function (response){
      var data = response.data.data;

      if(data.length > 0){
        $scope.totalPay = data[0].CompleteTotalForPay;
      } else {
        $scope.showError = true;
        $scope.errorMessage = "Complete Total for pay is not coming in correctly";
      }
    });

    CompleteFactory.getTotalInvestment().then(function (response){
        $scope.totalInvestment =response.data.data.total;
        $scope.totalIRA =response.data.data.totalIRA;
        $scope.totalDifferent =response.data.data.Difference;
        console.log(response.data.data.Difference);
    });

    CompleteFactory.getTransTotal().then(function (response){

    }, function (error){

    });







});
