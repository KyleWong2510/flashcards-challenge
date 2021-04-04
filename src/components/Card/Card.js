import React, { useState, useEffect } from 'react'
import './Card.css'

const Card = ({question, correctAnswer, allAnswers, nextCard}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [questionCard, setQuestionCard] = useState(question)

  const displayedAnswers = allAnswers.map((answer, i) => (
    <p 
      className={`answer ${selectedAnswer === i && 'selected'}`}
      id={i}
      onClick={() => {
        setSelectedAnswer(i)
      }}
    >
      {answer}
    </p>
  ))

  const handleQuestionClick = () => {
    if (selectedAnswer) {
      setQuestionCard(correctAnswer)
      nextCard()
    }
    console.log(questionCard)
  }

  return (
    <section className='card'>
      <div className='question' onClick={handleQuestionClick}>{questionCard}</div>
      <div className='answers-container'>
        {displayedAnswers}
      </div>
    </section>
  )
}

export default Card
