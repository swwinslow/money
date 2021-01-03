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

    $scope.budget = function(){
        $location.path("/budget");
    };

    $scope.recipe = function(){
        $location.path("/recipe");
    };

    $scope.blddd = function(){
        $location.path("/blddd");
    };
    
    $scope.home = function(){
        $location.path("/");
    }
});

