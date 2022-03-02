import React from 'react';
import { defaultDesignTokenValues, Theme } from './theme-provider';
import { Button } from '@learn-bit-react/theming.ui.button';

export const BasicThemeProvider = () => {
  return (
    <Theme.ThemeProvider>
      <button style={{ color: defaultDesignTokenValues.bitColorText }}>
        this works
      </button>
      <Button>Help</Button>
    </Theme.ThemeProvider>
  );
};
