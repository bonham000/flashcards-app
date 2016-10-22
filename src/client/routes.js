import React from 'react'
import { Route } from 'react-router'

// container components
import App from './containers/App'
import Posts from './containers/Posts'
import Notes from './containers/notes'
import addNotes from './containers/addNotes'
import Study from './containers/Study'
import Flashcards from './containers/Flashcards'
import EditFlashcards from './containers/EditFlashcards'

// presentational components
import About from './components/About/About'

export default (
  <Route component={App}>
    <Route path='/' name='home' component={About} />
    <Route path='/posts' name='posts' component={Posts} />
    <Route path='/study' name='study' component={Study} />
    <Route path='/flashcards' name='flashcards' component={Flashcards} />
    <Route path='/edit-flashcards' name='edit-flashcards' component={EditFlashcards} />
    <Route path='/notes' name='notes' component={Notes} />
    <Route path='/add-notes' name='notes' component={addNotes} />
  </Route>
);
