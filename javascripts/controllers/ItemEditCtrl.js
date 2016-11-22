"use strict";

app.controller("ItemEditCtrl", function($scope, $location, $routeParams, ItemFactory) {
  $scope.newTask = {};
  let itemId = $routeParams.id;
  ItemFactory.getSingleItem(itemId).then(function(itemToEdit){
    itemToEdit.id = itemId;
    $scope.newTask = itemToEdit;
  });

  $scope.addNewItem = function() {
    ItemFactory.editItem($scope.newTask).then(function(response){
      $scope.newTask = {};
      $location.url("/items/list");
    });
  };
});