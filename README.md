# webpack-date-fns-externals
[![Build Status](https://travis-ci.org/mattlewis92/webpack-date-fns-externals.svg?branch=master)](https://travis-ci.org/mattlewis92/webpack-date-fns-externals)
[![codecov](https://codecov.io/gh/mattlewis92/webpack-date-fns-externals/branch/master/graph/badge.svg)](https://codecov.io/gh/mattlewis92/webpack-date-fns-externals)
> A tiny utility to prevent webpack bundling date-fns imports in your library code

## Installation

```bash
npm install webpack-date-fns-externals --save-dev
```

## Usage
```js
// webpack.config.js
const webpackDateFnsExternals = require('webpack-date-fns-externals');

module.exports = {
  // rest of config here
  externals: [
    webpackDateFnsExternals(),
    {
      'another-external-lib': {
        root: ['anotherExternalLib'],
        commonjs: 'another-external-lib',
        commonjs2: 'another-external-lib',
        amd: 'another-external-lib'
      }
    }
  ]
};
```

## License
MIT