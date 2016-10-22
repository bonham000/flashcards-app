import React, { PropTypes } from 'react'
import { browserHistory } from 'react-router'
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
class EditFlashcards extends React.Component {
	static propTypes = {
		flashcards: PropTypes.array.isRequired,
		actions: PropTypes.object.isRequired,
	}
	constructor(props) {
		super(props);
		this.state = {
			front: '',
			back: ''
		}
		this.handleInput = this.handleInput.bind(this);
		this.addNewCard = this.addNewCard.bind(this);
	}
	handleInput(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	addNewCard() {
		if (this.state.front !== '' && this.state.back !== '') {
			let newCard = {
				front: this.state.front,
				back: this.state.back,
				id: this.props.flashcards.length
			}
			this.props.actions.addFlashcard(newCard);
			browserHistory.push('/flashcards');
		}
	}
	render() {
		return (
			<div className = 'addFlashcardsComponent'>
				<h1>Add new flashcards to your deck here:</h1>
				<input
					type = "text"
					name = "front"
					className = "cardInput"
					placeholder = "Card Front"
					value = {this.state.front}
					onChange = {this.handleInput} /><br />
				<input
					type = "text"
					name = "back"
					className = "cardInput"
					placeholder = "Card Back"
					value = {this.state.back}
					onChange = {this.handleInput} /><br />
				<button onClick = {this.addNewCard}>Submit and Save Cards</button>
			</div>
		);
	}
};

export default EditFlashcards;