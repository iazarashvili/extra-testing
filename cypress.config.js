const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://staging.extra.ge/',
    excludeSpecPattern: ["**/e2e/1-getting-started/*", "**/e2e/2-advanced-examples/*"],
    defaultCommandTimeout: 10000,
    waitForAnimations: true
  },
});
