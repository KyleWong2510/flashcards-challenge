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

export const setScore = (score) => ({
  type: 'SET_SCORE',
  payload: score
})

export const resetScore = () => ({
  type: 'RESET_SCORE'
})

export const setMissedCards = (cards) => ({
  type: 'SET_MISSED_CARDS',
  payload: cards
})

export const resetMissedCards = () => ({
  type: 'RESET_MISSED_CARDS'
}) 

export const hasErrored = (message) => ({
  type: 'HAS_ERRORED',
  payload: message
})