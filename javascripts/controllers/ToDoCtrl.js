"use strict";

app.controller("TodoCtrl", ($scope, ItemFactory)=> {
  $scope.showListView = true;
  $scope.newTask = {};
  $scope.items = [];

  ItemFactory.getItemList().then(function(items){
   $scope.items = items;
  })

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