import { browser, element, by } from "protractor";
import { log4jsconfig } from '../config/log4jsconfig'

describe("Calculator test", function(){

    it("invoke calc app",function(){
        browser.get("https://juliemr.github.io/protractor-demo/");
        browser.sleep(3000);
    })

});
