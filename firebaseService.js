var app = angular.module('firebaseLogin');

app.service('firebaseService', function (envService, $firebaseArray, $firebaseObject) {
  var firebaseUrl = envService.getEnv().firebase;
   
  this.getUser = function(userId){
    return $firebaseObject(new Firebase(firebaseUrl + '/users/' + userId));
  };

  this.getThings = function(userId){
    return $firebaseArray(new Firebase(firebaseUrl + '/users/' + userId + '/things'));
  }
});