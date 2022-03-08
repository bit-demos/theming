import React from 'react';
import { DarkTheme } from './dark-theme';

export const BasicDarkTheme = () => {
  return (
    <DarkTheme>
      <p style={{ color: 'var(--my-color-text' }}>hello world!</p>
    </DarkTheme>
  );
};
