module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'react-app',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    "prettier/prettier": "error",
    "camelcase": [2, {"properties": "never"}],
    //"@typescript-eslint/explicit-function-return-type": "off"
  },
};
