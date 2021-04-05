import { combineReducers } from 'redux'
import { category } from './categoryReducer'
import { flashcards } from './flashcardsReducer'
import { hasErrored } from './hasErrored'
import { missedCards } from './missedCardsReducer'
import { user } from './userReducer'

export const rootReducer = combineReducers({
  category,
  flashcards,
  hasErrored, 
  missedCards,
  user,
})
