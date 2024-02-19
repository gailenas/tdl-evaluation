const { Given, When, Then } = require('@wdio/cucumber-framework');
const pages = require('../shared/pages').pages;

Given(/^User logged in into GitHub$/, async () => {
  await pages.loginPage.open();
  await pages.loginPage.enterLoginInformation();
  await pages.loginPage.clickSignInButton();
});
