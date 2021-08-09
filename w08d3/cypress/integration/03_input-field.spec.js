describe('tests for the input field', () => {

  beforeEach(() => {
    cy.visit('/');

    cy.get('.search__form')
      .find('input')
      .as('searchField');
  });

  it('can handle text input', () => {
    cy.get('@searchField')
      .type('Celine Dion', { delay: 250 })
      .should('have.value', 'Celine Dion');
  });

  it('can handle backspace', () => {
    cy.get('@searchField')
      .type('Beee{backspace}ge{backspace}{backspace} Gees', { delay: 200 })
      .should('have.value', 'Bee Gees');
  });

});
