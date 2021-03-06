const initialState = []

export const flashcards = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_FLASHCARDS':
      return action.payload
    case 'RESET_FLASHCARDS':
      return initialState
    default:
      return state
  }
}