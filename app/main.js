import React from 'react';
import {
	Hello, CommentBox
}
from './component.jsx';

main();

function main() {
	var data = [{
		author: "Pete Hunt",
		text: "This is one comment"
	}, {
		author: "Jordan Walke",
		text: "This is *another* comment"
	}];
	// React.render(<Hello />, document.getElementById('app'))
	React.render(<CommentBox data = {data} />, document.getElementById('app'))
}