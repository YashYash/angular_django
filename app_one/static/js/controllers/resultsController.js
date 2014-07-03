/**
 * Created by yash on 7/2/2014.
 */
function buttonsController($scope, $http, $routeParams, $firebase) {
    var ref = new Firebase("https://buttonclicker.firebaseio.com/click-count");
    console.log("controller working");
    ref.once('value', function(dataSnapshot) {
        refSnapshot = dataSnapshot;
        $scope.data = refSnapshot.val();
    });
    $scope.click_function = function(color){
        if ($scope.data[color]) {
            $scope.data[color]++;
        } else {
           $scope.data[color] = 1;
        }
        ref.set($scope.data);
        console.log($scope.data[color]);
    }
}