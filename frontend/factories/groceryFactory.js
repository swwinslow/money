app.factory('GroceryFactory', function($http, $rootScope) {

    var data = {};
    var baseUrl = location.origin +'/money/backend/public/api/pay';

    data.getAllPay = function() {
        return $http.get(baseUrl);
    }

    return data;
});
