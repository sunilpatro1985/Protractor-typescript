import { browser, element, by, protractor } from "protractor";
//import { log4jsconfig } from '../config/log4jsconfig';
import {alert} from "../util/alert";
//import * as prop from "/myfiles/Protractor/ProtractorDemo/testdata/prop.json";
const log = require("../config/logging").default;

export class OpenAccountPage{
    prop1 = require("../testdata/prop1");

    Customers = element(by.id('userSelect'));
    options = this.Customers.all(by.tagName('option'));

    Currency = element(by.id('currency')); //$ = by.css
    Process = element(by.buttonText("Process"));
    //name = (<any>prop).customers.firstname + " " + (<any>prop).customers.lastname;
    name = this.prop1.customers.firstname + " " + this.prop1.customers.lastname;

    SelectACustomer(){
        let name = this.name;
        log.debug(name);
        this.options.then(function(items){
            //log4jsconfig.Log().debug("Dropdown option size " + items.length);
            log.debug("Dropdown option size " + items.length);
            for(let i=0 ; i < items.length ; i++){
                 items[i].getText().then(function(txt: any){
                     log.debug(txt);
                     if(txt == name){
                         log.debug("Item found on the list");
                         items[i].click();
                     }
                 })
            }
        })
    }

    SelectDollar(){
        this.Currency.$('[value="Dollar"]').click();
    }

    ProcessIt(){
        this.Process.click();
        alert.VerifyAndCloseAlert("Account created");
    }

   

}

