
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as bigCountActions from '../actions/bigCounter'

@connect(
	state => ({
		bigCount: state.bigCount, 
	}), 
	dispatch => ({
		actions: bindActionCreators(bigCountActions, dispatch)
	}),
)
class BigCounter extends React.Component {
	static propTypes = {
		bigCount: React.PropTypes.number.isRequired,
		actions: React.PropTypes.object.isRequired
	}
	render() {
		const { bigCountInc, bigCountDec } = this.props.actions;
		return (
			<div className = "bigCounterComponent">
				<h1>Current Big Count: {this.props.bigCount}</h1>
				<button onClick = {bigCountInc}>Increment</button>
				<button onClick = {bigCountDec}>Decrement</button>
			</div>
		);
	}
};

export default BigCounter;