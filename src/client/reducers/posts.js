import * as types from '../constants/actionTypes'

const posts = (state = [], action) => {

	switch(action.type) {
	
		case types.ADD_POST:

			let newState = state.slice();
			
			newState[newState.length] = action.text;

			return newState
	
		case types.REMOVE_POST:

			let newPosts = state.slice();
			newPosts.splice(action.index, 1);

			return newPosts;

		case types.REMOVE_ALL:

			return [];

		default:
			return state;
	
	}
}

export default posts;