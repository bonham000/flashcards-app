import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class BeginStudy extends React.Component {
	componentWillMount() {
		this.initDeck();
	}
	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyInput, false);
	}
	constructor(props) {
		super(props);
		this.state = {
			studyDeck: [],
			reviewDeck: [],
			currentIdx: 1,
			front: true,
			transitionType: 'cardTransitionRight',
			ratingMessage: false,
			review: false
		}
		this.initDeck = this.initDeck.bind(this);
		this.flipCard = this.flipCard.bind(this);
		this.advance = this.advance.bind(this);
		this.retreat = this.retreat.bind(this);
		this.handleKeyInput = this.handleKeyInput.bind(this);
		this.rateCard = this.rateCard.bind(this);
		this.restart = this.restart.bind(this);
	}
	initDeck() {
		const cards = this.props.deck.slice();
		cards.unshift({
			front: 'This is the beginning of the deck',
			back: 'This is the beginning of the deck',
			id: null
		});
		cards.push({
			front: 'This is the end of the deck',
			back: 'This is the end of the deck',
			id: null
		});
		this.setState({
			studyDeck: cards
		});
	}
	restart() {
		this.setState({
			studyDeck: [],
			reviewDeck: [],
			currentIdx: 1,
			front: true,
			transitionType: 'cardTransitionRight',
			ratingMessage: false,
			review: false
		});
		this.initDeck();
	}
	handleKeyInput(k) {

		k.preventDefault();

		const key = k.keyCode;

		if (key === 32) {
			this.flipCard();
		} else if (key === 39) {
			this.advance();
		} else if (key === 37) {
			this.retreat();
		} else if (key === 49) {
			this.rateCard(1);
		} else if (key === 50) {
			this.rateCard(2);
		} else if (key === 51) {
			this.rateCard(3);
		}

	}
	flipCard() {
		this.setState({
			front: !this.state.front,
		});
	}
	advance() {

		if (this.state.currentIdx === this.state.studyDeck.length - 2 && this.state.reviewDeck.length !== 0) {

			const { reviewDeck } = this.state;

			reviewDeck.unshift({
				front: 'This is the end of the deck, continue forward to review the cards you missed.',
				back: 'This is the end of the deck, continue forward to review the cards you missed.',
				id: null
			})
			reviewDeck.push({
				front: 'This is the end of the review deck, nice studying! Click this card to start over!',
				back: 'This is the end of the review deck, nice studying! Click this card to start over!',
				id: null,
				restart: true
			});

			this.setState({
				reviewDeck: [],
				studyDeck: reviewDeck,
				currentIdx: 0,
				review: true
			});

		} else if (this.state.currentIdx !== this.state.studyDeck.length - 1) {
			let index = this.state.currentIdx;
			this.setState({
				transitionType: 'cardTransitionRight'
			});
			setTimeout( () => {
				this.setState({
					currentIdx: index + 1,
					front: true
				});
			}, 50);
		}
	}
	retreat() {
		if (this.state.currentIdx > 0) {				
			let index = this.state.currentIdx;
			this.setState({
				transitionType: 'cardTransitionLeft'
			})
			setTimeout( () => {
				this.setState({
					currentIdx: index - 1,
					front: true
				});
			}, 50);
		}
	}
	rateCard(num) {

		const { reviewDeck } = this.state;
		const currentDeck = this.state.studyDeck.slice();
		let currentCard = currentDeck[this.state.currentIdx];

		if (num !== 3) {
			if (currentCard.id !== null) {
				const filteredReview = reviewDeck.filter( (card) => {
					return card.id !== currentCard.id;
				});
				currentCard.confidence = num;
				filteredReview.push(currentCard);
				this.setState({
					reviewDeck: filteredReview,
					ratingMessage: 'Rating Submitted!'
				});
				this.advance();
				setTimeout( () => {
					this.setState({
						ratingMessage: ''
					});
				}, 1250);
			}
		} else {

			const filteredReview = reviewDeck.filter( (card) => {
				return card.id !== currentCard.id;
			});

			this.setState({
				ratingMessage: 'Nice!',
				reviewDeck: filteredReview
			});
			this.advance();
			setTimeout( () => {
				this.setState({
					ratingMessage: ''
				});
			}, 1250);
		}
	}
	render() {

		let currentCard = this.state.studyDeck[this.state.currentIdx];

		let cardStyle = {
			background: '#FFE48F'
		}
		if (!this.state.front) {
			cardStyle = {
				background: '#63E2C6'
			}
		}
		if (currentCard.id === null) {
			cardStyle = {
				background: '#FC3F5D'
			}
		}
		return (
			<div>

				{ this.state.currentIdx > 0 && this.state.currentIdx < this.state.studyDeck.length - 1 ? 
				<h1 className = 'studyTitle'>Card {this.state.currentIdx} of {this.state.studyDeck.length - 2}</h1> :
				<h1 className = 'studyTitle'>End of Deck</h1> }
				
				<button className = 'backwardBtn' onClick = {this.retreat}>Backward</button>
				<button className = 'endBtn' onClick = {this.props.endStudy}>End Session</button>
				<button className = 'forwardBtn' onClick = {this.advance}>Forward</button>

				<ReactCSSTransitionGroup
					transitionName = {this.state.transitionType}
					transitionEnterTimeout = {750}
					transitionLeaveTimeout = {250} >
					<div className = 'cardTransitionWrapper' key = {this.state.currentIdx}>

						{ this.state.front ?

							<ReactCSSTransitionGroup
								transitionName = 'cardFlip'
								transitionEnterTimeout = {250}
								transitionLeaveTimeout = {50} >

								{ currentCard.restart ?

									<div
										onClick = {this.restart}
										className = 'studyCard'
										style = {cardStyle}
										key = {currentCard.front.toString().substring(0,5)}>
										<h1>{currentCard.front}</h1>
									</div>

									:

									<div
										onClick = {this.flipCard}
										className = 'studyCard'
										style = {cardStyle}
										key = {currentCard.front.toString().substring(0,5)}>
										<h1>{currentCard.front}</h1>
									</div>

								}

							</ReactCSSTransitionGroup>

							:
							
							<ReactCSSTransitionGroup
								transitionName = 'cardFlip'
								transitionEnterTimeout = {250}
								transitionLeaveTimeout = {50} >
								<div
									onClick = {this.flipCard}
									className = 'studyCard'
									style = {cardStyle}
									key = {currentCard.back.toString().substring(0,5)}>
									<h1>{currentCard.back}</h1>
								</div>
							</ReactCSSTransitionGroup>

						}

					</div>
				</ReactCSSTransitionGroup>

				<div className = 'confidenceBtnWrapper'>
					<button className = "confidenceBtn" id = 'btn1' onClick = {this.rateCard.bind(this, 1)}>1</button>
					<button className = "confidenceBtn" id = 'btn2' onClick = {this.rateCard.bind(this, 2)}>2</button>
					<button className = "confidenceBtn" id = 'btn3' onClick = {this.rateCard.bind(this, 3)}>3</button>
					{ this.state.ratingMessage && <h1>{this.state.ratingMessage}</h1>}
				</div>				

			</div>
		);
	}
	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleKeyInput, false);
	}
};

export default BeginStudy;