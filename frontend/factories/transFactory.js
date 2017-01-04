app.factory('TransFactory', function($http, $rootScope) {

    var data = {};
    var baseUrl = location.origin +'/money/backend/public/api/trans';

    data.getAllTrans = function(plant_id) {
        return $http.get(baseUrl);
    }

    data.createTransaction = function (pay) {
        return $http({
            method: "POST",
            url: baseUrl + '/createTransaction',
            data: {
                "business": pay.business,
                "money": pay.money,
                "items" : pay.items,
                "parents" : pay.parents,
                "date": pay.date
            }
        });
    }

    data.updateTransaction = function(pay){
        return $http({
            method: "PUT",
            url: baseUrl + '/updateTransaction',
            data: {
                "business": pay.business,
                "money": pay.money,
                "items" : pay.items,
                "parents" : pay.parents,
                "date": pay.date,
                "id" : pay.id
            }
        });
    }

    return data;
});
