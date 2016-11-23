"use strict";

app.controller("ItemListCtrl", function($scope, $rootScope, ItemFactory) {
$scope.items = [];

let getItems = function() {
  ItemFactory.getItemList($rootScope.user.uid).then(function(items){
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