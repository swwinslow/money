app.controller('PayViewController', function(CONFIG, $scope, $location, PayFactory){
    
    PayFactory.getAllPay().then(function (response){
       console.log(response.data.data); 
        $scope.payments = response.data.data;
    });

});