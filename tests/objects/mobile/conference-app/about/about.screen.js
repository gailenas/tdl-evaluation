const expect = require('@wdio/globals').expect;
var fs = require('fs');

module.exports = class AboutScreen {
  //Title
  get title() {
    return phone.$('(//android.widget.TextView[@text="About"])[1]');
  }

  async titleIsDisplayed() {
    await expect(this.title).toBeDisplayed();
  }

  //Location dropdown
  get dropdowns() {
    return phone.$$('//android.widget.Button');
  }

  async clickLocationDropdown() {
    await this.dropdowns[2].click();
  }

  //Dialog body
  get dialogBody() {
    return phone.$('//android.app.Dialog');
  }

  async dialogDisplayed() {
    expect(this.dialogBody).toBeDisplayed();
  }

  //Select Location Dialog Options
  get locationPopUpOptions() {
    return phone.$$('//android.widget.RadioButton');
  }

  async selectDifferentLocation() {
    let length = 0;
    while (length <= 3) {
      length = await this.locationPopUpOptions.length;
    }

    for await (const location of this.locationPopUpOptions) {
      if ((await location.getAttribute('checked')) === 'false') {
        await location.click();
        break;
      }
    }
  }

  //Confirm Dialog Selection
  get dialogOkButton() {
    return phone.$('//android.widget.Button[@text="OK"]');
  }

  async clickDialogOkButton() {
    await this.dialogOkButton.click();
  }

  //Capturing screenshots
  async captureScreenshot(number) {
    console.log(`Not done yet: Capture screenshot number - ${number}`);
  }
};
