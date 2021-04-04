import { setFlashcards, hasErrored } from '../actions'

const getFlashcards = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url)
      console.log(response)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const data = await response.json()
      dispatch(setFlashcards(data.results))
    } catch (err) {
      dispatch(hasErrored(err.message))
    }
  }
}

export default getFlashcards