import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import getFlashcards from '../../store/thunks/getFlashcards'

import './Form.css'

const Form = () => {
  const [category, setCategory] = useState('Film')
  const [questionCount, setQuestionCount] = useState(1)
  const dispatch = useDispatch()

  const categories = [
    {name: 'Geography', id: 22},
    {name: 'Science & Nature', id: 17},
    {name: 'History', id: 23},
    {name: 'Film', id: 11},
    {name: 'Music', id: 12},
    {name: 'Literature', id: 10},
    {name: 'Sports', id: 21},
    {name: 'Television', id: 14},
  ]

  const dropdownOptions = categories
    .sort((a, b) => a.name - b.name)
    .map(cat => (
      <option value={cat.name} id={cat.id}>{cat.name}</option>
    ))

  const handleSubmit = (e) => {
    e.preventDefault()
    const categoryID = categories.find(cat => cat.name === category).id
    const url = `https://opentdb.com/api.php?amount=${questionCount}&category=${categoryID}&type=multiple`
    dispatch(getFlashcards(url))
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor='name-input'>Name:</label>
        <input 
          id='name-input'
          type='text'
          placeholder='Name...'
        />
      </div>
      <div>
        <label htmlFor='question-count-input'>Question Count:</label>
        <input 
          id='question-count-input'
          type='number'
          min='1'
          max='10'
          placeholder='Question Count...'
          value={questionCount}
          onChange={(e) => setQuestionCount(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='category-input'>Category:</label>
        <select id='category-input' value={category} onChange={(e) => setCategory(e.target.value)}>
          {dropdownOptions}
        </select>
      </div>
      <input 
        aria-label='submit-btn'
        type='submit'
        value='Begin!'
      />
    </form>
  )
}

export default Form
