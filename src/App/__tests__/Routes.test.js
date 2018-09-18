import React from 'react';
import MyComponent from '../Routes';

describe('components', () => {
  describe('App', () => {
    it('should render without crashing', () => {
      shallow(<MyComponent />);
    });
  });
});
