import React from 'react';
import { render } from '@testing-library/react';
import { BasicPinkTheme } from './pink-theme.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicPinkTheme />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
