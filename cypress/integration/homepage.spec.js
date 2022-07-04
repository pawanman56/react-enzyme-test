describe('The home page', () => {
    describe('when visited', () => {
        it('should open', () => {
            cy.visit('https://wanago.io');
        });
    });
});