(function() {
  'use strict';

  angular
    .module('newFolder')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/components/browse-page/browse-page.html',
        controller: 'BrowsePageController',
        controllerAs: 'browsepage'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
