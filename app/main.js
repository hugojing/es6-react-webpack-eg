import React from 'react';
import {
	Hello, CommentBox
}
from './component.jsx';

main();

function main() {
	React.render(<Hello />, document.getElementById('header'))
	React.render(<CommentBox url = 'http://7xnei3.com1.z0.glb.clouddn.com/comments.json' pollInterval = {2000} />, document.getElementById('app'))
}