class DashboardPage {
    verifyLoggedInSuccessfully() {
      cy.url().should('include', 'practicetestautomation.com/logged-in-successfully/');
      cy.contains('Congratulations').should('exist');
      cy.contains('successfully logged in').should('exist');
    }
  
    verifyLogoutButtonDisplayed() {
      cy.contains('Log out').should('be.visible');
    }
  }
  
  export default DashboardPage;