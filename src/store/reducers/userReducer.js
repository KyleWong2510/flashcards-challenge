const initialState = ''

export const flashcards = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_USER':
      return action.payload
    case 'RESET_USER':
      return initialState
    default:
      return state
  }
}