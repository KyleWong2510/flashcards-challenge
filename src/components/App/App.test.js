import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
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

describe('App', () => {
  it('should render the card, question side up', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>);
  });
});

