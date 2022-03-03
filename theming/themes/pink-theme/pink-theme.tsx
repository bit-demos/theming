import React from 'react';
import { Theme } from '@learn-bit-react/theming.themes.theme-provider';
import { pinkTheme } from './pink-theme-tokens';

export const PinkTheme = ({ children }) => {
  return (
    <Theme.ThemeProvider overrides={pinkTheme}>{children}</Theme.ThemeProvider>
  );
};
