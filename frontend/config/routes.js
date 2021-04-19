app.config(function ($routeProvider, CONFIG) {
    $routeProvider.
    when('/', {
        controller: 'HomePageController',
        templateUrl: 'views/home.html'
    }).
    when('/pay', {
        controller: 'PayViewController',
        templateUrl: 'views/pay.html'
    }).
    when('/transaction', {
        controller: 'TransactionViewController',
        templateUrl: 'views/transaction.html'
    }).
    when('/investments', {
        controller: 'InvestmentViewController',
        templateUrl: 'views/investments.html'
    }).
    when('/test', {
        controller: 'InvestmentViewController',
        templateUrl: 'views/test.html'
    }).
    when('/budget', {
        controller: "BudgetController",
        templateUrl: 'views/budget.html'
    }).
    when('/recipe', {
        controller: "RecipeController",
        templateUrl: 'views/recipe.html'
    }).
    when('/blddd', {
        controller: "BLDDDController",
        templateUrl: 'views/blddd.html'
    }).
    when('/pelo', {
        controller: "PeloController",
        templateUrl: 'views/pelo.html'
    }).
    otherwise({
        controller: '404ViewController',
        templateUrl: 'views/404.html'
    });
});