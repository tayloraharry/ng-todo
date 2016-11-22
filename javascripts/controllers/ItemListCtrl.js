"use strict";

app.controller("ItemListCtrl", function($scope, ItemFactory) {
$scope.items = [];

let getItems = function() {
  ItemFactory.getItemList().then(function(items){
   $scope.items = items;
  });
};

getItems();

 $scope.deleteItem = function(itemIdToDelete) {
  ItemFactory.deleteItem(itemIdToDelete).then(function(){
    getItems();
  });
 };

 $scope.inputChange = function(itemStatusChange) {
    console.log(itemStatusChange);
  ItemFactory.editItem(itemStatusChange).then(function(){
    getItems();
  });
 };

});