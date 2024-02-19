const expect = require('@wdio/globals').expect;

module.exports = class ScheduleScreen {
  //Title
  get title() {
    return phone.$('(//android.widget.TextView[@text="Schedule"])[1]');
  }

  async titleIsDisplayed() {
    await expect(this.title).toBeDisplayed();
  }
};
