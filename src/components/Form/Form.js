import React from 'react'
import './Form.css'

const Form = () => {
  const categories = [
    'Literature',
    'History',
    'Geography',
    'Science & Nature',
    'Music',
    'Film',
    'Television',
    'Sports',
  ]

  const dropdownOptions = categories.map(cat => (
    <option value={ cat }>{ cat }</option>
  ))

  return (
    <form>
      <div>
        <label for='name-input'>Name:</label>
        <input 
          id='name-input'
          type='text'
          placeholder='Name...'
        />
      </div>
      <div>
        <label for='question-count-input'>Question Count:</label>
        <input 
          id='question-count-input'
          type='number'
          min='1'
          max='10'
          placeholder='Question Count...'
        />
      </div>
      <div>
        <label for='category-input'>Category:</label>
        <select id='category-input'>
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
