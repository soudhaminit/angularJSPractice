(function(){

    var customersController=function($scope,$log,appSettings,customersFactory){
        $scope.sortBy='name';
        $scope.reverse=false;
        $scope.appSettings=appSettings;
        $scope.customers=[];
        
        function init(){
            
        customersFactory.getCustomers()
           .success(function(customers){
            $scope.customers=customers;
            })
            .error(function(data,status,headers,config){
            //error msg
            $log(data.error+' '+status);
            });
        }
        
        init();
        
        $scope.doSort=function(params){
            $scope.sortBy=params;
            $scope.reverse=!$scope.reverse;
        }
        
        $scope.deleteCustomer=function(customerId){
           customersFactory.getDeleteCustomer(customerId)
           .success(function(status){
                    if(status){
                        for( var i=0,len=$scope.customers.length;i<len;i++){
                        if(customerId === $scope.customers[i].id){
                    $scope.customers.splice(i,1);        
                    break;
                        }
                        }
                    }else {
                    $window.alert('Unable to delete the customer');
                    }         
            })
          .error(function(data,status,headers,config){
               //$log(data.error+' '+status);
            });
        }
    };
    customersController.$inject=['$scope','$log','appSettings','customersFactory'];
    angular.module('customersApp').controller('customersController',customersController);
}());