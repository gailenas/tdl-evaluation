module.exports = class bottomNavigation {
  get scheduleTabButton() {
    return phone.$('//android.view.View[@resource-id="tab-button-schedule"]');
  }

  get speakersTabButton() {
    return phone.$('//android.view.View[@resource-id="tab-button-speakers"]');
  }

  get mapTabButton() {
    return phone.$('//android.view.View[@resource-id="tab-button-map"]');
  }

  get aboutTabButton() {
    return phone.$('//android.view.View[@resource-id="tab-button-about"]');
  }

  async navigateToTab(tab) {
    const tabs = {
      schedule: await this.scheduleTabButton,
      speakers: await this.speakersTabButton,
      map: await this.mapTabButton,
      about: await this.aboutTabButton,
    };

    expect(tabs[tab.toLowerCase()]).toBeDisplayed();
    await tabs[tab.toLowerCase()].click();
  }
};
