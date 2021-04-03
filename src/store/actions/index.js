export const setFlashcards = (cards) => ({
  type: 'SET_FLASHCARDS',
  payload: cards
})

export const hasErrored = (message) => ({
  type: 'HAS_ERRORED',
  payload: message
})