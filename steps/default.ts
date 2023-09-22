import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures';

const { Given, When, Then } = createBdd(test);

Given('I open Twittah', async ({ defaultPage }) => {
    await defaultPage.visit();
});

Then('I see the login page', async ({ loginPage }) => {
    await loginPage.shouldBeDisplayed();
});