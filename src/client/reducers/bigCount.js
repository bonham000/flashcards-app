import * as types from '../constants/actionTypes'

const bigCount = (state = 0, action) => {

	switch (action.type) {

		case types.BIG_COUNT_INC:
			return state + 100;

		case types.BIG_COUNT_DEC:
			return state - 100;

		default:
			return state;

	}

};

export default bigCount;