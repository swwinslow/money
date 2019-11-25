app.controller('BudgetController', function(CONFIG, $scope, $location, BudgetFactory){

    $scope.showNewPay = false;
    $scope.showError = false;

    BudgetFactory.fullYearReview2019().then(function(response){
        $scope.year2019 = response.data.data; 
     });

     BudgetFactory.fullYearReview2020().then(function(response){
      $scope.year2020 = response.data.data; 
    });

     BudgetFactory.yearCategoryReview2019().then(function(response){
        $scope.yearCategory2019 = response.data.data; 
     })

     BudgetFactory.yearCategoryReview2020().then(function(response){

      console.log('hello');
      console.log(response.data.data);
      $scope.yearCategory2020 = response.data.data; 
   })

     BudgetFactory.yearReview2020().then(function(response){
      $scope.yearReview2020 = response.data.data;
      console.log($scope.yearReview2020); 
   })

    BudgetFactory.salaryReview2019().then(function(response){
       console.log(response);
        $scope.year2019Difference = response.data.data[0]['money'];
        $scope.year2019Trans = response.data.data[0]['trans'];
        $scope.year2019Salary = response.data.data[0]['salary'];
     });

     BudgetFactory.salaryReview2020().then(function(response){
      console.log(response);
       $scope.year2020Difference = response.data.data[0]['money'];
       $scope.year2020Trans = response.data.data[0]['trans'];
       $scope.year2020Salary = response.data.data[0]['salary'];
    });

     BudgetFactory.payVSpent2019().then(function(response){
      $scope.payvspent2019 = response.data.data;
    });
    
    BudgetFactory.payVSpent2020().then(function(response){
      $scope.payvspent2020 = response.data.data;
   });

});