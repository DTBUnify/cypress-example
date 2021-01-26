/// <reference types="cypress" />

import HomePage from '../../pages/homePage.page'
import FormAuthenticationPage from '../../pages/formAuthentication.page'

context('Test form authentication', () => {

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/')
  })

  it('Login using the form authentication', () => {

    HomePage.getFormAuthenticationLink()
      .click()

    FormAuthenticationPage.loginWithCredentials('tomsmith', 'SuperSecretPassword!')
      .clickLoginButton()

    FormAuthenticationPage.getLoginSuccess()
      .should('exist')

  })

})
