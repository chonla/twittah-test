import { test } from '@playwright/test';
import { invalidUsers, validUser } from '../fixtures/users';
import { LoginPage } from '../pom/login.page';
import { HomePage } from '../pom/home.page';

test.describe('Login Twittah!', () => {
  let loginPage: LoginPage;
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);

    await loginPage.visit();
  });

  test('Login สำเร็จ ต้องไปที่หน้าแรก', async ({ page }) => {
    await loginPage.loginWith(validUser.credential);

    await homePage.shouldBeDisplayed();
    await homePage.shouldDisplayUserProfileOf(validUser);
  });

  for (const invalidUser of invalidUsers) {
    test(`Credential ไม่ถูกต้อง: ${invalidUser.credential.login}`, async ({ page }) => {
      await loginPage.loginWith(invalidUser.credential);
  
      await loginPage.shouldBeDisplayed();
      await loginPage.shouldContainErrorMessage(invalidUser.errorMessage);
    });
  }
});


test.describe('Logout Twittah!', () => {
  let loginPage: LoginPage;
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);

    await loginPage.visit();
  });

  test('Logout สำเร็จ ต้องไปที่หน้าล็อกอิน', async ({ page }) => {
    await loginPage.loginWith(validUser.credential);

    await homePage.logout();

    await loginPage.shouldBeDisplayed();
  });
});