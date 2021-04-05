const initialState = ''

export const category = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_CATEGORY':
      return action.payload
    case 'RESET_CATEGORY':
      return initialState
    default:
      return state
  }
}