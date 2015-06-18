'use-strict'

define(function (require) {
    var app = require("app");
    var injectParams = ["$http", "$rootScope"];

    var itemFactory = function ($http, $rootScope) {
        var serviceBase = "http://localhost:3794/api/items",
                 factory = {
                     Path: '/item'

                 };

        var items = [];
        items.push({ id: 1, name: 'Dell', description: 'Make Laptops and Desktop', price: 800 });
        items.push({ id: 2, name: 'Apple', description: 'Make Iphones', price: 1080 });
        items.push({ id: 3, name: 'HP', description: 'Make Laptops and Desktop', price: 500 });
        items.push({ id: 4, name: 'Samsung', description: 'Make Laptops and Desktop', price: 600 });


        factory.addItem = function (item) {
            return $http.post(serviceBase + "/addItem", JSON.stringify(item), { headers: { 'Content-Type': 'application/json' } }).then(function (result) {
                var add = result.data.status;
            });
        };

        factory.getAllItems = function () {
         
            
            return items;
            //return $http.get(serviceBase + "/getallaccountstype").then(function (result) {
            //    return result.data;
            //});
        };

        factory.getItembyId = function (id) {        
            var item = items[id];
            item.reviews = [{ description: "The product is very goood", date: '2-2-2012', rating: 5 }, { description: 'The product is not so goood', date: '2-3-2015', rating: 4 }]
            return item;



            //return $http.get(serviceBase + "/getallaccountstype").then(function (result) {
            //    return result.data;
            //});
        }
        return factory;
    };

    itemFactory.$inject = injectParams;
    app.factory('itemService', itemFactory);

});