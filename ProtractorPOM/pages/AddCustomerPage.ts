import { browser, element, by, protractor } from "protractor";
import { log4jsconfig } from '../config/log4jsconfig';
import {alert} from "../util/alert";

export class AddCustomerPage{
     fname = element(by.model('fName'));
     lname = element(by.model('lName'));
     postalcode = element(by.model('postCd'));
     addcustomerbtn = element(by.className('btn btn-default'));

     AddCustomer(){
         this.fname.sendKeys("ABC");
         this.lname.sendKeys("XYZ");
         this.postalcode.sendKeys("1234");

         this.addcustomerbtn.click();
         browser.sleep(3000);
         alert.VerifyAndCloseAlert("Customer added");
     }

}


