
import React, { PropTypes } from 'react'
import { Link } from 'react-router'
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
class Notes extends React.Component {
	static propTypes = {
		notes: PropTypes.array.isRequired,
		noteActions: PropTypes.object.isRequired
	}
	constructor(props) {
		super(props);
		this.state = {
			notes: []
		}
		this.deleteNote = this.deleteNote.bind(this);
	}
	deleteNote(id) {
		this.props.noteActions.removeNote(id);
	}
	render() {
		const notes = this.props.notes.map( (note) => {
			return (
				<div className = 'note' key = {note.id}>
					<h1>{note.title}</h1>
					<p>{note.content}</p>
					<h5
						className = 'removeBtn'
						onClick = {this.deleteNote.bind(this, note.id)}>
						Delete this note!
					</h5>
				</div>
			);
		});
		return (
		<div className = 'notesPageContainer'>
			<h1>This is the Notes Page</h1>
			<Link to = '/add-notes'>
				<h3>Click here to add a new note</h3>
			</Link>
			{notes}
		</div>
		)
	}
};

export default Notes;