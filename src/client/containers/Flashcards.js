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
	render() {
		const renderFlashcards = this.props.flashcards.map( (card) => {
			return (
				<div key = {card.id} className = "cardWrapper">
					<div className = "front">
						<h1>{card.front}</h1>
					</div>
					<div className = "back">
						<h1>{card.back}</h1>
					</div>
					<div className = "remove" onClick = {this.props.actions.removeFlashcard.bind(this, card.id)}>
						<h1>&times;</h1>
					</div>
				</div>
				)
		});
		return (
			<div className = "flashcardsComponents">
				<div className = "header">
					<h2>Flashcards Page</h2>
					<Link to = 'edit-flashcards'><h2>Click here to add new cards!</h2></Link>
					<Link to = 'study'><h2>Click here to begin studying!</h2></Link>
				</div>
				<div className = "cardsWrapper">
					{renderFlashcards}
				</div>
			</div>
		);
	}
};

export default Flashcards;