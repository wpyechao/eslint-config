'use strict';

module.exports = {
  // eslint parser: https://github.com/babel/babel-eslint
  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true
    },
    // additional parser configuration on babel-eslint
    requireConfigFile: false
  },

  // specifying environments
  // 初始化特定环境下需要预定义的全局变量
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },

  settings: {
    'import/resolver': { node: { extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'] } },
    polyfills: ['fetch', 'Promise', 'URL', 'object-assign'],
  },

  // 此目录为根，停止向上查找配置文件
  root: true
};
