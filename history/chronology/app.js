angular.module('chron', [])

  .config(function($interpolateProvider){
      $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
  })

  .controller('ChronCtrl', [ '$scope', '$http', function($scope, $http) {
    $http.get("/history/chronology/images.json").success(function(images) {

      $scope.images = images;    
      $scope.currIndex = 0;
      
      $scope.previous = function() { if($scope.currIndex > 0) $scope.currIndex--; };
      $scope.next = function() { if($scope.currIndex < $scope.images.length-1) $scope.currIndex++; };
      
    });
  }]);