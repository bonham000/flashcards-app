import React from 'react'
import { Route } from 'react-router'

// container components
import App from './containers/App'
import Notes from './containers/Notes'
import addNotes from './containers/AddNotes'
import Study from './containers/Study'
import Flashcards from './containers/Flashcards'
import AddFlashcards from './containers/AddFlashcards'

// presentational components
import About from './components/About'

export default (
  <Route component={App}>
    <Route path='/' name='home' component={About} />
    <Route path='/study' name='study' component={Study} />
    <Route path='/flashcards' name='flashcards' component={Flashcards} />
    <Route path='/add-flashcards' name='add-flashcards' component={AddFlashcards} />
    <Route path='/notes' name='notes' component={Notes} />
    <Route path='/add-notes' name='notes' component={addNotes} />
  </Route>
);
