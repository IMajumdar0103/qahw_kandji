const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { NavigationMenu } = require('../pages/NavigationMenu');

const authFile = 'config/auth.json';

test.describe('Smoke Tests for QAHW Kandji - This includes Login, Navigation, Logout', () => {
  
  test('Login with auth file', async ({ browser }) => {
    const context = await browser.newContext({ storageState: authFile });
    const page = await context.newPage();
    const home = new HomePage(page);

    await home.goto();
    await home.verifyLoginBanner();
    await home.verifyDevicesText();

  });

  test('Navigate through the menu items', async ({ browser }) => {
    const context = await browser.newContext({ storageState: authFile });
    const page = await context.newPage();
    const home = new HomePage(page);
    const navigation = new NavigationMenu(page);

    await home.goto();
    await home.verifyLoginBanner();
    await home.verifyDevicesText();
    
    await navigation.navigateAndVerify();
  });

  test('Search for something and validate results', async ({ browser }) => {
    const context = await browser.newContext({ storageState: authFile });
    const page = await context.newPage();
    const home = new HomePage(page);
  

    await home.goto();
    await home.verifyLoginBanner();
    await home.verifyDevicesText();

    await home.searchText('dfbf');
    
  });

  test('Logout of QA Kandji', async ({ browser }) => {
    const context = await browser.newContext({ storageState: authFile });
    const page = await context.newPage();
    const home = new HomePage(page);

    await home.goto();
    await home.verifyLoginBanner();
    await home.verifyDevicesText();

    await home.logout();
  });

});
