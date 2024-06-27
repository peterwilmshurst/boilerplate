import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import jsdoc from 'eslint-plugin-jsdoc'
import globals from 'globals'

export default [
  js.configs.recommended,
  stylistic.configs['recommended-flat'],
  jsdoc.configs['flat/recommended'],
  {
    languageOptions: {
      globals: { ...globals.browser },
    },
    plugins: {
      jsdoc,
    },
  },
]
