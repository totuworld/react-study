module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: [
    'react',
    'import',
  ],
  env: {
    jest: true,
    browser: true,
  },
  rules: {
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/forbid-prop-types": "off",
    "react/prefer-stateless-function":"off",
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack.config.dev.js'
      }
    },
  },
};
