
import * as types from '../constants/actionTypes'

const notes = (state = [{
	id: 0,
	title: 'This is a sample note',
	content: 'Free Code Camp is awesome!!!'
}], action) => {
	
	switch (action.type) {
	
		case types.ADD_NOTE:
			let newNotes = state.slice();
			let addedNote = {
				id: action.id,
				title: action.title,
				content: action.content
			}
			newNotes[action.id] = addedNote;

			return newNotes;
	
		case types.REMOVE_NOTE:
			let id = action.id;
			let currentNotes = state.slice();
			currentNotes.splice(id, 1);
			let newIds = currentNotes.map( (note, idx) => {
				return {
					id: idx,
					title: note.title,
					content: note.content
				}
			});
			return newIds;
	
		case types.EDIT_NOTE:
			id = action.id;
			newNotes[id] = {
				id: action.id,
				title: action.title,
				content: action.content
			}
			return newNotes;
	
		case types.CLEAR_NOTES:
			return [];
	
		default:
			return state;
	}
}

export default notes;