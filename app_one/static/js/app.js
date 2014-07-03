var buttons_app = angular.module('buttons_app', ['ngRoute','firebase']);

buttons_app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'static/views/buttons.html',
        controller: 'buttonsController'
    });

    $routeProvider.when('/results', {
        templateUrl: 'static/views/results.html',
        controller: 'resultsController'
    });

}]);

