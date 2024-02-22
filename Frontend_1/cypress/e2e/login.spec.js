import LoginPage from './login.js';

describe('Login Tests', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visitLoginPage();
  });

  it('Positive LogIn test', () => {
    cy.fixture('loginTestData.json').then((data) => {
      loginPage.fillUsername(data.validUsername);
      loginPage.fillPassword(data.validPassword);
      loginPage.clickSubmitButton();

      loginPage.verifyNewPageURL('practicetestautomation.com/logged-in-successfully/');
      loginPage.verifyNewPageContainsText('Congratulations');
      loginPage.verifyLogoutButtonVisible();
    });
  });

  it('Negative username test', () => {
    cy.fixture('loginTestData.json').then((data) => {
      loginPage.fillUsername(data.invalidUsername);
      loginPage.fillPassword(data.validPassword);
      loginPage.clickSubmitButton();

      loginPage.verifyErrorMessage('Your username is invalid!');
    });
  });

  it('Negative password test', () => {
    cy.fixture('loginTestData.json').then((data) => {
      loginPage.fillUsername(data.validUsername);
      loginPage.fillPassword(data.invalidPassword);
      loginPage.clickSubmitButton();

      loginPage.verifyErrorMessage('Your password is invalid!');
    });
  });
});