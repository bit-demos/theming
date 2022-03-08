import React from 'react';
import { Theme } from './theme-provider';
import { defaultTheme } from './default-theme-tokens';

export const ThemeProviderCSSVars = () => {
  return (
    <Theme.ThemeProvider data-testid="theme-provider">
      <p style={{ color: 'var(--my-color-text)' }}>Default Theme</p>
    </Theme.ThemeProvider>
  );
};

export const ThemeProviderCSSJS = () => {
  return (
    <Theme.ThemeProvider data-testid="theme-provider">
      <p style={{ color: defaultTheme.myColorText }}>Default Theme</p>
    </Theme.ThemeProvider>
  );
};
