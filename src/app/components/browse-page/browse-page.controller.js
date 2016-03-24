/**
 * Browse page controller
 */
angular
  .module('newFolder')
  .controller('BrowsePageController', BrowsePageController);

BrowsePageController.$inject = ['PostFactory'];

function BrowsePageController(PostFactory) {
  var vm = this;
  vm.posts = [];

  activate();

  function activate() {
    return getPosts().then(function() {
      console.log('BrowsePageController activated')
    })
  };

  function getPosts() {
    return PostFactory.getAllPosts()
      .then(function(data) {
        vm.posts = data;
        console.log(vm.posts)
        return vm.posts;
      })
  }
}
