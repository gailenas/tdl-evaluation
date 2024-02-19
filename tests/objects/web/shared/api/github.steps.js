const { Given, When, Then } = require('@wdio/cucumber-framework');
const githubApi = require('./github-api');

Given('User creates repository over API', async () => {
  await githubApi();
});
