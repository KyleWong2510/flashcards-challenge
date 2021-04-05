import { category } from '../categoryReducer';

describe('categoryReducer', () => {
  it('should return a default state if no types are passed', () => {
    const expected = '';
    const results = category(undefined, {});
    expect(results).toEqual(expected);
  });
    
  it('should set a category', () => {
    const expected = 'Film';
    const results = category('', {type: 'SET_CATEGORY', payload: 'Film'});
    expect(results).toEqual(expected);
  });

  it('should reset a category', () => {
    const expected = '';
    const results = category('Film', {type: 'RESET_CATEGORY'});
    expect(results).toEqual(expected);
  });
});