module.exports = {
  root: true,
  extends: '@react-native',

  rules:{
    'prettier/prettier':0,
    semi: ['error', 'never',],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always',],
    'jsx-quotes': ['error', 'prefer-single',],
  },
}
