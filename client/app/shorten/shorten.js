angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Shorten) {
  // Your code here
  $scope.link = {};
  // var test ={ "code": "738dd", "url": "http://www.google.com", "visits": 0, "base_url": "http://localhost:3000", "title": "Google", "_id": "5474ce069a7c22311a8ded0f", "__v": 0 }

  $scope.addLink = function(data){
    console.log('i got called at shorten hs')
    $scope.link['url'] = data;
    Shorten.addLink($scope.link)
      .then(function (data){
        console.log('Linked Posted', data);
        $scope.url = '';
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
