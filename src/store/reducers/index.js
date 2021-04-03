import { combineReducers } from 'redux'
import { hasErrored } from './hasErrored'
import { setFlashcards } from './setFlashcards'

export const rootReducer = combineReducers({
  hasErrored, 
  setFlashcards
})
