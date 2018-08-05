import { browser, element, by, protractor } from "protractor";
import { log4jsconfig } from '../config/log4jsconfig'

describe("Banking project test", function(){

    function VerifyAndCloseAlert(text: String){
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.alertIsPresent(), 4000, "ALert not found");
 
        let alert = browser.switchTo().alert();
        let alertText = alert.getText();
 
        alertText.then(function(txt){
            log4jsconfig.Log().debug(txt);
        })
 
        browser.sleep(2000);
        expect(alertText).toContain(text);
        alert.accept(); 
    }

    beforeEach(function(){
        browser.get("http://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/addCust");
    })

    it("Verify the flow", function(){

    
       element(by.model('fName')).sendKeys("ABC");
       element(by.model('lName')).sendKeys("XYZ");
       element(by.model('postCd')).sendKeys('1344');
       element(by.className('btn btn-default')).click();
       
       VerifyAndCloseAlert("Customer added");

       element(by.buttonText('Open Account')).click();
       let Customers = element(by.model('custId'));
       let options = Customers.all(by.tagName('option'));

       options.then(function(items){
           log4jsconfig.Log().debug("Dropdown option size " + items.length);
           for(let i=0 ; i < items.length ; i++){
                items[i].getText().then(function(txt: any){
                    log4jsconfig.Log().debug(txt);
                    if(txt == "ABC XYZ"){
                        log4jsconfig.Log().debug("Item found on the list");
                        items[i].click();
                    }
                })
           }
       })

       element(by.model('currency')).$('[value="Dollar"]').click(); //$ = by.css
       element(by.buttonText("Process")).click();
       browser.sleep(3000);

       VerifyAndCloseAlert("Account created");

       element(by.buttonText('Customers')).click();
       let rows = element.all(by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
       browser.sleep(10000);

       rows.each(function(row: any){
           let cells = row.$$('td'); //all(by.css)
           cells.get(0).getText().then(function(txt: any){
               if(txt == 'ABC'){
                   cells.get(4).$('button').click();
               }
           })
       })

       browser.sleep(10000);

    })

})