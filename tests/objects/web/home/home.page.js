const Page = require('../base/base.page');

module.exports = class HomePage extends Page {
  // Title
  get title() {
    return browser.$(
      `//header//a[contains(@class,'AppHeader-context-item')]/span`
    );
  }

  async confirmPageLoaded() {
    const currentUrl = await driver.getUrl();
    await browser.waitUntil(currentUrl[0] !== process.env.REPO_URL + this.page);
  }
};
