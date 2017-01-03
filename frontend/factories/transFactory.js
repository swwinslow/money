app.factory('TransFactory', function($http, $rootScope) {

    var data = {};
    var baseUrl = location.origin +'/money/backend/public/api/trans';

    data.getAllTrans = function(plant_id) {
        $http.get(baseUrl);
    }

    data.createInvestment = function (pay) {
        $http({
            method: "POST",
            url: baseUrl + '/createTransaction',
            data: {
                "business": pay.business,
                "money": pay.money,
                "itmes" : pay.itmes,
                "parents" : pay.parents,
                "date": pay.date
            }
        });
    }

    data.updateInvestment = function(pay){
        $http({
            method: "PUT",
            url: baseUrl + '/updateTransaction',
            data: {
                "business": pay.business,
                "money": pay.money,
                "itmes" : pay.itmes,
                "parents" : pay.parents,
                "date": pay.date,
                "id" : pay.id
            }
        });
    }

    return data;
});
