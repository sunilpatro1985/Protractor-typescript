import { browser, element, by, protractor, Browser } from "protractor";
//import { log4jsconfig } from '../config/log4jsconfig'
import { AddCustomerPage } from "../pages/AddCustomerPage";
import { OpenAccountPage } from "../pages/OpenAccountPage";
import { CustomersPage } from "../pages/CustomersPage";
import { ManagerPage } from "../pages/ManagerPage";
import { HomePage } from "../pages/HomePage";

const log = require("../config/logging").default;

//import * as prop from "/myfiles/Protractor/ProtractorDemo/testdata/prop.json";

describe("Banking project test", function(){
  const custData = require("../testdata/Cust");
    
  let homePage = new HomePage();
  let addCustPage = new AddCustomerPage();
  let managerPage = new ManagerPage();
  let openAccountPage = new OpenAccountPage();
    
    beforeEach(function(){
      browser.get(custData.siteurl);
      browser.getCurrentUrl().then(function(txt){
          log.debug(txt);
      })
    })

    it("Verify the flow", function(){

      homePage.mainHeading.getText().then(function(txt){
        log.debug(txt);
        expect<any>(txt).toBe("XYZ Bank");
    })
    browser.sleep(2000);

    homePage.navigateToBankManagerLogin();
    managerPage.navigateToAddCustomer();
    browser.sleep(1000);

    new AddCustomerPage().AddCustomer();
    browser.sleep(1000);

    managerPage.navigateToOpenAccount();
    openAccountPage.SelectACustomer();
    browser.sleep(3000);
    openAccountPage.SelectDollar();
    browser.sleep(3000);
    openAccountPage.ProcessIt();
    browser.sleep(3000);

    new ManagerPage().navigateToCustomersTab();
    browser.sleep(2000);
    new CustomersPage().VerifyCustEntryAndDelete();
    browser.sleep(6000);

    })

})