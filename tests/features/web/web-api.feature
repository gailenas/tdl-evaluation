Feature: GitHub testing

    Scenario: Validate that user can delete a repository
        Given User creates repository over API
        And User logged in into GitHub
        When User enter repository page
        And User navigates to repository settings
        And User click delete repository
        And Confirm repository deletion
        Then Repository page should not exist
