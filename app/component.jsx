import React from 'react';

var style = {
	backgroundColor: '#EEE',
	textAlign: 'center'
};

class Hello extends React.Component {
	render() {
		return (
			<div style={style}>
			<br />
			<h1>ES6 + React + Webpack 示例</h1>
			<br />
			</div>
		)
	}
}

class CommentBox extends React.Component {
	render() {
		return (
			<div className='commentBox'>
				<h1>Comments</h1>
				<CommentList data = {this.props.data} />
				<CommentForm />
			</div>
		)
	}
}



class CommentList extends React.Component {
	render() {
		var commentNodes = this.props.data.map(function(comment) {
			return (
				<Comment author = {comment.author}>
					{comment.text}
				</Comment>
			)
		})
		return (
			<div className='commentList'>
				{commentNodes}
			</div>
		)
	}
}

class CommentForm extends React.Component {
	render() {
		return (
			<div className = 'commentForm'>
				I am a commentForm~
			</div>
		)
	}
}

/* var converter = new Showdown.converter() */
class Comment extends React.Component {
	render() {
		return (
			<div className = 'comment'>
				<h2 className = 'commentAuthor'>
					{this.props.author}
				</h2>
				{/* converter.makeHtml(this.props.children.toString()) */}
				{this.props.children}
			</div>
		)
	}
}



export {
	Hello,
	CommentBox
}