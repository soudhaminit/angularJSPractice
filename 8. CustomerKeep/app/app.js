(function(){
var app=angular.module('customersApp',['ngRoute']);
    app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        controller:'loginController',
        templateUrl:'app/views/login.html'
    })
    .when('/dashboard',{
        controller:'dashboardController',
        templateUrl:'app/views/dashboard.html'
    })
    .otherwise({redirectTo:'/'});
    });

}());