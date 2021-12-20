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
    
    $scope.networth = function(){
        $location.path("/networth");
    };
    $scope.peloseth = function(){
        $location.path("/pelo-seth");
    };
    $scope.peloemily = function(){
        $location.path("/pelo-emily");
    };
    //
    
    $scope.home = function(){
        $location.path("/");
    }
});

