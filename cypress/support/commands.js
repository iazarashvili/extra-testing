// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import { homePageHelper } from "./helpers/homePageHelper";


  Cypress.Commands.add('stagingAuth', () => {
    cy.session("stagingaauth", () => {
      cy.viewport(1920, 1080)
      cy.visit('')
      cy.get('#username').type(Cypress.env('authUserName'));
      cy.get('#password').type(Cypress.env('authPassword'));
      cy.contains('Sign In').click();
      cy.url().should('eq', Cypress.env('base_url'));
      homePageHelper.white()
    })
  })