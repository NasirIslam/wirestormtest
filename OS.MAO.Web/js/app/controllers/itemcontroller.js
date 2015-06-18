'use-strict'

define(function (require) {
    var app = require("app");
   
    var injectParams = ["$scope", 'itemService', 'localStorageService'];
    var itemcontroller = function ($scope, itemService, localStorageService) {

        $scope.addItem = function () {
            $scope.item = {};
            $scope.item.Name = $scope.accountName;
            $scope.item.description = $scope.description;
            $scope.item.price = $scope.price;
            alert($scope.item);
            itemService.additem($scope.item);
            
        };
        function init() {
            
        };
        init();
    };
    itemcontroller.$inject = injectParams;
    app.register.controller("itemController", itemcontroller);

});
