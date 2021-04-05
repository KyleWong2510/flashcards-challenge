const initialState = ''

export const user = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_USER':
      return action.payload
    case 'RESET_USER':
      return initialState
    default:
      return state
  }
}