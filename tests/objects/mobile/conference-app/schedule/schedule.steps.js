const { Given, When, Then } = require('@wdio/cucumber-framework');
const commonElements = require('../shared/screens').commonElements;
const screens = require('../shared/screens').screens;

Given(/^I am on "Schedule" screen$/, async () => {
  await screens.welcomeScreen.welcomeMessageDisplayed();
  await screens.welcomeScreen.clickSkipButton();
  await screens.scheduleScreen.titleIsDisplayed();
});

Then(/^Confirm that the banner image "([^"]*)"$/, async (imageState) => {
  if (imageState === 'changes') {
    console.log(`Not done yet: compare if images 1 and 2 different`);
  } else if (condition) {
    console.log(`Not done yet: compare if images 2 and 3 identical`);
  }
});
