module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    ecmaVersion: "2022",
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'error',
    '@typescript-eslint/explicit-function-return-type': ["error"],
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-explicit-any': 'error',

    "import/no-duplicates": "error",
    "import/no-unresolved": "error",
    "import/named": "error",
    "array-callback-return": "error",
    "no-unexpected-multiline": "error",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "func-style": [ "error", "declaration", { "allowArrowFunctions": true } ], 
  },
};
