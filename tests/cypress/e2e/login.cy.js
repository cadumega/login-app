describe('Login Functionality', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should display the login page', () => {
      cy.contains('Login');
      cy.get('[data-testid="username"]').should('be.visible');
      cy.get('[data-testid="password"]').should('be.visible');
      cy.get('[data-testid="login-button"]').should('be.visible');
    });
  
    it('should validate empty fields', () => {
      cy.get('[data-testid="login-button"]').click();
      cy.contains('Please fill in all fields');
    });
  
    it('should show error for invalid credentials', () => {
      cy.get('[data-testid="username"]').type('wrong_user');
      cy.get('[data-testid="password"]').type('wrong_password');
      cy.get('[data-testid="login-button"]').click();
      cy.contains('Incorrect username or password');
    });
  
    it('should login successfully', () => {
      cy.get('[data-testid="username"]').type('admin');
      cy.get('[data-testid="password"]').type('admin123');
      cy.get('[data-testid="login-button"]').click();
      
      // Verify redirect to dashboard
      cy.url().should('include', '/dashboard');
      cy.contains('Dashboard');
    });
  
    it('should logout successfully', () => {
      // Login first
      cy.get('[data-testid="username"]').type('admin');
      cy.get('[data-testid="password"]').type('admin123');
      cy.get('[data-testid="login-button"]').click();
      
      // Logout
      cy.get('[data-testid="logout-button"]').click();
      
      // Verify return to login page
      cy.url().should('not.include', '/dashboard');
      cy.contains('Login');
    });
  });