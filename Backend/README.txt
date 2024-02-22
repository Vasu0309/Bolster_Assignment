README

This repository contains automated test scripts to test various APIs provided by reqres.in. Tests are written using the Cypress testing framework.

## Execution of Different Cypress Commands

To open Test runner GUI - npx cypress open
To run Cypress Headlessly (Command-Line Mode) - npx cypress run
To run specific Test File in Headless Mode - npx cypress run --spec <path_to_spec_file>
To run Cypress with Custom Configurations - npx cypress run --config <config_options>
To run Cypress with Browser - npx cypress run


## Test Case Overview:

Retrieving List: Send a request to retrieve the list of users and use the response as the rule, JSON format, and details.

Retrieving a User: Submit a request to retrieve a user's details and use the response as the rule, JSON format, and content.

Retrieving a Non-Found User: Send a request to retrieve details of a non-existent user and check if the API returns a 404 code.

GET Unknown Single Source: Send a request to retrieve the content of an unknown source and check the response pattern and content.

POST Create Person Usage: Send a request to create a new user and code the Fields , check by JSON format and content.

PUT Update User: Submit a request to update the user context and its current response status, JSON format, and content.

PATCH Update User: Send a request to update the user's partial context and current response status, JSON format and content.

DELETE User: Submit a request to delete a user and verify the response against the policy.

Register User: Send a request to register a new user and check the response status and whether the user ID and physical token are included in the response.

Registering a user without a password: Submit a new user registration request without entering a password and make sure the API returns the number 400 and the appropriate error message.

Login Test: Send a request to authenticate the user and verify that the response is valid and a token is present in the response body.

Delayed receipt of user data: Submit a request to delay the receipt of user data and check the nature and content of the delayed response.



## Operating Instructions:

Make sure Node.js and npm are installed on your system.
Copy the location to your local computer.
Install Cypress using npm: npm install cypress --save-dev.
Go to the project directory and import Cypress: npx cypress open.
Select the required tests (backend_api_tests.spec.js) executed by Cypress Tests.
The test will be executed and the results will be displayed in the Cypress Test Runner interface.
Note: Before running the test, please ensure that the reqres.in API end is accessible and responsive.