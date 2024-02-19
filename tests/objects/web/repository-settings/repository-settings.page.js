const Page = require('../base/base.page');

module.exports = class RepositorySettingsPage extends Page {
  // Danger zone options
  get dangerZoneDeleteRepoButton() {
    return $('//button[@id="dialog-show-repo-delete-menu-dialog"]');
  }

  async clickDeleteBranchOption() {
    (await this.dangerZoneDeleteRepoButton).scrollIntoView();
    await driver.pause(500);
    await this.dangerZoneDeleteRepoButton.click();
  }

  // Warning dialog
  get warningDialogConfirmationButton() {
    return $('//button[@id="repo-delete-proceed-button"]');
  }

  get textVerificationInputField() {
    return $('//div[@class="FormControl-input-wrap"]//input');
  }

  async clicWarningDialogConfirmButton() {
    (await this.warningDialogConfirmationButton).waitForClickable();
    (await this.warningDialogConfirmationButton).click();
  }

  async enterConfirmationTextForRepoDeletion() {
    const repoPath = `${process.env.REPO_OWNER}/${process.env.REPO_NAME}`;
    await (await this.textVerificationInputField).setValue(repoPath);
  }

  open() {
    return super.open(
      `/${process.env.REPO_OWNER}/${process.env.REPO_NAME}/settings`
    );
  }
};
