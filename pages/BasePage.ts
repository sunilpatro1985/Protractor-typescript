import { browser, element, by, protractor } from "protractor";
//import { log4jsconfig } from '../config/log4jsconfig';
import {alert} from "../util/alert";

export class BasePage{
    openAccTab = element(by.buttonText('Open Account'));
    OpenCustTab = element(by.buttonText('Customers'));

    ClickOnOpenAccTab(){
        this.openAccTab.click();
    }

    ClickOnCustTab(){
        this.OpenCustTab.click();
    }
}