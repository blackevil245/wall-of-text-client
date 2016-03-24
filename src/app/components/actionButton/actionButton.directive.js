angular.module('newFolder')
	.directive('actionButton', actionButton);

function actionButton() {
	directive = {
		templateUrl: 'app/components/actionButton/actionButton.html',
		restrict: 'E',
		controller: actionButtonController,
		controllerAs: actionButton
	}

	return directive;
}