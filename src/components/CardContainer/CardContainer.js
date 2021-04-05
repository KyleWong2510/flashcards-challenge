import React, { useState } from 'react'
import Card from '../Card/Card'
import { withRouter } from 'react-router-dom'
import { decode } from 'html-entities'
import { useSelector, useDispatch, connect } from 'react-redux'
import './CardContainer.css'
import { setMissedCards } from '../../store/actions'

const CardContainer = (props) => {
  const flashcards = useSelector((state) => state.flashcards)
  const dispatch = useDispatch()

  const [currentCard, setCurrentCard] = useState(0)
  const [score, setScore] = useState(0)
  const [isQuestion, setIsQuestion] = useState(true)

  const nextCard = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1)
    }
    if (currentCard === cards.length - 1) {
      props.history.push('/end')
    }
  }

  const handleCorrect = () => {
    setScore(score + 1)
    setIsQuestion(true)
    nextCard()
  }

  const handleIncorrect = () => {
    dispatch(setMissedCards(flashcards[currentCard]))
    setIsQuestion(true)
    nextCard()
  }

  const cards = flashcards.map((card) => (
    <Card 
      question={decode(card.question)}
      correctAnswer={decode(card.correct_answer)}
      isQuestion={isQuestion}
      setIsQuestion={setIsQuestion}
    />
  ))
  
  return (
    <section className='card-container'>
      <div className='metrics'>
        <div>
          <h2>Question:</h2>
          <p>{currentCard + 1} / {flashcards.length}</p>
        </div>
        <div>
          <h2>Score:</h2>
          <p>{score} / {currentCard}</p>
        </div>
      </div>
      {cards[currentCard]}
      <div className='btn-container'>
        <button onClick={handleCorrect}>Right</button>
        <button onClick={handleIncorrect}>Wrong</button>
      </div>
    </section>
  )
}

export default connect(null, null)(withRouter(CardContainer))
