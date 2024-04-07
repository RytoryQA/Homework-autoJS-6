const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  
  e2e: {
    baseUrl: "http://localhost:3000",
    retries: 0,
    video: false, 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
