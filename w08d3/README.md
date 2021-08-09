Cypress builds on Mocha and Chai.

It runs "end to end" tests, by controlling a browser.

Inside typical Mocha 'describe' and 'it' function calls you can call cypress actions, like this:

cy.visit('http://google.com');

Such actions actually return promises so that you can use .then and .catch clauses. But regardless of that, these actions typically return DOM elements, and if some error occurs, the Mocha will catch those errors and the test will fail.

[x] Demo of Tests
see the cypress/integration sub-directory

[x] Cypress Documentation including "best practices" and the "api"
https://docs.cypress.io/guides/references/best-practices
https://docs.cypress.io/api/table-of-contents
