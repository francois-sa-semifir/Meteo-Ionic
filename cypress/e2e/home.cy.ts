describe('Meteo App', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should load the home page', () => {
        cy.get('ion-app').should('exist');
    });

    it('should display the app title', () => {
        cy.title().should('not.be.empty');
    });
});
