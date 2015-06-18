'use-strict'

define(function (require) {
    var app = require("app");
   
    
    var injectParams = ["$scope","$routeParams", 'itemService', 'localStorageService'];
    var itemdetailcontroller = function ($scope,$routeParams, itemService, localStorageService) {
        var vm = this,
           id = ($routeParams.id) ? parseInt($routeParams.id) : 0;
        
        function init() {
            getItembyId(id);
        };

       function getItembyId(id) {
         $scope.item= itemService.getItembyId(id)
       }
       $scope.addComment = function () {
           $scope.item.reviews.push({ description: $scope.comment, date: '24-2-1985', rating: 4 });
       };

      
        init();
    };
  
    itemdetailcontroller.$inject = injectParams;
    app.register.controller("itemdetailController", itemdetailcontroller);

});
