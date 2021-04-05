const initialState = 0

export const score = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_SCORE':
      return action.payload
    case 'RESET_SCORE':
      return initialState
    default:
      return state
  }
}