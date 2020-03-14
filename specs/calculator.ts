
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import protractor = require('protractor');
import { log4jsconfig } from '../config/log4jsconfig'


describe("Calculator test", function(){

    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var history = element.all(by.repeater('result in memory'));
    let value = element(by.xpath("//*[@class='table']/tbody//tr[1]/td[3]"));
  
    function add(a:any, b:any) {
      firstNumber.sendKeys(a);
      secondNumber.sendKeys(b);
      goButton.click();
    }

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

    it('should add correctly', function() {
        add(1, 2);
        browser.sleep(3000);
        expect<any>(value.getText()).toEqual('3');
      })
    
      it('should have a history', function() {
        add(3, 4);
        browser.sleep(3000);
        add(5, 6);
        browser.sleep(3000);
        expect<any>(history.count()).toEqual(2);
      })

})
