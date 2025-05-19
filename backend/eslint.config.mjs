import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.js', '!**/*.json'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // Error prevention
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-undef': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      // Best practices
      curly: ['error', 'multi-line'],
      eqeqeq: ['error', 'always'],
      'no-return-await': 'error',
      'require-await': 'error',

      // Style (Formatting rules)
      indent: ['error', 2],
      'linebreak-style': ['error', 'windows'],
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
      'max-len': ['error', { code: 200 }],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'space-before-function-paren': ['error', {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      }],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'padded-blocks': ['error', 'never'],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'keyword-spacing': ['error', { before: true, after: true }],
      'space-before-blocks': ['error', 'always'],
      'space-infix-ops': 'error',
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],

      // ES6
      'no-var': 'error',
      'prefer-const': 'error',

      // Node.js specific
      'callback-return': ['error', ['callback', 'cb', 'next', 'done']],
      'handle-callback-err': ['error', '^(err|error)$'],
      'no-path-concat': 'error',
      'no-sync': ['error', { allowAtRootLevel: true }],
    },
  },
]);
