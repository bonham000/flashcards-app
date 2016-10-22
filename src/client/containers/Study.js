import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as flashcardActions from '../actions/flashcards'

import BeginStudy from '../components/BeginStudy'

@connect(
	state => ({
		deck: state.flashcards
	}),
	dispatch => ({
		actions: bindActionCreators(flashcardActions, dispatch)
	}),
)
class Study extends React.Component {
	componentWillMount() { this.setState({ deck: this.props.deck }) }
	static propTypes = {
		deck: PropTypes.array.isRequired,
		actions: PropTypes.object.isRequired
	}
	constructor(props) {
		super(props);
		this.state = {
			deck: [],
			studyDeck: [],
			study: false
		}
		this.studyOriginal = this.studyOriginal.bind(this);
		this.studyShuffle = this.studyShuffle.bind(this);
		this.endStudy = this.endStudy.bind(this);
	}
	studyOriginal() {
		this.setState({
			studyDeck: this.state.deck,
			study: true
		});
	}
	studyShuffle() {
		let originalOrder = this.state.deck.slice();
		let shuffled = [];

		while (originalOrder.length > 0) {
			let randomIdx = Math.round(Math.random() * (originalOrder.length - 1));
			shuffled.push(originalOrder[randomIdx]);
			originalOrder.splice(randomIdx, 1);
		}

		this.setState({
			studyDeck: shuffled,
			study: true
		});
	}
	endStudy() { this.setState({ study: false }) }
	render() {
		return (
			<div className = 'studyComponent'>
				{ !this.state.study && <div className = 'studyOptions'>
					<h1>Study Flashcard Deck</h1>
					<button onClick = {this.studyOriginal}>Study Original Order</button>
					<button onClick = {this.studyShuffle}>Shuffle Cards and Study</button>
				</div> }
				{ this.state.study &&
				<div className = 'studyView'>
					<BeginStudy deck = {this.state.studyDeck} endStudy = {this.endStudy}/>
				</div> }
			</div>
		);
	}
};

export default Study;