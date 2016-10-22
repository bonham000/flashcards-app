
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
				front: action.front,
				back: action.back,
				id: action.id,
				confidence: 0
			}
			currFlashcards[action.id] = editedCard;
			return currFlashcards;
		
		case types.REMOVE_FLASHCARD:
			let newFlashcards = state.slice();
			let removeID = action.id;
			newFlashcards.splice(removeID, 1);

			let reIndexed = newFlashcards.map( (card, idx) => {
				return ({
					id: idx,
					front: card.front,
					back: card.back,
					confidence: 0
				});
			});
			
			return reIndexed;
			
		case types.CLEAR_FLASHCARDS:
			return []
		
		default:
			return state	

	}
}

export default flashcards;