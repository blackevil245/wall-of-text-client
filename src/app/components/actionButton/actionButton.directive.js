angular.module('newFolder')
	.directive('actionButton', actionButton);

function actionButton() {
	var directive = {
		templateUrl: 'app/components/actionButton/actionButton.html',
		restrict: 'E',
		controller: 'ActionButtonController',
		controllerAs: 'actionbutton'
	}

	return directive;
}
