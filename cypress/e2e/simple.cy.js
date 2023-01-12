/*describe('first block', () => { 
    it('first step', () => {
        expect(true).to.equal(true)
    })

    it('5 should be 5', () => {
        expect(5).to.equal(5)
    })
})

describe('second block', () => {
    it('false should be false', () => {
        expect(false).to.equal(false)
    })
})*/

/*describe('browser Actions', () => { 
    it('should open the URL', () => {
        cy.visit('https://example.cypress.io/')
    })

    it('check correct url', () => {
        cy.url().should('include', 'example')
    })

    it('should check for corrent element', () => {
        cy.get('h1').should('be.visible')
    })
 })*/

 describe('Browser Actions', () => {
    it('should open correct url', () => {
        cy.visit('https://books.toscrape.com/')
        cy.url().should('include','toscrape')
        //cy.get()
    })

    it('should click the Travel category', () => {
        cy.get('a').contains('Travel').click()

        cy.get('h1').contains('Travel')
    })

    it('should display correct number of elements', () => {
        cy.get('.product_pod').its('length').should('eq',11)
    })

    it('should click on Peotry category', () => {
        cy.get('a').contains('Poetry').click()

        cy.get('h1').contains('Poetry')
    })

    it('should click on the book Olio', () => {
        cy.get('[title~=Olio]').click()
    })

    it('should contain the correct price', () => {
        cy.get('.price_color').contains('£23.88')
    })
 })