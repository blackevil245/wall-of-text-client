angular
    .module('newFolder')
    .controller('EditorController', EditorController);

EditorController.$inject = ['PostFactory', '$log', 'MarkdownParser'];

function EditorController(PostFactory, $log, MarkdownParser) {
    var vm = this;
    vm.title = '';
    vm.content = '';

    /**
     * Functions
     */
    vm.submitPost = submitPost;
    vm.resetContent = resetContent;

    /**
     * Send post to server
     * @return Toast + $log
     */
    function submitPost() {
        var post = {
            'title': vm.title,
            'content': vm.content
        }

        PostFactory.sendPost(post)
            .then(function(success) {
                Materialize.toast('Post submit successfully', 4000)
                $log.log(success.data);
            }, function(err) {
                $log.log(err.data);
            });
    }

    /**
     * Reset Content Field
     */
    function resetContent() {
        vm.content = '';
    }
}
