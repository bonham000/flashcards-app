
import * as types from '../constants/actionTypes'

const math = (state = 5, action) => {
	switch(action.type) {

		case types.MULTIPLY:
			return state * action.number
		
		case types.DIVIDE:
			return state / action.number

		case types.RESET:
			let newNumber = Number(action.newNumber)
			return newNumber;

		default:
			return state
	}
}

export default math;