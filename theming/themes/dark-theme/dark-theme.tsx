import React from 'react';
import { Theme } from '@learn-bit-react/theming.themes.theme-provider';
import { darkTheme } from './dark-theme-tokens';

export const DarkTheme = ({ children }) => {
  return (
    <Theme.ThemeProvider overrides={darkTheme}>{children}</Theme.ThemeProvider>
  );
};
