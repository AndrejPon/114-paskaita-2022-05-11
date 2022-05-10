import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => <Button text='Sign Up' />;
export const Outline = () => <Button text='Log In' />;
