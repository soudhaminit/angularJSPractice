(function(){
    
    var loginController= function($scope,customerFactory,appSettings,$location,$window){
        $scope.username="";
        $scope.password="";
      
        $scope.appSettings=appSettings;
        
        $scope.login=function(){
            var authenticate =customerFactory.authenticate( $scope.username,$scope.password);
        if(authenticate == true){
            $location.path('/dashboard');
        }else{
        //  $scope.errorType='alert-box';
            $window.alert('Could not authenticate'); 
        }
        };
    };

        loginController.$inject=['$scope','customerFactory','appSettings','$location','$window'];
angular.module('customersApp').controller('loginController',loginController);
}());