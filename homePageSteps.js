Feature: MaintainPro Home Page View
  As a prospective user or property manager
  I want to view the MaintainPro landing page and understand its capabilities
  So that I can evaluate the platform and click Get Started to join

  Background:
    Given the user navigates to the MaintainPro home page URL

  Scenario: Display Navigation Header
    Then the header should display the "MaintainPro" logo with a key icon
    And the navigation bar should display an active "Home" link

  Scenario: Display Hero Section and Call-to-Action
    Then the Hero section should render a background image with a blur overlay card
    And the main heading should display "Manage Your Property Easily & Efficiently"
    And the subheading should display "Manage properties, tenants and maintenance requests in one place."
    And the "Get Started" button should be visible and enabled

  Scenario: Click Get Started Button
    When the user clicks the "Get Started" button
    Then the user should be redirected to the sign-in/sign-up page

  Scenario: Display About Section Overview
    Then the About section should display the title "About MaintainPro"
    And the section should display the description explaining real-time maintenance tracking