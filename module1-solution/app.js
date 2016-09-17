(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  var dishesCount = function(){
    var count =0;
    if($scope.lunchList){

    var dishes = $scope.lunchList.split(",");

    for (var i = 0; i < dishes.length; i++) {
      if(dishes[i].trim().length>0){
        count++;
      }
    }
  }
    return count;
  }

  $scope.doLunchCheck = function(){

    var dishcnt = dishesCount()
    if(dishcnt==0){
      $scope.lunchCheckMessage="Please enter data first"
      $scope.messageColor="red";
      $scope.boxColor="red";
    }else{
       $scope.boxColor="green";
       $scope.messageColor="green";
       if(dishcnt<=3){
         $scope.lunchCheckMessage="Enjoy!";
       }else{
         $scope.lunchCheckMessage="Too much!";
       }
    };




  };



}

})();
