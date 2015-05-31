var app = angular.module('app', ['ui-router']);

app.config(['$stateProvider', function($stateProvider) {
	
	var home = {
		name: 'home',
		url: '/',
		templateUrl: 'content.html'
	},

	red = {
		name: 'red',
		url: '/red',
		parent: home,
		templateUrl: 'content.red.html'
	},

	blue = {
		name: 'blue',
		url: '/blue',
		parent: home,
		templateUrl: 'content.blue.html'
	}

	$stateProvider.state(home);
	$stateProvider.state(red);
	$stateProvider.state(green);
	
}]);
