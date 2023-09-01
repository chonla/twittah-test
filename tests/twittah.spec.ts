import { test, expect } from '@playwright/test';

test('Visit Twittah!', async ({ page }) => {
  await page.goto('https://twittah.web.app');
  await expect(page.getByTestId('app-name')).toBeVisible();
  await expect(page.getByTestId('app-name')).toHaveText('Twittah!');
});
