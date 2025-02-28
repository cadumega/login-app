describe('Registration Functionality', () => {
    beforeEach(() => {
      cy.visit('/register');
    });
  
    it('should display the registration page', () => {
      cy.contains('Register');
      cy.get('[data-testid="reg-username"]').should('be.visible');
      cy.get('[data-testid="reg-password"]').should('be.visible');
      cy.get('[data-testid="reg-confirm"]').should('be.visible');
      cy.get('[data-testid="register-button"]').should('be.visible');
    });
  
    it('should validate empty fields', () => {
      cy.get('[data-testid="register-button"]').click();
      cy.contains('Please fill in all fields');
    });
  
    it('should validate different passwords', () => {
      cy.get('[data-testid="reg-username"]').type('newuser');
      cy.get('[data-testid="reg-password"]').type('password123');
      cy.get('[data-testid="reg-confirm"]').type('password456');
      cy.get('[data-testid="register-button"]').click();
      cy.contains('Passwords do not match');
    });
  
    it('should register successfully', () => {
      cy.get('[data-testid="reg-username"]').type('newuser');
      cy.get('[data-testid="reg-password"]').type('password123');
      cy.get('[data-testid="reg-confirm"]').type('password123');
      cy.get('[data-testid="register-button"]').click();
      
      // Verify redirect to login page
      cy.url().should('not.include', '/register');
      cy.contains('Login');
    });
  });