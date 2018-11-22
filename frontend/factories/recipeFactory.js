app.factory('RecipeFactory', function($http, $rootScope) {

    var data = {};
    var baseUrl = location.origin +'/money/backend/public/api/recipe';

    data.getAllRecipe = function() {
        return $http.get(baseUrl + '/all');
    }

    data.saveNewRecipe = function (recipie) {
        return $http({
            method: "POST",
            url: baseUrl + '/create',
            data: {
                "URL": recipie.URL,
            }
        });
    }



    return data;
});
