const config = require('../wdio.conf');
const deepmerge = require('deepmerge');

exports.config = deepmerge(config.config, {
  specs: ['../../tests/features/mobile/conference-app/*.feature'],

  cucumberOpts: {
    require: [
      './tests/objects/mobile/conference-app/*/*.steps.js',
      './tests/objects/mobile/conference-app/shared/*/*.steps.js',
    ],
  },

  region: 'eu',
  hostname: 'ondemand.eu-central-1.saucelabs.com',
  port: 443,

  sauceConnect: true,

  // baseUrl: 'wd/hub',
  capabilities: {
    phone: {
      capabilities: {
        'appium:deviceName': 'Android GoogleAPI Emulator',
        platformName: 'Android',
        'appium:platformVersion': '13.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': 'storage:filename=conference-app-android.apk', // The filename of the mobile app
        'appium:newCommandTimeout': 240,
        'appium:noReset': false,
        'sauce:options': {
          name: 'TDL Test',
        },
      },
    },
  },

  // services: ['appium', 'browserstack'],

  services: ['sauce'],

  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,

  beforeStep: async (world, context) => {
    await phone.activateApp(await phone.getCurrentPackage());
  },
  afterStep: async () => {
    await phone.activateApp(await phone.getCurrentPackage());
  },
});
