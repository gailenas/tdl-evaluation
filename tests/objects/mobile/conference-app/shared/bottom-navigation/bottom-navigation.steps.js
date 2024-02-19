const { Given, When, Then } = require('@wdio/cucumber-framework');
const commonElements = require('../screens').commonElements;
const screens = require('../screens').screens;

When(/^I am switching to "([^"]*)" tab$/, async (tab) => {
  await commonElements.bottomNavigation.navigateToTab(tab);
});
