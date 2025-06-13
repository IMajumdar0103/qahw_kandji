const { expect } = require('@playwright/test');

class NavigationMenu {

  constructor(page) {
    this.page = page;
  }

  /*These are the functions that perform various actions, asserts on the left nav*/

  async navigateAndVerify() {
    await this.page.getByRole('link', { name: 'kandji-blueprint-light' }).click();
    await expect(this.page.getByRole('heading', { name: 'Blueprints' })).toBeVisible();
    console.log('Navigated to Blueprints')

    //await page.getByRole('link', { name: 'library-grid-light Library' }).click();

    await this.page.getByText('Library').click();
    await expect(this.page.getByRole('heading', { name: 'Library' })).toBeVisible();
    console.log('Navigated to Library')

    await this.page.getByRole('link', { name: 'user-group Users' }).click();
    await expect(this.page.getByRole('heading', { name: 'Users', exact: true })).toBeVisible();
    console.log('Navigated to Users')

    await this.page.getByRole('link', { name: 'shield-halved Threats' }).click();
    await expect(this.page.getByRole('heading', { name: 'Get started with Kandji EDR' })).toBeVisible();
    console.log('Navigated to Threats')

    await this.page.getByRole('link', { name: 'shield-magnifying-glass-virus' }).click();
    await expect(this.page.getByRole('heading', { name: 'Vulnerabilities', exact: true })).toBeVisible();
    console.log('Navigated to Vulnerabilities')

    await this.page.getByRole('link', { name: 'bell Alerts' }).click();
    await expect(this.page.getByRole('heading', { name: 'Alerts' })).toBeVisible();
    console.log('Navigated to Alerts')

    await this.page.getByRole('link', { name: 'wave-pulse Activity' }).click();
    await expect(this.page.getByRole('heading', { name: 'Activity' })).toBeVisible();
    console.log('Navigated to Activity')

    await this.page.getByRole('link', { name: 'circle-plus Enrollment' }).click();
    await expect(this.page.getByRole('heading', { name: 'Enrollment' })).toBeVisible();
    console.log('Navigated to Enrollment')

    await this.page.getByRole('link', { name: 'Resources' }).click();
    await expect(this.page.getByRole('heading', { name: 'Resources' })).toBeVisible();
    console.log('Navigated to Resources')
  }
}

module.exports = { NavigationMenu };
