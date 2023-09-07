import { test, expect } from '@playwright/test';
import { app } from '../fixtures/app';
import { validUser } from '../fixtures/users';

test.describe('สร้างโพสต์', () => {
    test('สร้างโพสต์สำเร็จ ต้องมีข้อความที่สร้างใหม่', async ({ page }) => {
        await page.goto(app.baseUrl);
        await page.getByTestId('login-field').fill(validUser.credential.login);
        await page.getByTestId('password-field').fill(validUser.credential.password);
        await page.getByTestId('login-button').click();

        await page.getByTestId('message-field').fill('ทดสอบสร้างโพสต์จาก Playwright สุดยอดไปเลย');
        await page.getByTestId('post-button').click();

        await expect(page.getByTestId(/post-message-/).first().getByTestId(/-creator-login-name/)).toHaveText(`@${validUser.credential.login}`);
        await expect(page.getByTestId(/post-message-/).first().getByTestId(/-body/)).toHaveText('ทดสอบสร้างโพสต์จาก Playwright สุดยอดไปเลย');
    });
});  