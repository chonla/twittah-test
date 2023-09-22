import { Page } from '@playwright/test';
import { app } from '../fixtures/app';

export class DefaultPage {
    readonly _page: Page;
    readonly _pageUrl: string;

    constructor(page: Page) {
        this._page = page;
        this._pageUrl = `${app.baseUrl}/`;
    }

    async visit() {
        await this._page.goto(this._pageUrl);
    }
}
