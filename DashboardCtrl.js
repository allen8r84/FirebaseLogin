var app = angular.module('firebaseLogin');

app.controller('DashboardCtrl', function($scope, user, things){
  var profile = user;
  profile.$bindTo($scope, 'profile');
  
  $scope.things = things;
  $scope.addThing = function(){
    $scope.things.$add($scope.thing);
  }
  $scope.removeThing = function(thing){
    $scope.things.$remove(thing);
  }
  $scope.update = function(){
    $scope.profile.$save();
  };
});