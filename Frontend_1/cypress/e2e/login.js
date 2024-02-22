
class LoginPage {
  visitLoginPage() {
    cy.visit('https://practicetestautomation.com/practice/');
    cy.contains('Test Login Page').click();
  }

  fillUsername(username) {
    cy.get('#username').type(username);
  }

  fillPassword(password) {
    cy.get('#password').type(password);
  }

  clickSubmitButton() {
    cy.get('#submit').click();
  }

  verifyErrorMessage(message) {
    cy.contains(message).should('be.visible');
  }

  verifyNewPageURL(url) {
    cy.url().should('include', url);
  }

  verifyNewPageContainsText(text) {
    cy.contains(text).should('be.visible');
  }

  verifyLogoutButtonVisible() {
    cy.contains('a', 'Log out').should('be.visible');
  }
}

export default LoginPage;
