import * as types from '../constants/actionTypes'

export const addFlashcard = (flashcard) => {
	return {
		type: types.ADD_FLASHCARD,
		front: flashcard.front,
		back: flashcard.back,
		id: flashcard.id
	}
}

export const removeFlashcard = (id) => {
	return {
		type: types.REMOVE_FLASHCARD,
		id: id
	}
}

export const editFlashcard = (flashcard, id) => {
	return {
		type: types.EDIT_FLASHCARD,
		front: flashcard.front,
		back: flashcard.back,
		id: id
	}
}

export const clearFlashcards = () => {
	return {
		type: types.CLEAR_FLASHCARDS
	}
}