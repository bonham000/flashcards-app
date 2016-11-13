import React, { PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as noteActions from '../actions/notes'

@connect(
	state => ({
		notes: state.notes
	}),
	dispatch => ({
		noteActions: bindActionCreators(noteActions, dispatch)
	}),
)
class addNotes extends React.Component {
	static propTypes = {
		notes: PropTypes.array.isRequired,
		noteActions: PropTypes.object.isRequired
	}
	constructor(props) {
		super(props);
			this.state = {
				title: '',
				content: ''
			}
		this.editTitle = this.editTitle.bind(this);
		this.editContent = this.editContent.bind(this);
		this.submitNote = this.submitNote.bind(this);
	}
	editTitle(event) {
		this.setState({
			title: event.target.value
		});
	}
	editContent(event) {
		this.setState({
			content: event.target.value
		});
	}
	submitNote() {
		if (this.state.title !== '' && this.state.content !== '') {
			let data = {
				id: this.props.notes.length,
				title: this.state.title,
				content: this.state.content
			}
			this.props.noteActions.addNote(data);
			browserHistory.push('/notes');
		}
	}
	render() {
		return (
			<div className = 'addNotesContainer'>
				<h1>Add New Notes Here</h1>
				<h3>Note Title:</h3>
				<input
					type = 'text'
					placeholder = 'An Awesome Note'
					value = {this.state.noteTitle}
					onChange = {this.editTitle} />
				<h3>Note Content:</h3>
				<textarea
					value = {this.state.noteContent}
					onChange = {this.editContent}/><br />
				<button onClick = {this.submitNote}>Add Note</button>
			</div>
		);
	}
};

export default addNotes;