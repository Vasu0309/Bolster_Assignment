export class AddPage {
    static get addButton() {
      return cy.get("[name='Add']");
    }
    static get secondRowInputField() {
        return cy.get("#row2 input[type='text']");
      }
      static get saveButton() {
        return cy.get("[name='Save']");
      }
      static get inputField() {
        return cy.get("#input_field");
      }
      static get instructions() {
        return cy.get("p[id*='instructions']");
      }
    }