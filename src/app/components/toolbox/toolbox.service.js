angular.module('newFolder')
	.factory('Toolbox', Toolbox);

function Toolbox() {
	var toolbox = {};

	/**
	 * Check if an element exists in an array
	 * @param  {array item} elem  array item
	 * @param  {array} array
	 * @return {boolean}       true if elemnet exists in array
	 */
	toolbox.existInArray = function(elem, array) {
		if (array.indexOf(elem) == -1) {
			return false;
		} else {
			return true;
		}
	}

	/**
	 * Check if element has duplicate in an array
	 * @param  {array item} elem  array item
	 * @param  {array} array
	 * @return {boolean}       true if element has duplicate in array
	 */
	toolbox.haveDuplicateInArray = function(elem, array) {
		var sorted_array = array.slice().sort();

		for (var i = 0; i < sorted_array.length - 1; i++) {
			if (sorted_array[i+1] == sorted_array[i]) {
				return true;
			}
		}

		return false;
	}

	toolbox.removeOneItemFromArray = function(elem, array) {
		var index = array.indexOf(elem);
		if (index >= 0) {
			array.splice(index, 1);
			return array;
		}
		return array;
	}

	return toolbox;
}