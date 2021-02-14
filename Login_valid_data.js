describe('Sign in valid data', () => {
    it('Visits Herokuapp', () => {
      cy.visit('https://the-internet.herokuapp.com/login')
      cy.get('#username').type('tomsmith')
      cy.get('#password').type('SuperSecretPassword!')

      cy.get('.fa').click()

      cy.get('#flash').contains('You logged into a secure area!').should('exist')
    })
  })