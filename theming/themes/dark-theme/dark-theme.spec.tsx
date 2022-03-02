import React from 'react';
import { render } from '@testing-library/react';
import { BasicDarkTheme } from './dark-theme.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicDarkTheme />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
