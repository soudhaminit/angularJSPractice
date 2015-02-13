function customersController($scope){

     $scope.sortBy='name';    
     $scope.reverse=false;
    
    $scope.customers=[{name:'John',city:'New York',joined:'2012-12-02',orderTotal:9.956},{name:'Dave',city:'Chandler',joined:'2013-10-09',orderTotal:52.12},{name:'Tina',city:'Perth',joined:'2015-02-10',orderTotal:44.65},{name:'Zeda',city:'South Wales',joined:'2007-10-29',orderTotal:4.80}];
    $scope.doSort=function(param){
     $scope.sortBy=param;    
     $scope.reverse=!$scope.reverse;
    };
   

}