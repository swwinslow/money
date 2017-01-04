 app.controller('TransactionViewController', function(CONFIG, $scope, $location, TransFactory){
     
     $scope.showNewTransaction = false;
    
    TransFactory.getAllTrans().then(function (response){
        $scope.transaction = response.data.data;
        for(var i = 0; i < $scope.transaction.length; i++){
            if($scope.transaction[i].parents == 1){
                $scope.transaction[i].parents = true;
            }
        }
        console.log(response.data.data);
    }, function (error){
        
    });
     
     $scope.addTransaction = function(){
       $scope.showNewTransaction = true; 
    $scope.newTrans = {};
     };
     
     $scope.submitTransaction = function(money){         
         ogMoney = money;
         if(money == undefined){
             console.log("There is no object");
         }
         
         if(money.parents == undefined){
             money.parents = 0;
         } else {
            if(money.parents == true){
                money.parents = 1;
            } else {
                money.parents = 0;  
            }
         }
            
         TransFactory.createTransaction(money).then(function (respoonse){
             $scope.transaction.push(ogMoney);
             $scope.newTrans = {};
             $scope.showNewTransaction = false;
         }, function (error){
             console.log("There is an error");
             $scope.showErrorWithNew = true;
             $scope.showErrorMessage = error;
         });
     }
});
