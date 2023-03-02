# React Unicons


4,500+ Pixel-perfect vector icons as React Components. These icons are designed by [IconScout](https://iconscout.com).

## Getting Started
You can easily install [react-unicons](https://iconscout.com/unicons) using npm.
```bash
npm install --save @iconscout/react-unicons
```
Or using `yarn`
```bash
yarn add @iconscout/react-unicons
```

## Usage
### Use individual icons
```js
import React from 'react';
import UilReact from '@iconscout/react-unicons/icons/uil-react'

const App = () => {
  return <UilReact size="140" color="#61DAFB" />
};

export default App;
````

You can customize icons as below:
```html
<Unicons.UilReact size="140" color="#61DAFB" />
```

### Usage as full Package
```js
import React from 'react';
import * as Unicons from '@iconscout/react-unicons';

const App = () => {
  return <Unicons.UilReact />
};

export default App;
````

### More ways
- [React-native-unicons](https://github.com/Iconscout/react-native-unicons)
- [Vue-unicons](https://github.com/antonreshetov/vue-unicons) by [Anton Reshetov](https://github.com/antonreshetov)
- [Vector SVGs](https://iconscout.com/unicons)
- [Icon Font](https://github.com/Iconscout/unicons)

## Contributing
We will be happy to have community support for Unicons. Feel free to fork and create pull requests. We have given a small roadmap above so that you can help us build these features.

### Request icons
Can't find the icon you are looking for? No worries, we will design it for you. And we'll be happy to design them in upcoming weeks.

[Request Icon](mailto:support@iconscout.com)

## License
Unicons are Open Source icons and licensed under [IconScout Simple License](https://iconscout.com/licenses#simple_license). You're free to use these icons in your personal and commercial project. We would love to see the attribution in your app's **about** screen, but it's not mandatory.
```html
React Unicons by <a href="https://iconscout.com/">IconScout</a>
```