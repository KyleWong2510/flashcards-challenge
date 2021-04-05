import { user } from '../userReducer';

describe('userReducer', () => {
  it('should return a default state if no types are passed', () => {
    const expected = '';
    const results = user(undefined, {});
    expect(results).toEqual(expected);
  });
    
  it('should set a user', () => {
    const expected = 'Bob';
    const results = user([], {
      type: 'SET_USER', 
      payload: 'Bob'
    });
    expect(results).toEqual(expected);
  });

  it('should reset a user', () => {
    const expected = '';
    const results = user('Bob', {type: 'RESET_USER'});
    expect(results).toEqual(expected);
  });
});