const AboutScreen = require('../about/about.screen');
const WelcomeScreen = require('../welcome/welcome.screen');
const ScheduleScreen = require('../schedule/schedule.screen');

const bottomNavigation = require('../shared/bottom-navigation/bottom-navigation.elements');

class Screens {
  constructor() {
    this.welcomeScreen = new WelcomeScreen();
    this.scheduleScreen = new ScheduleScreen();
    this.aboutScreen = new AboutScreen();
  }
}

class CommonElements {
  constructor() {
    this.bottomNavigation = new bottomNavigation();
  }
}

module.exports = {
  screens: new Screens(),
  commonElements: new CommonElements(),
};
