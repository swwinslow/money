app.factory('InvestmentFactory', function($http, $rootScope) {

    var data = {};
    var baseUrl = location.origin +'/money/backend/public/api/investments';

    data.getAllInvestments = function() {
        return $http.get(baseUrl);
    }

    data.createInvestment = function (pay) {
        return $http({
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
        return $http({
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
    
    data.deleteInvestment = function(pay){
        return $http({
            method: "PUT",
            url: baseUrl + '/deleteInvestment',
            data: {
                "id": pay.id,
            }
        });
    }
    
    

    return data;
});
