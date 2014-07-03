/**
 * Created by yash on 7/3/2014.
 */
buttons_app.service('buttons_appService', function($firebase, $location) {

	myUser = -1;
	var ref = new Firebase("https://buttonclicker.firebaseio.com/click-count");



	this.logout = function(){
		authClient.logout();
		$location.path("/");
	};

	this.doLogin = function(email, password) {
	    authClient.login('password', {
	        email: email,
	        password: password
	    });
	    $location.path("/buttons");
	};

	this.fblogin = function(){
	    authClient.login('facebook');
	    $location.path("/buttons");
    };

	this.twitterlogin = function(){
	    authClient.login('twitter');
	    $location.path("/buttons");
    };

	var authClient = new FirebaseSimpleLogin(ref, function (error, user) {
	    if (error) {
	        alert(error);
            $location.path("/");
	        return;
	    }
	    if (user) {
	        // User is already logged in.
	        console.log('User ID: ' + user.id + ', Provider: ' + user.provider);

	        // doLogin(user);
	        console.log('logged in')
            $location.path("/");
	    } else {
	        // User is logged out.
	        $location.path("/");
	        console.log('logged out');

	    }
	});

});