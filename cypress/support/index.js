// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

//code to add the screen shot for failed step in mochaawesome html report.
const addContext = require('mochawesome/addContext')
Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
        const screenshotFileName = '${runnable.parent.title} -- ${test.title} (failed).png'
        addContext({ test }, 'assets/${Cypress.spec.name}/${screenshotFileName}')
    }
})