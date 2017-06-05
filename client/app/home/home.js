
angular.module('app.home', [])

 .controller('HomeController', function($scope, $http, $location, createFactory) {

  //  $http.get('/home')
  //    .success((user) => $scope.user = user)
  //    .error((err) => console.error(err));

    $scope.addUser = function() {
     $scope.post = createFactory.getPost();
    };
});
