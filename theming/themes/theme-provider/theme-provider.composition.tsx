import React from 'react';
import { Theme } from './theme-provider';
import { defaultTheme } from './default-theme-tokens';

export const BasicThemeProvider = () => {
  return (
    <Theme.ThemeProvider>
      <p style={{ color: defaultTheme.bitColorText }}>Default Theme</p>
    </Theme.ThemeProvider>
  );
};
