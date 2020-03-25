import { browser, element, by, protractor } from "protractor";
//import { log4jsconfig } from '../config/log4jsconfig';
import {alert} from "../util/alert";
const log = require("../config/logging").default;

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