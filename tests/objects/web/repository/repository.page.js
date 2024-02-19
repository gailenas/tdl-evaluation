const Page = require('../base/base.page');
const expect = require('@wdio/globals').expect;

module.exports = class RepositoryPage extends Page {
  // Repository page tabs
  get settingsTabButton() {
    return $('//*[@id="settings-tab"]');
  }

  async clickSettingsTab() {
    (await this.settingsTabButton).click();
  }

  // Not existing repository 404 image:
  async confirmThatRepoPageNotExists() {
    const req = fetch(
      `https://github.com/${process.env.REPO_OWNER}/${process.env.REPO_NAME}`
    );

    expect((await req).status).toBe(404);
  }

  open() {
    return super.open(`/${process.env.REPO_OWNER}/${process.env.REPO_NAME}`);
  }
};
