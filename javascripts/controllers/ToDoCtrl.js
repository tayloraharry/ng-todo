// "use strict";

// app.controller("TodoCtrl", ($scope, ItemFactory)=> {
//   $scope.showListView = true;
//   $scope.newTask = {};
//   $scope.items = [];

// let getItems = function() {
//   ItemFactory.getItemList().then(function(items){
//    $scope.items = items;
//   });
// };

//   getItems();

//  $scope.addNewItem = function() {
//   $scope.newTask.isCompleted = false;
//   ItemFactory.postNewItem($scope.newTask).then(function(itemId){
//     getItems();
//     $scope.newTask = {};
//     $scope.showListView = true;
//   });
//  };

//  $scope.deleteItem = function(itemIdToDelete) {
//   ItemFactory.deleteItem(itemIdToDelete).then(function(){
//     getItems();
//   });
//  };


// });