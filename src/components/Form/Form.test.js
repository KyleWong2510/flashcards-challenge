import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Form from './Form';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../../store/reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, {
  category: '',
  flashcards: [],
  error: '',
  missedCards: [],
  user: '',
}, applyMiddleware(thunk))

describe('Form', () => {
  it('should render all form elements', () => {
    const { getByText, getByPlaceholderText, getByDisplayValue } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Form />
        </Provider>
      </BrowserRouter>);
    
    const nameLabel = getByText('Name:')
    const nameInput = getByPlaceholderText('Name...');
    const questionLabel = getByText('Question Count:')
    const questionInput = getByDisplayValue(1);
    const categoryLabel = getByText('Category:')
    const category = getByDisplayValue('Film');
    const submitBtn = getByDisplayValue('Begin!');

    expect(nameLabel).toBeInTheDocument()
    expect(nameInput).toBeInTheDocument();
    expect(questionLabel).toBeInTheDocument()
    expect(questionInput).toBeInTheDocument();    
    expect(categoryLabel).toBeInTheDocument()
    expect(category).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

  it('should be able to fill the form out', () => {
    const { getByPlaceholderText, getByDisplayValue } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Form />
        </Provider>
      </BrowserRouter>);

    const nameInput = getByPlaceholderText('Name...');
    const questionInput = getByDisplayValue(1);
    const category = getByDisplayValue('Film');

    fireEvent.change(nameInput, {target: {value: 'Test Name'}});
    fireEvent.change(questionInput, {target: {value: 7}});
    fireEvent.change(category, {target: {value: 'History'}});

    const changedName = getByDisplayValue('Test Name');
    const changedQuestionCount = getByDisplayValue(7)
    const changedRoundOne = getByDisplayValue('History');

    expect(changedName).toBeInTheDocument();
    expect(changedQuestionCount).toBeInTheDocument();
    expect(changedRoundOne).toBeInTheDocument();
  });

  it('should leave the button disabled if the name field is empty', () => {
    const { getByDisplayValue } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Form />
        </Provider>
      </BrowserRouter>);

    const submitBtn = getByDisplayValue('Begin!');

    expect(submitBtn.disabled).toEqual(true)
  })

  it('should set synchronous data to state when the form is complete and the submit btn is clicked', () => {
    const { getByPlaceholderText, getByDisplayValue } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Form />
        </Provider>
      </BrowserRouter>);

    const nameInput = getByPlaceholderText('Name...');
    const questionInput = getByDisplayValue(1);
    const category = getByDisplayValue('Film');
    const submitBtn = getByDisplayValue('Begin!')

    fireEvent.change(nameInput, {target: {value: 'Test Name'}});
    fireEvent.change(questionInput, {target: {value: 2}});
    fireEvent.change(category, {target: {value: 'History'}});
    fireEvent.click(submitBtn)

    const updatedState = store.getState()
    expect(updatedState).toEqual({
      category: 'History',
      flashcards: [],
      error: '',
      missedCards: [],
      user: 'Test Name',
    })
  })
});