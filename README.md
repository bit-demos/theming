# Theming in Bit

This example includes a demo of how to do theming in React and Bit using a theme provider and various themes.

The aim is to make it easier for designers and developers to be able to work more closely together when it comes to design tokens. These tokens can be exported from tools such as Figma, in JSON format, and then used in Bit inside a theme component.

This way, designers can use the same design tokens in their designs and developers can use the same design tokens in their apps without having to do any extra work at converting these values so they can be used as CSS variables.

The example also includes a button component which shows how the theme provider is used with both CSS variables and CSS in JS as well as with various themes applied including the use of multiple themes in the one app.

## Theme Provider

This theme provider component uses a `create Theme` component from teambit that converts design tokens from a CamelCase (`MyColorText`) to kebab case adding in the extra dashes required so they can be used as CSS variables (`--my-color-text`) should you decide to use CSS variables. The values will also work as is if using CSS in JS (`defaultTheme.myColorText`).

```js
MyColorText: 'red',
```

You can then use the CSS variables in a separate stylesheet or in the style tag:

```css
color: var(--my-color-text);
```

Or you can use the design tokens as CSS in JS:

```js
<p style={{ color: defaultTheme.myColorText }}>Default Theme</p>
```

## Themes

Themes can be used with the wrapper component to provide an easier way to add the theme to your app which can be useful especially when wrapping components inside of other themes.

```js
<DarkTheme>
  <Button>Dark Theme</Button>
</DarkTheme>
```

You can also write it like this which can be helpful for when using theme togglers or dynamically changing the theme value:

```js
<Theme.ThemeProvider overrides={darkTheme}>
  <Button>Pink Theme</Button>
</Theme.ThemeProvider>
```

## Button

Button component shows how the theme provider is used with various examples including using CSS variable and CSS in Js as well as the use of multiple themes in the one app.

## Creating your own Theme components

### Create your Theme Provider Component

1. Add a `theme-schema.tsx` file which should include all design token types that can be used to create your theme.

```js
export type ThemeSchema = {
  /**
   * general purpose text color.
   */
  myColorText?: string,
};
```

Types can be required in the case you want every theme to have the exact same design tokens, meaning a light theme will be an exact copy of the dark theme but with different values.

If you choose to leave the types as optional it means the default theme can be used but can have certain tokens be overrriden by the dark theme / custom theme etc.

2. Add a `default-theme-tokens.tsx` file which should include all design tokens and values that you would like to use for your default theme.

```Js
import { ThemeSchema } from './theme-schema';

export const defaultTheme: ThemeSchema = {
  myColorText: '#000',
};
```

3. Modify the `theme-provider.tsx` file to import the `createTheme` component from teambit and the `defaultTheme` from the default theme tokens file you just created. Then crate your theme using the `createTheme() passing into it the `defaultTheme` as the value for the theme.

```js
import { createTheme } from '@teambit/base-react.theme.theme-provider';
import { defaultTheme } from './default-theme-tokens';

export const Theme = createTheme({
  theme: defaultTheme,
});
```

4. Add compositions, tests and docs as per this example.

### Create a dark theme component.

1. Add a `dark-theme-tokens.tsx` file with the design tokens as per default theme and modify the values.

```js
import { ThemeSchema } from '@learn-bit-react/theming.themes.theme-provider';

export const darkTheme: ThemeSchema = {
  myColorText: 'red',
};
```

2. Import the `Theme` from the the theme provider component you just created. Also import the `darkTheme` from the dark theme tokens file. Add the darkTheme to the overrides prop of the theme provider.

```Js
import React from 'react';
import { Theme } from '@learn-bit-react/theming.themes.theme-provider';
import { darkTheme } from './dark-theme-tokens';

export const DarkTheme = ({ children }) => {
  return (
    <Theme.ThemeProvider overrides={darkTheme}>
      {children}
    </Theme.ThemeProvider>
  );
};
```

3. Make sure your index file is exporting both the `DarkTheme` component as well as the `darkTheme` tokens.

```Js
export { DarkTheme } from './dark-theme';
export { darkTheme } from './dark-theme-tokens';
```

4. Add compositions, tests and docs as per this example.

### Use your Theme in a Component

1. Import the Theme from the ThemeProvider component you created as well as the DarkTheme and any components you want to add to your app.

```js
import React from 'react';
import { Theme } from '@...';
import { DarkTheme } from '@...';
import { Button } from '@...';
```

Inside your component you can now use the Theme Provider to wrap all components so they will get the theme applied.

```js
export const MyApp = () => {
  return (
    <Theme.ThemeProvider overrides={darkTheme}>
      <Button>Dark Theme</Button>
    </Theme.ThemeProvider>
  );
};
```

You can alternatively use the component like this which will work exactly the same as the example above.

```js
export const MyApp = () => {
  return (
    <DarkTheme>
      <Button>Dark Theme</Button>
    </DarkTheme>
  );
};
```

You can also use the default theme in your app and have a part of your app be wrapped in a different theme.

```js
export const MyApp = () => {
  return (
    <Theme.ThemeProvider>
      <Button>Default Theme</Button>
      {/* A dark themed button inside a default theme */}
      <DarkTheme>
        <Button>Dark Theme</Button>
      </DarkTheme>
    </Theme.ThemeProvider>
  );
};
```
