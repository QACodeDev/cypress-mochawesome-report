![project Logo](/git_project_logo.png)

# Cypress E2E testing with mochawesome report

This is a project which you can use to start your E2E testing with mochawesome report

- Generating seperate json report for each test
- Merging all json reports into single report
- Generating HTML report from the merged json file

### Dependencies
- Cypress version : 4.5.0
- mocha : 7.1.2
- mochawesome : 6.1.1
- mochawesome-merge : 4.0.3

### HMTL Report Sample:
![mochawesome report](/mochawesome_report.png)

# Installation  

1. Create a project directory and Clone the project: 
```git clone https://github.com/QACodeDev/cypress-mochawesome-report.git``` 

2. Under the project directory install the followings: 
```npm install```

# How to start

In order to start using this project. You will have to do the following steps:

 Provide `baseUrl` in cypress.json and put other required test data like credentials.

For upload of results in cypress dashboard :

 Enter <project_ID> in the cypress.json
 
 Enter <record_key> in the package.json under scripts sections.

## **Mulitple ways to execute the tests**:

### Using Cyperss GUI:
* Under the project directory run the following npm command: `npm run cy:open`
### Using CLI - Headless mode:
* Under the project directory run the following npm command: `npm run cy:headless`
### Using CLI - Record mode:
* Under the project directory run the following npm command: `npm run cy:record`
### Using CLI - Chrome browser:
* Under the project directory run the following npm command: `npm run cy:chrome`
### Using CLI - generate HMTL mochawesome report:
* Under the project directory run the following npm command: `npm run cy:report`

# Test debugging/Reports:

* During test execution locally if any test fails, screenshot with execution log will be taken for that. Screenshots will be available under the path: ```cypress-mochawesome-report/cypress/reports/mochawesome-report/assets``` 

* json reports are created under the path: ```cypress-mochawesome-report/cypress/reports/mochawesome-report``` 

* By default capturing test videos is turned off by the ```cypress.json```. If needed, can be possible to turn it on there.if enabled the you can find videos under the path:```cypress-mochawesome-report/cypress/videos``` 

* HTML reports are created under the path: ```cypress-mochawesome-report/cypress/reports/```

## References

- [mochawesome](https://github.com/adamgruber/mochawesome)
- [mochawesome merge](https://github.com/Antontelesh/mochawesome-merge)
- [mochawesome report generator](https://github.com/adamgruber/mochawesome-report-generator)

