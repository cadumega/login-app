describe('Login Page - Security Tests', () => {
    beforeEach(() => {
        cy.visit('/'); // Or whatever your login page URL is
    });
  
    it('Should prevent SQL injection-like attacks in username', () => {
      const injectionString = "admin' OR '1'='1";  // A simple injection example
  
      cy.get('#username').type(injectionString);
      cy.get('#password').type('password123'); // Some valid password
      cy.get('button[type="submit"]').click();
  
      // ASSERTION:  Crucially, you're *not* expecting a successful login.
      // You expect either:
      // 1. An error message (explicitly stating invalid credentials or similar)
      // 2. To remain on the login page (indicating failed authentication).
      cy.url().should('include', '/');  // Stay on login page
      cy.get('.error-message').should('exist'); // Check for an error message (adjust selector if needed)
    });
  
    it('Should prevent XSS attacks in username', () => {
        const xssPayload = '<script>alert("XSS");</script>';
  
        cy.get('#username').type(xssPayload);
        cy.get('#password').type('password123');
        cy.get('button[type="submit"]').click();
  
        // ASSERTION:  Check that the XSS payload is *not* executed.
        // The easiest way is to ensure the alert does not pop up (Cypress can handle alerts)
        cy.on('window:alert', (str) => {
            expect(str).to.not.equal('XSS');  // Assert no alert is triggered
        });
    });
  
      it('Should prevent SQL injection-like attacks in password', () => {
      const injectionString = "password' OR '1'='1";
  
      cy.get('#username').type('someuser');
      cy.get('#password').type(injectionString);
      cy.get('button[type="submit"]').click();
  
      cy.url().should('include', '/');
      cy.get('.error-message').should('exist');
    });
  
    it('Should prevent XSS attacks in password', () => {
        const xssPayload = '<img src="x" onerror="alert(\'XSS\')" />';
  
        cy.get('#username').type('someuser');
        cy.get('#password').type(xssPayload);
        cy.get('button[type="submit"]').click();
  
        cy.on('window:alert', (str) => {
            expect(str).to.not.equal('XSS');
        });
    });
  
    it('Should NOT expose sensitive information in error messages', () => {
        cy.visit('/');
        cy.get('#username').type('invalid-user');
        cy.get('#password').type('wrong-password');
        cy.get('button[type="submit"]').click();
      
        cy.get('.error-message').should('not.have.any.keys', [ // Better approach
          'SQL',
          'username',
          'password',
          //Add other sensitive information as needed
        ]);
      });
  });