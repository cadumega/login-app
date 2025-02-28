it('Should load login page quickly', () => {
    cy.visit('/');

    // Get the time it took to load the page and associated resources
    cy.window().then((win) => {
        const performance = win.performance;
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;

        cy.log(`Login page loaded in ${loadTime} ms`);
        expect(loadTime).to.be.lessThan(2000); // Example threshold
    });
});