(function(){
    
var customersController=function($scope,$log,customersFactory,appSettings){
    
     $scope.sortBy='name';
     $scope.reverse=false;
     $scope.customers=[];
     $scope.appSettings=appSettings;    
    
    function init(){
      /*  $scope.customers=customersFactory.getCustomers();*/
        
    //Ajax changes   
    customersFactory.getCustomers()
                    .success(function(customers){
        $scope.customers=customers;
                    })
                    .error(function(data,status,header,config){
                     $log.log(data.error+'  '+status);
                    });
    }
    init();
     $scope.doSort=function(propName){
        $scope.sortBy=propName;
        $scope.reverse=!$scope.reverse;
    };
};

customersController.$inject=['$scope','$log','customersFactory','appSettings'];    angular.module('customersApp').controller('customersController',customersController);
    
}());