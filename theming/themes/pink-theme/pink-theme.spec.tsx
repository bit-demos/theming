import React from 'react';
import { render, screen } from '@testing-library/react';
import { PinkThemeCSSVars, PinkThemeCSSJS } from './pink-theme.composition';

it('should have style with css var and correct color', () => {
  render(<PinkThemeCSSVars />);
  const pinkThemeCSSVars = screen.getByTestId('theme-provider');
  expect(pinkThemeCSSVars).toHaveStyle('--my-color-text:hotpink');
});

it('should have style with css var and correct color', () => {
  render(<PinkThemeCSSJS />);
  const pinkThemeCSSJS = screen.getByTestId('theme-provider');
  expect(pinkThemeCSSJS).toHaveStyle('--my-color-text:hotpink');
});
