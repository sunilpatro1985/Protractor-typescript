import { browser, element, by, protractor } from "protractor";
//import { log4jsconfig } from '../config/log4jsconfig';
import {alert} from "../util/alert";
//import * as prop from "/myfiles/Protractor/ProtractorDemo/testdata/prop.json";

export class AddCustomerPage{
    prop1 = require("../testdata/prop1");

     fname = element(by.model('fName'));
     lname = element(by.model('lName'));
     postalcode = element(by.model('postCd'));
     addcustomerbtn = element(by.className('btn btn-default'));
     //firstname = (<any>prop).customers.firstname;
     //lastname = (<any>prop).customers.lastname;
     //pcode = (<any>prop).customers.postalcode;
     firstname = this.prop1.customers.firstname;
     lastname = this.prop1.customers.lastname;
     pcode = this.prop1.customers.postalcode;

     AddCustomer(){
         this.fname.sendKeys(this.firstname);
         this.lname.sendKeys(this.lastname);
         this.postalcode.sendKeys(this.pcode);

         this.addcustomerbtn.click();
         browser.sleep(1000);
         alert.VerifyAndCloseAlert("Customer added");
     }

}


