README

This repository contains automated test scripts to test various APIs provided by reqres.in, and automating Test Scenarios for Login Functionality and Exception Handling Tests are written using the Cypress testing framework.

This repository also contains Selenium automated test cases written in Python to test exceptions on a practice website. The test cases cover scenarios such as NoSuchElementException, ElementNotInteractableException, InvalidElementStateException, StaleElementReferenceException, and TimeoutException.



## Execution of Different Cypress Commands

To open Test runner GUI - npx cypress open
To run Cypress Headlessly (Command-Line Mode) - npx cypress run
To run specific Test File in Headless Mode - npx cypress run --spec <path_to_spec_file>
To run Cypress with Custom Configurations - npx cypress run --config <config_options>
To run Cypress with Browser - npx cypress run

## Selenium Setup

pip install selenium
python test_exceptions.py



## Operating Instructions:

Make sure Node.js and npm are installed on your system.
Copy the location to your local computer.
Install Cypress using npm: npm install cypress --save-dev.
Go to the project directory and import Cypress: npx cypress open.
Select the required tests (backend_api_tests.spec.js) executed by Cypress Tests.
The test will be executed and the results will be displayed in the Cypress Test Runner interface.
Note: Before running the test, please ensure that the reqres.in API end is accessible and responsive.
