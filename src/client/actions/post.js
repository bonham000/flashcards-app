import * as types from '../constants/actionTypes'

export const addPost = (text) => ({
		type: types.ADD_POST,
		text: text
});

export const removePost = (idx) => ({
		type: types.REMOVE_POST,
		index: idx
});

export const removeAll = () => ({
	type: types.REMOVE_ALL
});