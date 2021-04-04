import { combineReducers } from 'redux'
import { hasErrored } from './hasErrored'
import { flashcards } from './flashcardsReducer'

export const rootReducer = combineReducers({
  hasErrored, 
  flashcards
})
