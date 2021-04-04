import React, { useState } from 'react'
import Card from '../Card/Card'
import { withRouter } from 'react-router-dom'
import { useSelector, connect } from 'react-redux'
import './CardContainer.css'

const CardContainer = (props) => {
  const flashcards = useSelector((state) => state.flashcards)
  const [currentCard, setCurrentCard] = useState(0)
  const [score, setScore] = useState(0)
  const [completedQuestions, setCompletedQuestions] = useState(0)
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
    setCompletedQuestions(completedQuestions + 1)
    setIsQuestion(true)
    nextCard()
  }

  const handleIncorrect = () => {
    setCompletedQuestions(completedQuestions + 1)
    setIsQuestion(true)
    nextCard()
  }

  const cards = flashcards.map((card) => (
    <Card 
      question={card.question}
      correctAnswer={card.correct_answer}
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
          <p>{score} / {completedQuestions}</p>
        </div>
      </div>
      {cards[currentCard]}
      <button onClick={handleCorrect}>Right</button>
      <button onClick={handleIncorrect}>Wrong</button>
    </section>
  )
}

export default connect(null, null)(withRouter(CardContainer))
