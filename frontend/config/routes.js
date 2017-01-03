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
    otherwise({
        controller: '404ViewController',
        templateUrl: 'views/404.html'
    });
});