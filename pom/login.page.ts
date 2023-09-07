import { Locator, Page, expect } from '@playwright/test';
import { app } from '../fixtures/app';
import { Credential } from '../interfaces/credential';

export class LoginPage {
    readonly _page: Page;
    readonly _pageUrl: string;
    readonly _loginField: Locator;
    readonly _passwordField: Locator;
    readonly _loginButton: Locator;
    readonly _errorMessageLabel: Locator;
    readonly _appName: Locator;

    constructor(page: Page) {
        this._page = page;
        this._pageUrl = `${app.baseUrl}/`;
        this._loginField = page.getByTestId('login-field');
        this._passwordField = page.getByTestId('password-field');
        this._loginButton = page.getByTestId('login-button');
        this._errorMessageLabel = page.getByTestId('error-message');
        this._appName = page.getByTestId('app-name')
    }

    async visit() {
        await this._page.goto(this._pageUrl);
    }

    async loginWith(credential: Credential) {
        await this._loginField.fill(credential.login);
        await this._passwordField.fill(credential.password);
        await this._loginButton.click();
    }

    async shouldBeDisplayed() {
        await this._page.waitForURL(this._pageUrl);
        await expect(this._appName).toBeVisible();
        await expect(this._appName).toHaveText('Twittah!');
        await expect(this._page.url()).toEqual(this._pageUrl);
    }

    async shouldContainErrorMessage(error: string) {
        await expect(this._errorMessageLabel).toBeVisible();
        await expect(this._errorMessageLabel).toHaveText(error);
    }
}
