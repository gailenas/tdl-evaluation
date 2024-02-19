const expect = require('@wdio/globals').expect;

module.exports = class WelcomeScreen {
  //Skip Button
  get skipButton() {
    return phone.$('//android.widget.Button[@text="SKIP"]');
  }

  async clickSkipButton() {
    await this.skipButton.click();
  }

  // Image
  get image() {
    return phone.$('//android.widget.Image[@text="ica-slidebox-img-1"]');
  }

  //Title
  get title() {
    return phone.$('//android.widget.TextView[@text="Welcome to ICA"]');
  }

  //Welcome Message
  get welcomeMessage() {
    return phone.$(
      '//android.widget.TextView[@text="The ionic conference app is a practical preview of the ionic framework in action, and a demonstration of proper code use."]'
    );
  }

  async welcomeMessageDisplayed() {
    await expect(this.welcomeMessage).toBeDisplayed();
  }
};
