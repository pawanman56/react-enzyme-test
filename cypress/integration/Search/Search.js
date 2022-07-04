import { Before } from 'cypress-cucumber-preprocessor/steps';

Before({ tags: '@homepage' }, () => {
    cy.visit('');
});