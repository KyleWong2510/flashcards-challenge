import { combineReducers } from 'redux'
import { category } from './categoryReducer'
import { flashcards } from './flashcardsReducer'
import { error } from './errorReducer'
import { missedCards } from './missedCardsReducer'
import { user } from './userReducer'

export const rootReducer = combineReducers({
  category,
  flashcards,
  error, 
  missedCards,
  user,
})
