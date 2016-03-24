/**
 * Browse page controller
 */
angular
  .module('newFolder')
  .controller('BrowsePageController', BrowsePageController);

BrowsePageController.$inject = ['PostFactory', '$log'];

function BrowsePageController(PostFactory, $log) {
  var vm = this;
  vm.posts = [];

  activate();

  function activate() {
    return getPosts().then(function() {
      $log.info('BrowsePageController activated');
    })
  }

  function getPosts() {
    return PostFactory.getAllPosts()
      .then(function(data) {
        vm.posts = data;
        $log.info(vm.posts)
        return vm.posts;
      })
  }
}
