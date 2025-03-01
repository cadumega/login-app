const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: '**/*.cy.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    screenshotOnRunFailure: true,
    video:true,
    env: {
        defaultUsername: 'admin',
        defaultPassword: 'admin123',
    }
  },
})
