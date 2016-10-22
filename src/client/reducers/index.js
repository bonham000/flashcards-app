import { combineReducers } from 'redux'
import bigCount from './bigCount'
import posts from './posts'
import math from './math'
import notes from './notes'


export default combineReducers({
  bigCount,
  posts,
  math,
  notes,
});
