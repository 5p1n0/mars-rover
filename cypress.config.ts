import { defineConfig } from "cypress";
const happoTask = require("happo-cypress/task");

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      happoTask.register(on);
      return config;
    },
    baseUrl: "http://localhost:5173",
    video: false,
  },
});
