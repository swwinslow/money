app.controller('HomePageController', function(CONFIG, $scope, $location){

    $scope.investment = function(){
        $location.path("/investments");
    };
    
    $scope.pay = function(){
        $location.path("/pay");
    };
    
    $scope.transaction = function(){
        $location.path("/transaction");
    };
});