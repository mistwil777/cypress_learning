/// <reference types="cypress" />

describe('test: caesar.html', () => {
    beforeEach(() => {
        cy.visit('../../caesar.html')
    });

    it('displays H for G - key: 2', () => {
        //Complétion du formulaire

        cy.dataCy('cypher-key').clear().type('2')
        cy.dataCy('cypher-msg').clear().type('G')

        //Validation formulaire
        cy.dataCy('cypher-btn').click()

        cy.dataCy('cypher-result').should('have.text', 'I')
    });
})