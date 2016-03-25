angular
	.module('newFolder')
  	.controller('EditorController', EditorController);

EditorController.$inject = ['PostFactory', '$log'];

function EditorController(PostFactory, $log) {
  	var vm = this;

  	vm.submitPost = function() {
		var post = {
			'title': vm.title,
			'content': vm.content
		}

		PostFactory.sendPost(post)
			.then(function(success) {
				$log.log('Post submit successfully', 4000)
				$log.log(success.data);
			}, function(err) {
				$log.log(err.data);
			});
	}
}
