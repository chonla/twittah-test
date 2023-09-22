/** Generated from: features/visit.feature */
import { test } from "../../fixtures/fixtures.ts";

test.describe("Visit Twittah!", () => {

  test.beforeEach(async ({ Given, defaultPage }) => {
    await Given("I open Twittah", null, { defaultPage });
  });

  test("เข้ามาที่ Twittah จะต้องเจอหน้า Login", async ({ Then, loginPage }) => {
    await Then("I see the login page", null, { loginPage });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
});