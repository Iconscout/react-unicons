# React Unicons

4,500+ Pixel-perfect vector icons as React Components. These icons are designed by [IconScout](https://iconscout.com).

## Installation

Using npm:

```bash
npm install --save @iconscout/react-unicons
```

Using yarn:

```bash
yarn add @iconscout/react-unicons
```

## Usage

### Individual Icon Import (Recommended)

```jsx
import UilReact from '@iconscout/react-unicons/icons/uil-react'

function App() {
  return <UilReact size={140} color="#61DAFB" />
}
```

### Import as a Full Package

```jsx
import { UilReact } from '@iconscout/react-unicons'

function App() {
  return <UilReact size={140} color="#61DAFB" />
}
```

### Import All Icons

```jsx
import \* as Unicons from '@iconscout/react-unicons'

function App() {
return <Unicons.UilReact size={140} color="#61DAFB" />
}
```

## TypeScript Support

The library includes built-in TypeScript type definitions. All icons come with full type support, providing proper type checking for props and better IDE integration. The `IconProps` type is exported from the package for use in custom components.

## Props

The icons accept all props that you can pass to a SVG element, plus:

| Prop    | Type               | Default        | Description         |
| ------- | ------------------ | -------------- | ------------------- |
| `size`  | `number \| string` | `24`           | Icon size in pixels |
| `color` | `string`           | `currentColor` | Icon color          |

## Examples

### Basic Usage

```jsx
<UilReact /> // Default size (24px) and color
```

### With Size

```jsx
<UilReact size={60} /> // As number
<UilReact size="60" /> // As string
```

### With Color

```jsx
<UilReact color="#61DAFB" /> // Hex color
<UilReact color="rgb(0,0,0)" /> // RGB
<UilReact color="red" /> // Named color
```

### With Other Props

```jsx
<UilReact
  size={140}
  color="#61DAFB"
  className="my-icon"
  style={{ margin: '10px' }}
/>
```

## Related Projects

- [React Native Unicons](https://github.com/Iconscout/react-native-unicons)
- [Vue-unicons](https://github.com/antonreshetov/vue-unicons) by [Anton Reshetov](https://github.com/antonreshetov)
- [Vector SVGs](https://iconscout.com/unicons)
- [Icon Font](https://github.com/Iconscout/unicons)

## Contributing

We welcome community contributions to Unicons. Feel free to create pull requests.

### Request New Icons

Can't find an icon? Request it here:
[Request Icon](mailto:support@iconscout.com)

## License

Unicons are Open Source icons and licensed under [IconScout Simple License](https://iconscout.com/licenses#simple_license). You're free to use these icons in your personal and commercial project. We would love to see the attribution in your app's **about** screen, but it's not mandatory.

```html
React Unicons by <a href="https://iconscout.com/">IconScout</a>
```
