import { ACTIONS } from '../types';
import reducer, { initialState } from '../reducers/testReducer';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle TEST_DISPATCH', () => {
    expect(
      reducer(undefined, {
        type: ACTIONS.TEST_DISPATCH
      })
    ).toEqual({
      ...initialState,
      str: 'Action successfully dispatched!',
      val: initialState.val + 1
    });
  });
});
