/**
 * Created by yash on 7/3/2014.
 */
buttons_app.controller('authController', function($scope, $location, $firebase, buttons_appService) {
	console.log("auth controller is working");

  	var ref = new Firebase("https://buttonclicker.firebaseio.com/click-count");


	$scope.auth = { username: "", password: ""};

	$scope.register = function(){
		var email = $scope.auth.username;
		var password = $scope.auth.password;
        authClient.createUser(email, password, function (error, user) {
            if (!error) {
                console.log('New user registered');
                authService.doLogin(email, password);
                $location.path("/");
                console.log("new user logged in");

            } else {
                alert(error);
            }
        });
        console.log("logging in " + $scope.auth.username);
    };

	$scope.login = function(){
		console.log('trying to login: ' + $scope.auth.username);
		var email = $scope.auth.username;
		var password = $scope.auth.password;
        buttons_appService.doLogin(email, password);
    };

	$scope.fblogin = buttons_appService.fblogin;

	$scope.twitterlogin = buttons_appService.twitterlogin;

	$scope.logout = buttons_appService.logout;


	var authClient = new FirebaseSimpleLogin(ref, function (error, user) {
	    if (error) {
	        alert(error);
	        return;
	    }
	    if (user) {
	        // User is already logged in.
	        console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
	        myUser = user;
	        // doLogin(user);
	        console.log('logged in')
	    } else {
	        // User is logged out.
	        console.log('logged out');
	    }
	});

});