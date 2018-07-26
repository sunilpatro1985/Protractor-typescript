import { browser, element, by, protractor } from "protractor";
import { log4jsconfig } from '../config/log4jsconfig';
import {alert} from "../util/alert";

export class OpenAccountPage{
    Customers = element(by.model('custId'));
    options = this.Customers.all(by.tagName('option'));

    Currency = element(by.model('currency')); //$ = by.css
    Process = element(by.buttonText("Process"));

    SelectACustomer(){
        this.options.then(function(items){
            log4jsconfig.Log().debug("Dropdown option size " + items.length);
            for(let i=0 ; i < items.length ; i++){
                 items[i].getText().then(function(txt: any){
                     log4jsconfig.Log().debug(txt);
                     if(txt == "ABC XYZ"){
                         log4jsconfig.Log().debug("Item found on the list");
                         items[i].click();
                     }
                 })
            }
        })
    }

    SelectDollar(){
        this.Currency.$('[value="Dollar"]').click();
    }

    ClickProcessBtn(){
        this.Process.click();
        alert.VerifyAndCloseAlert("Account created");
    }

   

}

