import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as flashcardActions from '../actions/flashcards'

@connect (
	state => ({
		flashcards: state.flashcards
	}),
	dispatch => ({
		actions: bindActionCreators(flashcardActions, dispatch)
	}),
)
class Flashcards extends React.Component {
	static propTypes = {
		flashcards: PropTypes.array.isRequired,
		actions: PropTypes.object.isRequired,
	}
	constructor(props) {
		super(props);
		this.state = {
			edit: false,
			editID: 0,
			editFront: '',
			editBack: ''
		}
		this.editNote = this.editNote.bind(this);
		this.handleEditFront = this.handleEditFront.bind(this);
		this.handleEditBack = this.handleEditBack.bind(this);
		this.cancelEdit = this.cancelEdit.bind(this);
		this.submitEdit = this.submitEdit.bind(this);
	}
	editNote(id) {
		let editNote = this.props.flashcards[id];
		this.setState({
			edit: true,
			editID: id,
			editFront: editNote.front,
			editBack: editNote.back
		});
	}
	handleEditFront(e) {
		this.setState({
			editFront: e.target.value
		})
	}
	handleEditBack(e) {
		this.setState({
			editBack: e.target.value
		})
	}
	cancelEdit() {
		this.setState({
			edit: false
		});
	}
	submitEdit() {
		let editedNote = {
			front: this.state.editFront,
			back: this.state.editBack,
			id: this.state.editID
		}
		this.props.actions.editFlashcard(editedNote, this.state.editID);
		this.setState({
			edit: false,
			editID: 0,
			editFront: '',
			editBack: ''
		});
	}
	render() {
		const renderFlashcards = this.props.flashcards.map( (card) => {
			return (
				<div key = {card.id} className = "cardWrapper">
					<div className = "front">
						<h2>{card.front}</h2>
					</div>
					<div className = "back">
						<h2>{card.back}</h2>
					</div>
					<div className = "options">
						<div className = "edit" onClick = {this.editNote.bind(this, card.id)}>
							<i className = "fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
						</div>
						<div className = "remove" onClick = {this.props.actions.removeFlashcard.bind(this, card.id)}>
							<i className = "fa fa-times-circle fa-2x" aria-hidden="true"></i>
						</div>
					</div>
				</div>
			)
		});
		return (
			<div className = "flashcardsComponents">
				{ !this.state.edit ? <div>
					<div className = "header">
						<h2>Flashcards View Page</h2>
						<Link to = 'add-flashcards'><h2>Click here to add new cards!</h2></Link>
						<Link to = 'study'><h2>Click here to begin studying!</h2></Link>
					</div>
					<div className = "cardsWrapper">
						{renderFlashcards}
					</div>
				</div> : <div className = "editFlashcard">
					<h1>Edit a Flashcard</h1>

					<input
						type = "text"
						className = "editFront"
						value = {this.state.editFront}
						onChange = {this.handleEditFront} />

					<input
						type = "text"
						className = "editBack"
						value = {this.state.editBack}
						onChange = {this.handleEditBack} />
					
					<button className = "submitBtn" onClick = {this.submitEdit}>Submit Edit</button>
					<button className = "cancelBtn" onClick = {this.cancelEdit}>Cancel Edit</button>
				</div> }
			</div>
		);
	}
};

export default Flashcards;