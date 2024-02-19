const Page = require('../base/base.page');

module.exports = class LoginPage extends Page {
  //Input fields
  get userNameInputField() {
    return $('#login_field');
  }

  get passwordInputField() {
    return $('#password');
  }

  async enterLoginInformation() {
    (await this.userNameInputField).waitForDisplayed();
    (await this.passwordInputField).waitForDisplayed();
    (await this.userNameInputField).setValue(process.env.REPO_EMAIL);
    (await this.passwordInputField).setValue(process.env.REPO_PASSWORD);
  }

  // Sign In
  get signInButton() {
    return $('//input[@type="submit"]');
  }

  async clickSignInButton() {
    await driver.pause(400);
    (await this.signInButton).click();
  }

  open() {
    return super.open('/login');
  }
};
