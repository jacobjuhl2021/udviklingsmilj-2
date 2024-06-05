export default {
  files: ['**/*.js', '**/*.vue', '**/*.mjs'],
  ignores: ['node_modules/**', 'dist/**', 'build/**', 'public/**', '.gitignore', 'cypress/**'],
  languageOptions: {
    globals: {
      // Node.js globals
      require: 'readonly',
      module: 'readonly',
      // Cypress globals
      describe: 'readonly',
      it: 'readonly',
      cy: 'readonly',
      expect: 'readonly'
    }
  },
  rules: {
    semi: 'error'
  }
}
