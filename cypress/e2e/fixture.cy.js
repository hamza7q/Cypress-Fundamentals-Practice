describe('Login using fixture file', () => {

    it('should go to the login page and enter data', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')

        cy.url().should('include', 'webappsecurity')

        // getting data from fixture
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user_login').as('username')
            cy.get('@username').clear()
            cy.get('@username').type(username)

            cy.get('#user_password').as('password')
            cy.get('@password').clear()
            cy.get('@password').type(password)
        })

    })

    it('should click on the Sign In button', () => {
        cy.pause()

        cy.get('input[type="submit"]').click()
    })

    it('should check for error message', () => {
        cy.get('.alert-error').should('be.visible')
    })


    /*it('should fill in the username', () => {
        cy.get('#user_login').as('username')
        
        cy.get('@username').clear()
        cy.get('@username').type(username)
    })*/

    /*it('should fill in the password', () => {
        cy.get('#user_password').as('password')
        
        cy.get('@password').clear()
        cy.get('@password').type(password)
    })*/
})