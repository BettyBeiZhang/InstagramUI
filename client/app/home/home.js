
angular.module('app.home', [])

 .controller('HomeController', function($scope, $http, $location, createFactory) {

     $scope.post = createFactory.getPost();
     $scope.currentUser= createFactory.getUser();
     $scope.newComment = "";

    $scope.addComment = function () {
     //a new comment
     var comment = {
         userName: $scope.currentUser.user,
         message: $scope.newComment
     }
     $scope.post.comments.push(comment);

     //clear textarea
     $scope.newComment = "";
}

 $scope.incrementLikes = function(){
   $scope.post.likes += 1;
 }


});
