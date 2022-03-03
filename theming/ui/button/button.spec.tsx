import React from 'react';
import { render } from '@testing-library/react';
import { ButtonNoTheme } from './button.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<ButtonNoTheme />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
