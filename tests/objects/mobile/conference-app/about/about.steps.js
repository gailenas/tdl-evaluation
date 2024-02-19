const { Given, When, Then } = require('@wdio/cucumber-framework');
const screens = require('../shared/screens').screens;

When(/^Capture screenshot "([^"]*)"$/, async (number) => {
  await screens.aboutScreen.captureScreenshot(number);
});

When(/^I am changing current location value to other$/, async () => {
  await screens.aboutScreen.clickLocationDropdown();
  await screens.aboutScreen.dialogDisplayed();
  await screens.aboutScreen.selectDifferentLocation();
});
