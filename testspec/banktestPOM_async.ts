import { browser, element, by, protractor, Browser } from "protractor";
//import { log4jsconfig } from '../config/log4jsconfig'
import { AddCustomerPage } from "../pages/AddCustomerPage";
import { BasePage } from "../pages/BasePage";
import { OpenAccountPage } from "../pages/OpenAccountPage";
import { CustomersPage } from "../pages/CustomersPage";
//import * as prop from "/myfiles/Protractor/ProtractorDemo/testdata/prop.json";
const log = require("../config/logging").default;


describe("Banking project test", function(){
    let prop1 = require("../testdata/prop1");
    
    beforeEach(function(){
        //browser.get((<any>prop).siteurl);
        browser.get(prop1.siteurl);
        //browser.get("http://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/addCust");
    })

    it("Verify the flow", async function(){

      let addcustpage = new AddCustomerPage();

      addcustpage.AddCustomer();
      browser.sleep(1000);

      new BasePage().ClickOnOpenAccTab();

      let openaccpage = new OpenAccountPage();
      openaccpage.SelectACustomer();
      openaccpage.SelectDollar();
      browser.sleep(1000);
      openaccpage.ClickProcessBtn();
      browser.sleep(1000);

      new BasePage().ClickOnCustTab();
      browser.sleep(2000);

      await new CustomersPage().VerifyCustEntryAndDelete_async();
      browser.sleep(2000);

    
    })

})