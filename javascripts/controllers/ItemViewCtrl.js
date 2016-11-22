"use strict";

app.controller("ItemViewCtrl", function($scope, $routeParams, ItemFactory) {
  $scope.selectedItem = {};
  let itemId = $routeParams.id;
  ItemFactory.getSingleItem(itemId).then(function(itemToEdit){
    itemToEdit.id = itemId;
    $scope.selectedItem = itemToEdit;
  });
});