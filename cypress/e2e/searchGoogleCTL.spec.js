describe('Google Search', () => {
  it('should return search results for "Ironman"', () => {
    cy.visit('https://www.google.com/')
    cy.findByLabelText('Search').type('Ironman Tony Stark').type('{enter}')
    cy.findByText('Tony Stark (Marvel Cinematic Universe) - Wikipedia').should(
      'be.visible'
    )
  })
})
