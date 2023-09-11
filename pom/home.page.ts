import { Locator, Page, PageScreenshotOptions, expect } from "@playwright/test";
import { app } from "../fixtures/app";
import { User } from "../interfaces/user";

export class HomePage {
    readonly _page: Page;
    readonly _pageUrl: string;
    readonly _currentUserProfileSection: Locator;
    readonly _currentUserProfileDisplayNameLabel: Locator;
    readonly _currentUserProfileLoginNameLabel: Locator;
    readonly _logoutButton: Locator;

    constructor(page: Page) {
        this._page = page;
        this._pageUrl = `${app.baseUrl}/`;
        this._currentUserProfileSection = page.getByTestId('current-user-profile');
        this._currentUserProfileDisplayNameLabel = page.getByTestId('user-profile-display-name');
        this._currentUserProfileLoginNameLabel = page.getByTestId('user-profile-login-name');
        this._logoutButton = page.getByTestId('menu-signout');
    }

    async logout() {
        await this._logoutButton.click();
    }

    async shouldBeDisplayed() {
        await this._page.waitForURL(this._pageUrl);
        await expect(this._page.url()).toEqual(this._pageUrl);
    }

    async shouldDisplayUserProfileOf(user: User) {
        await expect(this._currentUserProfileSection).toBeVisible();
        await expect(this._currentUserProfileDisplayNameLabel).toHaveText(user.displayName);
        await expect(this._currentUserProfileLoginNameLabel).toHaveText(`@${user.credential.login}`);
    }
}