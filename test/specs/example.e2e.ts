import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();

        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
    it('should not login with invalid credentials', () => {
        LoginPage.open();

        LoginPage.login('tomsmith1', 'SuperSecretPassword!1');
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'Your username is invalid!');
    });
});


