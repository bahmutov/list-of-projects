// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

import 'cypress-map'

it('shows number of filtered projects', () => {
  // visit the page
  cy.visit('/')
  // confirm the number of projects is >>> 300
  cy.get('#projects-count').invoke('text').apply(parseInt)
  .should('be.above', 300).then(n => {
    // confirm the number is the same the number of list items
    cy.get('#projects li').should('have.length', n)
    cy.get('#project-search-text').type('testing')
    cy.get('#projects-count').invoke('text').apply(parseInt)
      .should('be.below', n)
      .then(newN => {
        cy.get('#projects li').should('have.length', newN)
      })
  })
})
