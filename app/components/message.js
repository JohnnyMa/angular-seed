angular.module('myApp.message', [])
.factory('messages', function () {
    var messages = {};

    messages.list = [];
    messages.add = function(message){
      messages.list.push({id: messages.list.length, text: message});
    };

console.log("messages");
console.log(messages);

    return messages;
});