var app = angular.module('firebaseLogin');

app.service('envService', function($window) {
      this.getEnv = function () {
        return $window.env;
      }
  });