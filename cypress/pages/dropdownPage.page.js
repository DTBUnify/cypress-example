class DropdownPage {

    selectOption() {
        return cy.get('select#dropdown').select('Option 1');
    }
    
}

export default new DropdownPage()