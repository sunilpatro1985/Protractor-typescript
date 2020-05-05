import { browser, element, by, protractor } from "protractor";

export class HomePage{

    bankManagerLogin = element(by.buttonText('Bank Manager Login'));
    mainHeading = element(by.className('mainHeading'));

    navigateToBankManagerLogin(){
        this.bankManagerLogin.click();
    }
}