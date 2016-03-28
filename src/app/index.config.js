angular.module('newFolder')
    .config(config);

/** @ngInject */
function config($logProvider, markedProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Marked setting
    markedProvider.setOptions({
        gfm: true,
        tables: true,
        highlight: function(code, lang) {
            if (lang) {
                return hljs.highlight(lang, code, true).value;
            } else {
                return hljs.highlightAuto(code).value;
            }
        }
    });
}
