Feature: UI testing

  Scenario: Visiting the bestseller page
    When I visit the bestseller page
    Then I should see the app title

  Scenario: Viewing list of titles
    Given there is a list of Hardcover Fiction books
    When I choose to view the Hardcover Fiction list
    Then I should see the list of Hardcover Fiction books
