import { defineConfig } from "cypress";

export default defineConfig({
  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
