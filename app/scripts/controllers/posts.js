'use strict';

app.controller('PostsCtrl', function($scope, $location, Post) {
  $scope.posts = Post.all;

  $scope.post = {
    url: 'http://',
    title: ''
  };
  $scope.submitPost = function() {
    Post.create($scope.post).then(function() {
      $scope.post = {url: 'http://', title: ''};
      $location.path('/posts/' + ref.name());
    });
  };

  $scope.deletePost = function(postId) {
    Post.delete(postId);
  };

});
