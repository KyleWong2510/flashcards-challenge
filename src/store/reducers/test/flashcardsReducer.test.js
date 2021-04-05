import { flashcards } from '../flashcardsReducer';

describe('flashcardsReducer', () => {
  it('should return a default state if no types are passed', () => {
    const expected = [];
    const results = flashcards(undefined, {});
    expect(results).toEqual(expected);
  });
    
  it('should set a flashcards', () => {
    const expected = [{question: 'Why?', correct_answer: 'Because'}];
    const results = flashcards([], {
      type: 'SET_FLASHCARDS', 
      payload: [
        {question: 'Why?', correct_answer: 'Because'}
      ]
    });
    expect(results).toEqual(expected);
  });

  it('should reset a flashcards', () => {
    const expected = [];
    const results = flashcards([{question: 'Why?', correct_answer: 'Because'}], {type: 'RESET_FLASHCARDS'});
    expect(results).toEqual(expected);
  });
});