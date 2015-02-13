(function(){
    var customersController=function($scope){

     $scope.sortBy='name';    
     $scope.reverse=false;
    
    $scope.customers=[
        {id:1,
         name:'John',
         city:'New York',
         joined:'2012-12-02',
         orderTotal:9.956,
         orders:[
             {id:1,product:'shoes',total:9.956}
         ]},
        {id:2,
         name:'Dave',
         city:'Chandler',
         joined:'2013-10-09',
         orderTotal:52.12,
         orders:[
             {id:2,product:'toys',total:10.00},
             {id:3,product:'heater',total:30.12},
             {id:4,product:'baby clothes',total:12.00}
         ]},
        {id:3,
         name:'Tina',
         city:'Perth',
         joined:'2015-02-10',
         orderTotal:44.65,
         orders:[
             {id:5,product:'butter',total:14.00},
             {id:6,product:'carrot',total:10.00},
             {id:7,product:'ice cream',total:20.65}
         ]},
        {id:4,
         name:'Zeda',
         city:'South Wales',
         joined:'2007-10-29',
         orderTotal:4.80,
         orders:[
             {id:8,product:'milk',total:4.80}
         ]}
    ];
    
    $scope.doSort=function(propName){
     $scope.sortBy=propName;    
     $scope.reverse=!$scope.reverse;
    };
};

customersController.$inject=['$scope'];
angular.module('customersApp').controller('customersController',customersController);
}());

