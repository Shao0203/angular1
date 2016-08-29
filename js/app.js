var myApp = angular.module('myApp',[]);

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