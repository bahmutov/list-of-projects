// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('shows number of filtered projects', async () => {
  // visit the page
  cy.visit('/')
  // confirm the number of projects is >>> 300
  const n = await cy.get('#projects-count').invoke('text').apply(parseInt)
    .should('be.above', 300)

    // confirm the number is the same the number of list items
    await cy.get('#projects li').should('have.length', n)
    await cy.get('#project-search-text').type('testing')
    const newN = await cy.get('#projects-count').invoke('text').apply(parseInt)
      .should('be.below', n)
        cy.get('#projects li').should('have.length', newN)
})
