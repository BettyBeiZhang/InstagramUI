
angular.module('app.home', [])

 .controller('HomeController', function($scope, $http, $location, createFactory) {

     $scope.post = createFactory.getPost();
     $scope.currentUser= createFactory.getUser();
     $scope.newComment = "";

  console.log($scope.currentUser)
    $scope.addComment = function () {
     //a new comment
     var comment = {
         userName: $scope.currentUser.user,
         message: $scope.newComment
     }

     //push comment to comments array
     $scope.post.comments.push(comment);

     //clear textarea
     $scope.newComment = "";
}

});
