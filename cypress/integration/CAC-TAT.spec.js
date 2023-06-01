// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Central e Atendimento ao Cliente TAT', function() {
    it('verifica o titulo da aplicação', function(){
        cy.visit('./src/index.html')
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
    })
})