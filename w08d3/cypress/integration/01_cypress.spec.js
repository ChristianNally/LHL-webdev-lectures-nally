describe('tests for Cypress', () => {

  it('works', () => {
    expect(true).to.equal(true);
  });

  it('visit the homepage', () => {
    cy.visit('http://localhost:8765');
  });

});
