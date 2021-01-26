class HomePage {

    getDropdownLink() {
        return cy.get('a[href*=dropdown]')
    }

    getFormAuthenticationLink() {
        return cy.get('a[href*=login]')
    }

    /* Cypress does not respect the psudo class hover, this is on the roadmap.
    getHoverFunctionLink() {
        return cy.get('a[href*=hover]')
    }
    */ 
    
}

export default new HomePage()