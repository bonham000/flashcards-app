
import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as noteActions from '../actions/notes'

function checkForEdit(state, id) {
	if (state.id === id) { return true; }
	else { return false; }
}

@connect(
	state => ({
		notes: state.notes
	}),
	dispatch => ({
		noteActions: bindActionCreators(noteActions, dispatch)
	}),
)
class Notes extends React.Component {
	static propTypes = {
		notes: PropTypes.array.isRequired,
		noteActions: PropTypes.object.isRequired
	}
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			edit: { id: -1, title: '', content: '' }
		}
		this.deleteNote = this.deleteNote.bind(this);
		this.editNote = this.editNote.bind(this);
		this.handleEditTitle = this.handleEditTitle.bind(this);
		this.handleEditContent = this.handleEditContent.bind(this);
		this.cancelEdit = this.cancelEdit.bind(this);
		this.submitEdit = this.submitEdit.bind(this);
	}
	editNote(note) {
		this.setState({
			edit: {
				id: note.id,
				title: note.title,
				content: note.content
			}
		});
	}
	handleEditTitle(e) {
		let { edit } = this.state;
		let updatedEdit = Object.assign({}, edit, { title: e.target.value });
		this.setState({
			edit: updatedEdit
		});
	}
	handleEditContent(e) {
		let { edit } = this.state;
		let updatedEdit = Object.assign({}, edit, { content: e.target.value });
		this.setState({
			edit: updatedEdit
		});
	}
	cancelEdit() { this.setState({ edit: { id: -1, title: '', content: '' } }) }
	submitEdit() {
		const note = this.state.edit;
		if (note.title !== '' && note.content !== '') {
			this.props.noteActions.updateNote(this.state.edit);
			this.cancelEdit();
		}
	}
	deleteNote(id) {
		this.props.noteActions.removeNote(id);
	}
	render() {
		const editState = this.state.edit;
		const notes = this.props.notes.map( (note) => {
			return (
				<div className = 'note' key = {note.id}>

				{ checkForEdit(editState, note.id) ? <div className = 'editMenu'>
						<input 
							className = 'editInput'
							value = {this.state.edit.title} 
							onChange = {this.handleEditTitle} />
						<textarea
							className = 'editContent'
							value = {this.state.edit.content}
							onChange = {this.handleEditContent}></textarea><br />
						<button onClick = {this.cancelEdit}>Cancel Edit</button>
						<button onClick = {this.submitEdit}>Submit Edit</button>
						</div>
							:
						<div>
							<h1>{note.title}</h1>
							<p>{note.content}</p>

							<div className = "options">
								<div className = "edit" onClick = {this.editNote.bind(this, note)}>
									<i className = "fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
								</div>
								<div className = "remove" onClick = {this.deleteNote.bind(this, note.id)}>
									<i className = "fa fa-times-circle fa-2x" aria-hidden="true"></i>
								</div>
							</div>
						</div> }

				</div>
			);
		});
		return (
		<div className = 'notesPageContainer'>
			
			<h1>This is the Notes Page</h1>
			
			{notes}

			<Link to = '/add-notes'>
				<h2>Click here to add a new note</h2>
			</Link>

		</div>
		)
	}
};

export default Notes;