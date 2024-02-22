Cypress.Commands.add("setupTest", () => {
    cy.visit("https://practicetestautomation.com/practice/");
    // Click on the "Test Exceptions" button
    cy.get("a").contains("Test Exceptions").click();
  });