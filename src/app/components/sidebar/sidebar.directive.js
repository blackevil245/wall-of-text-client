angular.module('newFolder')
  .directive('sidebar', sidebar);

function sidebar() {
  var directive = {
    templateUrl : 'app/components/sidebar/sidebar.html',
    controller : 'SidebarController',
    controllerAs : 'sidebar',
    bindToController : true,
    restrict: 'E'
  }

  return directive;
}
