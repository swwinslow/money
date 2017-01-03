app.factory('PayFactory', function($http, $rootScope) {

    var data = {};
    var baseUrl = location.origin +'/money/backend/public/api/pay';



    data.getAllPay = function(plant_id) {
        $http.get(baseUrl);
    }

    data.createPay = function (pay) {
        $http({
            method: "POST",
            url: baseUrl + '/createPay',
            data: {
                "company": pay.company,
                "amount": pay.amount,
                "date": pay.date
            }
        });
    }

    data.updatePay = function(pay){
        $http({
            method: "PUT",
            url: baseUrl + '/updatePay',
            data: {
                "company": pay.company,
                "amount": pay.amount,
                "date": pay.date,
                "id": pay.id,
            }
        });
    }

    return data;
});
