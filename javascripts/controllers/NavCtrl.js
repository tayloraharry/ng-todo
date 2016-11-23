"use strict";

app.controller("NavCtrl", ($scope) => {
  $scope.navItems = [
  {
    name:"Logout",
    url: "#/logout"
  },
  {
    name:"All Items",
    url: "#/items/list"
  },
  {
    name:"New Item",
    url: "#/items/new"
  },
  {
    name:"Login",
    url: "#/auth"
  }
  ];
});