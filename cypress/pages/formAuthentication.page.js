class FormAuthenticationPage {

    getUsernameField() {
        return cy.get('#username');
    }

    getPasswordField() {
        return cy.get('#password');
    }

    getLoginButton() {
        return cy.get('button[type=submit]');
    }

    getLoginSuccess() {
        return cy.get('div.flash.success');
    }

    loginWithCredentials(username, password) {
        this.getUsernameField().type(username);
        this.getPasswordField().type(password);
        return new FormAuthenticationPage();
    }   

    clickLoginButton() {
        this.getLoginButton()
            .click();
    }
}

export default new FormAuthenticationPage()