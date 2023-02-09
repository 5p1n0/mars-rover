require("dotenv").config();
const { RemoteBrowserTarget } = require("happo.io");

module.exports = {
  apiKey: process.env.HAPPO_API_KEY,
  apiSecret: process.env.HAPPO_API_SECRET,
  targets: {
    "chrome-desktop": new RemoteBrowserTarget("chrome", {
      viewport: "1200x900",
    }),
    "firefox-desktop": new RemoteBrowserTarget("firefox", {
      viewport: "1200x900",
    }),
    "safari-desktop": new RemoteBrowserTarget("safari", {
      viewport: "1200x900",
    }),
    "chrome-tablet": new RemoteBrowserTarget("chrome", {
      viewport: "810x1080",
    }),
    "firefox-tablet": new RemoteBrowserTarget("firefox", {
      viewport: "810x1080",
    }),
    "safari-tablet": new RemoteBrowserTarget("ipad-safari", {
      viewport: "810x1080",
    }),
    "chrome-mobile": new RemoteBrowserTarget("chrome", {
      viewport: "375x667",
    }),
    "firefox-mobile": new RemoteBrowserTarget("firefox", {
      viewport: "375x667",
    }),
    "safari-mobile": new RemoteBrowserTarget("ios-safari", {
      viewport: "375x667",
    }),
  },
};
