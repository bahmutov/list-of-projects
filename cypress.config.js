const { defineConfig } = require('cypress')
// https://github.com/bahmutov/cypress-await
const cyAwaitPreprocessor = require('cypress-await/src/preprocessor')

module.exports = defineConfig({
  e2e: {
    // baseUrl, etc
    baseUrl: 'http://localhost:8080',
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // and load any plugins that require the Node environment
      on('file:preprocessor', cyAwaitPreprocessor({
        specPattern: 'cy.js'
      }))
    },
  }
})
