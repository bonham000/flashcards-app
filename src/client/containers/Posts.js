import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as postActions from '../actions/post'

@connect(
	state => ({
		posts: state.posts,
	}),
	dispatch => ({
		actions: bindActionCreators(postActions, dispatch),
	}),
)
class Posts extends React.Component {
	static propTypes = {
		posts: PropTypes.array.isRequired,
		actions: PropTypes.object.isRequired
	}
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.submitPost = this.submitPost.bind(this);
		this.removePost = this.removePost.bind(this);
	}
	handleChange(event) {
		this.setState({
			text: event.target.value
		})
	}
	submitPost(event) {
		event.preventDefault();
		if (this.state.text !== '') {
			this.props.actions.addPost(this.state.text);
			this.setState({
				text: ''
			});
		}
	}
	removePost(idx) {
		this.props.actions.removePost(idx);
	}
	render() {
		const { removeAll } = this.props.actions;
		const posts = this.props.posts.map( (post, idx) => {
			return (
				<div key = {idx} className = 'post'>
					<p>{post} <span className = "removePost" onClick = {this.removePost.bind(this, idx)}>X</span></p>
				</div>
			);
		});
		let current = "No Current Posts";
		if (this.props.posts.length > 0) { current = "Current Posts"; }
		return (
			<div className = 'postsComponent'>
				<h1>{current}</h1>
				<div>
					{posts}
				</div>
				<form onSubmit = {this.submitPost} className = "postForm">
					<input
						type = "text"
						placeholder = "Type a Post Here"
						value = {this.state.text}
						onChange = {this.handleChange} /><br />
					<button onClick = {this.submitPost}>Submit Post</button>
				</form>
					<button onClick = {removeAll}>Remove All Posts</button>
			</div>
		);
	}
};

export default Posts;