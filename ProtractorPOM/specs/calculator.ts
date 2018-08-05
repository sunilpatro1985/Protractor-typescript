import { browser, element, by } from "protractor";
import { log4jsconfig } from '../config/log4jsconfig'

describe("Calculator test", function(){

    beforeEach(function(){
        browser.get("https://juliemr.github.io/protractor-demo/");
    })

    it("Launch url check", function(){
        expect(browser.getTitle()).toContain("Super");
        //console.log("Browser Title :-" + browser.getTitle());
        let browserTitle = browser.getTitle();

        browserTitle.then(function(txt){
            console.log("Browser Title :-" + txt);
            log4jsconfig.Log().debug("Browser Title :- " + txt);
        });

    })

    it("Add 2 numbers", function(){
        element(by.model("first")).sendKeys("12");
        element(by.model("second")).sendKeys("13");
        element(by.id("gobutton")).click();
        browser.sleep(3000);
        expect<any>(element(by.xpath("//table/tbody/tr[1]/td[3]")).getText()).toEqual('25');
    })

})
