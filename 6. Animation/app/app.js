(function(){
var app= angular.module('customersApp',['ngRoute','ngAnimate']);
    app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        controller:'customersController',
        templateUrl:'app/views/customers.html'
    })
    .when('/orders/:customerId',{
            controller:'ordersController',
            templateUrl:'app/views/orders.html'
        })
    .when('/allOrders',{
        controller:'allOrdersController',
        templateUrl:'app/views/allOrders.html'
    })
    .otherwise({redirectTo:'/'});
    
    });

}());

