import {Config, browser} from 'protractor';
var screenreporter = require('util/screenreporter.js');

export let config: Config = {
    framework : "jasmine2",

    jasmineNodeOpts:{
        showColors : true,
        silent : true,
        defaultTimeoutInterval: 36000,
        print: function(){}
    },

    capabilities:{
        browserName : 'chrome',
        //browserName : 'firefox',
        //marionette : true,
        acceptSslCerts : true
    },

    suites: {
        calc : './specs/calculator.js',
        bank : './testspec/banktest.js',
        bothtest : ['./specs/calculator.js',
            './testspec/banktest.js']
        //to run each suite
        //protractor conf.js calc
        //protractor conf.js bank
        //protractor conf.js calc,bank
        //protractor conf.js bothtest
    },
 
    specs:['./testspec/banktestpom.js'],

    seleniumAddress: 'http://localhost:4444/wd/hub',

    onPrepare:()=>{
        var os = require('os');
        //browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(4000);    
    }
}
