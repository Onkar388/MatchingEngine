/// <reference types = "cypress"/>

describe('Test Suite', function () {

    beforeEach(() => {
        cy.viewport(1440, 1000)
    })

    it('TC_01 - Validate Supported Products', function () {
        cy.visit('https://www.matchingengine.com/') //Visit homepage
        cy.get("img[alt='Home Matching Engine']")
            .should('be.visible') // logo
        //Validate Module Menu option
        cy.get('.navbar-dropdown [href*="/matching-module/"]') //Matching Module
            .should('exist')
            .and('contain.text', 'Matching Module')
        cy.get('.navbar-dropdown [href*="/repertoire-management-module/"]') //Repertoire Management Module
            .should('exist')
            .and('contain.text', 'Repertoire Management Module')
        cy.get('.navbar-dropdown [href*="/#modern-ingestion"]') //Modern Ingestion
            .should('exist')
            .and('contain.text', 'Modern Ingestion')
        cy.get('.navbar-dropdown [href*="/#usage-module"]') //Usage
            .should('exist')
            .and('contain.text', 'Usage')
        cy.get('.navbar-dropdown [href*="/#distribution-module"]') //Distribution
            .should('exist')
            .and('contain.text', 'Distribution')
        cy.get('.navbar-dropdown [href*="/#members-portal"]') //Members
            .should('exist')
            .and('contain.text', 'Members')
        //Go to Repertoire Management Module
        cy.get('.navbar-dropdown [href*="/repertoire-management-module/"]') //Repertoire Management Module
            .should('exist')
            .and('contain.text', 'Repertoire Management Module').click({ force: true })
        //Validate Additional Features
        cy.get('h2.vc_custom_heading').eq(1).should('be.visible').and('contain.text', 'Additional Features')
        cy.get('.vc_tta-tab').eq(1).scrollIntoView()
            .should('be.visible')
            .and('contain.text', 'Products Supported').click() //Product Supported tab
        //Validate Supported Products
        cy.get('.wpb_text_column ul li').eq(4)
            .should('be.visible')
            .and('contain.text', 'Cue Sheet / AV Work') //Cue Sheet / AV Work
        cy.get('.wpb_text_column ul li').eq(5)
            .should('be.visible')
            .and('contain.text', 'Recording') //Recording
        cy.get('.wpb_text_column ul li').eq(6)
            .should('be.visible')
            .and('contain.text', 'Bundle') //Bundle
        cy.get('.wpb_text_column ul li').eq(7)
            .should('be.visible')
            .and('contain.text', 'Advertisement') //Advertisement 
    })
})