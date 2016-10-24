import { combineReducers } from 'redux'

// import reducers
import notes from './notes'
import flashcards from './flashcards'


export default combineReducers({
  flashcards,
  notes,
});
