const { Given, When, Then } = require('@wdio/cucumber-framework');
const pages = require('../shared/pages').pages;

When(/^User click delete repository$/, async () => {
  await pages.repositorySettingsPage.clickDeleteBranchOption();
  await browser.pause(5000);
});

When(/^Confirm repository deletion$/, async () => {
  await pages.repositorySettingsPage.clicWarningDialogConfirmButton();
  await pages.repositorySettingsPage.clicWarningDialogConfirmButton();
  await pages.repositorySettingsPage.enterConfirmationTextForRepoDeletion();
  await pages.repositorySettingsPage.clicWarningDialogConfirmButton();
});
