import React from 'react';
import { Theme } from './theme-provider';
import { defaultTheme } from './default-theme-tokens';

export const BasicThemeProvider = () => {
  return (
    <Theme.ThemeProvider>
      <p style={{ color: defaultTheme.myColorText }}>Default Theme</p>
    </Theme.ThemeProvider>
  );
};
