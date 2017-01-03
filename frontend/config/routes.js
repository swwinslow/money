app.config(function ($routeProvider, CONFIG) {
    $routeProvider.
    when('/', {
        controller: 'HomePageController',
        templateUrl: 'views/home.html',
    }).
    otherwise({
        controller: '404ViewController',
        templateUrl: 'views/404.html '
    });
});




