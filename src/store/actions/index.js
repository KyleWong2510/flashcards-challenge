export const setFlashcards = (cards) => ({
  type: 'SET_FLASHCARDS',
  payload: cards
})

export const resetFlashcards = () => ({
  type: 'RESET_FLASHCARDS'
})

export const setUser = (username) => ({
  type: 'SET_USER',
  payload: username
})

export const resetUser = () => ({
  type: 'RESET_USER'
})

export const setMissedCards = (cards) => ({
  type: 'SET_MISSED_CARDS',
  payload: cards
})

export const resetMissedCards = () => ({
  type: 'RESET_MISSED_CARDS'
}) 

export const setCategory = (category) => ({
  type: 'SET_CATEGORY',
  payload: category
})

export const resetCategory = () => ({
  type: 'RESET_CATEGORY'
})

export const setError = (message) => ({
  type: 'SET_ERROR',
  payload: message
})

export const resetError = () => ({
  type: 'RESET_ERROR'
})