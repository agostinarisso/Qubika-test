# Qubika Sports Club Management System - End-to-end testing challenge.
This project implements automated end-to-end (E2E) testing for the Qubika Sport Club Management System platform using Playwright. The objective is to validate key functionalities, such as user creation, login and category management, for the purpose of Qubika's technical challenge.
All this following a modular and scalable approach based on the Page Object Model (POM).

## Prerequisites
To succesfully execute this project, you need to install the following components:
* node.js
* npm
* Playwright

## Configuration
1. Clone the repo.
2. Install the dependencies: run the following commands.
* ```npm install```
* ```npx playwright install```

## Test execution
There are three ways to run the tests
1. Run them without graphic interface:
        ```npx playwright test```
3. Run them with graphical interface:
        ```npx playwright test --headed```
5. Run them in interactive mode:
        ```npx playwright test --debug```
## Input parameters
The test uses the ```createUser()``` function to generate users dynamically. If you want to use specific credentials or data, you can modify the ```createUser.js``` file or use a JSON or configuration file for data-driven testing.

## Next steps
There are a few things that could be improved in this project
* Improve test coverage: Add more test cases for other system modules. Generate more tests with alternative paths.
* Add reports: Integrate tools such as allure-playwright to generate detailed reports of executions.

## Support
If you have any question or problem with this project, please contact me :) 
