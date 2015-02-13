(function(){
    var ordersController=function($scope,$log,$routeParams,customersFactory){
        var customerId=$routeParams.customerId;
        $scope.customer=null;
        function init(){
            customersFactory.getCustomer(customerId)
              .success(function(customer){
            $scope.customer=customer;
            })
              .error(function(data,status,headers,config){
                $log.log(data.error+' '+status);
            });    
        }
        init();
    };
    ordersController.$inject=['$scope','$log','$routeParams','customersFactory'];
    angular.module('customersApp').controller('ordersController',ordersController);
    
}());
/*
(function(){
    var ordersController = function($scope,$routeParams,customersFactory){
        var customerId=$routeParams.customerId;
        $scope.customer=null;
        
        function init(){
        //$scope.customer=customersFactory.getCustomer(customerId);
            //Ajax
            customersFactory.getCustomer(customerId)
            .success(function(customer){
                $scope.customer=customer;
            })
            .error(function(data,status,headers,config){
            //error msg
            });
        }
        
        init();
    };
ordersController.$inject =['$scope','$routeParams','customersFactory'];
    
 angular.module('customersApp').controller('ordersController',ordersController);
}());
*/


        
       