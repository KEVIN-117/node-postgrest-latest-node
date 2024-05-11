import globals from 'globals'
import pluginJs from '@eslint/js'

export default [
  {
    rules: {
      'no-console': 'warn', // evita el uso de console.log
      'no-unused-vars': 'error', // evita la creacion de variables no usadas
      'no-undef': 'error', // evita el uso de variables no declaradas
      'no-extra-semi': 'error', // evita el uso de punto y coma extra
    },
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
]
