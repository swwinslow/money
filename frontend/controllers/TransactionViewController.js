 app.controller('TransactionViewController', function(CONFIG, $scope, $location, TransFactory){
     
     $scope.showNewTransaction = false;
     $scope.showNewKroger = false;
     $scope.showNewGas = false;
     $scope.showNewMeal = false;

     
     $scope.categories = [
         "Groceries",
         "School",
         "Parents",
         "Desserts",
         "Misc",
         "Friends",
         "Meal",
         "Gas",
         "Need",
         "Business",
         "AWS",
         "Insurance",
         "Car",
         "Housing"
     ]
    
    TransFactory.getAllTrans().then(function (response){
        $scope.transaction = response.data.data;
        for(var i = 0; i < $scope.transaction.length; i++){
            if($scope.transaction[i].parents == 1){
                $scope.transaction[i].parents = true;
            }
        }
    }, function (error){
        
    });
     
     $scope.addTransaction = function(){
       $scope.showNewTransaction = true; 
       $scope.showNewGas = false;
       $scope.showNewKroger = false; 
       $scope.showNewMeal = false;
       $scope.newTrans = {};
     };

     $scope.addKroger = function(){
        $scope.showNewKroger = true; 
        $scope.showNewGas = false;
        $scope.showNewTransaction = false; 
        $scope.showNewMeal = false;
        $scope.newTrans = {};
      };

      $scope.addGas = function(){
        $scope.showNewGas = true;
        $scope.showNewKroger = false; 
        $scope.showNewTransaction = false; 
        $scope.showNewMeal = false;

        $scope.newTrans = {};
      };

      $scope.showMeal = function(){
          $scope.showNewMeal = true;
        $scope.showNewGas = false;
        $scope.showNewKroger = false; 
        $scope.showNewTransaction = false; 

        $scope.newTrans = {};
      }

      $scope.submitMeal = function(money){
        money.items= 'Breakfast / Lunch / Dinner';
        money.category='Meal';         
        ogMoney = money;
        if(money == undefined){
            console.log("There is no object");
        }

        TransFactory.createTransaction(money).then(function (respoonse){
            $scope.transaction.unshift(ogMoney);
            $scope.newTrans = {};
            $scope.showNewTransaction = false;
        }, function (error){
            console.log("There is an error");
            $scope.showErrorWithNew = true;
            $scope.showErrorMessage = error;
        });
    }

    $scope.submitKroger = function(money){
        money.business = 'Kroger';
        money.items= 'Grocercies';
        money.category='Groceries';         
        ogMoney = money;
        if(money == undefined){
            console.log("There is no object");
        }

        TransFactory.createTransaction(money).then(function (respoonse){
            $scope.transaction.unshift(ogMoney);
            $scope.newTrans = {};
            $scope.showNewTransaction = false;
        }, function (error){
            console.log("There is an error");
            $scope.showErrorWithNew = true;
            $scope.showErrorMessage = error;
        });
    }

    $scope.submitGas = function(money){
        money.items= 'Gas';
        money.category='Gas';         
        ogMoney = money;
        if(money == undefined){
            console.log("There is no object");
        }

        TransFactory.createTransaction(money).then(function (respoonse){
            $scope.transaction.unshift(ogMoney);
            $scope.newTrans = {};
            $scope.showNewTransaction = false;
        }, function (error){
            console.log("There is an error");
            $scope.showErrorWithNew = true;
            $scope.showErrorMessage = error;
        });
    }
     
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
             $scope.transaction.unshift(ogMoney);
             $scope.newTrans = {};
             $scope.showNewTransaction = false;
         }, function (error){
             console.log("There is an error");
             $scope.showErrorWithNew = true;
             $scope.showErrorMessage = error;
         });
     }
     
     $scope.updateTrans = function(updateMoney){
         
         if(updateMoney.parents == true){
             updateMoney.parents = 1;
         } else {
            updateMoney.parents = 0;
         }
         TransFactory.updateTransaction(updateMoney).then(function (respoonse){
             console.log('we are done');
         }, function (error){
             $scope.showError = true;
             $scope.showErrorMessage = error;
         });
     }
     
     $scope.deleteTrans = function(deleteMoney){
         console.log(deleteMoney);
         $scope.transaction.splice(deleteMoney, 1);
         
         TransFactory.deleteTransaction(deleteMoney).then(function (response){
             
         }, function (error){
             $scope.showError = true;
             $scope.showErrorMessage = error;
         })
     }
});
