module.exports = {
<<<<<<< HEAD
=======
  root: true,
>>>>>>> e7e02faca93e258723090409b6bb0f57b34decc2
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
<<<<<<< HEAD
=======
  ignorePatterns: ['dist', '.eslintrc.cjs'],
>>>>>>> e7e02faca93e258723090409b6bb0f57b34decc2
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
<<<<<<< HEAD
    'react-refresh/only-export-components': 'warn',
=======
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
>>>>>>> e7e02faca93e258723090409b6bb0f57b34decc2
  },
}
