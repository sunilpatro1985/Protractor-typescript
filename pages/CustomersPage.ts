import { browser, element, by, protractor } from "protractor";
import { log4jsconfig } from '../config/log4jsconfig';
import {alert} from "../util/alert";
//import * as prop from "/myfiles/Protractor/ProtractorDemo/testdata/prop.json";

export class CustomersPage{
    prop1 = require("../testdata/prop1");

    rows = element.all(by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
    //fname = (<any>prop).customers.firstname;
    fname = this.prop1.customers.firstname;

     VerifyCustEntryAndDelete(){
         let fname = this.fname;
        this.rows.each(function(row: any){
            let cells = row.$$('td'); //all(by.css)
            cells.get(0).getText().then(function(txt: any){
                log4jsconfig.Log().debug(txt);
                if(txt == fname){
                    cells.get(4).$('button').click();
                }
            })
        })
    }
    
}