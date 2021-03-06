import React from 'react';
import { Theme } from '@learn-bit-react/theming.themes.theme-provider';
import { lightTheme } from './light-theme-tokens';

export const LightTheme = ({ children }) => {
  return (
    <Theme.ThemeProvider overrides={lightTheme} data-testid="theme-provider">
      {children}
    </Theme.ThemeProvider>
  );
};
