'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', function(messages) {
	var self = this;
    self.people = [
      {
        name: "Eric Simons",
        born: "Chicago"
      },
      {
        name: "Albert Pai",
        born: "Taiwan"
      },
      {
        name: "Johnny",
        born: "Virginia"
      },
      {
        name: "Tony",
        born: "UK"
      },
      {
        name: "Anne",
        born: "USA"
      },
      {
        name: "Howard",
        born: "Japan"
      },
      {
        name: "Tom",
        born: "China"
      },
      {
        name: "Lily",
        born: "Vhine"
      }
    ];
})

.filter('startsWithA', function () {
  return function (items) {
    var filtered = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (/a/i.test(item.name.substring(0, 1))) {
        filtered.push(item);
      }
    }
    return filtered;
  };
});