import React, { useState, useEffect } from 'react'
import './Card.css'

const Card = ({question, correctAnswer, isQuestion, setIsQuestion}) => {
  return (
    <section className='card'>
      <div className='question' onClick={() => setIsQuestion(!isQuestion)}>
        {isQuestion ? question : correctAnswer}
      </div>
    </section>
  )
}

export default Card
