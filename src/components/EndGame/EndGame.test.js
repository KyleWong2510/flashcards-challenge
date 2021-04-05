import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import EndGame from './EndGame';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../../store/reducers';
import thunk from 'redux-thunk';

describe('EndGame', () => {
  it('should render text and btns', () => {
    const store = createStore(rootReducer, {
      category: 'Film',
      flashcards: [{}, {}, {}, {}],
      error: '',
      missedCards: [{}, {}],
      user: 'Test Name',
    }, applyMiddleware(thunk))

    const { getByText, getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <EndGame />
        </Provider>
      </BrowserRouter>);
    
    const endGameTitle = getByText('Game Over')
    const endGameMessage = getByText("Ouch, Test Name! You got 50.00% correct in the Film category. You'll do better next time!");
    const endGameInstructions = getByTestId('end-game-instructions')
    const reviewBtn = getByTestId('review-btn');
    const tryAgainBtn = getByTestId('try-again-btn')
    const newGameBtn = getByTestId('new-game-btn');

    expect(endGameMessage).toBeInTheDocument()
    expect(endGameTitle).toBeInTheDocument();
    expect(endGameInstructions).toBeInTheDocument()
    expect(reviewBtn).toBeInTheDocument();    
    expect(tryAgainBtn).toBeInTheDocument()
    expect(newGameBtn).toBeInTheDocument();
  });

  it('should render only two btns if all answers are correct', () => {
    const store = createStore(rootReducer, {
      category: 'Film',
      flashcards: [{}, {}, {}, {}],
      error: '',
      missedCards: [],
      user: 'Test Name',
    }, applyMiddleware(thunk))

    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <EndGame />
        </Provider>
      </BrowserRouter>);

    const tryAgainBtn = getByTestId('try-again-btn')
    const newGameBtn = getByTestId('new-game-btn');

    expect(tryAgainBtn).toBeInTheDocument()
    expect(newGameBtn).toBeInTheDocument();
  });

  it('should render a different message if the score is >= 70% correct', () => {
    const store = createStore(rootReducer, {
      category: 'Film',
      flashcards: [{}, {}, {}, {}],
      error: '',
      missedCards: [{}],
      user: 'Test Name',
    }, applyMiddleware(thunk))

    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <EndGame />
        </Provider>
      </BrowserRouter>);

    const endGameMessage = getByText('Great Job, Test Name! You got 75.00% correct in the Film category!');
    
    expect(endGameMessage).toBeInTheDocument()
  });

  it('should restart the game with just the missed questions on click of the review btn', () => {
    const store = createStore(rootReducer, {
      category: 'Film',
      flashcards: [{}, {}, {}, {}],
      error: '',
      missedCards: [{}],
      user: 'Test Name',
    }, applyMiddleware(thunk))

    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <EndGame />
        </Provider>
      </BrowserRouter>);

    const reviewBtn = getByTestId('review-btn');
    
    fireEvent.click(reviewBtn)

    const updatedState = store.getState()

    expect(updatedState).toEqual({
      category: 'Film',
      flashcards: [{}],
      error: '',
      missedCards: [],
      user: 'Test Name',
    })
  });

  it('should restart the game with the same questions on click of the try again btn', () => {
    const store = createStore(rootReducer, {
      category: 'Film',
      flashcards: [{}, {}, {}, {}],
      error: '',
      missedCards: [{}],
      user: 'Test Name',
    }, applyMiddleware(thunk))

    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <EndGame />
        </Provider>
      </BrowserRouter>);

    const tryAgainBtn = getByTestId('try-again-btn');
    
    fireEvent.click(tryAgainBtn)

    const updatedState = store.getState()

    expect(updatedState).toEqual({
      category: 'Film',
      flashcards: [{}, {}, {}, {}],
      error: '',
      missedCards: [],
      user: 'Test Name',
    })
  });

  it('should start a new game on click of the new game btn', () => {
    const store = createStore(rootReducer, {
      category: 'Film',
      flashcards: [{}, {}, {}, {}],
      error: '',
      missedCards: [{}],
      user: 'Test Name',
    }, applyMiddleware(thunk))

    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <EndGame />
        </Provider>
      </BrowserRouter>);

    const newGameBtn = getByTestId('new-game-btn');
    
    fireEvent.click(newGameBtn)

    const updatedState = store.getState()

    expect(updatedState).toEqual({
      category: '',
      flashcards: [],
      error: '',
      missedCards: [],
      user: '',
    })
  });
});