import {protractor, browser} from 'protractor';
import { log4jsconfig } from '../config/log4jsconfig'

export class alert{
static VerifyAndCloseAlert(text: String){
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.alertIsPresent(), 4000, "ALert not found");

    let alert = browser.switchTo().alert();
    let alertText = alert.getText();

    alertText.then(function(txt){
        log4jsconfig.Log().debug(txt);
    })

    browser.sleep(2000);
    expect(alertText).toContain(text);
    alert.accept(); 
}
}
