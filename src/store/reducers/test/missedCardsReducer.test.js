import { missedCards } from '../missedCardsReducer';

describe('missedCardsReducer', () => {
  it('should return a default state if no types are passed', () => {
    const expected = [];
    const results = missedCards(undefined, {});
    expect(results).toEqual(expected);
  });
    
  it('should set a missedCards', () => {
    const expected = [{question: 'Why?', correct_answer: 'Because'}];
    const results = missedCards([], {
      type: 'SET_MISSED_CARDS', 
      payload: {question: 'Why?', correct_answer: 'Because'}
    });
    expect(results).toEqual(expected);
  });

  it('should reset a missedCards', () => {
    const expected = [];
    const results = missedCards([{question: 'Why?', correct_answer: 'Because'}], {type: 'RESET_MISSED_CARDS'});
    expect(results).toEqual(expected);
  });
});