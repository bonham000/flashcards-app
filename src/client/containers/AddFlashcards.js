import React, { PropTypes } from 'react'
import { Link, browserHistory } from 'react-router'
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
	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyPress);
	}
	static propTypes = {
		flashcards: PropTypes.array.isRequired,
		actions: PropTypes.object.isRequired,
	}
	constructor(props) {
		super(props);
		this.state = {
			front: '',
			back: '',
			submission: false
		}
		this.handleInput = this.handleInput.bind(this);
		this.addNewCard = this.addNewCard.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}
	handleKeyPress(key) {
		if (key.keyCode === 13) {
			key.preventDefault();
			if (this.state.front !== '' && this.state.back !== '') {
				this.addNewCard();
			}
		}
	}
	handleInput(event) {
		this.setState({
			[event.target.name]: event.target.value,
			submission: false
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
			this.setState({
				front: '',
				back: '',
				submission: true
			});
			document.getElementById('frontCardInput').focus();
		}
	}
	render() {
		return (
			<div className = 'addFlashcardsComponent'>
				<h1>Add new flashcards to your deck here:</h1>
				
				<textarea
					autoFocus
					type = "text"
					name = "front"
					id = "frontCardInput"
					className = "cardInput"
					placeholder = "Card Front"
					value = {this.state.front}
					onChange = {this.handleInput} /><br />
				
				<textarea
					type = "text"
					name = "back"
					className = "cardInput"
					placeholder = "Card Back"
					value = {this.state.back}
					onChange = {this.handleInput} /><br />
				
				<button onClick = {this.addNewCard}>Submit and Save Cards</button>
				
				<Link to = 'flashcards'>
					<h2>Return to View All Flashcards</h2>
				</Link>

				{ this.state.submission && <h1>Card Submitted!</h1> }

			</div>
		);
	}
};

export default EditFlashcards;