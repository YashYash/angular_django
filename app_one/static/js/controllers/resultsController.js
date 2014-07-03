/**
* Created by yash on 7/2/2014.
*/
function resultsController($scope, $http, $routeParams, $firebase) {
  var ref = new Firebase("https://buttonclicker.firebaseio.com/click-count");
  console.log("controller working");
  ref.once('value', function(dataSnapshot) {
      refSnapshot = dataSnapshot;
      $scope.data = refSnapshot.val();
  });
  if (!$scope.data) {
    $scope.data = {
      'blue': 0,
      'red': 0,
      'yellow': 0
    }
  }
}