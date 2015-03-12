var app = angular.module('firebaseLogin');

app.controller('LoginCtrl', function ($scope, authService, $location, envService) {
  $scope.env = envService.getEnv();
  
  //Step 4 of Registration
  var loginCallback = function(user){
    user.uid = user.uid.replace('simplelogin:', '');
    $scope.$apply(function(){
      $location.path('/dashboard/' + user.uid)
    });
  };

  $scope.login = function () {
    return authService.login($scope.details, loginCallback);
  };

  //Step 2 of Registration
  $scope.register = function () {
    return authService.register($scope.details, loginCallback);
  };

  $scope.status = 'Register';
  $scope.showReg = function(){
    if($scope.status === 'Register'){
      $scope.status = 'Login';
    } else {
      $scope.status = 'Register';
    }
    $scope.reg = !$scope.reg;
  };
});