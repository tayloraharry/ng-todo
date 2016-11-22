"use strict";

app.controller("AuthCtrl", function($scope, $rootScope, $location, $routeParams, AuthFactory, UserFactory) {
  $scope.loginContainer = true;
  $scope.registerContainer = false;

  let logMeIn = function(loginStuff) {
    AuthFactory.authenticate(loginStuff).then(function(didLogin) {
      return UserFactory.getUser(didLogin.uid);
    }).then(function(userCreds){
      $scope.user = userCreds;
      $scope.login = {};
      $scope.register = {};
      $location.url("/items/list");
    });
  };

  $scope.setLoginContainer = function() {
    $scope.loginContainer = true;
    $scope.registerContainer = false;
  };

  $scope.setRegisterContainer = function() {
    $scope.loginContainer = false;
    $scope.registerContainer = true;
  };

  $scope.registerUser = function(registerNewUser) {
    AuthFactory.registerWithEmail(registerNewUser).then(function(didRegister) {
      registerNewUser.uid = didRegister.uid;
      return UserFactory.addUser(registerNewUser);
    }).then(function(registerComplete) {
      logMeIn(registerNewUser);
    });
  };

  $scope.loginUser = function(loginNewUser) {
    logMeIn(loginNewUser);
  };


});