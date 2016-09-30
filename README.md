# bili-babel

[![NPM version](https://img.shields.io/npm/v/bili-babel.svg?style=flat-square)](https://npmjs.com/package/bili-babel) [![NPM downloads](https://img.shields.io/npm/dm/bili-babel.svg?style=flat-square)](https://npmjs.com/package/bili-babel) [![Build Status](https://img.shields.io/circleci/project/egoist/bili-babel/master.svg?style=flat-square)](https://circleci.com/gh/egoist/bili-babel)

## Install

You should have [bili](https://github.com/egoist/bili) installed first.

```bash
$ npm install -g bili bili-babel
```

## Usage

```bash
$ bili --js-compiler babel
```

### Options

```js
// bili.config.js
module.exports = {
  jsCompiler: 'babel',
  babel: {
    presets, 
    plugins,
    include, 
    exclude
  }
}
```


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT](https://egoist.mit-license.org/) © [EGOIST](https://github.com/egoist)
