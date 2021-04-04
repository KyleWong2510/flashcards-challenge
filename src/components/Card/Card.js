import React, { useState, useEffect } from 'react'
import './Card.css'

const Card = ({question, correctAnswer, allAnswers, nextCard, incrementScore, incrementCompleted}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isQuestion, setIsQuestion] = useState(true)
  const [isFlippable, setIsFlippable] = useState(false)
  const displayedAnswers = allAnswers.map((answer, i) => (
    <p 
      className={`answer ${selectedAnswer === i && 'selected'}`}
      id={i}
      onClick={() => {
        setSelectedAnswer(i)
        setIsFlippable(true)
      }}
    >
      {answer}
    </p>
  ))

  const handleQuestionClick = () => {
    if (selectedAnswer !== null && isFlippable) {
      setIsQuestion(false)
    }
  }

  const addPoint = () => {
    console.log('SEL', allAnswers[selectedAnswer])
    console.log('COR', correctAnswer)
    if (allAnswers[selectedAnswer] === correctAnswer) {
      console.log('TRUE')
      incrementScore()
    }
  }

  const handleNextClick = () => {
    addPoint()
    incrementCompleted()
    setIsQuestion(true)
    setIsFlippable(false)
    setSelectedAnswer(null)
    nextCard()
  }

  return (
    <section className='card'>
      <div className='question' onClick={handleQuestionClick}>
        {isQuestion ? question : correctAnswer}
      </div>
      <div className='answers-container'>
        {displayedAnswers}
      </div>
      <button onClick={handleNextClick} disabled={isQuestion}>Next</button>
    </section>
  )
}

export default Card
