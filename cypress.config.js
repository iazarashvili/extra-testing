const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://staging.extra.ge/',
    excludeSpecPattern: ["**/e2e/1-getting-started/*", "**/e2e/2-advanced-examples/*"],
    defaultCommandTimeout: 10000,
    waitForAnimations: true,
    scrollBehavior: false,

    env: {
      authUserName: "scByKxLa36Wcypju",
      authPassword: "DbeGwVkuLee9Zjvf",
      userName: "xegpebhecrib@triots.com",
      password: "ilo123",
      IncorrectEmail: "extra@gmail.com",
      IncorrectPassword: "Extra22323",
      ThirdCorrectEmail: "sehec37090@niback.com",
      ThirdCorrectPassword:"Test1234",

      // Api urls
      basket_api: 'https://basket.staging.extra.ge',
      identity_api: 'https://identity.staging.extra.ge',
      base_url: "https://staging.extra.ge/"
    }
  },
});
