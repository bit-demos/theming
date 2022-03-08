import React from 'react';
import { LightTheme } from './light-theme';
import { lightTheme } from './light-theme-tokens';

export const LightThemeCSSVars = () => {
  return (
    <LightTheme>
      <p
        style={{
          color: 'var(--my-color-text',
          backgroundColor: 'var(--my-color-background',
        }}
      >
        Light Theme
      </p>
    </LightTheme>
  );
};

export const LightThemeCSSJS = () => {
  return (
    <LightTheme>
      <p
        style={{
          color: lightTheme.myColorText,
          backgroundColor: lightTheme.myColorBackground,
        }}
      >
        hello world!
      </p>
    </LightTheme>
  );
};

export const LightThemeDefaultFontSize = () => {
  return (
    <LightTheme>
      <p
        style={{
          color: 'var(--my-color-text',
          backgroundColor: 'var(--my-color-background',
          fontSize: 'var(--my-font-size)',
        }}
      >
        Light Theme
      </p>
    </LightTheme>
  );
};
