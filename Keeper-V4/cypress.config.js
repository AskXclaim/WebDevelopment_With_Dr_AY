const { defineConfig } = require('cypress');

module.exports = defineConfig({
  "env":{
    "appName":"Keeper"
  },
  "e2e": {
    "baseUrl": 'http://localhost:3000',
  }
});