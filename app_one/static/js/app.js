var buttons_app = angular.module('buttons_app', ['ngRoute','firebase']);

buttons_app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'static/views/login.html',
        controller: 'authController'
    });

    $routeProvider.when('/buttons', {
        templateUrl: 'static/views/buttons.html',
        controller: 'buttonsController'
    });

    $routeProvider.when('/results', {
        templateUrl: 'static/views/results.html',
        controller: 'resultsController'
    });

}]);

buttons_app.directive('scrollOnClick', function() {
  return {
    restrict: 'A',
    link: function(scope, $elm, attrs) {
      var idToScroll = attrs.href;
      $elm.on('click', function() {
        var $target;
        if (idToScroll) {
          $target = $(idToScroll);
        } else {
          $target = $elm;
        }
        $("body").animate({scrollTop: $target.offset().top}, "slow");
      });
    }
  }
});