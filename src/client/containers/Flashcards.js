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
				</div>
				)
		});
		return (
			<div className = "flashcardsComponents">
				<h1>Flashcards Page</h1>
				<Link to = 'edit-flashcards'><h3>Click here to add new cards</h3></Link>
				<div className = "cardsWrapper">
					{renderFlashcards}
				</div>
			</div>
		);
	}
};

export default Flashcards;