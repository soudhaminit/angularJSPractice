(function(){
    var customersFactory=function($http){
        var factory={};
        
        factory.getCustomers=function(){
            return $http.get('/customers');
        };
        
       /* factory.getCustomer=function(customerId){
            return $http.get('/customer/'+customerId);
        };*/
        factory.getCustomer=function(customerId){
           return $http.get('/customer/'+customerId);
        };
        factory.getDeleteCustomer=function(customerId){
            return $http.delete('/customers/'+customerId);
        };
        
          factory.getAllOrders=function(){
            return $http.get('/allOrders');
        };
        return factory;
    
    };
    
    customersFactory.$inject=['$http'];
    angular.module('customersApp').factory('customersFactory',customersFactory);

}());

    
       
        
   

