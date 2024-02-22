import { AddPage } from "../page_objects/add_page.js";

describe("Test Exceptions", () => {
  beforeEach(() => {
    cy.setupTest(); 
  });

  it("Test Case 1: NoSuchElementException", () => {
    AddPage.addButton.click();
    AddPage.secondRowInputField.should("be.visible");
  });

  it("Test Case 2: ElementNotInteractableException", () => {
    AddPage.addButton.click();
    AddPage.secondRowInputField.type("Burger");
    AddPage.saveButton.click();
  });

  it("Test Case 3: InvalidElementStateException", () => {
    AddPage.inputField.clear().type("Pav Bhaji");
    AddPage.inputField.should("have.value", "Pav Bhaji");
  });

  it("Test Case 4: StaleElementReferenceException", () => {
    AddPage.instructions.should("not.exist");
    AddPage.addButton.click();
    AddPage.instructions.should("not.be.visible");
  });

  it("Test Case 5: TimeoutException", () => {
    AddPage.addButton.click();
    AddPage.secondRowInputField.should("be.visible");
  });
});