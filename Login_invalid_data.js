describe('Sign in valid data', () => {
    it('Visits Herokuapp', () => {
      cy.visit('https://the-internet.herokuapp.com/login')
      cy.get('#username').type('test12345')
      cy.get('#password').type('SuperSecret')

      cy.get('.fa').click()

      cy.get('#flash').contains('Your username is invalid!').should('exist')
    })
  })