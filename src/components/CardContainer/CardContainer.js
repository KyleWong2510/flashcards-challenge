import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch, connect } from 'react-redux'
import { shuffle } from '../../util'
import './CardContainer.css'

const CardContainer = (props) => {
  const flashcards = useSelector((state) => state.flashcards)
  const [currentCard, setCurrentCard] = useState(0)
  const [score, setScore] = useState(0)
  const [completedQuestions, setCompletedQuestions] = useState(0)

  const nextCard = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1)
    }
    if (currentCard === cards.length - 1) {
      props.history.push('/end')
    }
  }

  const incrementScore = () => {
    setScore(score + 1)
  }

  const incrementCompleted = () => {
    setCompletedQuestions(completedQuestions + 1)
  }

  const cards = flashcards.map((card) => (
    <Card 
      question={card.question}
      correctAnswer={card.correct_answer}
      allAnswers={shuffle([...card.incorrect_answers, card.correct_answer])}
      nextCard={nextCard}
      incrementScore={incrementScore}
      incrementCompleted={incrementCompleted}
    />
  ))
  
  return (
    <section className='card-container'>
      <div>
        <h2>Question:</h2>
        <p>{currentCard + 1} / {flashcards.length}</p>
      </div>
      <div>
        <h2>Score:</h2>
        <p>{score} / {completedQuestions}</p>
      </div>
      <p>Select an answer below then click the question card to reveal the correct answer!<br />When you are ready to move on, click the 'Next' button below.</p>
      {cards[currentCard]}
    </section>
  )
}

export default connect(null, null)(withRouter(CardContainer))
