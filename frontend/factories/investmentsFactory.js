app.factory('InvestmentFactory', function($http, $rootScope) {

    var data = {};
    var baseUrl = location.origin +'/money/backend/public/api/investments';

    data.getAllInvestments = function(plant_id) {
        $http.get(baseUrl);
    }

    data.createInvestment = function (pay) {
        $http({
            method: "POST",
            url: baseUrl + '/createInvestment',
            data: {
                "investment": pay.investment,
                "amount": pay.amount,
                "date": pay.date
            }
        });
    }

    data.updateInvestment = function(pay){
        $http({
            method: "PUT",
            url: baseUrl + '/updateInvestment',
            data: {
                "investment": pay.investment,
                "amount": pay.amount,
                "date": pay.date,
                "id": pay.id,
            }
        });
    }

    return data;
});
