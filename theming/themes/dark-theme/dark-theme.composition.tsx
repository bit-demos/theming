import React from 'react';
import { DarkTheme } from './dark-theme';
import { darkTheme } from './dark-theme-tokens';

export const DarkThemeCCSVars = () => {
  return (
    <DarkTheme>
      <p
        style={{
          color: 'var(--my-color-text',
          backgroundColor: 'var(--my-color-background',
        }}
      >
        Dark Theme
      </p>
    </DarkTheme>
  );
};

export const DarkThemeCSSJS = () => {
  return (
    <DarkTheme>
      <p
        style={{
          color: darkTheme.myColorText,
          backgroundColor: darkTheme.myColorBackground,
        }}
      >
        Dark Theme
      </p>
    </DarkTheme>
  );
};

export const DarkThemeDefaultFontSize = () => {
  return (
    <DarkTheme>
      <p
        style={{
          color: 'var(--my-color-text',
          backgroundColor: 'var(--my-color-background',
          fontSize: 'var(--my-font-size)',
        }}
      >
        Dark Theme
      </p>
    </DarkTheme>
  );
};
