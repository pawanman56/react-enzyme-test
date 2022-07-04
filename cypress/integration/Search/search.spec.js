beforeEach(() => {
    cy.visit('');
});

describe('When the search input is filled with a proper string', () => {
    describe('and the search button is clicked', () => {
        it('should redirect to a valid search page', () => {
            const term = 'javascript';
            cy.get('.search-field').type(term);
            cy.get('.search-submit').click();
            cy.get('.content-box .post-title--archive span').should('contain.text', term);
        });
    });
});