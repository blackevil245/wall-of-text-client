angular
    .module('newFolder')
    .controller('EditorController', EditorController);

EditorController.$inject = ['PostFactory', '$log', 'Toolbox', '$scope', '$compile'];

function EditorController(PostFactory, $log, Toolbox, $scope, $compile) {
    var vm = this;
    vm.title = '';
    vm.content = '';
    vm.tagList = [];

    /**
     * Functions
     */
    vm.submitPost = submitPost;
    vm.resetContent = resetContent;
    vm.removeTag = removeTag;

    /**
     * Remove tag from queue
     * @param {String} tag
     */

    function removeTag($event) {
        var tagTxt = $($event.target).parent().text().slice(0, -5);
        if (Toolbox.existInArray(tagTxt, vm.tagList)) {
            vm.tagList = Toolbox.removeOneItemFromArray(tagTxt, vm.tagList);
        }
        $log.log(vm.tagList);
    }

    /**
     * Listen for tag event input -> create new chip
     */
    $('#create-post-tag-area input').on({
        focusout: function() { // Add chip when lose focus
            var txt = this.value.replace(/[^a-z0-9\+\-\.\#]/ig, '').toUpperCase(); // allowed characters
            if (txt && !Toolbox.haveDuplicateInArray(txt, vm.tagList)) {
                var tagTemplate = '<span class="chip orange white-text">' + txt + '<i class="material-icons" ng-click="editor.removeTag($event)">close</i></span>';
                angular.element('#create-post-tag-area').append($compile(tagTemplate)($scope));
                // angular.element('#create-post-tag-area').append((template)($scope));
                vm.tagList.push(txt);
                $log.log(vm.tagList);
                this.value = "";
            }
        },
        keyup: function(event) { // Add chip when press ENTER or COMMA (,)
            // if: comma|enter (delimit more keyCodes with | pipe)
            if (/(188|13)/.test(event.which))
                $(this).focusout();
        }
    });

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
                // Materialize.toast('Post submit successfully', 4000)
                $log.log(success.data);
            }, function(err) {
                $log.log(err.data);
            });
    }

    /**
     * Reset Content Field
     */
    function resetContent() {
        if (confirm('Do you want to reset post content?'))
            vm.content = '';
    }
}
