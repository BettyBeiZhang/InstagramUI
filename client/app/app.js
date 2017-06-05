

angular.module('app', [
  'app.home',
	'app.service',
	'ngRoute'
	])

.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl:"app/home/home.html",
		controller:"HomeController"
	})
	.otherwise({
		redirectTo: '/'
	});

});
