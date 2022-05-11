import React from 'react';
import NewButton from './NewButton';

export default {
  title: 'NewButton',
  component: NewButton,
};

export const Primary = () => (
  <NewButton color='black' type='Primary' onClick='handleClick'>
    Primary Button
  </NewButton>
);
export const Secondary = () => (
  <NewButton color='blue' type='Secondary' onClick='handleClick'>
    Secondary Button
  </NewButton>
);
