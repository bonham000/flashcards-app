
import * as types from '../constants/actionTypes'

const flashcards = (state = [], action) => {

	switch (action.type) {

		case types.ADD_FLASHCARD:
			let currentFlashcards = state.slice();
			let newCard = {
				id: action.id,
				front: action.front,
				back: action.back,
				confidence: 0
			}
			currentFlashcards[action.id] = newCard;
			return currentFlashcards;

		case types.EDIT_FLASHCARD:
			let currFlashcards = state.slice();
			let editedCard = {
				id: action.id,
				front: action.front,
				back: action.back,
				confidence: 0
			}
			let editedCards = currFlashcards[action.id] = editedCard;
			return editedCards;
		
		case types.REMOVE_FLASHCARD:
			let curFlashcards = state.slice();
			let removeID = action.id;
			let removedCards = curFlashcards.splice(removeID, 1);
			return removedCards;
			
		case types.CLEAR_FLASHCARDS:
			return []
		
		default:
			return state	

	}
}

export default flashcards;