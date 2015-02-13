(function(){
var studentAddController= function($scope,StudentFactory,$window,$location,$http){
    
    $scope.studentList=[];
    $scope.data = {};
    var studentData={
   // "_id" : ObjectId("53757a6c156695a10bcefcdb"),
    "studentNumber" : "111112",
    "preferredName" : "Christopher",
    "gender" : "MALE",
    "birthDate" : "2005-05-27",
    "disability" : false,
    "firstName" : "Alborough",
    "lastName" : "Bocasan",
    "email" : "alborough.bocasan@river-district.com"
};
   
    function init(){
        
        StudentFactory.getStudentList()
        .success(function(studentList){
               $scope.studentList=studentList;
        })
        .error(function(data,status,headers,config){
            //error Msg
        });
    }

  /*  $scope.createStudent=function(){
       
        StudentFactory.createStudent($scope.data)
        .success(function(status){
            if(status){
                $scope.studentList.push($scope.data); 
                $location.path('/');
            }else{
                $window.alert('Unable to add the student');
            }  
        })
        .error(function(data,status,headers,config){
            //error Msg
        });
    };*/
    var posting = $http({
                    method: 'POST',
                    /*posting to /post */
                    url: '/createStudent',
                    data: studentData,
 
                    processData: false
                })
                posting.success(function () {
                    /*executed when server responds back*/
                    //console.log(response);
                   // $scope.response.data = response;
                    $scope.studentList.push($scope.data); 
                    $location.path('/');
                });
 
    
    
   
   init(); 
};
   studentAddController.$inject=['$scope','StudentFactory','$window','$location','$http'];
    angular.module('StudentApp').controller('StudentAddController',studentAddController);

}());

 