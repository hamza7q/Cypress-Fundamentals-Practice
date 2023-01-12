describe("Visit Login", () => {
    it("visit URL", () => {
        cy.visit('https://staging.dev.rapidcanvas.net/#/auth/sign-in')

        cy.get('._2QZcjcd8-1dcYvNPc0uDc1').should('be.visible')

    })
})

describe('Login', () => {
    it('Enter Credentials', () => {

        cy.get('#email-input').clear()
        cy.get('#email-input').type('hassan.naeem@kualitatem.com')
        cy.wait(2000)

        cy.get('#password-input').clear()
        cy.get('#password-input').type('Kualitatem123@')

        //cy.pause()
    })

    it('Unmark Checkbox', () => {

        cy.get('input[type="checkbox"]').click()
        cy.wait(2000)
    })

    

    it('Click on Login Button', () => {

        cy.get('.MuiButton-label').click()
    })
})

describe("Should navigate to Dashboard", () => {
    it('verify user is on Dashboard', () => {
        cy.get('._3NWq0onoaSqd-bqGtyhObU').should('be.visible')
        cy.wait(2000)
    })
})

describe('Delete project', () => {
    it('Navigate to Projects tab', () => {
        cy.wait(2000)
        cy.xpath('//span[text()="Projects"]/..').click()
    })

    it('Click on three dots', () => {
        cy.wait(5000)
        cy.xpath('//div[contains(@class,"MuiGrid-justify")]//h6[text()="Test Project"]//..//..//..//button').click()
    })
})

/*describe('Create New Project', () => {
    it('Click on New button', () => {
        cy.xpath('//div[@class="Y9WemVStcHcf9s_jEUa7Y"]//button[@type="button"]').click()
    })

    it('Verify Create New Project Title is visible', () => {
        cy.get('div h2').should('be.visible')
    })

    it('Type Project Name and Description', () => {
        cy.get('#name').type('Test Project')
        cy.get('#description').type('Project creation for testing purposes')
    })

    it('select box', () => {
        cy.get('#solutionId').click()
        cy.wait(3000)
        cy.xpath('//*[@id="menu-solutionId"]/div[3]/ul/li').click()
        cy.get('button[type="submit"]').click()
    })
})*/

// Xpath to get 3Dot button
// //div[contains(@class,'MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6')]//h6[text()="Test Project"]/../../following-sibling::button