README

This test suite aims to verify the handling of various exceptions that can occur during automated testing using Cypress. Each test case focuses on simulating a specific exception scenario and ensuring that the application behaves as expected in such situations.

## Execution of Different Cypress Commands

To open Test runner GUI - npx cypress open
To run Cypress Headlessly (Command-Line Mode) - npx cypress run
To run specific Test File in Headless Mode - npx cypress run --spec <path_to_spec_file>
To run Cypress with Custom Configurations - npx cypress run --config <config_options>
To run Cypress with Browser - npx cypress run

## Test Case Overview:

--- NoSuchElementException

Click on an element that is expected to exist but is not present on the page.
Verify that attempting to interact with the missing element throws a NoSuchElementException.

--- ElementNotInteractableException

Click on an element that is present but not interactable (e.g., covered by another element).
Attempt to interact with an input field that is not accessible or disabled.
Verify that the application handles the ElementNotInteractableException gracefully.

--- InvalidElementStateException

Perform an action on an element that is in an invalid state (e.g., attempting to type in a read-only input field).
Verify that the application does not allow invalid state transitions and throws an InvalidElementStateException.

--- StaleElementReferenceException

Interact with an element that becomes stale or detached from the DOM after the page is refreshed or modified.
Verify that attempting to interact with a stale element results in a StaleElementReferenceException.

--- TimeoutException

Trigger an action that should cause a delay or timeout in the application's response.
Verify that the application responds within the expected time frame and does not encounter a TimeoutException.

## Page Object Model

The test suite follows the Page Object Model (POM) design pattern, where each page element and interaction is encapsulated within respective page objects (e.g., AddPage).

## How to Run Tests

--- Ensure that Node.js and Cypress are installed.
--- Clone the repository containing the test suite.
--- Navigate to the project directory.
--- Run Cypress using the command npx cypress open.
--- Select the test_exceptions_spec.js test file from the Cypress Test Runner GUI.
--- Cypress will automatically execute the tests in the selected file and display the results.