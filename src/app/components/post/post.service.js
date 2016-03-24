/**
 * Service for retrieving posts
 */

angular.module('newFolder')
  .factory('PostFactory', PostFactory);

PostFactory.$inject = ['$http', '$log'];

function PostFactory($http, $log) {

  var api = 'http://146.185.138.86:8080/api/v1'

  var postFactoryFunctions = {}

  postFactoryFunctions.getAllPosts = function() {
    return $http.get(api + '/post')
      .then(function(res) {
        return res.data;
      })
      .catch(function(err) {
        $log.info('getAllPosts() failed: ' + err.data);
      });
  }

  return postFactoryFunctions;
}
