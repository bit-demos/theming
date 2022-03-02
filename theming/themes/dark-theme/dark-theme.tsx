import React from 'react';
import { Theme } from '@learn-bit-react/theming.themes.theme-provider';
import { dark } from './dark-theme-tokens';

export const DarkTheme = ({ children }) => {
  return <Theme.ThemeProvider overrides={dark}>{children}</Theme.ThemeProvider>;
};
