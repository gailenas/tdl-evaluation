Feature: Jitsi Meet testing

    Scenario: Validate that desktop user can join a call created from mobile app
        Given Mobile and Firefox users logged in into platform
        When "Mobile" user creates a call session
        When "Firefox" joins call session created by "Mobile" user
        Then Confirm that "Mobile" user can see "Firefox" user video feed
        Then Confirm that "Firefox" user can see "Mobile" user video feed

