'use strict';

angular.module('myApp.view2', ['ngRoute', 'myApp.message'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function(messages) {
	var self = this;

	self.newMessage = 'hello world';

    self.addMessage = function(message){
        messages.add(message);
        self.newMessage = '';
    };
});