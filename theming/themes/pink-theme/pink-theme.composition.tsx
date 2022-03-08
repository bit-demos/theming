import React from 'react';
import { PinkTheme } from './pink-theme';
import { pinkTheme } from './pink-theme-tokens';

export const PinkThemeCSSVars = () => {
  return (
    <PinkTheme>
      <p
        style={{
          color: 'var(--my-color-text',
          backgroundColor: 'var(--my-color-background',
        }}
      >
        hello world!
      </p>
    </PinkTheme>
  );
};

export const PinkThemeCSSJS = () => {
  return (
    <PinkTheme>
      <p
        style={{
          color: pinkTheme.myColorText,
          backgroundColor: pinkTheme.myColorBackground,
        }}
      >
        hello world!
      </p>
    </PinkTheme>
  );
};
