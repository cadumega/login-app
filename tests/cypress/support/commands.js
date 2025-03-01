Cypress.Commands.add('loginWithCredentialsFromEnv', () => {
    const username = Cypress.env('defaultUsername');
    const password = Cypress.env('defaultPassword');
    cy.get('[data-testid="username"]').type(username);
    cy.get('[data-testid="password"]').type(password);
  });