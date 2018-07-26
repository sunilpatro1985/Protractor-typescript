import { browser, element, by, protractor } from "protractor";
import { log4jsconfig } from '../config/log4jsconfig';
import {alert} from "../util/alert";

export class CustomersPage{
    rows = element.all(by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));

    VerifyCustEntryAndDelete(){
        this.rows.each(function(row: any){
            let cells = row.$$('td'); //all(by.css)
            cells.get(0).getText().then(function(txt: any){
                if(txt == 'ABC'){
                    cells.get(4).$('button').click();
                }
            })
        })
    }
    
}