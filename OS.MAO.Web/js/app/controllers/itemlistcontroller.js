'use-strict'

define(function (require) {
    var app = require("app");
   
    
    var injectParams = ["$scope", 'itemService', 'localStorageService'];
    var itemlistcontroller = function ($scope, itemService, localStorageService) {

        
        function init() {
            getallItems();
        };

        function getallItems() {
            console.log(itemService);
            $scope.items = itemService.getAllItems();
            //itemService.getAllItems().then(function (result) {
            //    $scope.items = result;
            //});
        };
        init();
    };
  
    itemlistcontroller.$inject = injectParams;
    app.register.controller("itemlistController", itemlistcontroller);

});
