Feature: Visit Twittah!

    Background: อยู่ที่หน้า Login ของ Twittah แล้ว
        Given I open Login Page

    Scenario: ล็อกอินสำเร็จต้องไปที่หน้าแรก
        When I login with login name bancha and password 123456
        Then I see the home page