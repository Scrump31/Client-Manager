describe('Client Flow', () => {
  it('allows a user to add, edit, & delete a client', () => {
    // Add client
    cy.visit('/')
    cy.findByText('Add').click()
    cy.findByLabelText('Name (required)').type('Test Name')
    cy.findByLabelText('Email (required)').type('test@mail.com')
    cy.findByLabelText('Phone (required)').type('123456789')
    cy.findByLabelText('Address').type('123 South Street')
    cy.findByLabelText('Company').type('Tests R Us')
    cy.findByLabelText('Notes').type('Test Notes')
    cy.findByText('Add').click()
    cy.findByText('"Test Name successfully added"').should('be.visible')
    cy.findByText('Clients').click()
    // Update client
    cy.findByLabelText('edit Test Name').click()
    cy.findByLabelText('Notes').type(' Updated')
    cy.findByText('Update').click()
    cy.url().should('equal', 'http://localhost:3000/')
    cy.findByText('Test Notes Upda...').should('be.visible')
    // Delete client
    cy.findByRole('button', { name: /edit test name/i }).click()
    cy.findByText('Delete').click()
    cy.url().should('equal', 'http://localhost:3000/')
    cy.findByText('"Test Name successfully deleted"').should('be.visible')
  })
})
