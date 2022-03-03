import React from 'react';
import { Theme } from '@learn-bit-react/theming.themes.theme-provider';
import { lightTheme } from './light-theme-tokens';

export const DarkTheme = ({ children }) => {
  return (
    <Theme.ThemeProvider overrides={lightTheme}>{children}</Theme.ThemeProvider>
  );
};
