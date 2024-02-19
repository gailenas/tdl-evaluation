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

  capabilities: {
    phone: {
      capabilities: {
        'appium:deviceName': 'emulator-5554',
        'appium:platformVersion': '14.0',
        'appium:automationName': 'UiAutomator2',
        'appium:platformName': 'Android',
        'appium:app':
          './configs/mobile/applications/conference-app-android.apk',
        'appium:appPackage': 'com.ionicframework.conferenceapp',
        'appium:appActivity': 'com.ionicframework.conferenceapp.MainActivity',
        'appium:newCommandTimeout': 240,
        'appium:noReset': false,
      },
      browser: {
        capabilities: {
          browserName: 'firefox',
          timeouts: { pageLoad: 60000 },
          'moz:firefoxOptions': {
            args: ['--window-size=2560,1440', '-headless'],
          },
        },
      },
    },
  },

  region: 'eu',
  hostname: 'ondemand.eu-central-1.saucelabs.com',
  port: 443,

  sauceConnect: true,

  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  services: [
    'sauce',

    [
      'firefox-profile',
      {
        extensions: ['/path/to/extensionA.xpi', '/path/to/extensionB'],
        'xpinstall.signatures.required': false,
        // 'browser.startup.homepage': 'https://webdriver.io',
      },
    ],
  ],
  port: 4723,

  beforeStep: async (world, context) => {
    await phone.activateApp(await phone.getCurrentPackage());
  },
  afterStep: async () => {
    await phone.activateApp(await phone.getCurrentPackage());
  },
});
