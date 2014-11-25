angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {
    links: []
  };

  $scope.getLinks = function(){
    console.log('i got called at links hs')
    Links.getLinks()
      .then(function (data){
        $scope.data.links = data;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.getLinks();
});
