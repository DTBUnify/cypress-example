/// <reference types="cypress" />

import HomePage from '../../pages/homePage.page'
import DropdownPage from '../../pages/dropdownPage.page'

context('Dropdown List Selection', () => {

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/')
  })

  it('Select an option from the drop-down menu', () => {

    HomePage.getDropdownLink()
      .click()

    DropdownPage.selectOption()
      .should('contain.value', '1');

  })

})
