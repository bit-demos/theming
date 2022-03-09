import React from 'react';
import { Theme } from '@learn-bit-react/theming.themes.theme-provider';
import { LightTheme } from '@learn-bit-react/theming.themes.light-theme';
import { DarkTheme } from '@learn-bit-react/theming.themes.dark-theme';

import {
  PinkTheme,
  pinkTheme,
} from '@learn-bit-react/theming.themes.pink-theme';
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
    <Theme.ThemeProvider overrides={pinkTheme}>
      <Button>Pink Theme</Button>
    </Theme.ThemeProvider>
  );
};

export const ButtonCSSVars = () => {
  return (
    <Theme.ThemeProvider data-testid="theme-provider">
      <Button
        style={{
          color: 'var(--my-color-text)',
          backgroundColor: 'var(--my-color-background)',
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
          color: pinkTheme.myColorText,
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
      {/* Can be written like this good for when using togglers */}
      <Theme.ThemeProvider overrides={pinkTheme}>
        <Button style={{ margin: '10px 0' }}>Pink Theme</Button>
      </Theme.ThemeProvider>
      {/* Or can use the component like a wrapper */}
      <DarkTheme>
        <Button>Dark Theme</Button>
      </DarkTheme>
      <LightTheme>
        <Button style={{ marginTop: '10px' }}>Light Theme</Button>
      </LightTheme>
    </Theme.ThemeProvider>
  );
};
