const config = require('../wdio.conf');
const deepmerge = require('deepmerge');

exports.config = deepmerge(config.config, {
  specs: ['../../tests/features/web/*.feature'],

  cucumberOpts: {
    require: [
      './tests/objects/web/*/*.steps.js',
      './tests/objects/web/shared/*/*.steps.js',
    ],
  },

  capabilities: {
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

  services: [
    [
      'firefox-profile',
      {
        extensions: ['/path/to/extensionA.xpi', '/path/to/extensionB'],
        'xpinstall.signatures.required': false,
        // 'browser.startup.homepage': 'https://webdriver.io',
      },
    ],
  ],

  baseUrl: 'https://www.github.com',
});
