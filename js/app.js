var myApp = angular.module('App',[]);

myApp.controller('UserController',function($scope){
	$scope.user = {
		name: 'shao',
		age: 29,
		run: function() {
			console.log(this.name + this.age);
		}
	};

	$scope.name = 'syl';
});

myApp.controller('ShowController',function($scope) {
	
	$scope.shows = [
		{title:'aaa', book:true, rate:7.9, updated:1409632203, des:'This is a great'},
		{title: 222, book:false, rate:9.1, updated:1401712225, des:'It\'s a good story'},
		{title:'cca', book:true, rate:9.5, updated:1407673821, des:'ij1 2 5dfsdf6'},
		{title: 444, book:false, rate:8.2, updated:1420720230, des:'31 2 sdf sd378'},
		{title:'eee', book:true, rate:6.5, updated:1420115455, des:'xy zdsdf 2 90'}
	];

	$scope.comparator = function(actual, expected) {
		return actual > expected;
	};
});

// service start

myApp.factory('User', function() {
	var userA = {
		id: 99,
		name: 'shao',
		email: 'nzsyl0203@gmail.com'
	};

	var _getUser = function() {
		return userA;
	};
	var _setUser = function() {
		userA.id = 88;
		userA.name = 'bright';
		userA.email = 'shao@yahoo.com';
	};
	var _setBack = function() {
		userA.id = 99;
		userA.name = 'shao';
		userA.email = 'nzsyl0203@gmail.com';	
	};
	return {
		getUser: _getUser,
		setUser: _setUser,
		setBack: _setBack
	};

})

myApp.controller('GetUserController', function($scope, User) {
	$scope.human = User.getUser();
});

myApp.controller('SetUserController', function($scope, User) {
	$scope.update = function() {
		User.setUser();
	}
	$scope.setBack = function() {
		User.setBack();
	}
});

// service end

//$log

myApp.controller('LogController', function($scope, $log) {
	$log.log('log...');
	$log.info('info...');
	$log.warn('warning...');
	$log.error('error...');
	$log.debug('debug...');
});

myApp.config(function($logProvider) {
	$logProvider.debugEnabled(false);
})

//timeOut

myApp.controller('TimeController', function($scope, $log, $timeout) {
	$scope.gameOn = function() {
		$log.log('loggg.......');
		$scope.timer = $timeout($scope.gameOver, 3000);
	};
	$scope.gameOver = function() {
		$timeout.cancel($scope.timer);
		$log.info('infooo......');
	};

});

//$q - defer & promise

myApp.controller('DeferController', function($scope, $log, GithubService) {
	GithubService.login();
});

myApp.factory('GithubService', function($log, $q) {
	var _login = function() {
		var defer = $q.defer();
		var data = {status: 'ok', userName: 'Github Shao'};

		if (data.status ==='ok') {
			defer.resolve(data);
		} else {
			defer.reject('Error: no user info...');
		}

		defer.promise.
			then(
				function(resolveData) {
					$log.log('Name: ' +resolveData.userName);
				},
				function(rejectInfo) {
					$log.warn(rejectInfo);
				}
				);

		$log.log(defer);
	};
	return {
		login: _login
	};
});

//$http - angular ajax

myApp.controller('MovieController', function($scope, $http, $log) {

	$scope.getShows = function() {
		$http.get('data.json')
			.then(
				function(data) {
					$scope.shows = data.data;
				},
				function(error) {
					$log.warn(error.data);
				}
			);
	};

});

//Controller as

myApp.controller('SelfController', function() {
	this.name = 'shao';
});


//safe dependency injection

myApp.controller('Safe', ['$scope','$log', function($scope, $log){
	$scope.name = 'shaoyingliang';
	$log.log(33333333333333);
}]);


myApp.controller('name', ['', function(){
	
}])








