import { browser, element, by } from "protractor";
import { log4jsconfig } from '../config/log4jsconfig'
import { common } from "../util/common";

describe("Handle multiple windows", function(){

    beforeEach(function(){
        //browser.ignoreSynchronization = true;
        new common().isAngular(false);
        browser.get("https://qavbox.github.io/demo/links/");
    })

    it("Multiple windows handle", function(){
        browser.getTitle().then(function(txt){
            console.log("Main browser title :- "+ txt);
        })

        browser.findElement(by.name("NewWindow")).click();

        let windowHandles = browser.getAllWindowHandles();
        let parentHandle, childHandle;

        windowHandles.then(function(handles){
            parentHandle = handles[0];
            childHandle = handles[1];
            console.log("Total Handles :- " + handles.length);
            
            browser.switchTo().window(childHandle).then(function(){
                browser.getTitle().then(function(txt){
                    console.log("Child browser title :- " + txt);
                    browser.close();
                })
            })

            browser.switchTo().window(parentHandle).then(function(){
                console.log("Returning to main windows...");
                browser.getTitle().then(function(txt){
                    console.log("Main browser title :- "+ txt);
                })
            })

        })

    })

})