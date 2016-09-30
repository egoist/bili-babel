'use strict'
const babel = require('rollup-plugin-babel')

module.exports = function (options) {
  return babel(Object.assign({
    exclude: 'node_modules/*',
    presets: [
      [require.resolve('babel-preset-es2015'), {modules: false}],
      require.resolve('babel-preset-stage-2')
    ]
  }, options.babel))
}
