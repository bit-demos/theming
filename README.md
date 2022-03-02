# Theming in Bit

This repo includes a demo of how to do theming in React and Bit using a theme provider and various themes.

The button component shows how the theme provider is used.

## Theme Provider

Uses Bits component that converts design tokens from a JS object so they can be used as CSS variables without having to do any extra work.

```js
MyColorBackground: '#ffffff',
```

Can then be used as:

```css
background: var(--my-color-background);
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
<Theme.ThemeProvider overrides={dark}>
  <Button>Pink Theme</Button>
</Theme.ThemeProvider>
```

## Button

Button component shows how the theme provider is used with various examples including using CSS variable and CSS in Js.
