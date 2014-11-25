angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Shorten) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function(){
    console.log('i got called at shorten hs')
    Shorten.addLink($scope.link)
      .then(function (data){
        console.log('Linked Posted', data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
