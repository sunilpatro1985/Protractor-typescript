
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import protractor = require('protractor');
import { log4jsconfig } from '../config/log4jsconfig'


describe("TabOrder test", function(){

    var userName = element(by.id('username'));
    var email = element(by.id('email'));
    var telePhone = element(by.id('tel'));
    var uploadbtn = element(by.name('datafile'));
 
  
    async function tabOrder() {
     var pageEls = [userName, email, telePhone, uploadbtn];
     return pageEls;
    }

    beforeEach(function(){
        browser.get("https://qavbox.github.io/demo/signup/");
    })

    it("verify the order", async function(){
        
        var els = await tabOrder();
        userName.click();
        console.log("Total elements size "+ els.length);

        //skipping the last element, as I don't want to TAB on last element
        for(var i=0; i < (els.length-1) ; i++){
            console.log("before Tab - " + await els[i].getId());
            await els[i].sendKeys(protractor.Key.TAB);
            console.log("After tab - " + await (await browser.switchTo().activeElement()).getId());
            expect(els[i+1].getId()).toBe((await browser.switchTo().activeElement()).getId());
        }
    })
})
