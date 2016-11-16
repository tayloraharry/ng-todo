"use strict";

var app = angular.module("TodoApp",[]);

app.controller("NavCtrl", ($scope) => {
  $scope.navItems = [{name:"Logout"}, {name:"All Items"}, {name:"New Item"}];
});

app.controller("TodoCtrl", ($scope)=> {
  $scope.showListView = true;
  $scope.items = [
    {
      id: 0,
      task:"mow the lawn",
      isCompleted:true,
      assignedTo:"Zoe"
    },
    {
      id: 1,
      task:"walk the dog",
      isCompleted:false,
      assignedTo:"Taylor"
    },
    {
      id: 2,
      task:"take a nap",
      isCompleted:false,
      assignedTo:"Nate"
    }
  ];
  $scope.allItems = () => {
    $scope.showListView = true;
  }
  $scope.newItem =  () => {
    $scope.showListView = false;
  }

});