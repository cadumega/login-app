// tests/example.cy.js
describe('Basic test', () => {
  it('loads the homepage', () => {
    cy.visit('http://localhost:3000')
    cy.contains('h1', 'Welcome').should('be.visible')
    // If you don't have a "Welcome" h1, replace with something you actually have on your page
  })
})
