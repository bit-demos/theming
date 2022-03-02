import React from 'react';
import { Theme } from '@learn-bit-react/theming.themes.theme-provider';
import { lightTheme as light } from '@learn-bit-react/theming.themes.light-theme';
import { DarkTheme } from '@learn-bit-react/theming.themes.dark-theme';

import { pinkTheme as pink } from '@learn-bit-react/theming.themes.pink-theme';
import { Button } from './button';

export const ButtonNoTheme = () => {
  return <Button>No theme</Button>;
};

export const ButtonDefaultTheme = () => {
  return (
    <Theme.ThemeProvider>
      <Button>Default Theme</Button>
    </Theme.ThemeProvider>
  );
};

export const ButtonOverrideTheme = () => {
  return (
    <Theme.ThemeProvider overrides={pink}>
      <Button>Pink Theme</Button>
    </Theme.ThemeProvider>
  );
};

export const ButtonCSSVars = () => {
  return (
    <Theme.ThemeProvider>
      <Button
        style={{
          color: 'var(--bit-color-text)',
        }}
      >
        CSS Vars
      </Button>
    </Theme.ThemeProvider>
  );
};

export const ButtonCSSInJS = () => {
  return (
    <Theme.ThemeProvider>
      <Button
        style={{
          color: pink.bitColorText,
        }}
      >
        CSS in JS
      </Button>
    </Theme.ThemeProvider>
  );
};

export const ButtonMultipleThemes = () => {
  return (
    <Theme.ThemeProvider>
      <Button>Default Theme</Button>

      <Theme.ThemeProvider overrides={pink}>
        <Button style={{ margin: '10px 0' }}>Pink Theme</Button>
      </Theme.ThemeProvider>
      <DarkTheme>
        <Button>Dark Theme</Button>
      </DarkTheme>
    </Theme.ThemeProvider>
  );
};
