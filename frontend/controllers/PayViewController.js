app.controller('PayViewController', function(CONFIG, $scope, $location, PayFactory){
    
    $scope.showNewPay = false;
    $scope.showError = false;

    
    PayFactory.getAllPay().then(function (response){
       console.log(response.data.data); 
        $scope.payments = response.data.data;
    }, function(error){
        $scope.showError = true;
        $scope.showErrorMessage = error;

    });
    
    $scope.updatePay = function(pay){
       
        PayFactory.updatePay(pay).then(function (response){
            console.log("update is complete")
        }, function(error){
            $scope.showError = true;
            $scope.showErrorMessage = error;
        }); 
    }
    
    $scope.deletePay = function(pay){
        PayFactory.deletePay(pay).then(function (response){
            $scope.payments.splice(pay, 1);
            console.log("delete is complete")
        }, function(error){
            $scope.showError = true;
            $scope.showErrorMessage = error;
        });
    }
    
    $scope.addPay = function(pay){
            $scope.showNewPay = true;
    }
    
    $scope.submitPay = function(pay){         
         ogMoney = pay;
         if(pay == undefined){
             console.log("There is no object");
         }
         
         PayFactory.createPay(pay).then(function (respoonse){
             $scope.payments.unshift(pay);
             $scope.newPay = {};
             $scope.showNewPay = false;
                          console.log('good');

         }, function (error){
             console.log('asdf');
             console.log("There is an error");
             $scope.showError = true;
             $scope.showErrorMessage = error;
         });
     }

});