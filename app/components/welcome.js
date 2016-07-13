'use strict';

angular.module('myApp.welcome', [])
.directive('welcomeq', function() {
	return {
		restrict: "A",
		link: function () {
			// alert("hello");
			console.log("hello from myApp.welcome...")
		}
	}
});