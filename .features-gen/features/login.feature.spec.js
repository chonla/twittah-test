/** Generated from: features/login.feature */
import { test } from "../../fixtures/fixtures.ts";

test.describe("Visit Twittah!", () => {

  test.beforeEach(async ({ Given, loginPage }) => {
    await Given("I open Login Page", null, { loginPage });
  });

  test("ล็อกอินสำเร็จต้องไปที่หน้าแรก", async ({ When, loginPage, Then, homePage }) => {
    await When("I login with login name bancha and password 123456", null, { loginPage });
    await Then("I see the home page", null, { homePage });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
});