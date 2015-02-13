(function(){
var dashboardController=function($scope,customerFactory,appSettings){
 
$scope.appSettings=appSettings;    
$scope.customers=customerFactory.getCustomers();
    
};
    
dashboardController.$inject = ['$scope','customerFactory','appSettings'];
    
angular.module('customersApp').controller('dashboardController',dashboardController);
}());

