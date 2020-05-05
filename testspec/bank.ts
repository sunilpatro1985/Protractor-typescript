import { browser, element, by, protractor, Browser } from "protractor";
import { log4jsconfig } from '../config/log4jsconfig'

//import * as prop from "/myfiles/Protractor/ProtractorDemo/testdata/prop.json";

describe("Banking project test", function(){
    let prop1 = require("../testdata/prop1");

    it("Invoke bank app", function(){
        browser.get(prop1.siteurl);
        browser.sleep(3000);
    })

});