import { error } from '../errorReducer';

describe('errorReducer', () => {
  it('should return a default state if no types are passed', () => {
    const expected = '';
    const results = error(undefined, {});
    expect(results).toEqual(expected);
  });
    
  it('should set a error', () => {
    const expected = 'error error';
    const results = error('', {type: 'SET_ERROR', payload: 'error error'});
    expect(results).toEqual(expected);
  });

  it('should reset a error', () => {
    const expected = '';
    const results = error('error error', {type: 'RESET_ERROR'});
    expect(results).toEqual(expected);
  });
});