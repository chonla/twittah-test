import { test, expect } from '@playwright/test';
import { app } from '../fixtures/app';
import { invalidUser, validUser } from '../fixtures/users';

test('Visit Twittah!', async ({ page }) => {
  await page.goto(app.baseUrl);
  await expect(page.getByTestId('app-name')).toBeVisible();
  await expect(page.getByTestId('app-name')).toHaveText('Twittah!');
});

test.describe('Login Twittah!', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(app.baseUrl);
  });

  test('Login สำเร็จ ต้องไปที่หน้าแรก', async ({ page }) => {
    await page.getByTestId('login-field').fill(validUser.credential.login);
    await page.getByTestId('password-field').fill(validUser.credential.password);
    await page.getByTestId('login-button').click();

    await expect(page.getByTestId('current-user-profile')).toBeVisible();
    await expect(page.getByTestId('user-profile-display-name')).toHaveText(validUser.displayName);
    await expect(page.getByTestId('user-profile-login-name')).toHaveText(`@${validUser.credential.login}`);
    await expect(page).toHaveURL(`${app.baseUrl}/home`);
  });

  test('Login ไม่ผ่าน เพราะรหัสผ่านไม่ถูกต้อง', async ({ page }) => {
    await page.getByTestId('login-field').fill(invalidUser.credential.login);
    await page.getByTestId('password-field').fill(invalidUser.credential.password);
    await page.getByTestId('login-button').click();

    await expect(page.getByTestId('error-message')).toBeVisible();
    await expect(page.getByTestId('error-message')).toHaveText('ล็อกอินหรือรหัสผ่านไม่ถูกต้อง');
    await expect(page.getByTestId('user-profile')).not.toBeVisible();
    await expect(page).toHaveURL(`${app.baseUrl}/`);
  });
});

test.describe('Logout Twittah!', () => {
  test('Logout สำเร็จ ต้องไปที่หน้าล็อกอิน', async ({ page }) => {
    await page.goto(app.baseUrl);

    await page.getByTestId('login-field').fill(validUser.credential.login);
    await page.getByTestId('password-field').fill(validUser.credential.password);
    await page.getByTestId('login-button').click();
    await page.getByTestId('menu-signout').click();

    await expect(page.getByTestId('app-name')).toHaveText('Twittah!');
    await expect(page).toHaveURL(`${app.baseUrl}/`);
  });
});