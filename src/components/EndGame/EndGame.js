import React from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch, connect } from 'react-redux'
import { setFlashcards, resetMissedCards, resetCategory, resetFlashcards, resetUser } from '../../store/actions'
import './EndGame.css'

const EndGame = (props) => {
  const category = useSelector((state) => state.category)
  const flashcards = useSelector((state) => state.flashcards)
  const missedCards = useSelector((state) => state.missedCards)
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const getPercentCorrect = () => {
    const numCorrect = flashcards.length - missedCards.length

    return (numCorrect / flashcards.length * 100).toFixed(2)
  }
  const percentCorrect = getPercentCorrect()

  const handleReviewClick = () => {
    dispatch(setFlashcards(missedCards))
    dispatch(resetMissedCards())
    props.history.push('/play')
  }

  const handleTryAgainClick = () => {
    dispatch(resetMissedCards())
    props.history.push('/play')
  }

  const handleNewGameClick = () => {
    dispatch(resetFlashcards())
    dispatch(resetUser())
    dispatch(resetMissedCards())
    dispatch(resetCategory())
    props.history.push('/')
  }

  return (
    <div className='end-game'>
      <h2>Game Over</h2>
      {percentCorrect > 70 ? 
        <p>Great Job, {user}! You got {percentCorrect}% correct in the {category} category!</p> :
        <p>Ouch, {user}! You got {percentCorrect}% correct in the {category} category. You'll do better next time!</p>
      }
      <div className='end-game-instructions' data-testid='end-game-instructions'>
        <span>That's it! The game is over. Below you have some options:</span><br/>
        {missedCards.length > 0 && (<p><span>Review</span> - Start over with just the question you missed.</p>)}
        <span>Try Again</span> - Start over with all of the same questions.<br/>
        <span>New Game</span> - Start over with an all new name, category, and number of questions.
      </div>
      <div className='end-game-btn-container'>
        {missedCards.length > 0 && 
          <button onClick={handleReviewClick} data-testid='review-btn'>Review</button>
        }
        <button onClick={handleTryAgainClick} data-testid='try-again-btn'>Try Again</button>
        <button onClick={handleNewGameClick} data-testid='new-game-btn'>New Game</button>
      </div>
    </div>
  )
}

export default connect(null, null)(withRouter(EndGame))
