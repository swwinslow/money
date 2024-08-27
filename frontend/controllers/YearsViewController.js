app.controller('YearsViewController', function (CONFIG, $scope, $location, YearsFactory) {

    var data = {};
    var baseUrl = location.origin +'/money/backend/public/api/years';

    var currentYear = new Date().getFullYear();

    console.log('hello');

    YearsFactory.getPast().then(function (response) {
        console.log('in function');
        $scope.specialEvents = response.data.data;
   });

}); 