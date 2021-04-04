import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import { useSelector, useDispatch, connect } from 'react-redux'
import { shuffle } from '../../util'

const CardContainer = () => {
  const flashcards = useSelector((state) => state.flashcards)
  const [currentCard, setCurrentCard] = useState(0)

  const nextCard = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1)
    }
  }

  const cards = flashcards.map((card) => (
    <Card 
      question={card.question}
      correctAnswer={card.correct_answer}
      allAnswers={shuffle([...card.incorrect_answers, card.correct_answer])}
      nextCard={nextCard}
    />
  ))
  
  
  
  return (
    <section>
      {cards[currentCard]}
    </section>
  )
}

export default CardContainer
