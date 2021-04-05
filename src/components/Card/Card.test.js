import React from 'react';
import { fireEvent, getByTestId, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../../store/reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, {
  category: 'Film',
  flashcards: [{
    question: 'Why?',
    correct_answer: 'Because'
  }],
  error: '',
  missedCards: [],
  user: 'Test Name',
}, applyMiddleware(thunk))

describe('Card', () => {
  it('should render the card, question side up', () => {
    const mockSetIsQuestion = jest.fn()

    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Card 
            question='Why?'
            correctAnswer='Because'
            isQuestion={true}
            setIsQuestion={mockSetIsQuestion}
          />
        </Provider>
      </BrowserRouter>);

    const question = getByText('Why?')
    
    expect(question).toBeInTheDocument()
  });

  it('should flip the card on click of the card', () => {
    const mockSetIsQuestion = jest.fn()

    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Card 
            question='Why?'
            correctAnswer='Because'
            isQuestion={true}
            setIsQuestion={mockSetIsQuestion}
          />
        </Provider>
      </BrowserRouter>);

    const question = getByText('Why?')

    expect(question).toBeInTheDocument()

    fireEvent.click(question)

    expect(mockSetIsQuestion).toHaveBeenCalled()
  });

});
