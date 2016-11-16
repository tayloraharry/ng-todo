"use strict";

app.controller("TodoCtrl", ($scope)=> {
  $scope.showListView = true;
  $scope.newTask = {};
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
    },
    {
      id: 2,
      task:"take a nap",
      isCompleted:false,
      assignedTo:"Nate"
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
  };
  $scope.newItem =  () => {
    $scope.showListView = false;
  };

 $scope.addNewItem = function() {
  $scope.newTask.isCompleted = false;
  $scope.newTask.id = $scope.items.length;
  $scope.items.push($scope.newTask);
  $scope.newTask = {};
  $scope.showListView = true;
 };




});