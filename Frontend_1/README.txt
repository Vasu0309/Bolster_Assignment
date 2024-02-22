README

This test suite is designed to test the login functionality of a web application using Cypress, an end-to-end testing framework. The tests cover both positive and negative scenarios to ensure the login process functions correctly and handles invalid inputs appropriately.

## Execution of Different Cypress Commands

To open Test runner GUI - npx cypress open
To run Cypress Headlessly (Command-Line Mode) - npx cypress run
To run specific Test File in Headless Mode - npx cypress run --spec <path_to_spec_file>
To run Cypress with Custom Configurations - npx cypress run --config <config_options>
To run Cypress with Browser - npx cypress run

## Test Case Overview:

--- Positive LogIn Test

Fill in valid username and password.
Click the submit button.
Verify redirection to the expected page URL.
Verify the presence of a success message.
Verify the visibility of the logout button.

--- Negative Username Test

Fill in an invalid username and a valid password.
Click the submit button.
Verify the display of an error message indicating an invalid username.

--- Negative Password Test

Fill in a valid username and an invalid password.
Click the submit button.
Verify the display of an error message indicating an invalid password.


## Test Data

Test data is stored in a JSON file named loginTestData.json, which contains valid and invalid usernames and passwords for testing different scenarios.


## Page Object Model

The test suite follows the Page Object Model (POM) design pattern. The LoginPage class encapsulates all interactions with the login page, providing methods for filling in credentials, clicking buttons, and verifying page elements.

## How to Run Tests

--- Ensure that Node.js and Cypress are installed.
--- Clone the repository containing the test suite.
--- Navigate to the project directory.
--- Run Cypress using the command npx cypress open.
--- Select the login_spec.js test file from the Cypress Test Runner GUI.
--- Cypress will automatically execute the tests in the selected file and display the results.