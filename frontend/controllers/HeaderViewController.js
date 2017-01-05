app.controller('HeaderViewController', function(CONFIG, $scope, $location){

    $scope.investment = function(){
        $location.path("/investments");
    };
    
    $scope.pay = function(){
        $location.path("/pay");
    };
    
    $scope.transaction = function(){
        $location.path("/transaction");
    };
    
    $scope.home = function(){
        $location.path("/");
    }
});

