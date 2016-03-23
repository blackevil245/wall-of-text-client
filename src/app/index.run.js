(function() {
  'use strict';

  angular
    .module('newFolder')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
