import { browser, element, by, protractor, Browser } from "protractor";
import { log4jsconfig } from '../config/log4jsconfig'
import { AddCustomerPage } from "../pages/AddCustomerPage";
import { BasePage } from "../pages/BasePage";
import { OpenAccountPage } from "../pages/OpenAccountPage";
import { CustomersPage } from "../pages/CustomersPage";
//import * as prop from "/myfiles/Protractor/ProtractorDemo/testdata/prop.json";

describe("Banking project test", function(){
    let prop1 = require("../testdata/prop1");
    
    beforeEach(function(){
        //browser.get((<any>prop).siteurl);
        browser.get(prop1.siteurl);
        //browser.get("http://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/addCust");
    })

    it("Verify the flow", function(){

      let addcustpage = new AddCustomerPage();

      addcustpage.AddCustomer();
      browser.sleep(3000);

      new BasePage().ClickOnOpenAccTab();

      let openaccpage = new OpenAccountPage();
      openaccpage.SelectACustomer();
      openaccpage.SelectDollar();
      browser.sleep(3000);
      openaccpage.ClickProcessBtn();
      browser.sleep(3000);

      new BasePage().ClickOnCustTab();
      browser.sleep(5000);

      new CustomersPage().VerifyCustEntryAndDelete();
      browser.sleep(6000);

    
    })

})