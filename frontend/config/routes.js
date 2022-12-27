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
    when('/pelo-seth', {
        controller: "PeloController",
        templateUrl: 'views/pelo.html'
    }).
    when('/pelo-emily', {
        controller: "PeloEmilyController",
        templateUrl: 'views/pelo-emily.html'
    }).
    when('/networth', {
        controller: "NetWorthController",
        templateUrl: 'views/net_worth.html'
    }).
    when('/pastBudget', {
        controller: "PastBudgetController",
        templateUrl: 'views/pastbudget.html'
    }).
    when('/home', {
        controller: "HomeController",
        templateUrl: 'views/home_page.html'
    }).
    otherwise({
        controller: '404ViewController',
        templateUrl: 'views/404.html'
    });
});