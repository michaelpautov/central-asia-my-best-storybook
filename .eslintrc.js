module.exports = {
  extends: ['react-app', 'prettier'],
  plugins: ['react', 'react-hooks'],
  rules: {
    'array-callback-return': 'off',
    'max-params': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'security/detect-object-injection': 'off',
  },
}
