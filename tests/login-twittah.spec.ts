import { test, expect } from '@playwright/test';
import { app } from '../fixtures/app';
import { invalidUser, validUser } from '../fixtures/users';
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

  test('Login ไม่ผ่าน เพราะรหัสผ่านไม่ถูกต้อง', async ({ page }) => {
    await loginPage.loginWith(invalidUser.credential);

    await loginPage.shouldBeDisplayed();
    await loginPage.shouldContainErrorMessage('ล็อกอินหรือรหัสผ่านไม่ถูกต้อง');
  });
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