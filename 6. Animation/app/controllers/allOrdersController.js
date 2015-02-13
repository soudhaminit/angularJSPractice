(function(){

    var allOrdersController=function($scope,$log,customersFactory){
        $scope.allOrders=null;
        $scope.ordersTotal=0.0;
        $scope.totalType;
        
        function init(){
            customersFactory.getAllOrders()
            .success(function(allOrders){
              $scope.allOrders=allOrders;
                getOrdersTotal();
            })
            .error(function(data,status,headers,config){
                $log.log(data.error+' '+status);
            });
        }
        function getOrdersTotal(){
           var total=0;
           for(var i=0,len=$scope.allOrders.length;i<len;i++){
                total+=$scope.allOrders[i].total;
           } 
            $scope.ordersTotal=total;
            $scope.totalType=($scope.ordersTotal>100) ? 'success':'danger';
        }
        
        init();
    };

allOrdersController.$inject=['$scope','$log','customersFactory'];
            angular.module('customersApp').controller('allOrdersController',allOrdersController);

}());


       
      

   