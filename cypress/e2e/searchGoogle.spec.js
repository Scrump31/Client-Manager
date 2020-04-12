/*
 * Given: I am on google.com
 * When: I enter "Ironman Tony Stark" in the input
 * When: I press the "Enter" key
 * Then: I see Tony Stark (Marvel Cinematic Universe) in search results
 */

describe('Google Search', () => {
  it('should return search results for "Ironman"', () => {
    cy.visit('https://www.google.com/')
    // Get remaining code via Cypress selector tool while running
    //  the test
    cy.get('.gLFyf').type('Ironman Tony Stark').type('{enter}')
    cy.get(
      '[href="https://en.wikipedia.org/wiki/Tony_Stark_(Marvel_Cinematic_Universe)"] > .LC20lb'
    ).should('be.visible')
  })
})
