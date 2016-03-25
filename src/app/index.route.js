(function() {
    'use strict';

    angular
        .module('newFolder')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('browse', {
                url: '/',
                templateUrl: 'app/components/browse-page/browse-page.html',
                controller: 'BrowsePageController',
                controllerAs: 'browsepage'
            })
            .state('editor', {
                url: '/editor',
                templateUrl: 'app/components/editor/editor.html',
                controller: 'EditorController',
                controllerAs: 'editor'
            })
            .state('preview', {
                url: '/preview',
                templateUrl: 'app/components/preview/preview.html',
                controller: 'PreviewController',
                controllerAs: 'preview'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
