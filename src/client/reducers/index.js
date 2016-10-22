import { combineReducers } from 'redux'
import bigCount from './bigCount'
import posts from './posts'
import math from './math'
import notes from './notes'
import flashcards from './flashcards'


export default combineReducers({
  bigCount,
  posts,
  math,
  flashcards,
  notes,
});
