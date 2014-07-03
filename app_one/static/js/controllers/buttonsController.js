/**
 * Created by yash on 7/2/2014.
 */
function buttonsController($scope, $http, $routeParams, $firebase, $location) {
    var ref = new Firebase("https://buttonclicker.firebaseio.com/click-count");
    ref.once('value', function(dataSnapshot) {
        refSnapshot = dataSnapshot;
        $scope.data = refSnapshot.val();
    });
    if (!$scope.data) {
        $scope.data = {};
    }
    $scope.click_function = function(color){
        if ($scope.data[color]) {
            $scope.data[color]++;
        } else {
           $scope.data[color] = 1;
        }
        ref.set($scope.data);
        $location.path('/results');
    }
}