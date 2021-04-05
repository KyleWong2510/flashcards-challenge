import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import CardContainer from './CardContainer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../../store/reducers';
import thunk from 'redux-thunk';

describe('CardContainer', () => {
  it('should render text, a card, and btns', () => {
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

    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CardContainer />
        </Provider>
      </BrowserRouter>);

    const question = getByText('Question:')
    const score = getByText('Score:')
    const card = getByText('Why?')
    const rightBtn = getByText('Right')
    const wrongBtn = getByText('Wrong')
    
    expect(question).toBeInTheDocument()
    expect(score).toBeInTheDocument()
    expect(card).toBeInTheDocument()
    expect(rightBtn).toBeInTheDocument()
    expect(wrongBtn).toBeInTheDocument()
  });

  it('should increase counters on click of either btn', () => {
    const store = createStore(rootReducer, {
      category: 'Film',
      flashcards: [
        {
          question: 'Why?',
          correct_answer: 'Because'
        },{
          question: 'How?',
          correct_answer: 'Because'
        },{
          question: 'Where?',
          correct_answer: 'Because'
        },
      ],
      error: '',
      missedCards: [],
      user: 'Test Name',
    }, applyMiddleware(thunk))

    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CardContainer />
        </Provider>
      </BrowserRouter>);

    const questionCounter = getByText('1 / 3')
    const scoreCounter = getByText('0 / 0')
    const rightBtn = getByText('Right')
    const wrongBtn = getByText('Wrong')
    
    expect(questionCounter).toBeInTheDocument()
    expect(scoreCounter).toBeInTheDocument()
    
    fireEvent.click(rightBtn)
    fireEvent.click(wrongBtn)

    const updatedQuestionCounter = getByText('3 / 3')
    const updatedScoreCounter = getByText('1 / 2')

    expect(updatedQuestionCounter).toBeInTheDocument()
    expect(updatedScoreCounter).toBeInTheDocument()
  });
});