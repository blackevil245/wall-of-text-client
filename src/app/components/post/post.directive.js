/**
 * Post directive
 */

 angular.module('newFolder')
  .directive('post', Post);

function Post() {
  var directive = {
    templateUrl: 'app/components/post/post.html',
    restrict: 'E',
    controller: 'PostController',
    controllerAs: 'postcontroller'
  }

  return directive;
}
