import React from 'react';
import { render } from '@testing-library/react';
import { BasicThemeProvider } from './theme-provider.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicThemeProvider />);
  const rendered = getByText('Default Theme');
  expect(rendered).toBeTruthy();
});
