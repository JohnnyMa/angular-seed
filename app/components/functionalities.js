angular.module('functionalities', [])
.directive('entering', function () {
	return function (scope, element) {
		element.bind('mouseenter', function () {
			console.log('mouse entering...');
			element.addClass("activeClass");
		});
	};
})
.directive('leaving', function () {
	return function (scope, element) {
		element.bind('mouseleave', function () {
			console.log('mouse leaving...');
			element.removeClass("activeClass");
		});
	};
})