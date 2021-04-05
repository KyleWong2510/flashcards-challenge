const initialState = []

export const missedCards = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_MISSED_CARDS':
      return action.payload
    case 'RESET_MISSED_CARDS':
      return initialState
    default:
      return state
  }
}