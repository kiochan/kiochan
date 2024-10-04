// eslint.config.base.js
const love = require('eslint-config-love')
const nxPlugin = require('@nx/eslint-plugin')
const importPlugin = require('eslint-plugin-import')
const prettierPlugin = require('eslint-plugin-prettier')
const reactPlugin = require('eslint-plugin-react')
const reactHooksPlugin = require('eslint-plugin-react-hooks')
const tsEslint = require('typescript-eslint')

module.exports = [
  love,
  {
    files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
    plugins: {
      '@nx': nxPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['*.ts', '*.tsx'],
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    languageOptions: {
      parserOptions: {
        project: [
          './app/**/tsconfig.json',
          './lib/**/tsconfig.json',
          './e2e/**/tsconfig.json',
        ],
      },
    },
  },
  {
    files: ['**/*.js'],
    ...tsEslint.configs.disableTypeChecked,
  },
  {
    files: ['**/*.js'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    files: ['*.spec.ts', '*.spec.tsx', '*.spec.js', '*.spec.jsx'],
    env: {
      jest: true,
    },
  },
  {
    ignores: ['node_modules/', 'dist/', 'build/', '.nx/'],
  },
]
