
'use strict';

define(["angular", "app/service/routeResolver"], function (angular) {

    var app = angular.module("app", ["ngRoute", "routeResolverServices", "LocalStorageModule", "ui.bootstrap.datepicker", "ui.bootstrap.tpls"]);
    app.config(["$routeProvider", "routeResolverProvider", "$controllerProvider", "$provide", "localStorageServiceProvider",

        function ($routeProvider, routeResolverProvider, $controllerProvider,$provide,localStorageService) {

            app.register =
            {
                controller: $controllerProvider.register,
                factory: $provide.factory,
                service:$provide.service
            };
            var route = routeResolverProvider.route;
            $routeProvider
            .when('/', route.resolve('itemlist'))
               
                .when('/items', route.resolve('itemlist'))
                .when('/itemdetail/:id', route.resolve('itemdetail'))
                .when('/additem', route.resolve('item'))

            .otherwise({ redirectTo: '/' })
        }]);    

    return app;
});
