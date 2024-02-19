const Page = require('../base/base.page');
const HomePage = require('../home/home.page');
const LoginPage = require('../login/login.page');
const RepositorySettingsPage = require('../repository-settings/repository-settings.page');
const RepositoryPage = require('../repository/repository.page');

class Pages {
  constructor() {
    this.page = new Page();
    this.homePage = new HomePage();
    this.loginPage = new LoginPage();
    this.repositoryPage = new RepositoryPage();
    this.repositorySettingsPage = new RepositorySettingsPage();
  }
}

module.exports = {
  pages: new Pages(),
};
