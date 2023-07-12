// https://eslint.org/docs/user-guide/configuring

module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/prettier',
    'plugin:prettier/recommended',
    'plugin:vue/vue3-recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-tabs': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-case-declarations': 'off',
    'vue/no-unused-vars': 'off',
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        printWidth: 120,
        useTabs: false,
        semi: false,
        singleQuote: true,
        trailingComma: 'none',
        htmlWhitespaceSensitivity: 'ignore',
        endOfLine: 'lf',
        arrowParens: 'avoid'
      }
    ]
  }
}
