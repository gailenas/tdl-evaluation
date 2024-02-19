const { Given, When, Then } = require('@wdio/cucumber-framework');
const pages = require('../shared/pages').pages;

When(/^User enter repository page$/, async () => {
  await pages.repositoryPage.open(
    `/${process.env.REPO_OWNER}/${process.env.REPO_NAME}`
  );
});

When(/^User navigates to repository settings$/, async () => {
  await pages.repositoryPage.clickSettingsTab();
  await pages.repositorySettingsPage.open();
});

Then(/^Repository page should not exist$/, async () => {
  await pages.repositoryPage.confirmThatRepoPageNotExists();
});
