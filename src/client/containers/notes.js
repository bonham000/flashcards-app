
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
		this.editNote = this.editNote.bind(this);
	}
	editNote(id) {
		console.log(id);
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

					<div className = "options">
						<div className = "edit" onClick = {this.editNote.bind(this, note.id)}>
							<i className = "fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
						</div>
						<div className = "remove" onClick = {this.deleteNote.bind(this, note.id)}>
							<i className = "fa fa-times-circle fa-2x" aria-hidden="true"></i>
						</div>
					</div>

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