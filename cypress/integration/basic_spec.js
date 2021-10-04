
describe('basic spec', function () {
    it('successfully loads containing h1 with welcome message', function () {
        cy.visit('http://localhost:3000')
        cy.get('h1').should('contain', 'Welcome to the Civic Hacking Hub')
    })
})