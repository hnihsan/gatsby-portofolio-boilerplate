module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['prettier', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'import'],
  rules: {
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-one-expression-per-line': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
