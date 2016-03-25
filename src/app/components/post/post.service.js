/**
 * Service for retrieving posts
 */

angular.module('newFolder')
  .factory('PostFactory', PostFactory);

PostFactory.$inject = ['$http', '$log', '$httpParamSerializer'];

function PostFactory($http, $log, $httpParamSerializer) {

  var api = 'http://146.185.138.86:8080/api/v1'

  var postFactoryFunctions = {}

  /**
   * GET
   */
  postFactoryFunctions.getAllPosts = function() {
    return $http.get(api + '/post')
      .then(function(res) {
        return res.data;
      })
      .catch(function(err) {
        $log.info('getAllPosts() failed: ' + err.data);
      });
  }

  /**
   * POST
   */
  
  postFactoryFunctions.sendPost = function(form) {
    return $http.post(api + '/post', $httpParamSerializer(form), {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
      }
    });
  }

  return postFactoryFunctions;
}
