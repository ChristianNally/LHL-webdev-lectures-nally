describe('displaying results', () => {

  it('can display the results from an API call', () => {
    // visit the homepage
    cy.visit('/');

    // set up a fake endpoint to return our fake data
    cy.intercept('GET', '**/search*', { fixture: 'itunes' })
      .as('loadFakeData');

    // type into the input field
    cy.get('.search__form')
      .find('input')
      .type('Daft Punk')
      .should('have.value', 'Daft Punk');

    // the spinner should be visible
    cy.get('.spinner')
      .should('be.visible');

    // wait for the data to load
    cy.wait('@loadFakeData')
      .get('article.album')
      // look for a specific album
      .contains('Alive 2007')
      .should('be.visible');

    // uncheck the explicit checkbox
    cy.get('#Explicit')
      .uncheck()
      .should('not.be.checked');

    // make sure the explicit album no longer appears
    cy.get('article.album')
      .should('not.contain', 'Daft Club');
  });

});
