import React from 'react';
import { render, screen } from '@testing-library/react';
import { ButtonCSSVars } from './button.composition';

it('should have style with css var and correct color', () => {
  render(<ButtonCSSVars />);
  const buttonCSSVars = screen.getByTestId('theme-provider');
  expect(buttonCSSVars).toHaveStyle('--my-color-text:purple');
});
