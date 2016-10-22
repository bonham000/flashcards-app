import React from 'react'

class BeginStudy extends React.Component {
	componentWillMount() { this.setState({ studyDeck: this.props.deck }) }
	constructor(props) {
		super(props);
		this.state = {
			studyDeck: [],
			currentIdx: 0,
			front: true
		}
		this.flipCard = this.flipCard.bind(this);
		this.advance = this.advance.bind(this);
		this.retreat = this.retreat.bind(this);
	}
	flipCard() {
		this.setState({
			front: !this.state.front,
		});
	}
	advance() {
		if (this.state.currentIdx !== this.state.studyDeck.length - 1) {
			let index = this.state.currentIdx;
			this.setState({
				currentIdx: index + 1,
				front: true
			});
		}
	}
	retreat() {
		if (this.state.currentIdx > 0) {				
			let index = this.state.currentIdx;
			this.setState({
				currentIdx: index - 1,
				front: true
			});
		}
	}
	render() {
		let currentCard = this.state.studyDeck[this.state.currentIdx];

		let cardStyle = {
			background: '#DEE5E5'
		}
		if (!this.state.front) {
			cardStyle = {
				background: '#F7DD72'
			}
		}

		return (
			<div>

				<h1>Card {this.state.currentIdx} of {this.state.studyDeck.length - 1}</h1>
				
				<div onClick = {this.flipCard} className = 'studyCard' style = {cardStyle}>
					{this.state.front ? <h1>{currentCard.front}</h1> : <h1>{currentCard.back}</h1> }
				</div>
				
				<button onClick = {this.retreat}>Backward</button>
				<button onClick = {this.advance}>Forward</button><br />
				
				<button onClick = {this.props.endStudy}>End Study</button>
			</div>
		);
	}
};

export default BeginStudy;