Feature: Visit Twittah!

    Background: อยู่ที่หน้า Twittah แล้ว
        Given I open Twittah

    Scenario: เข้ามาที่ Twittah จะต้องเจอหน้า Login
        Then I see the login page