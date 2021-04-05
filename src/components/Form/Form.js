import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch, connect } from 'react-redux'
import getFlashcards from '../../store/thunks/getFlashcards'
import { setUser, setCategory } from '../../store/actions'
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
    <option key={cat.id} value={cat.name} id={cat.id}>{cat.name}</option>
  ))
  
  const [username, setUsername] = useState('')
  const [questionType, setQuestionType] = useState(`${sortedCats[0].name}`)
  const [questionCount, setQuestionCount] = useState(1)
  const dispatch = useDispatch()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const categoryID = categories.find(cat => cat.name === questionType).id
    const url = `https://opentdb.com/api.php?amount=${questionCount}&category=${categoryID}&type=multiple`
    dispatch(getFlashcards(url))
    dispatch(setUser(username))
    dispatch(setCategory(questionType))
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <select id='category-input' value={questionType} onChange={(e) => setQuestionType(e.target.value)}>
          {dropdownOptions}
        </select>
      </div>
      <input 
        aria-label='submit-btn'
        className='submit-btn'
        type='submit'
        value='Begin!'
        disabled={!username && questionCount > 0 ? 'disabled' : null}
      />
    </form>
  )
}

export default connect(null, null)(withRouter(Form))
