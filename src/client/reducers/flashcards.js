
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
			let newFlashcards = state.slice();
			let removeID = action.id;
			newFlashcards.splice(removeID, 1);
			
			return newFlashcards;
			
		case types.CLEAR_FLASHCARDS:
			return []
		
		default:
			return state	

	}
}

export default flashcards;