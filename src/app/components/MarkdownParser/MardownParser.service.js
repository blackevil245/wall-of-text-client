angular.module('newFolder')
	.factory('MarkdownParser', MarkdownParser);

MarkdownParser.$inject = ['marked'];

function MarkdownParser(marked) {
	var markdownParser = {};
	
	/**
	 * Parse input text to HTML
	 */
	markdownParser.parseTextToHtml = function(input) {
		return marked(input);
	}

	return markdownParser;
} 