module.exports = {
  extends: 'signavio',
  globals: {
    expect: true,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', require('./prettier.config')],
  },
}
