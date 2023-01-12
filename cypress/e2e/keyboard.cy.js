describe('Keyboard simulation', () => {

    it('should open correct url', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')

        cy.url().should('include', 'index.html')
    })

    it('should press enter after typing search term', () => {
        cy.get('#searchTerm').type('Some search term {enter}')
    })
})