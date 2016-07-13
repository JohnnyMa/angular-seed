'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp.message', 'functionalities'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function(messages) {
	console.log('this is in view1');
	var self = this;

	self.messages = messages.list;
});