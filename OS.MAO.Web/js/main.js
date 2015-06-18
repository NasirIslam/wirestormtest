/// <reference path="app/controller/loginCtrl.js" />
/// <reference path="app/service/routeResolver.js" />
require.config({
    
    paths: {
        angular: "lib/angular/angular",
        ngRoute: "lib/angular-route/angular-route",
        jquery: "lib/jquery/dist/jquery",
        bootstrap: "lib/bootstrap/dist/js/bootstrap",
        localStorage: "lib/web-storage/angular-local-storage",
        bootstrapdate: "lib/bootstrap-gh-pages/ui-bootstrap-custom-0.12.0",
        bootstraptempl: "lib/bootstrap-gh-pages/ui-bootstrap-custom-tpls-0.12.0"

    },
    shim: {
        angular: {
            exports: "angular"
        },
        jquery:
            {
                exports:"jquery"
            },
        ngRoute: {
            deps: ["angular"]
        },
        bootstrap: {
            deps:["jquery"]
        },
        localStorage: {
            deps:["angular"]
        },
        bootstrapdate: {
            deps:["bootstrap"]
        },
        bootstraptempl:{
            deps:["bootstrap"]
        }

    }
});

require([
        "angular", "app", "ngRoute", "app/service/routeResolver", "localStorage" ,"bootstrapdate","bootstraptempl",
        "app/service/itemService"
        ],
    function (angular, app) {
        angular.bootstrap(document.documentElement, ["app"]);
});