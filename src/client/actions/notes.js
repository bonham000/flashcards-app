
import * as types from '../constants/actionTypes'

export const addNote = (note) => ({
	type: types.ADD_NOTE,
	id: note.id,
	title: note.title,
	content: note.content
})

export const removeNote = (id) => ({
	type: types.REMOVE_NOTE,
	id: id
})

export const editNote = (note) => ({
	type: types.EDIT_NOTE,
	id: note.id,
	title: note.title,
	content: note.content
})

export const clearNote = () => ({
	type: types.CLEAR_NOTES
})
