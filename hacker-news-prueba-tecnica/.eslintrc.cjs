module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    './node_modules/ts-standard/eslintrc.json',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    proyect: './tsconfig.json'
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/explicit-module-boundary-types': [
      'off',
      {
        allowedNames: [
          'ngOnInit',
          'ngOnDestroy',
          'ngAfterViewInit',
          'ngOnChanges'
        ]
      }
    ],
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: { attributes: false } }
    ]
  }
}
