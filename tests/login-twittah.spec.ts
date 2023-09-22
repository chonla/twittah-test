import { test, expect } from '@playwright/test';

test('Visit Twittah!', async ({ page }) => {
  await page.goto('https://twittah.web.app');
  await expect(page.getByTestId('app-name')).toBeVisible();
  await expect(page.getByTestId('app-name')).toHaveText('Twittah!');
});

test.describe('Login Twittah!', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://twittah.web.app');
  });

  test('Login สำเร็จ ต้องไปที่หน้าแรก', async ({ page }) => {
    await page.getByTestId('login-field').fill('bancha');
    await page.getByTestId('password-field').fill('123456');
    await page.getByTestId('login-button').click();

    await expect(page.getByTestId('current-user-profile')).toBeVisible();
    await expect(page.getByTestId('user-profile-display-name')).toHaveText('บัญชา');
    await expect(page.getByTestId('user-profile-login-name')).toHaveText('@bancha');
    await expect(page).toHaveURL('https://twittah.web.app/home');
  });

  test('Login ไม่ผ่าน เพราะรหัสผ่านไม่ถูกต้อง', async ({ page }) => {
    await page.getByTestId('login-field').fill('bancha');
    await page.getByTestId('password-field').fill('not-bancha-password');
    await page.getByTestId('login-button').click();

    await expect(page.getByTestId('error-message')).toBeVisible();
    await expect(page.getByTestId('error-message')).toHaveText('ล็อกอินหรือรหัสผ่านไม่ถูกต้อง');
    await expect(page.getByTestId('user-profile')).not.toBeVisible();
    await expect(page).toHaveURL('https://twittah.web.app/');
  });
});

test.describe('Logout Twittah!', () => {
  test('Logout สำเร็จ ต้องไปที่หน้าล็อกอิน', async ({ page }) => {
    await page.goto('https://twittah.web.app');

    await page.getByTestId('login-field').fill('bancha');
    await page.getByTestId('password-field').fill('123456');
    await page.getByTestId('login-button').click();
    await page.getByTestId('menu-signout').click();

    await expect(page.getByTestId('app-name')).toHaveText('Twittah!');
    await expect(page).toHaveURL('https://twittah.web.app/');
  });
});