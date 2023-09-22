import { test as base } from 'playwright-bdd';
import { DefaultPage } from '../pom/default.page';
import { LoginPage } from '../pom/login.page';
import { HomePage } from '../pom/home.page';

export const test = base.extend<{
    defaultPage: DefaultPage;
    loginPage: LoginPage;
    homePage: HomePage;
}>({
    defaultPage: async ({ page }, use) => {
        await use(new DefaultPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
});

