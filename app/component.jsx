import React from 'react';
import $ from 'jquery';

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

/* http://7xnei3.com1.z0.glb.clouddn.com/comments.json */
class CommentBox extends React.Component {
	loadCommentsFromServer() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			success: (data) => {
				this.setState({
					data: data
				});
			},
			error: (xhr, status, err) => {
				console.error(this.props.url, status, err.toString());
			}
		});
	}
	constructor() {
		super();
		this.state = {
			data: []
		};
	}
	componentDidMount() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	}
	render() {
		return (
			<div className='commentBox'>
				<h1>Comments</h1>
				<CommentList data = {this.state.data} />
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