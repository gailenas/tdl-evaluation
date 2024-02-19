Feature: Conference Demo App tests for Android

    Scenario: Validate that changing the location causes banner image to change
        Given I am on "Schedule" screen
        When I am switching to "About" tab
        When Capture screenshot "1"
        When I am changing current location value to other
        When Capture screenshot "2"
        Then Confirm that the banner image "changes"
        When I am switching to "Schedule" tab
        When Capture screenshot "3"
        Then Confirm that the banner image "not changes"
