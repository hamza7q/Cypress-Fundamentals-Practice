describe('Login', () => { 
    it('should open correct url', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')

        cy.url().should('include', 'webappsecurity')
    })

    it('should fill username', () => {
        
        cy.get('#user_login').as('username')
        
        cy.get('@username').clear()
        cy.get('@username').type('Some invalid Username')
    })

    it('should fill password', () => {

        cy.get('#user_password').as('password')
        
        cy.get('@password').clear()
        cy.get('@password').type('Some invalid password')
    })

    it('should interact with checkbox', () => {
        //cy.get('#user_remember_me').click()
        cy.get('input[type="checkbox"]')
    })

    it('should submitt login form', () => {
        cy.pause()
        cy.get('input[type="submit"]').click()
        //cy.get('input').contains('Sign in').click()
    })

    it('should check correct error msg', () => {
        cy.get('.alert-error').should('be.visible')
    })
 })