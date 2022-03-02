import { createTheme } from '@teambit/base-react.theme.theme-provider';

export const defaultDesignTokenValues = {
  bitColorBackground: '#ffffff',
  bitColorText: 'purple',
  bitFontSize: '40px',
  bitBorderColor: 'purple',
  bitBorderRadius: '5px',
};

export const Theme = createTheme({
  theme: defaultDesignTokenValues,
});

export type ThemeSchema = typeof defaultDesignTokenValues;
