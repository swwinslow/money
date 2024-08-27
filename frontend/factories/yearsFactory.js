app.factory('YearsFactory', function($http, $rootScope) {
    var data = {};
    var baseUrl = location.origin +'/money/backend/public/api/years';

    console.log('hello');
    data.getPast = function() {
        return $http.get(baseUrl);
    }
});