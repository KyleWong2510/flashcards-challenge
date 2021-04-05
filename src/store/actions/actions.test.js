import * as actions from './index';

describe('Redux actions', () => {
  it('should set flashcards', () => {
    const card1 = {
      question: 'Why?',
      correct_answer: 'Because'
    }
    const card2 = {
      question: 'Where?',
      correct_answer: 'There'
    }
    const expected = { 
      type: 'SET_FLASHCARDS',
      payload: [card1, card2]
    };
    const result = actions.setFlashcards([card1, card2]);
    expect(result).toEqual(expected);
  });

  it('should reset flashcards', () => {
    const expected = { 
      type: 'RESET_FLASHCARDS',
    };
    const result = actions.resetFlashcards();
    expect(result).toEqual(expected);
  });

  it('should set user', () => {
    const expected = { 
      type: 'SET_USER',
      payload: 'Test Name'
    };
    const result = actions.setUser('Test Name');
    expect(result).toEqual(expected);
  }); 

  it('should reset user', () => {
    const expected = { type: 'RESET_USER' };
    const result = actions.resetUser();
    expect(result).toEqual(expected);
  });  
  
  it('should set missed cards', () => {
    const expected = { 
      type: 'SET_MISSED_CARDS',
      payload: {
        question: 'Why?',
        correct_answer: 'Because'
      }
    };
    const result = actions.setMissedCards({question: 'Why?', correct_answer: 'Because'});
    expect(result).toEqual(expected);
  });  

  it('should reset missed cards', () => {
    const expected = { type: 'RESET_MISSED_CARDS' };
    const result = actions.resetMissedCards();
    expect(result).toEqual(expected);
  });  

  it('should set a category', () => {
    const expected = { 
      type: 'SET_CATEGORY', 
      payload: 'Film'
    };
    const result = actions.setCategory('Film');
    expect(result).toEqual(expected);
  });  

  it('should reset the category', () => {
    const expected = { type: 'RESET_CATEGORY' };
    const result = actions.resetCategory();
    expect(result).toEqual(expected);
  });  

  it('should set an error', () => {
    const expected = { 
      type: 'SET_ERROR',
      payload: 'Failed to fetch' 
    };
    const result = actions.setError('Failed to fetch');
    expect(result).toEqual(expected);
  });  

  it('should reset the error', () => {
    const expected = { type: 'RESET_ERROR' };
    const result = actions.resetError();
    expect(result).toEqual(expected);
  });  
});
