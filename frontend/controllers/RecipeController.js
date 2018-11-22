app.controller('RecipeController', function(CONFIG, $scope, $location, RecipeFactory){

    RecipeFactory.getAllRecipe().then(function (response){
        console.log(response.data.data[0]['information']['url']);
        $scope.recipes = response.data.data;
    });

     $scope.submitRecipe = function(recipie){         
         
         

		RecipeFactory.saveNewRecipe(recipie).then(function(response){
             $scope.payments.unshift(recipie);
             console.log("Recipie is created");
             

         }, function (error){
             console.log("There is an error");
             $scope.showError = true;
             $scope.showErrorMessage = error;
         });


     }


    
});
