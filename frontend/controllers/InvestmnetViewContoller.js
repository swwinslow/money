app.controller('InvestmentViewController', function(CONFIG, $scope, $location, InvestmentFactory, PayFactory){
    
    $scope.showNewInvestment = false;
    
    InvestmentFactory.getAllInvestments().then(function (response){
       console.log(response.data.data); 
        $scope.investments = response.data.data;
    }, function(error){
        $scope.showError = true;
        $scope.showErrorMessage = error;

    });
    
    $scope.updateInvestment = function(investment){
       
        InvestmentFactory.updateInvestment(investment).then(function (response){
            console.log("update is complete")
        }, function(error){
            $scope.showError = true;
            $scope.showErrorMessage = error;
        }); 
    }
    
    $scope.deleteInvestment = function(investment){
        
        console.log(investment);
        
        $scope.investments.splice(investment, 1);

        InvestmentFactory.deleteInvestment(investment).then(function (response){
            console.log("delete is complete")
        }, function(error){
            $scope.showError = true;
            $scope.showErrorMessage = error;
        });
    }
    
    $scope.addInvestment = function(pay){
            $scope.showNewInvestment = true;
    }
    
    $scope.submitInvestment = function(investment){         
         ogMoney = investment;
         if(investment == undefined){
             console.log("There is no object");
         }
         
         InvestmentFactory.createInvestment(investment).then(function (respoonse){
             $scope.investments.unshift(investment);
             $scope.newInvestment = {};
             $scope.showNewInvestment = false;
                          console.log('good');

         }, function (error){
             console.log('asdf');
             console.log("There is an error");
             $scope.showError = true;
             $scope.showErrorMessage = error;
         });
     }
    
    $scope.home = function(){
        $location.path("/");
    }
  
});
