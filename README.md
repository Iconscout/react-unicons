# React Unicons

1000+ Pixel-perfect vector icons as React Components. These icons are designed by [Iconscout](https://iconscout.com).

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

### Icon Requests
We've created a thread at [Iconscout Community](https://discuss.iconscout.com/new-topic?title=Icon%20Request:%20%3Cicon%3E&body=Hey%20there,%20%3Cicon%3E%20will%20be%20great%20fit%20for%20Unicons.%20I%20would%20love%20to%20use%20it!&category=Unicons&tags=requests) where you can request for new icons. And we'll be happy to design them in upcoming weeks.

## License
Unicons are Open Source icons and licensed under [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0.txt). You're free to use these icons in your personal and commercial project. We would love to see the attribution in your app's **about** screen, but it's not mandatory.
```html
React Unicons by <a href="https://iconscout.com/">Iconscout</a>
```