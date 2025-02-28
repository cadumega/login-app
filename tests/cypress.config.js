const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      specPattern: 'cypress/e2e/**/*.cy.js', // Where your tests are
      supportFile: 'cypress/support/e2e.js', // Where your support file is
    },
  },
})
