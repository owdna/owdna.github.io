angular.module('gmap-app', [ 'google-maps' ])

.controller('MapCtrl', [ '$scope', function($scope) {
  $scope.map = {
    center: {
      latitude: 36.01193,
      longitude: -78.92443
    },
    zoom: 17
  };
  
  $scope.markers = [
    {
      id: 'a1',
      latitude: 36.01193,
      longitude: -78.92443,
      title: 'Marker 1'
    }
  ];
  
  $scope.randomize = function() {
    $scope.markers = [
      {
        id: 'a1',
        latitude: 36.01193 + 0.001*(Math.random() - .5),
        longitude: -78.92443 + 0.001*(Math.random() - .5),
        title: 'Marker 1'
      }
    ];
  };
}]);