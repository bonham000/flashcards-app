import React from 'react'
import { Route } from 'react-router'

// container components
import App from './containers/App'
import BigCounter from './containers/BigCounter'
import Posts from './containers/Posts'
import MathComponent from './containers/MathComponent'
import Notes from './containers/notes'
import addNotes from './containers/addNotes'
import Flashcards from './containers/Flashcards'
import EditFlashcards from './containers/EditFlashcards'

// presentational components
import About from './components/About/About'

export default (
  <Route component={App}>
    <Route path='/' name='home' component={About} />
    <Route path='/posts' name='posts' component={Posts} />
    <Route path='/big-counter' name='big-counter' component={BigCounter} />
    <Route path='/math' name='math' component={MathComponent} />
    <Route path='/flashcards' name='flashcards' component={Flashcards} />
    <Route path='/edit-flashcards' name='edit-flashcards' component={EditFlashcards} />
    <Route path='/notes' name='notes' component={Notes} />
    <Route path='/add-notes' name='notes' component={addNotes} />
  </Route>
);
