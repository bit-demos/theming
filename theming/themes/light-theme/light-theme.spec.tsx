import React from 'react';
import { render, screen } from '@testing-library/react';
import { LightThemeCSSVars, LightThemeCSSJS } from './light-theme.composition';

it('should have style with css var and correct color', () => {
  render(<LightThemeCSSVars />);
  const lightThemeCSSVars = screen.getByTestId('theme-provider');
  expect(lightThemeCSSVars).toHaveStyle('--my-color-text:#000');
});

it('should have style with css var and correct color', () => {
  render(<LightThemeCSSJS />);
  const lightThemeCSSJS = screen.getByTestId('theme-provider');
  expect(lightThemeCSSJS).toHaveStyle('--my-color-text:#000');
});
