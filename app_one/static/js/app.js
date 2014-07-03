var buttons_app = angular.module('buttons_app', ['ngRoute']);

buttons_app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'static/views/buttons.html',
        controller: 'buttonsController'
    });

    $routeProvider.otherwise({redirectTo: '/'})


}]);

