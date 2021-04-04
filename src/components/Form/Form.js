import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch, connect } from 'react-redux'
import getFlashcards from '../../store/thunks/getFlashcards'

import './Form.css'

const Form = (props) => {
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

  const sortedCats = categories.sort((a, b) => {
    if (a.name < b.name) {
      return -1
    }
    if (a.name > b.name) {
      return 1
    }
    return 0
  })
  
  const dropdownOptions = sortedCats.map(cat => (
    <option value={cat.name} id={cat.id}>{cat.name}</option>
  ))

  const [category, setCategory] = useState(`${sortedCats[0].name}`)
  const [questionCount, setQuestionCount] = useState(1)
  const dispatch = useDispatch()
    
  const handleSubmit = (e) => {
    e.preventDefault()
    const categoryID = categories.find(cat => cat.name === category).id
    const url = `https://opentdb.com/api.php?amount=${questionCount}&category=${categoryID}&type=multiple`
    dispatch(getFlashcards(url))
    props.history.push('/play')
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

export default connect(null, null)(withRouter(Form))
