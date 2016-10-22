import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mathActions from '../actions/math'

@connect(
	state => ({
		math: state.math
	}),
	dispatch => ({
		actions: bindActionCreators(mathActions, dispatch)
	}),
)
class MathComponent extends React.Component {
	static propTypes = {
		math: PropTypes.number.isRequired,
		actions: PropTypes.object.isRequired
	}
	constructor(props) {
		super(props);
		this.state = {
			number: 1,
			newNumber: ''
		}

		this.resetState = this.resetState.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.handleNewInput = this.handleNewInput.bind(this);
		this.handleMultiply = this.handleMultiply.bind(this);
		this.handleDivide = this.handleDivide.bind(this);

	}
	handleNewInput(event) {
		if (!isNaN(event.target.value)) {
			this.setState({
				newNumber: event.target.value
			});
		}
	}
	resetState() {
		// let { newNumber } = this.state;
		// let { reset } = this.props.actions;

		// reset(newNumber);

		this.props.actions.reset(this.state.newNumber);

	}
	handleInput(event) {
		if (!isNaN(event.target.value)) {
			this.setState({
				number: event.target.value
			});
		}
	}
	handleMultiply() {
		let num = this.state.number;
		this.props.actions.multiply(num);
	}
	handleDivide() {
		let num = this.state.number;
		this.props.actions.divide(num);
	}
	render() {
		return (
			<div className = 'mathComponent'>

				<h1>Multiply and Divide</h1>
				
				<h2>
					Current state: {this.props.math}
				</h2>

				<div className="controlBtns">
					<button onClick = {this.handleMultiply}>Multiply</button>
					<button onClick = {this.handleDivide}>Divide</button>
				</div>

				<h2>Enter a number to multiply or divide the current state by:</h2>

				<input
					type="text"
					value = {this.state.number}
					onChange = {this.handleInput} />

				<h2>Or set the state to any other number:</h2>
				
				<input
					type="text"
					value = {this.state.newNumber}
					onChange = {this.handleNewInput} />

				<button onClick = {this.resetState}>Set New State</button>

			</div>
		);
	}
};

export default MathComponent;