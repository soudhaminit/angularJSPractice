(function(){
     var customerFactory=function(){
         
         var customers=[
             {name:'Sanjay',city:'Perth',address:'Labouschere Street'},
             {name:'Sara',city:'Adelaide',address:'Robert Street'},
             {name:'Cristeine',city:'Tasmania',address:'Charles Street'},
            {name:'Fleelencia',city:'Sydney',address:'Strickland Street'},
            {name:'John',city:'Melbourne',address:'Lockhart Street'},
            {name:'Jordon',city:'Brisbane',address:'Mary Street'}];
         
         var factory={};
         factory.authenticate=function(username,password){
             if(username == 'admin' && password == '1234'){
             return true;
             }else return false;
         };
        factory.getCustomers=function(){
                return customers;
        };
         return factory;
     };

angular.module('customersApp').factory('customerFactory',customerFactory);
}());