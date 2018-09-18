import { testDispatch } from '../actions';
import { ACTIONS } from '../types';

describe('actions', () => {
  it('should create an action without a payload', () => {
    const expectedAction = {
      type: ACTIONS.TEST_DISPATCH
    };
    expect(testDispatch()).toEqual(expectedAction);
  });
});
