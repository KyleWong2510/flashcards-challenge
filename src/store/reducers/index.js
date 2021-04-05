import { combineReducers } from 'redux'
import { hasErrored } from './hasErrored'
import { flashcards } from './flashcardsReducer'
import { user } from './userReducer'
import { score } from './scoreReducer'
import { missedCards } from './missedCardsReducer'

export const rootReducer = combineReducers({
  hasErrored, 
  flashcards,
  user,
  score,
  missedCards,
})
