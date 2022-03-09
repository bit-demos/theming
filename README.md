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
