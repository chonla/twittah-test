import { test, expect } from '@playwright/test';

test.describe('สร้างโพสต์', () => {
    test('สร้างโพสต์สำเร็จ ต้องมีข้อความที่สร้างใหม่', async ({ page }) => {
        await page.goto('https://twittah.web.app');
        await page.getByTestId('login-field').fill('maitree');
        await page.getByTestId('password-field').fill('123456');
        await page.getByTestId('login-button').click();

        await page.getByTestId('message-field').fill('ทดสอบสร้างโพสต์จาก Playwright ไมตรีโพสต์เอง');
        await page.getByTestId('post-button').click();

        await expect(page.getByTestId(/post-message-/).first().getByTestId(/-creator-login-name/)).toHaveText('@maitree');
        await expect(page.getByTestId(/post-message-/).first().getByTestId(/-body/)).toHaveText('ทดสอบสร้างโพสต์จาก Playwright ไมตรีโพสต์เอง');
    });
});  