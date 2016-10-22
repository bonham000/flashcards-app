import { combineReducers } from 'redux'

// import reducers
import posts from './posts'
import notes from './notes'
import flashcards from './flashcards'


export default combineReducers({
  posts,
  flashcards,
  notes,
});
