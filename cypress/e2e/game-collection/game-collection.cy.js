describe('Game collection spec', () => {
  /* ==== Test Created with Cypress Studio ==== */
  it('Tic-Tac-Toe Winner X', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:5173/');
    cy.get(':nth-child(2) > a').click();
    cy.get('.board > :nth-child(1) > :nth-child(1)').click();
    cy.get('.board > :nth-child(2) > :nth-child(1)').click();
    cy.get('.board > :nth-child(2) > :nth-child(2)').click();
    cy.get('.board > :nth-child(3) > :nth-child(1)').click();
    cy.get('.board > :nth-child(3) > :nth-child(3)').click();

    // cy.wait(1000);
    cy.get(".status").should(
      "have.text",
      "Winner: X"
    );
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Tic-Tac-Toe Winner O', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:5173/');
    cy.get(':nth-child(2) > a').click();
    cy.get('.board > :nth-child(1) > :nth-child(1)').click();
    cy.get('.board > :nth-child(1) > :nth-child(2)').click();
    cy.get('.board > :nth-child(2) > :nth-child(1)').click();
    cy.get('.board > :nth-child(2) > :nth-child(2)').click();
    cy.get('.board > :nth-child(1) > :nth-child(3)').click();
    cy.get('.board > :nth-child(3) > :nth-child(2)').click();
    
    cy.get(".status").should(
      "have.text",
      "Winner: O"
    );
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Game Navigation Tests', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:5173/');
    cy.get(':nth-child(2) > a').click();
    cy.url().should('include', '/tic-tac-toe');
    cy.get(':nth-child(3) > a').click();
    cy.url().should('include', '/candy-crush');
    /* ==== End Cypress Studio ==== */
  });
})