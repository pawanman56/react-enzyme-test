import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
 
Given('I am on the homepage', () => {
    cy.visit('');
});

When('I fill the search input with the {string} term', (term) => {
    cy.get('.search-field').type(term);
});

And('I click on the submit button', () => {
    cy.get('.search-submit').click();
});

Then('I should be redirected to a search page with the results of the {string} search', (term) => {
    cy.get('.content-box .post-title--archive span').should('contain.text', term);
});