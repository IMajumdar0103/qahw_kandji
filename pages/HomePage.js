const { expect } = require('@playwright/test');

class HomePage {

  constructor(page) {
    this.page = page;
  }
  
  /*These are the functions that perform various actions, asserts on the home page*/

  //Navigate to QAHW site
  async goto() {
    await this.page.goto('https://qahw.kandji.io/');
  }

  //Assert banner is present upon login
  async verifyLoginBanner() {
    await expect(this.page.getByTestId('banner-wrapper')).toContainText(
      'Apple Push Notification service not configured. You will not be able to enroll devices until this is complete.'
    
    );
  }
  //Assert Devices page is displayed upon successful login
  async verifyDevicesText() {
    await expect(this.page.getByRole('main')).toContainText('Devices');
    console.log('Login Successful');
    await this.page.screenshot({ path: 'screenshots/devicesPage.png', fullPage: true });
  }

  //Perform Search
   async searchText(text) {

    await this.page.getByText('Search').click();
    await this.page.getByTestId('universal-search-dialog-input').fill(text);
    await this.page.getByTestId('universal-search-dialog-input').press('Enter');
    await expect(this.page.getByTestId('library-list-item')).toBeVisible();
    await this.page.getByText(text).first().click();
    await expect(this.page.getByRole('heading', { name: text })).toBeVisible();
    await this.page.screenshot({ path: 'screenshots/searchResults.png', fullPage: true });
    console.log('Search Successful');
  }

  //Logout of QAHW site
  async logout() {

    await this.page.getByRole('img', { name: 'chevrons-up-down' }).click();
    await expect(this.page.getByText('Log out')).toBeVisible();
    await this.page.getByText('Log out').click();
    console.log('Logout Successful');
  }
}

module.exports = { HomePage };


