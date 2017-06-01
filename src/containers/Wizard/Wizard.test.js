import React from 'react';
import ReactDOM from 'react-dom';
import Wizard from './Wizard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Wizard />, div);
});
