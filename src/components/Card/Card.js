import React from 'react'
import './Card.css'

const Card = ({question, correctAnswer, isQuestion, setIsQuestion}) => {

  return (
    <section className='card'>
      {isQuestion ? <h1>Question</h1> : <h1>Answer</h1>}
      <div className='question' onClick={() => setIsQuestion(!isQuestion)}>
        {isQuestion ? question : correctAnswer}
      </div>
    </section>
  )
}

export default Card
